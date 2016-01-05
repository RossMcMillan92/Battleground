"use strict";

import {
    attractCalc,
    calculateVelocity,
    calculateInputAcceleration,
    calculateInputDeceleration,
    calculateCollisionAcceleration,
    calculatePos,
    getWalkCycle
} from './movable';

const Enemy = (constraints) => {
    const dimensions = {
        width: 80,
        height: 80
    }

    let pos = {
        x: constraints[0] / 4,
        y: constraints[1] / 4
    };
    let acceleration = {
        x: 0,
        y: 0
    };
    const velocityMap = {
        default: 5,
        running: 7
    };
    const accelStep = .025;
    const decelStep = .01;

    let isHurt = false;

    const walkingMap = [
        {
            duration: 2000,
            direction: 'right'
        },
        {
            duration: 2000,
            direction: 'left'
        },
    ]
    let attractionThreshold = 500;

    const getInput = getWalkCycle(walkingMap);
    const velocity = velocityMap['default'];

    const updatePosition = (targetX, targetY) => {
        const input = getInput();
        let newAcceleration = acceleration;
        let newPos;
console.log('a1', newAcceleration);
        // newAcceleration = calculateInputDeceleration(newAcceleration, decelStep);
console.log('a2', newAcceleration);
        newAcceleration = attractCalc(newAcceleration, pos, {x: targetX, y: targetY}, accelStep, decelStep, attractionThreshold);
console.log('a3', newAcceleration);
        newAcceleration = calculateCollisionAcceleration(newAcceleration, getPos(), constraints, isHurt);
console.log('a4', newAcceleration);
        newPos = calculatePos(pos, newAcceleration, velocity);
console.log('a5', newAcceleration);

        // MUTATIONS
        pos          = newPos
        acceleration = newAcceleration;
        isHurt       = false;
    }
  
    const attract = () => {
        let [x, y] = attractCalc(pos.x, pos.y, targetX, targetY);

        pos = { x, y };
    }

    const hurt = (data) => {
        isHurt = data;
    }

    const getBoundingBox = () => [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height];

    const getPos = () => Object.assign({}, pos, dimensions);

    const render = ctx => {
        ctx.beginPath();
        ctx.fillStyle = '#d22';
        ctx.rect(pos.x, pos.y, dimensions.width, dimensions.height);
        ctx.fill();
    }

    return {
        attract,
        updatePosition,
        getBoundingBox,
        getPos,
        hurt,
        render
    }
};

export { Enemy };