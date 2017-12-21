import Item from "../../item"
import Enemy from "./enemy"
import GroundTextureImg from "../../../../img/floor-garage.png"

const metadata = {
  enemy: "Kmac2021",
  location: "KFC",
  description: "With great strength comes great sadness which will slow any man to a near halt"
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
