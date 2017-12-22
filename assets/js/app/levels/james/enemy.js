import CanvasImage from "../../canvasImage.js"
import JamesMainImgUrl from "../../../../img/james-main.png"
import JamesHurtImgUrl from "../../../../img/james-hurt.png"
import JamesDeadImgUrl from "../../../../img/james-dead.png"

const dimensions = {
  width: 200,
  height: 325
}

const accelStep = 0.05
const decelStep = 0.01
const velocityMap = {
  default: 10
}

const attackThreshold = 400
const damagePower = 30
const startingHealth = 130

const JamesMainImg = CanvasImage(JamesMainImgUrl, dimensions.width, dimensions.height)
const JamesDeadImg = CanvasImage(JamesDeadImgUrl, dimensions.width, dimensions.height)
const JamesHurtImg = CanvasImage(JamesHurtImgUrl, dimensions.width, dimensions.height)

const imageStates = {
  default: JamesMainImg,
  dead: JamesDeadImg,
  hurt: JamesHurtImg
}

const James = {
  accelStep,
  decelStep,
  velocityMap,
  attackThreshold,
  imageStates,
  damagePower,
  dimensions,
  startingHealth
}

export default James
