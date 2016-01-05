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

    let collected = false;
    let healingPower = 10;

    const update = () => {
        
    }

    const collect = () => {
        if(collected) return 0;
        collected = true;
        return healingPower;
    }

    const getBoundingBox = () => [pos.x, pos.x + width, pos.y, pos.y + height];

    const render = ctx => {
        if(collected) return;
        ctx.beginPath();
        ctx.fillStyle = '#493';
        ctx.rect(pos.x, pos.y, width, height);
        ctx.fill();
    }

    return {
        update,
        collect,
        getBoundingBox,
        render
    }
};

export default item;