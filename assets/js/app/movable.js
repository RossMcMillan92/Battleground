const attractCalc = (curAccerl, accelStep, dx, dy) => {
    let [ax, ay] = [curAccerl.x, curAccerl.y];

    ax = calculateAcceleration(ax, accelStep, dx < 0 ? -1 : 1);
    ay = calculateAcceleration(ay, accelStep, dy < 0 ? -1 : 1);

    return {
        x: ax,
        y: ay
    };
}

const calculateDistance = (pos, target) => {
    const dx = target.x - pos.x;
    const dy = target.y - pos.y;
    return [dx, dy, Math.sqrt(dx * dx + dy * dy)];
}

const calculateVelocity = (velocityMap, input) => {
    let velocityType = 'default';
    if(input.shift) velocityType = 'running';

    return velocityMap[velocityType];
}

const calculateInputAcceleration = (curAccel, accelStep, decelStep, input) => {
    let [ax, ay] = [curAccel.x, curAccel.y];
    
    // Controls
    if(input.right) ax = calculateAcceleration(ax, ax > 0 ? accelStep : decelStep);
    if(input.left)  ax = calculateAcceleration(ax, ax > 0 ? decelStep : accelStep, -1);
    if(input.down)  ay = calculateAcceleration(ay, ay > 0 ? accelStep : decelStep);
    if(input.up)    ay = calculateAcceleration(ay, ay > 0 ? decelStep : accelStep, -1);

    return {
        x: ax,
        y: ay
    };
}

const calculateInputDeceleration = (curAccel, decelStep, input = {}) => {
    let [ax, ay] = [curAccel.x, curAccel.y];

    // Deceleration
    if(ax !== 0 && !input.left && !input.right) ax = calculateDeceleration(ax, decelStep);
    if(ay !== 0 && !input.up && !input.down) ay = calculateDeceleration(ay, decelStep);

    return {
        x: ax,
        y: ay
    };
}

const calculateCollisionAcceleration = (curAccel, pos, constraints, isHurt) => {
    let [x, y] = [pos.x, pos.y];
    let [ax, ay] = [curAccel.x, curAccel.y];

    if(isHurt.axis === 'x') ax = isHurt.direction;
    if(isHurt.axis === 'y') ay = isHurt.direction;

    // Constraints
    if((x + pos.width > constraints[0] && ax > 0) || (x < 0 && ax < 0)) ax = ax * -.5;
    if((y + pos.height > constraints[1] && ay > 0) || (y < 0 && ay < 0)) ay = ay * -.5;

    return {
        x: ax,
        y: ay
    };
}

const calculateAcceleration = (curAccel, accelStep, dir = 1) => {
    const result = curAccel + (accelStep * dir);
    return dir === 1 ? Math.min(1, result) : Math.max(-1, result);
}

const calculateDeceleration = (curAccel, decelStep) => {
    return (curAccel < decelStep && curAccel > -decelStep) ? 0 : calculateAcceleration(curAccel, decelStep, curAccel > 0 ? -1 : 1);
}

const calculatePos = (pos, acceleration, velocity) => {
    return {
        x: Math.round(pos.x + (velocity * acceleration.x)), 
        y: Math.round(pos.y + (velocity * acceleration.y))
    };
}

const getWalkCycle = (walkCycle) => {
    let lastUpdateTime = performance.now();
    let index      = 0;

    return (() => {
        let data = {};
        let currentSection = walkCycle[index];
        let currentDirection = currentSection.direction;
        let currentDuration = currentSection.duration;
        const currentTime = performance.now();

        if(currentTime > lastUpdateTime + currentDuration) {
            index = index < walkCycle.length - 1 ? index + 1 : 0;
            lastUpdateTime = currentTime;
        }

        data[currentDirection] = true;
        return data;
    })
}

export {
    attractCalc,
    calculateDistance,
    calculateVelocity,
    calculateInputAcceleration,
    calculateInputDeceleration,
    calculateCollisionAcceleration,
    calculateAcceleration,
    calculateDeceleration,
    calculatePos,
    getWalkCycle
}