import Item from "../../item"
import Enemy from "./enemy"
import GroundTextureImg from "../../../../img/floor-lava.jpg"

const metadata = {
  enemy: "Stefan",
  location: "Hell",
  description: "Satan. Ruler of Hell and Keeper of Souls. Too high to really fight right now tho"
}

const getLevel = (cw, ch) => {
  const constraints = [cw * 2, ch]
  let items = Array.from(Array(20)).map(item => Item(constraints))

  return {
    constraints,
    Enemy,
    items,
    GroundTextureImg,
    metadata
  }
}

export default getLevel
