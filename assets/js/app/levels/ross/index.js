import Item from "../../item"
import Enemy from "./enemy"
import GroundTextureImg from "../../../../img/floor-garage.png"

const metadata = {
  enemy: "Ross",
  location: "The Garage",
  description: "A lover, not a fighter"
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
