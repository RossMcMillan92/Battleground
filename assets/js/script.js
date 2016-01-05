"use strict";

import { repeat } from './app/tools';
import domready from './plugins/domready';
import Loop from './app/loop';
import { Player } from './app/player';
import { Enemy } from './app/enemy';
import Item from './app/item';
import Keyboard from './app/keyboard';

import { detectCollision } from './app/collisions';

;(function(){
	const keyboard 	 = Keyboard();
	const masterLoop = Loop();
	const canvas     = document.getElementById('canvas');
	const ctx        = canvas.getContext('2d');
	let cw           = canvas.width = canvas.offsetWidth;
	let ch           = canvas.height = canvas.offsetHeight;
	let player 		 = Player([cw, ch]);
	let enemy 		 = Enemy([cw, ch]);
	let items 		 = Array.from(Array(20)).map(item => Item([cw, ch]));
	let camera 		 = [0, 0];

	// This will run on document ready
	const init = function(){

		const frame = t => {
			let simsNeeded = _calculateSimulatioins(t);
			let playerPos  = player.getPos();
			let uncollidedItems = items;
			let camera;

			const detectPlayerCollision = detectCollision(player.getBoundingBox());
			const detectEnemyCollision = detectCollision(enemy.getBoundingBox());

			repeat(simsNeeded, () => {
				const playerToEnemyCollision = detectPlayerCollision(enemy.getBoundingBox());
				const enemyToPlayerCollision = detectEnemyCollision(player.getBoundingBox());
				if(playerToEnemyCollision) player.hurt(playerToEnemyCollision);
				if(enemyToPlayerCollision) enemy.hurt(enemyToPlayerCollision);

				player.updatePosition(keyboard.getState());
				enemy.updatePosition(playerPos.x, playerPos.y);
				// enemy.attract();

				// only need to render uncollided items
				uncollidedItems = items.filter(item => !detectPlayerCollision(item.getBoundingBox()) && !detectEnemyCollision(item.getBoundingBox()));
			})

			ctx.save();
			ctx.clearRect(0, 0, cw, ch);
			camera = _calculateCameraTranslation([0,0], playerPos, cw, ch);
			ctx.translate(...camera);
			uncollidedItems.forEach(item => item.render(ctx));
			player.render(ctx);
			enemy.render(ctx);
			ctx.restore();

			items = uncollidedItems;
		}

		const _calculateCameraTranslation = (camera, playerPos, cw, ch) => {
			const playerX = playerPos.x + (playerPos.width / 2);
			const playerY = playerPos.y + (playerPos.height / 2);
			let buffer = Math.min(cw, ch) * .2;
			let [bT, bR, bB, bL] = [ch - buffer, cw - buffer, buffer, buffer].map(x => Math.round(x));

			if(playerX < (bL - camera[0])) camera[0] -= playerX - (bL - camera[0]);
			if(playerX > (bR - camera[0])) camera[0] -= playerX - (bR - camera[0]);
			if(playerY < (bB - camera[1])) camera[1] -= playerY - (bB - camera[1]);
			if(playerY > (bT - camera[1])) camera[1] -= playerY - (bT - camera[1]);

			return camera;
		}

		const _calculateSimulatioins = (() => {
			const fps       = 120;
			const tick      = 1000 / fps;
			let accumulator = 0;
			let simsNeeded  = 0;
				
			return t => {
				// calculate simulataions needed
				accumulator += t;
				simsNeeded = Math.floor(accumulator / tick);
				accumulator -= simsNeeded * tick;
				return simsNeeded;
			}
		})();

		keyboard.start();

		masterLoop.start(frame);
	}

	domready(init);
})();