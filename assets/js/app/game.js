import { repeat } from "./tools"
import { Player } from "./player"
import { Enemy } from "./enemy"
import Background from "./background"

import CrowdApplauseSoundUrl from "../../audio/crowd-applause.mp3"
import CrowdBooSoundUrl from "../../audio/crowd-boo.mp3"

const updateAppText = (elements, { enemy, location, description }) => {
  if (enemy) elements["enemy"].innerHTML = enemy
  if (location) elements["location"].innerHTML = location
  if (description) elements["description"].innerHTML = description
}

const startLevel = (elements, metadata, callback) => {
  updateAppText(elements, metadata)
  elements.app.classList.remove("is-disabled")

  const begin = e => {
    console.log("E.KEYCODE", e.keyCode)
    if (e.keyCode === 32) {
      document.removeEventListener("keyup", begin, false)
      callback()
    }
  }
  document.addEventListener("keyup", begin, false)
}

const Game = ({
  BgMusic,
  ctx,
  ch,
  cw,
  constraints,
  elements,
  keyboard,
  items,
  LevelEnemy,
  masterLoop,
  metadata,
  GroundTextureImg
}) =>
  new Promise((res, rej) => {
    let gamplayIsDisabled = true
    startLevel(elements, metadata, () => {
      gamplayIsDisabled = false
      elements.app.classList.add("is-disabled")
    })
    const bg = Background(GroundTextureImg)
    let player = Player(constraints)
    let enemy = Enemy(constraints, LevelEnemy)
    let uncollidedItems = items
    let gameIsOver = false

    const soundBoo = new Howl({
      src: [CrowdBooSoundUrl]
    })

    const soundApplause = new Howl({
      src: [CrowdApplauseSoundUrl]
    })

    const detectPlayerCollision = item => player.detectCollision(item.getBoundingBox())
    const detectEnemyCollision = item => enemy.detectCollision(item.getBoundingBox())

    const frame = t => {
      let simsNeeded = _calculateSimulatioins(t)
      let camera

      if (!gamplayIsDisabled) _simulate(player, enemy)

      ctx.clearRect(0, 0, cw, ch)
      ctx.save()
      camera = _calculateCameraTranslation([0, 0], player.getPos(), cw, ch)
      ctx.translate(...camera)
      bg.render(ctx, constraints, camera)
      uncollidedItems.forEach(item => item.render(ctx))
      player.render(ctx)
      enemy.render(ctx)
      ctx.restore()

      items = uncollidedItems
    }

    // UNPURE AS FUCK
    const _simulate = (player, enemy) => {
      const uncollidedItemPos = uncollidedItems.length ? uncollidedItems[0].getPos() : false

      const playerToEnemyCollision = detectPlayerCollision(enemy)
      const enemyToPlayerCollision = detectEnemyCollision(player)

      if (playerToEnemyCollision) {
        player.repel(playerToEnemyCollision)
        enemy.hurt(player.getDamagePower())
      }
      if (enemyToPlayerCollision) {
        enemy.repel(enemyToPlayerCollision)
        player.hurt(enemy.getDamagePower())
      }

      uncollidedItems = items.filter(item => !item.isCollected())
      player.updatePosition(keyboard.getState())
      enemy.updatePosition(player.getPos(), uncollidedItemPos)

      const playerCollectItems = uncollidedItems.filter(detectPlayerCollision)
      const enemyCollectItems = uncollidedItems.filter(detectEnemyCollision)

      player.heal(playerCollectItems.reduce((prev, cur) => prev + cur.collect(), 0))
      enemy.heal(enemyCollectItems.reduce((prev, cur) => prev + cur.collect(), 0))

      if (!gameIsOver) _checkForGameEnd()
    }

    const _calculateCameraTranslation = (camera, playerPos, cw, ch) => {
      const playerX = playerPos.x + playerPos.width / 2
      const playerY = playerPos.y + playerPos.height / 2
      let buffer = Math.min(cw, ch) * 0.3
      let [bT, bR, bB, bL] = [ch - buffer, cw - buffer, buffer, buffer].map(x => Math.round(x))

      if (playerX < bL - camera[0]) camera[0] -= playerX - (bL - camera[0])
      if (playerX > bR - camera[0]) camera[0] -= playerX - (bR - camera[0])
      if (playerY < bB - camera[1]) camera[1] -= playerY - (bB - camera[1])
      if (playerY > bT - camera[1]) camera[1] -= playerY - (bT - camera[1])

      return camera
    }

    const _calculateSimulatioins = (() => {
      const fps = 60
      const tick = 1000 / fps
      let accumulator = 0
      let simsNeeded = 0

      return t => {
        // calculate simulataions needed
        accumulator += t
        simsNeeded = Math.floor(accumulator / tick)
        accumulator -= simsNeeded * tick
        return simsNeeded
      }
    })()

    const _checkForGameEnd = () => {
      if (player.getHealth() === 0 || enemy.getHealth() === 0) {
        BgMusic.fade(0.15, 0.05, 250)

        setTimeout(() => {
          BgMusic.fade(0.05, 0.15, 2500)
        }, 5000)

        gameIsOver = true
        if (!player.getHealth() === 0) {
          player.playSound("winning")
          soundApplause.play()
          soundApplause.fade(0.3, 0, 10000)
        } else {
          soundBoo.play()
          soundBoo.fade(0.3, 0, 10000)
        }
        return res({
          playerHealth: player.getHealth(),
          enemyHealth: enemy.getHealth()
        })
      }
    }

    masterLoop.start(frame)
  })

export default Game
