import CanvasImage from "../../canvasImage.js"
import RossMainImgUrl from "../../../../img/ross-main.png"
import RossHurtImgUrl from "../../../../img/ross-hurt.png"
import RossDeadImgUrl from "../../../../img/ross-dead.png"

const dimensions = {
  width: 188,
  height: 283
}
const accelStep = 0.025
const decelStep = 0.01
const velocityMap = {
  default: 5,
  running: 7
}

const attackThreshold = 500
const damagePower = 20
const startingHealth = 90

const RossMainImg = CanvasImage(RossMainImgUrl, dimensions.width, dimensions.height)
const RossDeadImg = CanvasImage(RossDeadImgUrl, dimensions.width, dimensions.height)
const RossHurtImg = CanvasImage(RossHurtImgUrl, dimensions.width, dimensions.height)

const imageStates = {
  default: RossMainImg,
  dead: RossDeadImg,
  hurt: RossHurtImg
}

const Ross = {
  accelStep,
  decelStep,
  attackThreshold,
  damagePower,
  dimensions,
  imageStates,
  startingHealth,
  velocityMap
}

export default Ross
