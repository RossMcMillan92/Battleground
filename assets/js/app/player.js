import CanvasImage from './canvasImage.js'
import { Health } from './health.js'
import { detectCollision as detectCollisionCalc } from './collisions'
import {
    calculateVelocity,
    calculateInputAcceleration,
    calculateInputDeceleration,
    calculateCollisionAcceleration,
    calculatePos
} from './movable'
import LukeMainImgUrl from '../../img/luke-main.png'
import LukeHurtImgUrl from '../../img/luke-hurt.png'
import LukeDeadImgUrl from '../../img/luke-dead.png'


const Player = (constraints) => {
    let health = Health()

    const dimensions = {
        width: 188 / 2,
        height: 283 / 2
    }
    let pos = {
        x: constraints[0] / 2,
        y: constraints[1] / 2
    }
    let acceleration = {
        x: 0,
        y: 0
    }
    const velocityMap = {
        default: 5,
        running: 7
    }
    const accelStep = .025
    const decelStep = .05

    let damagePower = 25
    let isRepelling = false
    
    const LukeMainImg = CanvasImage(LukeMainImgUrl, dimensions.width, dimensions.height)
    const LukeDeadImg = CanvasImage(LukeDeadImgUrl, dimensions.width, dimensions.height)
    const LukeHurtImg = CanvasImage(LukeHurtImgUrl, dimensions.width, dimensions.height)
    let currentImageState = 'default'
    const imageStates = {
        default: LukeMainImg,
        dead: LukeDeadImg,
        hurt: LukeHurtImg,
    }

    const updatePosition = (input) => {
        const velocity = calculateVelocity(velocityMap, input)
        const isAlive = health.getHealth() > 0
        let newAcceleration = acceleration
        let newPos

        newAcceleration = calculateInputAcceleration(acceleration, isAlive ? accelStep : 0, decelStep, input)
        newAcceleration = calculateInputDeceleration(newAcceleration, decelStep, input)
        newAcceleration = calculateCollisionAcceleration(newAcceleration, getPos(), constraints, isRepelling)
        newPos = calculatePos(pos, newAcceleration, velocity)

        // MUTATIONS
        pos          = newPos
        acceleration = newAcceleration
        isRepelling       = false
    }

    const repel = (data) => {
        isRepelling = data
    }

    const getDamagePower = () => damagePower

    const detectCollision = item => detectCollisionCalc(getBoundingBox())(item)

    const heal = (amount) => {
        if (currentImageState === 'dead') return
        health.heal(amount)
    }

    let hurtStateTimeout
    const hurt = (amount) => {
        health.hurt(amount)
        currentImageState = 'hurt'

        if (hurtStateTimeout) clearTimeout(hurtStateTimeout)
        if (health.getHealth() === 0) {
            currentImageState = 'dead'
            return
        }
        hurtStateTimeout = setTimeout(() => {
            currentImageState = 'default'
        }, 750)
    }

    const render = ctx => {
        renderSelf(ctx)
        health.renderHealthBar(ctx, getPos())
    }

    const renderSelf = (ctx) => {
        imageStates[currentImageState].render(ctx, pos.x, pos.y, acceleration.x < 0)
    }

    const getBoundingBox = () => [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height]

    const getPos = () => Object.assign({}, pos, dimensions)

    const output = {
        detectCollision,
        getBoundingBox,
        getDamagePower,
        heal,
        hurt,
        getPos,
        repel,
        render,
        updatePosition,
    }

    return Object.assign({}, health, output)
}

export { Player }