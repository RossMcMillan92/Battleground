import Item from "../../item"
import Enemy from "./enemy"
import GroundTextureImg from "../../../../img/floor-aus.png"

const metadata = {
  enemy: "James",
  location: "Australia",
  description: "Strength and agility on par with that of a medium-sized cat"
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
