import { Howl } from "howler"
import CanvasImage from "./canvasImage.js"
import { Health } from "./health.js"
import { detectCollision as detectCollisionCalc } from "./collisions"
import {
  calculateVelocity,
  calculateInputAcceleration,
  calculateInputDeceleration,
  calculateCollisionAcceleration,
  calculatePos
} from "./movable"
import { randFromTo } from "./tools"
import LukeWinningSoundUrl1 from "../../audio/luke-winning-01.mp3"
import LukeWinningSoundUrl2 from "../../audio/luke-winning-02.mp3"
import LukeWinningSoundUrl3 from "../../audio/luke-winning-03.mp3"
import LukeMainImgUrl from "../../img/luke-main.png"
import LukeHurtImgUrl from "../../img/luke-hurt.png"
import LukeDeadImgUrl from "../../img/luke-dead.png"

const soundWinning1 = new Howl({
  src: [LukeWinningSoundUrl1]
})
const soundWinning2 = new Howl({
  src: [LukeWinningSoundUrl2]
})
const soundWinning3 = new Howl({
  src: [LukeWinningSoundUrl3]
})

const Player = constraints => {
  let health = Health(100)

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
    running: 8
  }
  const accelStep = 0.025
  const decelStep = 0.05

  let damagePower = 50
  let isRepelling = false

  const LukeMainImg = CanvasImage(LukeMainImgUrl, dimensions.width, dimensions.height)
  const LukeDeadImg = CanvasImage(LukeDeadImgUrl, dimensions.width, dimensions.height)
  const LukeHurtImg = CanvasImage(LukeHurtImgUrl, dimensions.width, dimensions.height)
  let currentImageState = "default"
  const imageStates = {
    default: LukeMainImg,
    dead: LukeDeadImg,
    hurt: LukeHurtImg
  }

  const updatePosition = input => {
    const velocity = calculateVelocity(velocityMap, input)
    const isAlive = health.getHealth() > 0
    let newAcceleration = acceleration
    let newPos

    newAcceleration = calculateInputAcceleration(acceleration, isAlive ? accelStep : 0, decelStep, input)
    newAcceleration = calculateInputDeceleration(newAcceleration, decelStep, input)
    newAcceleration = calculateCollisionAcceleration(newAcceleration, getPos(), constraints, isRepelling)
    newPos = calculatePos(pos, newAcceleration, velocity)

    // MUTATIONS
    pos = newPos
    acceleration = newAcceleration
    isRepelling = false
  }

  const repel = data => {
    isRepelling = data
  }

  const getDamagePower = () => damagePower

  const detectCollision = item => detectCollisionCalc(getBoundingBox())(item)

  const heal = amount => {
    if (isDead()) return
    health.heal(amount)
  }

  let hurtStateTimeout
  let isHurting = false
  const hurt = amount => {
    health.hurt(amount)
    currentImageState = "hurt"
    isHurting = true

    if (hurtStateTimeout) clearTimeout(hurtStateTimeout)
    hurtStateTimeout = setTimeout(() => {
      currentImageState = health.getHealth() === 0 ? "dead" : "default"
      isHurting = false
    }, 750)
  }

  const isDead = () => health.getHealth() === 0

  const render = ctx => {
    renderSelf(ctx)
    health.renderHealthBar(ctx, getPos())
  }

  const renderSelf = ctx => {
    imageStates[currentImageState].render(ctx, pos.x, pos.y, acceleration.x < 0)
  }

  const getBoundingBox = () => [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height]

  const getPos = () => Object.assign({}, pos, dimensions)

  const sounds = {
    winning: [soundWinning1, soundWinning2, soundWinning3]
  }
  const playSound = soundId => sounds[soundId] && sounds[soundId][randFromTo(0, sounds[soundId].length - 1)].play()

  const output = {
    detectCollision,
    getBoundingBox,
    getDamagePower,
    heal,
    hurt,
    getPos,
    playSound,
    repel,
    render,
    updatePosition
  }

  return Object.assign({}, health, output)
}

export { Player }
