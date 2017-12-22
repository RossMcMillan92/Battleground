import Item from "../../item"
import Enemy from "./enemy"
import GroundTextureImg from "../../../../img/ground.png"

const metadata = {
  enemy: "Final Boss: Lindsey",
  location: "Paisley",
  description: "Good luck..."
}

const getLevel = (cw, ch) => {
  const constraints = [cw, ch]
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
