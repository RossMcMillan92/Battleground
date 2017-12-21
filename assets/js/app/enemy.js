import { Health } from "./health.js"
import { detectCollision as detectCollisionCalc } from "./collisions"
import {
  attractCalc,
  calculateDistance,
  calculateVelocity,
  calculateInputAcceleration,
  calculateInputDeceleration,
  calculateCollisionAcceleration,
  calculatePos,
  getWalkCycle
} from "./movable"

const Enemy = (
  constraints,
  { accelStep, decelStep, attackThreshold, damagePower, dimensions, imageStates, startingHealth, velocityMap }
) => {
  let health = Health(startingHealth)

  let pos = {
    x: constraints[0] / 4,
    y: constraints[1] / 4
  }
  let acceleration = {
    x: 0,
    y: 0
  }

  let isRepelling = false

  const walkingMap = [
    {
      duration: 2000,
      direction: "right"
    },
    {
      duration: 2000,
      direction: "left"
    }
  ]

  const getInput = getWalkCycle(walkingMap)
  const velocity = velocityMap["default"]
  let currentImageState = "default"

  const updatePosition = (target, nearestItem) => {
    const input = getInput()
    const isAlive = health.getHealth() > 0
    const isDying = isAlive && health.getHealth() < startingHealth / 2
    let newAcceleration = acceleration
    let newPos

    // attraction
    let [dx, dy, distance] = calculateDistance(pos, isDying && nearestItem ? nearestItem : target)
    let isAttacking = isAlive && distance !== false && Math.abs(distance) < attackThreshold
    if (isAttacking || (isDying && nearestItem)) {
      newAcceleration = attractCalc(newAcceleration, isAlive ? accelStep : 0, dx, dy)
    } else {
      newAcceleration = calculateInputDeceleration(acceleration, decelStep)
    }

    newAcceleration = calculateCollisionAcceleration(newAcceleration, getPos(), constraints, isRepelling)
    newPos = calculatePos(pos, newAcceleration, velocity)

    // MUTATIONS
    pos = newPos
    acceleration = newAcceleration
    isRepelling = false
  }

  const attract = () => {
    let [x, y] = attractCalc(pos.x, pos.y, targetX, targetY)

    pos = { x, y }
  }

  const repel = data => {
    isRepelling = data
  }

  const getDamagePower = () => damagePower

  const detectCollision = item => detectCollisionCalc(getBoundingBox())(item)

  const getBoundingBox = () => [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height]

  const getPos = () => Object.assign({}, pos, dimensions)

  const isDead = () => health.getHealth() === 0

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
      currentImageState = isDead() ? "dead" : "default"
      isHurting = false
    }, 750)
  }

  const render = ctx => {
    renderSelf(ctx)
    health.renderHealthBar(ctx, getPos())
  }

  const renderSelf = ctx => {
    imageStates[currentImageState].render(ctx, pos.x, pos.y, acceleration.x < 0)
  }

  const output = {
    attract,
    updatePosition,
    getBoundingBox,
    getDamagePower,
    detectCollision,
    heal,
    hurt,
    getPos,
    repel,
    render
  }

  return Object.assign({}, health, output)
}

export { Enemy }
