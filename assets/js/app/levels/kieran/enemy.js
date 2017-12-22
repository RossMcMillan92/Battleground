import CanvasImage from "../../canvasImage.js"
import KieranMainImgUrl from "../../../../img/kieran-main.png"
import KieranHurtImgUrl from "../../../../img/kieran-hurt.png"
import KieranDeadImgUrl from "../../../../img/kieran-dead.png"

const dimensions = {
  width: 300,
  height: 425
}

const accelStep = 0.025
const decelStep = 0.01
const velocityMap = {
  default: 1,
  running: 1
}

const attackThreshold = 5000
const damagePower = 10
const startingHealth = 500

const KieranMainImg = CanvasImage(KieranMainImgUrl, dimensions.width, dimensions.height)
const KieranDeadImg = CanvasImage(KieranDeadImgUrl, dimensions.width, dimensions.height)
const KieranHurtImg = CanvasImage(KieranHurtImgUrl, dimensions.width, dimensions.height)

const imageStates = {
  default: KieranMainImg,
  dead: KieranDeadImg,
  hurt: KieranHurtImg
}

const Kieran = {
  accelStep,
  decelStep,
  velocityMap,
  attackThreshold,
  imageStates,
  damagePower,
  dimensions,
  startingHealth
}

export default Kieran
