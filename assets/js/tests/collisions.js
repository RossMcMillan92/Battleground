var assert = require('assert');

import {
    detectCollision
} from '../app/collisions';

describe('Collisions', function () {
	describe('detectCollision()', function () {
		const item1 = [
			200, 
			400,
			200,
			400
		]
		const detectItem1Collision = detectCollision(item1);

		it('Overlap from the bottom', function (){
			let item2 = [
				390, 
				400,
				390,
				400
			]
			assert.deepEqual({ axis: 'y', direction: -1 }, detectItem1Collision(item2));
		})

		it('Overlap from the top', function (){
			let item2 = [
				150,
				390,
				150,
				205

			]
			assert.deepEqual({ axis: 'y', direction: 1 }, detectItem1Collision(item2));
		})

		// it('Overlap from the left', function (){
		// 	let item2 = [
		// 		190,
		// 		205,
		// 		190,
		// 		390
		// 	]
		// 	assert.deepEqual({ axis: 'x', direction: -1 }, detectItem1Collision(item2));
		// })

		it('Overlap from the right', function (){
			let item2 = [
				190,
				300,
				190,
				400
			]
			assert.deepEqual({ axis: 'x', direction: 1 }, detectItem1Collision(item2));
		})

		it('No overlap', function (){
			let item2 = [
				500,
				600,
				500,
				600
			]
			assert.deepEqual(false, detectItem1Collision(item2));
		})
	});
});