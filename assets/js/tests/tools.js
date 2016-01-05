var assert = require('assert');

import {
    compose
} from '../app/tools';



describe('compose()', function () {
	const toUpper = x => x.toUpperCase();
	const reverse = x => x.split('').reverse().join('');
	const exclaim = x => x + '!';

	const scream    = compose(toUpper, exclaim);
	const revEx     = compose(reverse, exclaim);
	const exRev     = compose(exclaim, reverse);
	const screamRev = compose(toUpper, exclaim, reverse);

	it('exclaim(toUpper())', function(){
		assert.equal('HELLO!', exclaim(toUpper('hello')))
	})

	it('compose(toUpper, exclaim)', function(){
		assert.equal('HELLO!', scream('hello'))
	})

	it('compose(reverse, exclaim)', function(){
		assert.equal('olleh!', revEx('hello'))
	})

	it('compose(exclaim, reverse)', function(){
		assert.equal('!olleh', exRev('hello'))
	})

	it('compose(exclaim, reverse)', function(){
		assert.equal('!OLLEH', screamRev('hello'))
	})
});