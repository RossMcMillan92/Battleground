import CanvasImage from '../canvasImage.js'
import RossMainImgUrl from '../../../img/ross-main.png'
import RossHurtImgUrl from '../../../img/ross-hurt.png'
import RossDeadImgUrl from '../../../img/ross-dead.png'

const dimensions = {
    width: 188,
    height: 283
}

const RossMainImg = CanvasImage(RossMainImgUrl, dimensions.width, dimensions.height)
const RossDeadImg = CanvasImage(RossDeadImgUrl, dimensions.width, dimensions.height)
const RossHurtImg = CanvasImage(RossHurtImgUrl, dimensions.width, dimensions.height)

const imageStates = {
    default: RossMainImg,
    dead: RossDeadImg,
    hurt: RossHurtImg,
}

const Ross = {
    imageStates,
    damagePower: 5,
    dimensions
}

export default Ross