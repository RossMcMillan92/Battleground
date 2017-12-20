import { repeat } from './tools'
import Loop from './loop'
import { Player } from './player'
import { Enemy } from './enemy'
import Background from './background'

const init = ({ ctx, ch, cw, constraints, keyboard, items, LevelEnemy, GroundTextureImg }) =>
    new Promise((res, rej) => {
        const bg 			= Background(GroundTextureImg)
        const masterLoop    = Loop()
        let player          = Player(constraints)
        let enemy           = Enemy(constraints, LevelEnemy)
        let uncollidedItems = items
    
        const frame = t => {
            let simsNeeded = _calculateSimulatioins(t)
            let camera
    
            _simulate(player, enemy)
    
            ctx.clearRect(0, 0, cw, ch)
            ctx.save()
            camera = _calculateCameraTranslation([0,0], player.getPos(), cw, ch)
            ctx.translate(...camera)
            ctx.scale(.8, .8)
            bg.render(ctx, constraints, camera)
            uncollidedItems.forEach(item => item.render(ctx))
            player.render(ctx)
            enemy.render(ctx)
            ctx.restore()
    
            items = uncollidedItems
        }
    
        // UNPURE AS FUCK
        const _simulate = (player, enemy) => {
            const playerPos         = player.getPos()
            const uncollidedItemPos = uncollidedItems.length ? uncollidedItems[0].getPos() : false
    
            const playerToEnemyCollision = player.detectCollision(enemy.getBoundingBox())
            const enemyToPlayerCollision = enemy.detectCollision(player.getBoundingBox())
    
            if(playerToEnemyCollision) {
                player.repel(playerToEnemyCollision)
                enemy.hurt(player.getDamagePower())
            }
            if(enemyToPlayerCollision) {
                enemy.repel(enemyToPlayerCollision)
                player.hurt(enemy.getDamagePower())
            }
    
            uncollidedItems = items.filter(item => !item.isCollected())
            player.updatePosition(keyboard.getState())
            enemy.updatePosition(playerPos, uncollidedItemPos)
    
            const playerCollectItems = uncollidedItems.filter(item => player.detectCollision(item.getBoundingBox()))
            const enemyCollectItems = uncollidedItems.filter(item => enemy.detectCollision(item.getBoundingBox()))
    
            player.heal(playerCollectItems.reduce((prev, cur) => prev + cur.collect(), 0))
            enemy.heal(enemyCollectItems.reduce((prev, cur) => prev + cur.collect(), 0))
    
            _checkForGameEnd()
        }
    
        const _calculateCameraTranslation = (camera, playerPos, cw, ch) => {
            const playerX = playerPos.x + (playerPos.width / 2)
            const playerY = playerPos.y + (playerPos.height / 2)
            let buffer = Math.min(cw, ch) * .3
            let [bT, bR, bB, bL] = [ch - buffer, cw - buffer, buffer, buffer].map(x => Math.round(x))
    
            if(playerX < (bL - camera[0])) camera[0] -= playerX - (bL - camera[0])
            if(playerX > (bR - camera[0])) camera[0] -= playerX - (bR - camera[0])
            if(playerY < (bB - camera[1])) camera[1] -= playerY - (bB - camera[1])
            if(playerY > (bT - camera[1])) camera[1] -= playerY - (bT - camera[1])
    
            return camera
        }
    
        const _calculateSimulatioins = (() => {
            const fps       = 60
            const tick      = 1000 / fps
            let accumulator = 0
            let simsNeeded  = 0
                
            return t => {
                // calculate simulataions needed
                accumulator += t
                simsNeeded = Math.floor(accumulator / tick)
                accumulator -= simsNeeded * tick
                return simsNeeded
            }
        })()
        
        const _checkForGameEnd = () => {
            if (player.getHealth() === 0 || enemy.getHealth() === 0) {
                res(player.getHealth(), enemy.getHealth())
            }
        }
    
    
        masterLoop.start(frame)
    })

export default init