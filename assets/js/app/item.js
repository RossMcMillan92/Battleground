"use strict";

const item = (constraints) => {
    let width = 30;
    let height = 30;

    let pos = {
        x: Math.round(Math.random() * constraints[0]),
        y: Math.round(Math.random() * constraints[1])
    };
    let acceleration = {
        x: 0,
        y: 0
    };
    let velocity = {
        x: 10,
        y: 10
    };
    let accelStep = .025;
    let decelStep = .05;

    const update = () => {
        
    }

    const getBoundingBox = () => [pos.x, pos.x + width, pos.y, pos.y + height]

    const render = ctx => {
        ctx.beginPath();
        ctx.fillStyle = '#493';
        ctx.rect(pos.x, pos.y, width, height);
        ctx.fill();
    }

    return {
        update,
        getBoundingBox,
        render
    }
};

export default item;