import CanvasImage from "../../canvasImage.js"
import LindseyMainImgUrl from "../../../../img/lindsey-main.png"
import LindseyHurtImgUrl from "../../../../img/lindsey-hurt.png"
import LindseyDeadImgUrl from "../../../../img/lindsey-dead.png"

const dimensions = {
  width: 300,
  height: 374
}

const accelStep = 0.05
const decelStep = 0.01
const velocityMap = {
  default: 10
}

const attackThreshold = 40000
const damagePower = 10
const startingHealth = 500

const LindseyMainImg = CanvasImage(LindseyMainImgUrl, dimensions.width, dimensions.height)
const LindseyDeadImg = CanvasImage(LindseyDeadImgUrl, dimensions.width, dimensions.height)
const LindseyHurtImg = CanvasImage(LindseyHurtImgUrl, dimensions.width, dimensions.height)

const imageStates = {
  default: LindseyMainImg,
  dead: LindseyDeadImg,
  hurt: LindseyHurtImg
}

const Lindsey = {
  accelStep,
  decelStep,
  velocityMap,
  attackThreshold,
  imageStates,
  damagePower,
  dimensions,
  startingHealth
}

export default Lindsey
