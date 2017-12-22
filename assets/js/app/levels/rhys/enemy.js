import CanvasImage from "../../canvasImage.js"
import RhysMainImgUrl from "../../../../img/rhys-main.png"
import RhysHurtImgUrl from "../../../../img/rhys-hurt.png"
import RhysDeadImgUrl from "../../../../img/rhys-dead.png"

const dimensions = {
  width: 200,
  height: 265
}

const accelStep = 0.05
const decelStep = 0.01
const velocityMap = {
  default: 15
}

const attackThreshold = 800
const damagePower = 20
const startingHealth = 100

const RhysMainImg = CanvasImage(RhysMainImgUrl, dimensions.width, dimensions.height)
const RhysDeadImg = CanvasImage(RhysDeadImgUrl, dimensions.width, dimensions.height)
const RhysHurtImg = CanvasImage(RhysHurtImgUrl, dimensions.width, dimensions.height)

const imageStates = {
  default: RhysMainImg,
  dead: RhysDeadImg,
  hurt: RhysHurtImg
}

const Rhys = {
  accelStep,
  decelStep,
  velocityMap,
  attackThreshold,
  imageStates,
  damagePower,
  dimensions,
  startingHealth
}

export default Rhys
