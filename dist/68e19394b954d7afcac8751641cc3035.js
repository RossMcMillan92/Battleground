// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const repeat = (simsNeeded, fn) => {
  for (var i = simsNeeded - 1, x = 0; i >= 0; i--) {
    fn(simsNeeded, x);
    x++;
  };
};

const compose = (...args) => x => args.reduce((prev, cur) => cur.call(cur, prev), x);

exports.repeat = repeat;
exports.compose = compose;
},{}],7:[function(require,module,exports) {
/*! * domready (c) Dustin Diaz 2012 - License MIT */
!function (e, t) {
  typeof module != "undefined" ? module.exports = t() : typeof define == "function" && typeof define.amd == "object" ? define(t) : this[e] = t();
}("domready", function (e) {
  function p(e) {
    h = 1;while (e = t.shift()) e();
  }var t = [],
      n,
      r = !1,
      i = document,
      s = i.documentElement,
      o = s.doScroll,
      u = "DOMContentLoaded",
      a = "addEventListener",
      f = "onreadystatechange",
      l = "readyState",
      c = o ? /^loaded|^c/ : /^loaded|c/,
      h = c.test(i[l]);return i[a] && i[a](u, n = function () {
    i.removeEventListener(u, n, r), p();
  }, r), o && i.attachEvent(f, n = function () {
    /^c/.test(i[l]) && (i.detachEvent(f, n), p());
  }), e = o ? function (n) {
    self != top ? h ? n() : t.push(n) : function () {
      try {
        s.doScroll("left");
      } catch (t) {
        return setTimeout(function () {
          e(n);
        }, 50);
      }n();
    }();
  } : function (e) {
    h ? e() : t.push(e);
  };
});
},{}],11:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Loop = () => {
  let lastTime = 0;
  let stopped = false;
  let callback;

  const start = function (fn) {
    stopped = false;
    if (typeof fn !== "undefined") callback = fn;

    requestAnimationFrame(_frame);
  };

  const stop = function () {
    stopped = true;
  };

  const _frame = function (time) {
    const delta = time - lastTime;
    lastTime = time;

    callback(delta);
    if (!stopped) requestAnimationFrame(_frame);
  };

  return {
    start,
    stop
  };
};

exports.default = Loop;
},{}],12:[function(require,module,exports) {
module.exports="/dist/3e51dfce9530bab3b315fdf123d328c6.png";
},{}],13:[function(require,module,exports) {
module.exports="/dist/a4930a7b69815e3f1d15737901a740dd.png";
},{}],14:[function(require,module,exports) {
module.exports="/dist/0cd2a871a48f4238914bbfdf505f3815.png";
},{}],15:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const CanvasImage = (url, width, height) => {
  const image = new Image();

  let hasLoaded = false;
  image.onload = () => hasLoaded = true;
  image.src = url;

  const render = (ctx, x, y, flipped) => {
    if (!hasLoaded) return;
    drawImage(ctx, image, x, y, width, height, 0, flipped, false, false);
  };

  return {
    render
  };
};

function drawImage(ctx, img, x, y, width, height, deg, flip, flop, center) {

  ctx.save();

  if (typeof width === "undefined") width = img.width;
  if (typeof height === "undefined") height = img.height;
  if (typeof center === "undefined") center = false;

  // Set rotation point to center of image, instead of top/left
  if (center) {
    x -= width / 2;
    y -= height / 2;
  }

  // Set the origin to the center of the image
  ctx.translate(x + width / 2, y + height / 2);

  // Rotate the canvas around the origin
  var rad = 2 * Math.PI - deg * Math.PI / 180;
  ctx.rotate(rad);

  let flipScale;
  let flopScale;
  // Flip/flop the canvas
  if (flip) flipScale = -1;else flipScale = 1;
  if (flop) flopScale = -1;else flopScale = 1;
  ctx.scale(flipScale, flopScale);

  // Draw the image    
  ctx.drawImage(img, -width / 2, -height / 2, width, height);

  ctx.restore();
}

exports.default = CanvasImage;
},{}],16:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Health = () => {
  const healthBarHeight = 10;
  const healthBarStrokeWidth = 2;
  let health = 100;

  const updateHealth = amount => {
    health = Math.max(0, Math.min(health + amount, 100)); // Health min 0 max 100
  };

  const renderHealthBar = (ctx, playerPos) => {
    // Fill
    ctx.beginPath();
    ctx.fillStyle = getFillColor(health);
    ctx.fillRect(playerPos.x + healthBarStrokeWidth, playerPos.y - healthBarHeight * 2, playerPos.width * (health / 100) - healthBarStrokeWidth, healthBarHeight);

    // Stroke
    ctx.beginPath();
    ctx.lineWidth = healthBarStrokeWidth;
    ctx.strokeStyle = '#000';
    ctx.strokeRect(playerPos.x + healthBarStrokeWidth / 2, playerPos.y - healthBarHeight * 2, playerPos.width - healthBarStrokeWidth / 2, healthBarHeight);
  };

  const getFillColor = health => {
    if (health > 67) return '#0f0';
    if (health > 33) return '#FF8300';
    return '#f00';
  };

  return {
    getHealth: () => health,
    hurt: amount => updateHealth(-amount),
    heal: amount => updateHealth(amount),
    renderHealthBar
  };
};

exports.Health = Health;
},{}],18:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const attractCalc = (curAccerl, accelStep, dx, dy) => {
  let [ax, ay] = [curAccerl.x, curAccerl.y];

  ax = calculateAcceleration(ax, accelStep, dx < 0 ? -1 : 1);
  ay = calculateAcceleration(ay, accelStep, dy < 0 ? -1 : 1);

  return {
    x: ax,
    y: ay
  };
};

const calculateDistance = (pos, target) => {
  const dx = target.x - pos.x;
  const dy = target.y - pos.y;
  return [dx, dy, Math.sqrt(dx * dx + dy * dy)];
};

const calculateVelocity = (velocityMap, input) => {
  let velocityType = 'default';
  if (input.shift) velocityType = 'running';

  return velocityMap[velocityType];
};

const calculateInputAcceleration = (curAccel, accelStep, decelStep, input) => {
  let [ax, ay] = [curAccel.x, curAccel.y];

  // Controls
  if (input.right) ax = calculateAcceleration(ax, ax > 0 ? accelStep : decelStep);
  if (input.left) ax = calculateAcceleration(ax, ax > 0 ? decelStep : accelStep, -1);
  if (input.down) ay = calculateAcceleration(ay, ay > 0 ? accelStep : decelStep);
  if (input.up) ay = calculateAcceleration(ay, ay > 0 ? decelStep : accelStep, -1);

  return {
    x: ax,
    y: ay
  };
};

const calculateInputDeceleration = (curAccel, decelStep, input = {}) => {
  let [ax, ay] = [curAccel.x, curAccel.y];

  // Deceleration
  if (ax !== 0 && !input.left && !input.right) ax = calculateDeceleration(ax, decelStep);
  if (ay !== 0 && !input.up && !input.down) ay = calculateDeceleration(ay, decelStep);

  return {
    x: ax,
    y: ay
  };
};

const calculateCollisionAcceleration = (curAccel, pos, constraints, isHurt) => {
  let [x, y] = [pos.x, pos.y];
  let [ax, ay] = [curAccel.x, curAccel.y];

  if (isHurt.axis === 'x') ax = isHurt.direction;
  if (isHurt.axis === 'y') ay = isHurt.direction;

  // Constraints
  if (x + pos.width > constraints[0] && ax > 0 || x < 0 && ax < 0) ax = ax * -.5;
  if (y + pos.height > constraints[1] && ay > 0 || y < 0 && ay < 0) ay = ay * -.5;

  return {
    x: ax,
    y: ay
  };
};

const calculateAcceleration = (curAccel, accelStep, dir = 1) => {
  const result = curAccel + accelStep * dir;
  return dir === 1 ? Math.min(1, result) : Math.max(-1, result);
};

const calculateDeceleration = (curAccel, decelStep) => {
  return curAccel < decelStep && curAccel > -decelStep ? 0 : calculateAcceleration(curAccel, decelStep, curAccel > 0 ? -1 : 1);
};

const calculatePos = (pos, acceleration, velocity) => {
  return {
    x: Math.round(pos.x + velocity * acceleration.x),
    y: Math.round(pos.y + velocity * acceleration.y)
  };
};

const getWalkCycle = walkCycle => {
  let lastUpdateTime = performance.now();
  let index = 0;

  return () => {
    let data = {};
    let currentSection = walkCycle[index];
    let currentDirection = currentSection.direction;
    let currentDuration = currentSection.duration;
    const currentTime = performance.now();

    if (currentTime > lastUpdateTime + currentDuration) {
      index = index < walkCycle.length - 1 ? index + 1 : 0;
      lastUpdateTime = currentTime;
    }

    data[currentDirection] = true;
    return data;
  };
};

exports.attractCalc = attractCalc;
exports.calculateDistance = calculateDistance;
exports.calculateVelocity = calculateVelocity;
exports.calculateInputAcceleration = calculateInputAcceleration;
exports.calculateInputDeceleration = calculateInputDeceleration;
exports.calculateCollisionAcceleration = calculateCollisionAcceleration;
exports.calculateAcceleration = calculateAcceleration;
exports.calculateDeceleration = calculateDeceleration;
exports.calculatePos = calculatePos;
exports.getWalkCycle = getWalkCycle;
},{}],19:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const detectCollision = item1 => item2 => {
  let [item1LeftEdge, item1RightEdge, item1TopEdge, item1BottomEdge] = item1;
  let [item2LeftEdge, item2RightEdge, item2TopEdge, item2BottomEdge] = item2;

  let overlapsX = item1RightEdge > item2LeftEdge && item1LeftEdge < item2RightEdge;
  let overlapsY = item1BottomEdge > item2TopEdge && item1TopEdge < item2BottomEdge;

  let hasCollided = overlapsY && overlapsX;

  if (!hasCollided) return false;

  let dir = {};
  let axis = 0;

  let leftOverlap = Math.abs(item1RightEdge - item2LeftEdge);
  let rightOverlap = Math.abs(item1LeftEdge - item2RightEdge);
  let topOverlap = Math.abs(item1BottomEdge - item2TopEdge);
  let bottomOverlap = Math.abs(item1TopEdge - item2BottomEdge);

  dir.x = leftOverlap < rightOverlap ? -1 : 1, dir.y = topOverlap < bottomOverlap ? -1 : 1;

  axis = (dir.x < 0 ? leftOverlap : rightOverlap) < (dir.y < 0 ? topOverlap : bottomOverlap) ? 'x' : 'y';

  return {
    axis: axis,
    direction: dir[axis]
  };
};

exports.detectCollision = detectCollision;
},{}],4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = undefined;

var _canvasImage = require("./canvasImage.js");

var _canvasImage2 = _interopRequireDefault(_canvasImage);

var _health = require("./health.js");

var _collisions = require("./collisions");

var _movable = require("./movable");

var _lukeMain = require("../../img/luke-main.png");

var _lukeMain2 = _interopRequireDefault(_lukeMain);

var _lukeHurt = require("../../img/luke-hurt.png");

var _lukeHurt2 = _interopRequireDefault(_lukeHurt);

var _lukeDead = require("../../img/luke-dead.png");

var _lukeDead2 = _interopRequireDefault(_lukeDead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Player = constraints => {
  let health = (0, _health.Health)();

  const dimensions = {
    width: 188 / 2,
    height: 283 / 2
  };
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

  const LukeMainImg = (0, _canvasImage2.default)(_lukeMain2.default, dimensions.width, dimensions.height);
  const LukeDeadImg = (0, _canvasImage2.default)(_lukeDead2.default, dimensions.width, dimensions.height);
  const LukeHurtImg = (0, _canvasImage2.default)(_lukeHurt2.default, dimensions.width, dimensions.height);
  let currentImageState = 'default';
  const imageStates = {
    default: LukeMainImg,
    dead: LukeDeadImg,
    hurt: LukeHurtImg
  };

  const updatePosition = input => {
    const velocity = (0, _movable.calculateVelocity)(velocityMap, input);
    const isAlive = health.getHealth() > 0;
    let newAcceleration = acceleration;
    let newPos;

    newAcceleration = (0, _movable.calculateInputAcceleration)(acceleration, isAlive ? accelStep : 0, decelStep, input);
    newAcceleration = (0, _movable.calculateInputDeceleration)(newAcceleration, decelStep, input);
    newAcceleration = (0, _movable.calculateCollisionAcceleration)(newAcceleration, getPos(), constraints, isRepelling);
    newPos = (0, _movable.calculatePos)(pos, newAcceleration, velocity);

    // MUTATIONS
    pos = newPos;
    acceleration = newAcceleration;
    isRepelling = false;
  };

  const repel = data => {
    isRepelling = data;
  };

  const getDamagePower = () => damagePower;

  const detectCollision = item => (0, _collisions.detectCollision)(getBoundingBox())(item);

  const heal = amount => {
    if (currentImageState === 'dead') return;
    health.heal(amount);
  };

  let hurtStateTimeout;
  const hurt = amount => {
    health.hurt(amount);
    currentImageState = 'hurt';

    if (hurtStateTimeout) clearTimeout(hurtStateTimeout);
    if (health.getHealth() === 0) {
      currentImageState = 'dead';
      return;
    }
    hurtStateTimeout = setTimeout(() => {
      currentImageState = 'default';
    }, 750);
  };

  const render = ctx => {
    renderSelf(ctx);
    health.renderHealthBar(ctx, getPos());
  };

  const renderSelf = ctx => {
    imageStates[currentImageState].render(ctx, pos.x, pos.y, acceleration.x < 0);
  };

  const getBoundingBox = () => [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height];

  const getPos = () => Object.assign({}, pos, dimensions);

  const output = {
    detectCollision,
    getBoundingBox,
    getDamagePower,
    heal,
    hurt,
    getPos,
    repel,
    render,
    updatePosition
  };

  return Object.assign({}, output);
};

exports.Player = Player;
},{"../../img/luke-hurt.png":12,"../../img/luke-main.png":13,"../../img/luke-dead.png":14,"./canvasImage.js":15,"./health.js":16,"./movable":18,"./collisions":19}],9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Enemy = undefined;

var _health = require("./health.js");

var _collisions = require("./collisions");

var _movable = require("./movable");

const Enemy = (constraints, { damagePower, dimensions, imageStates }) => {
  let health = (0, _health.Health)();

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

  let isRepelling = false;

  const walkingMap = [{
    duration: 2000,
    direction: 'right'
  }, {
    duration: 2000,
    direction: 'left'
  }];
  let attackThreshold = 500;

  const getInput = (0, _movable.getWalkCycle)(walkingMap);
  const velocity = velocityMap['default'];
  let currentImageState = 'default';

  const updatePosition = (target, nearestItem) => {
    const input = getInput();
    const isAlive = health.getHealth() > 0;
    const isDying = isAlive && health.getHealth() < 50;
    let newAcceleration = acceleration;
    let newPos;

    // attraction
    let [dx, dy, distance] = (0, _movable.calculateDistance)(pos, isDying && nearestItem ? nearestItem : target);
    let isAttacking = isAlive && distance !== false && Math.abs(distance) < attackThreshold;
    if (isAttacking || isDying && nearestItem) {
      newAcceleration = (0, _movable.attractCalc)(newAcceleration, isAlive ? accelStep : 0, dx, dy);
    } else {
      newAcceleration = (0, _movable.calculateInputDeceleration)(acceleration, decelStep);
    }

    newAcceleration = (0, _movable.calculateCollisionAcceleration)(newAcceleration, getPos(), constraints, isRepelling);
    newPos = (0, _movable.calculatePos)(pos, newAcceleration, velocity);

    // MUTATIONS
    pos = newPos;
    acceleration = newAcceleration;
    isRepelling = false;
  };

  const attract = () => {
    let [x, y] = (0, _movable.attractCalc)(pos.x, pos.y, targetX, targetY);

    pos = { x, y };
  };

  const repel = data => {
    isRepelling = data;
  };

  const getDamagePower = () => damagePower;

  const detectCollision = item => (0, _collisions.detectCollision)(getBoundingBox())(item);

  const getBoundingBox = () => [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height];

  const getPos = () => Object.assign({}, pos, dimensions);

  const heal = amount => {
    if (currentImageState === 'dead') return;
    health.heal(amount);
  };

  let hurtStateTimeout;
  const hurt = amount => {
    health.hurt(amount);
    console.log('amount', amount);

    currentImageState = 'hurt';

    if (hurtStateTimeout) clearTimeout(hurtStateTimeout);
    if (health.getHealth() === 0) {
      currentImageState = 'dead';
      return;
    }
    hurtStateTimeout = setTimeout(() => {
      currentImageState = 'default';
    }, 750);
  };

  const render = ctx => {
    renderSelf(ctx);
    health.renderHealthBar(ctx, getPos());
  };

  const renderSelf = ctx => {
    imageStates[currentImageState].render(ctx, pos.x, pos.y, acceleration.x < 0);
  };

  const output = {
    attract,
    updatePosition,
    getBoundingBox,
    getDamagePower,
    detectCollision,
    heal,
    hurt,
    getPos,
    repel,
    render
  };

  return Object.assign({}, health, output);
};

exports.Enemy = Enemy;
},{"./health.js":16,"./collisions":19,"./movable":18}],22:[function(require,module,exports) {
module.exports="/dist/3a4707f4babe77e0c819c2c57024b594.png";
},{}],8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvasImage = require("./canvasImage.js");

var _canvasImage2 = _interopRequireDefault(_canvasImage);

var _pill = require("../../img/pill.png");

var _pill2 = _interopRequireDefault(_pill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const item = constraints => {
  const dimensions = {
    width: 30,
    height: 30
  };

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

  const PillImg = (0, _canvasImage2.default)(_pill2.default, dimensions.width, dimensions.height);

  const update = () => {};

  const collect = () => {
    if (collected) return 0;
    collected = true;
    return healingPower;
  };

  const isCollected = () => collected;

  const getBoundingBox = () => [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height];

  const getPos = () => Object.assign({}, pos, dimensions);

  const render = ctx => {
    if (collected) return;
    PillImg.render(ctx, pos.x, pos.y);
  };

  return {
    update,
    collect,
    isCollected,
    getPos,
    getBoundingBox,
    render
  };
};

exports.default = item;
},{"./canvasImage.js":15,"../../img/pill.png":22}],5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Keyboard() {
  let state = {
    left: false,
    right: false,
    up: false,
    down: false,
    shift: false,
    space: false
  };

  const bindings = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    16: 'shift',
    32: 'space'
  };

  const start = () => {
    document.addEventListener('keydown', _onKeyDown, false);
    document.addEventListener('keyup', _onKeyUp, false);
  };

  const stop = () => {
    document.removeEventListener('keydown', _onKeyDown, false);
    document.removeEventListener('keyup', _onKeyUp, false);
  };

  const getState = () => state;

  const _onKeyDown = e => _onKey(e, true);

  const _onKeyUp = e => _onKey(e, false);

  const _onKey = (e, value) => {
    const binding = bindings[e.keyCode];
    if (!binding) return;

    state[binding] = value;

    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
  };

  return {
    start,
    stop,
    getState
  };
}

exports.default = Keyboard;
},{}],10:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Background = url => {
  const image = new Image();

  let hasLoaded = false;
  image.onload = () => hasLoaded = true;
  image.src = url;

  const render = (ctx, constraints, camera) => {
    if (!hasLoaded) return;
    const [width, height] = constraints;
    const pattern = ctx.createPattern(image, 'repeat');

    ctx.rect(0, 0, width, height);
    ctx.fillStyle = pattern;
    ctx.fill();
  };

  return {
    render
  };
};

exports.default = Background;
},{}],3:[function(require,module,exports) {
module.exports="/dist/29db10c7cbab998e318065d9bec5e061.png";
},{}],25:[function(require,module,exports) {
module.exports="/dist/b76b2684c7d7b7099daa217637d4c3dc.png";
},{}],27:[function(require,module,exports) {
module.exports="/dist/40515ac79ea5b3b326f16ae88100f304.png";
},{}],26:[function(require,module,exports) {
module.exports="/dist/61a87dc35d4381aafd311e32df2f4308.png";
},{}],24:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvasImage = require("../canvasImage.js");

var _canvasImage2 = _interopRequireDefault(_canvasImage);

var _rossMain = require("../../../img/ross-main.png");

var _rossMain2 = _interopRequireDefault(_rossMain);

var _rossHurt = require("../../../img/ross-hurt.png");

var _rossHurt2 = _interopRequireDefault(_rossHurt);

var _rossDead = require("../../../img/ross-dead.png");

var _rossDead2 = _interopRequireDefault(_rossDead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dimensions = {
  width: 188,
  height: 283
};

const RossMainImg = (0, _canvasImage2.default)(_rossMain2.default, dimensions.width, dimensions.height);
const RossDeadImg = (0, _canvasImage2.default)(_rossDead2.default, dimensions.width, dimensions.height);
const RossHurtImg = (0, _canvasImage2.default)(_rossHurt2.default, dimensions.width, dimensions.height);

const imageStates = {
  default: RossMainImg,
  dead: RossDeadImg,
  hurt: RossHurtImg
};

const Ross = {
  imageStates,
  damagePower: 5,
  dimensions
};

exports.default = Ross;
},{"../canvasImage.js":15,"../../../img/ross-main.png":25,"../../../img/ross-hurt.png":27,"../../../img/ross-dead.png":26}],2:[function(require,module,exports) {
"use strict";

var _tools = require("./app/tools");

var _domready = require("./plugins/domready");

var _domready2 = _interopRequireDefault(_domready);

var _loop = require("./app/loop");

var _loop2 = _interopRequireDefault(_loop);

var _player = require("./app/player");

var _enemy = require("./app/enemy");

var _item = require("./app/item");

var _item2 = _interopRequireDefault(_item);

var _keyboard = require("./app/keyboard");

var _keyboard2 = _interopRequireDefault(_keyboard);

var _background = require("./app/background");

var _background2 = _interopRequireDefault(_background);

var _ground = require("../img/ground.png");

var _ground2 = _interopRequireDefault(_ground);

var _ross = require("./app/characters/ross");

var _ross2 = _interopRequireDefault(_ross);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Ross', _ross2.default);

const bg = (0, _background2.default)(_ground2.default);
const keyboard = (0, _keyboard2.default)();
const masterLoop = (0, _loop2.default)();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let cw = canvas.width = canvas.offsetWidth;
let ch = canvas.height = canvas.offsetHeight;
const constraints = [cw * 2, ch];
let player = (0, _player.Player)(constraints);
let enemy = (0, _enemy.Enemy)(constraints, _ross2.default);
let items = Array.from(Array(20)).map(item => (0, _item2.default)(constraints));
let uncollidedItems = items;

// This will run on document ready
const init = function () {

  const frame = t => {
    let simsNeeded = _calculateSimulatioins(t);
    let camera;

    _simulate(player, enemy);

    ctx.clearRect(0, 0, cw, ch);
    ctx.save();
    camera = _calculateCameraTranslation([0, 0], player.getPos(), cw, ch);
    ctx.translate(...camera);
    bg.render(ctx, constraints, camera);
    uncollidedItems.forEach(item => item.render(ctx));
    player.render(ctx);
    enemy.render(ctx);
    ctx.restore();

    items = uncollidedItems;
  };

  // UNPURE AS FUCK
  const _simulate = (player, enemy) => {
    const playerPos = player.getPos();
    const uncollidedItemPos = uncollidedItems.length ? uncollidedItems[0].getPos() : false;

    const playerToEnemyCollision = player.detectCollision(enemy.getBoundingBox());
    const enemyToPlayerCollision = enemy.detectCollision(player.getBoundingBox());

    if (playerToEnemyCollision) {
      player.repel(playerToEnemyCollision);
      enemy.hurt(player.getDamagePower());
    }
    if (enemyToPlayerCollision) {
      enemy.repel(enemyToPlayerCollision);
      player.hurt(enemy.getDamagePower());
    }

    uncollidedItems = items.filter(item => !item.isCollected());
    player.updatePosition(keyboard.getState());
    enemy.updatePosition(playerPos, uncollidedItemPos);

    const playerCollectItems = uncollidedItems.filter(item => player.detectCollision(item.getBoundingBox()));
    const enemyCollectItems = uncollidedItems.filter(item => enemy.detectCollision(item.getBoundingBox()));

    player.heal(playerCollectItems.reduce((prev, cur) => prev + cur.collect(), 0));
    enemy.heal(enemyCollectItems.reduce((prev, cur) => prev + cur.collect(), 0));
  };

  const _calculateCameraTranslation = (camera, playerPos, cw, ch) => {
    const playerX = playerPos.x + playerPos.width / 2;
    const playerY = playerPos.y + playerPos.height / 2;
    let buffer = Math.min(cw, ch) * .3;
    let [bT, bR, bB, bL] = [ch - buffer, cw - buffer, buffer, buffer].map(x => Math.round(x));

    if (playerX < bL - camera[0]) camera[0] -= playerX - (bL - camera[0]);
    if (playerX > bR - camera[0]) camera[0] -= playerX - (bR - camera[0]);
    if (playerY < bB - camera[1]) camera[1] -= playerY - (bB - camera[1]);
    if (playerY > bT - camera[1]) camera[1] -= playerY - (bT - camera[1]);

    return camera;
  };

  const _calculateSimulatioins = (() => {
    const fps = 60;
    const tick = 1000 / fps;
    let accumulator = 0;
    let simsNeeded = 0;

    return t => {
      // calculate simulataions needed
      accumulator += t;
      simsNeeded = Math.floor(accumulator / tick);
      accumulator -= simsNeeded * tick;
      return simsNeeded;
    };
  })();

  keyboard.start();

  masterLoop.start(frame);
};

(0, _domready2.default)(init);
},{"./app/tools":6,"./plugins/domready":7,"./app/loop":11,"./app/player":4,"./app/enemy":9,"./app/item":8,"./app/keyboard":5,"./app/background":10,"../img/ground.png":3,"./app/characters/ross":24}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent) {
  var ws = new WebSocket('ws://localhost:50136/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = () => {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,2])