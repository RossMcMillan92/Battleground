"use strict";

import { Health } from './health.js';
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
    let health = Health();
    
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

    let damagePower = 5;
    let isRepelling = false;

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
        newAcceleration = attractCalc(newAcceleration, pos, {x: targetX, y: targetY}, accelStep, decelStep, attractionThreshold);
        newAcceleration = calculateCollisionAcceleration(newAcceleration, getPos(), constraints, isRepelling);
        newPos = calculatePos(pos, newAcceleration, velocity);

        // MUTATIONS
        pos          = newPos
        acceleration = newAcceleration;
        isRepelling       = false;
    }
  
    const attract = () => {
        let [x, y] = attractCalc(pos.x, pos.y, targetX, targetY);

        pos = { x, y };
    }

    const repel = (data) => {
        isRepelling = data;
    }

    const getDamagePower = () => damagePower;

    const getBoundingBox = () => [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height];

    const getPos = () => Object.assign({}, pos, dimensions);

    const render = ctx => {
        renderSelf(ctx);
        health.renderHealthBar(ctx, getPos());
    }

    const renderSelf = (ctx) => {
        ctx.beginPath();
        ctx.fillStyle = '#d22';
        ctx.rect(pos.x, pos.y, dimensions.width, dimensions.height);
        ctx.fill();
    }

    const output = {
        attract,
        updatePosition,
        getBoundingBox,
        getDamagePower,
        getPos,
        repel,
        render
    }

    return Object.assign({}, output, health);
};

export { Enemy };