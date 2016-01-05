var assert = require('assert');

import {
    calculateVelocity,
    calculateTotalAcceleration,
    calculateAcceleration,
    calculateDeceleration,
    calculatePos
} from '../app/movable';

describe('Movable Functions', function () {

  describe('calculateVelocity()', function () {

    let velocityMap = {
        default: 7,
        running: 15
    };

    let input1 = {
    	shift: false
    }

    let input2 = {
    	shift: true
    }

    it('Should return 7 when no key is pressed', function () {
      assert.equal(7, calculateVelocity(velocityMap, input1));
    });

    it('Should return 15 when shift key is pressed', function () {
      assert.equal(15, calculateVelocity(velocityMap, input2));
    });
  });

  describe('calculateAcceleration()', function () {

    let accelStep = .025;

    it('Should return .975 when original accel is 1 and direction is -1', function () {
      assert.equal(.975, calculateAcceleration(1, accelStep, -1));
    });

    it('Should return 1 when original accel is 1 and direction is 1', function () {
      assert.equal(1, calculateAcceleration(1, accelStep, 1));
    });

    it('Should return -.975 when original accel is -1 and direction is 1', function () {
      assert.equal(-.975, calculateAcceleration(-1, accelStep, 1));
    });

    it('Should return -1 when original accel is -1 and direction is -1', function () {
      assert.equal(-1, calculateAcceleration(-1, accelStep, -1));
    });

  });

  describe('calculateDeceleration()', function () {

    let accelStep = .025;

    it('Should return .975 when original accel is 1', function () {
      assert.equal(.975, calculateDeceleration(1, accelStep));
    });

    it('Should return -.975 when original accel is -1', function () {
      assert.equal(-.975, calculateDeceleration(-1, accelStep));
    });

    it('Should return 0 when original accel is smaller than the accelStep', function () {
      assert.equal(0, calculateDeceleration(.01, accelStep));
    });

  });

});