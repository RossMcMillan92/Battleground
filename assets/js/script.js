import Game from './app/game'
import domready from './plugins/domready'
import Keyboard from './app/keyboard'
import getLevel from './app/levels/ross'

let cw              = canvas.width = canvas.offsetWidth
let ch              = canvas.height = canvas.offsetHeight
const constraints   = [cw * 2, ch]

const LevelOne = getLevel(constraints)

domready(() => {
	Game({
		cw,
		ch,
		constraints,
		items: LevelOne.items,
		keyboard: Keyboard(),
		LevelEnemy: LevelOne.Enemy,
		GroundTextureImg: LevelOne.GroundTextureImg
	})
})