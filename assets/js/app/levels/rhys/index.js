import Item from "../../item"
import Enemy from "./enemy"
import GroundTextureImg from "../../../../img/floor-trippy.jpg"

const metadata = {
  enemy: "Rhys",
  location: "Trippy Palace",
  description: "Incredibly quick and agile, but lacking in strength"
}

const getLevel = (cw, ch) => {
  const constraints = [cw * 1.25, ch * 1.25]
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
