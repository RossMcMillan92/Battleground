import Game from './app/game'
import domready from './plugins/domready'
import Keyboard from './app/keyboard'
import getLevel from './app/levels/ross'

const canvas        = document.getElementById('canvas')
const ctx           = canvas.getContext('2d')
let cw              = canvas.width = canvas.offsetWidth
let ch              = canvas.height = canvas.offsetHeight
const constraints   = [cw * 2, ch]
const keyboard = Keyboard()
keyboard.start()

const LevelOne = getLevel(constraints)

const init = () => {
	Game({
		ctx,
		cw,
		ch,
		constraints,
		items: LevelOne.items,
		keyboard,
		LevelEnemy: LevelOne.Enemy,
		GroundTextureImg: LevelOne.GroundTextureImg
	})
		.then(() => {
			console.log('finished fellas! Starting again in 3...')
			setTimeout(() => {
				init()
			}, 3000)
		})
}

domready(init)