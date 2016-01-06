"use strict";

import { Health } from './health.js';
import { detectCollision as detectCollisionCalc } from './collisions';
import {
    attractCalc,
    calculateDistance,
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

    let damagePower = 25;
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
    let attackThreshold = 500;

    const getInput = getWalkCycle(walkingMap);
    const velocity = velocityMap['default'];

    const updatePosition = (target, nearestItem) => {
        const input = getInput();
        const isAlive = health.getHealth() > 0;
        const isDying = isAlive && health.getHealth() < 50;
        let newAcceleration = acceleration;
        let newPos;

        // attraction
        let [dx, dy, distance] = calculateDistance(pos, (isDying && nearestItem ? nearestItem : target));
        let isAttacking = isAlive && distance !== false && Math.abs(distance) < attackThreshold;
        if(isAttacking || (isDying && nearestItem)) {
            newAcceleration = attractCalc(newAcceleration, accelStep, dx, dy);
        } else {
            newAcceleration = calculateInputDeceleration(acceleration, decelStep);
        }

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

    const detectCollision = item => detectCollisionCalc(getBoundingBox())(item);

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
        detectCollision,
        getPos,
        repel,
        render
    }

    return Object.assign({}, output, health);
};

export { Enemy };