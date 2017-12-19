import Item from '../item'
import Enemy from '../characters/ross'
import GroundTextureImg from '../../../img/ground.png'

const getLevel = (constraints) => {
    let items = Array.from(Array(20)).map(item => Item(constraints))

    return {
        Enemy,
        items,
        GroundTextureImg
    }
}

export default getLevel