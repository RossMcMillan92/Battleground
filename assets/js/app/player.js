"use strict";

import { Health } from './health.js';
import { detectCollision as detectCollisionCalc } from './collisions';
import {
    calculateVelocity,
    calculateInputAcceleration,
    calculateInputDeceleration,
    calculateCollisionAcceleration,
    calculatePos
} from './movable';

const Player = (constraints) => {
    let health = Health();

    const dimensions = {
        width: 80,
        height: 80
    }

    let pos = {
        x: constraints[0] / 2,
        y: constraints[1] / 2
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
    const decelStep = .05;

    let damagePower = 25;
    let isRepelling = false;

    const updatePosition = (input) => {
        const velocity = calculateVelocity(velocityMap, input);
        const inputAcceleration = calculateInputAcceleration(acceleration, accelStep, decelStep, input);
        const inputDeceleration = calculateInputDeceleration(inputAcceleration, decelStep, input);
        const collisionAcceleration = calculateCollisionAcceleration(inputDeceleration, getPos(), constraints, isRepelling);
        const newPos = calculatePos(pos, collisionAcceleration, velocity);

        // MUTATIONS
        pos          = newPos
        acceleration = collisionAcceleration;
        isRepelling       = false;
    }

    const repel = (data) => {
        isRepelling = data;
    }

    const getDamagePower = () => damagePower;

    const detectCollision = item => detectCollisionCalc(getBoundingBox())(item);

    const render = ctx => {
        renderSelf(ctx);
        health.renderHealthBar(ctx, getPos());
    }

    const renderSelf = (ctx) => {
        ctx.beginPath();
        ctx.fillStyle = '#222';
        ctx.rect(pos.x, pos.y, dimensions.width, dimensions.height);
        ctx.fill();
    }

    const getBoundingBox = () => [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height];

    const getPos = () => Object.assign({}, pos, dimensions);

    const output = {
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

export { Player };