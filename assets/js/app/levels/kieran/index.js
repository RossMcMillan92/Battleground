import Item from "../../item"
import Enemy from "./enemy"
import GroundTextureImg from "../../../../img/floor-kfc.png"

const metadata = {
  enemy: "Kmac2021",
  location: "KFC",
  description:
    "This sad man is used to the pain and so has great health. Weilds the awesome power of memes (but memes don't win fights)"
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
