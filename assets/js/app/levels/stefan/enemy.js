import CanvasImage from "../../canvasImage.js"
import StefanMainImgUrl from "../../../../img/stefan-main.png"
import StefanHurtImgUrl from "../../../../img/stefan-hurt.png"
import StefanDeadImgUrl from "../../../../img/stefan-dead.png"

const dimensions = {
  width: 250,
  height: 406
}

const accelStep = 0.05
const decelStep = 0.01
const velocityMap = {
  default: 10
}

const attackThreshold = 400
const damagePower = 50
const startingHealth = 10

const StefanMainImg = CanvasImage(StefanMainImgUrl, dimensions.width, dimensions.height)
const StefanDeadImg = CanvasImage(StefanDeadImgUrl, dimensions.width, dimensions.height)
const StefanHurtImg = CanvasImage(StefanHurtImgUrl, dimensions.width, dimensions.height)

const imageStates = {
  default: StefanMainImg,
  dead: StefanDeadImg,
  hurt: StefanHurtImg
}

const Stefan = {
  accelStep,
  decelStep,
  velocityMap,
  attackThreshold,
  imageStates,
  damagePower,
  dimensions,
  startingHealth
}

export default Stefan
