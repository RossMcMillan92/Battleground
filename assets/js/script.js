import Game from "./app/game"
import domready from "./plugins/domready"
import Keyboard from "./app/keyboard"
import Loop from "./app/loop"
import getLevelLindsey from "./app/levels/lindsey"
import getLevelKieran from "./app/levels/kieran"
import getLevelJames from "./app/levels/james"
import getLevelRhys from "./app/levels/rhys"
import getLevelRoss from "./app/levels/ross"
import getLevelStefan from "./app/levels/stefan"
import BgMusicUrl from "../audio/bg-music.mp3"

const canvas = document.getElementById("canvas")
const elements = {
  intro: document.getElementById("intro"),
  app: document.getElementById("app"),
  info: document.getElementById("info"),
  enemy: document.getElementById("enemy"),
  location: document.getElementById("location"),
  description: document.getElementById("description"),
  action: document.getElementById("action"),
  status: document.getElementById("status"),
  continue: document.getElementById("continue"),
  retry: document.getElementById("retry")
}
const ctx = canvas.getContext("2d")
let cw = (canvas.width = canvas.offsetWidth)
let ch = (canvas.height = canvas.offsetHeight)
const masterLoop = Loop()
const keyboard = Keyboard()
keyboard.start()

const BgMusic = new Howl({
  loop: true,
  src: [BgMusicUrl],
  volume: 0.15
})

let currentLevelIndex = 0
const Levels = [
  getLevelRoss(cw, ch),
  getLevelKieran(cw, ch),
  getLevelRhys(cw, ch),
  getLevelStefan(cw, ch),
  getLevelJames(cw, ch),
  getLevelLindsey(cw, ch)
]
BgMusic.play()

const switchToInfo = () => {
  elements.action.classList.add("is-disabled")
  elements.info.classList.remove("is-disabled")
}

const switchToAction = () => {
  elements.action.classList.remove("is-disabled")
  elements.info.classList.add("is-disabled")
}

const setRetryText = (playerIsDead, enemyIsDead) => {
  elements.app.classList.remove("is-disabled")
  elements.action.classList.remove("is-disabled")
  elements.info.classList.add("is-disabled")
  elements.status.innerHTML = !playerIsDead ? "You Won" : !enemyIsDead ? "You Lost" : "Draw"
  if (playerIsDead) {
    elements.continue.classList.add("is-disabled")
  } else {
    elements.continue.classList.remove("is-disabled")
  }
}

const startAgain = (playerIsDead, enemyIsDead) => e => {
  if (!playerIsDead && e.keyCode === 32) {
    if (!Levels[currentLevelIndex + 1]) return
    document.removeEventListener("keyup", keylistener, false)
    switchToInfo()
    currentLevelIndex++
    masterLoop.stop()
    currentGame = null
    init(Levels[currentLevelIndex])
  }
  if (e.keyCode === 82) {
    document.removeEventListener("keyup", keylistener, false)
    switchToInfo()
    masterLoop.stop()
    currentGame = null
    init(Levels[currentLevelIndex])
  }
}

let keylistener
let currentGame
const init = CurrentLevel => {
  currentGame = Game({
    BgMusic,
    ctx,
    cw,
    ch,
    constraints: CurrentLevel.constraints,
    elements,
    items: CurrentLevel.items,
    keyboard,
    LevelEnemy: CurrentLevel.Enemy,
    masterLoop,
    metadata: CurrentLevel.metadata,
    GroundTextureImg: CurrentLevel.GroundTextureImg
  }).then(({ playerHealth, enemyHealth }) => {
    const playerIsDead = playerHealth === 0
    const enemyIsDead = enemyHealth === 0
    switchToAction()
    setRetryText(playerIsDead, enemyIsDead)
    keylistener = startAgain(playerIsDead, enemyIsDead)
    document.addEventListener("keyup", keylistener, false)
  })
}

const begin = () => {
  setTimeout(() => {
    elements.intro.classList.add("is-disabled")
    init(Levels[currentLevelIndex])
  }, 7000)
}

domready(begin)
