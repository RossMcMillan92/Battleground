(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var detectCollision = function detectCollision(item1) {
    return function (item2) {
        var _item1 = _slicedToArray(item1, 4);

        var item1LeftEdge = _item1[0];
        var item1RightEdge = _item1[1];
        var item1TopEdge = _item1[2];
        var item1BottomEdge = _item1[3];

        var _item2 = _slicedToArray(item2, 4);

        var item2LeftEdge = _item2[0];
        var item2RightEdge = _item2[1];
        var item2TopEdge = _item2[2];
        var item2BottomEdge = _item2[3];

        var overlapsX = item1RightEdge > item2LeftEdge && item1LeftEdge < item2RightEdge;
        var overlapsY = item1BottomEdge > item2TopEdge && item1TopEdge < item2BottomEdge;

        var hasCollided = overlapsY && overlapsX;

        if (!hasCollided) return false;

        var dir = {};
        var axis = 0;

        var leftOverlap = Math.abs(item1RightEdge - item2LeftEdge);
        var rightOverlap = Math.abs(item1LeftEdge - item2RightEdge);
        var topOverlap = Math.abs(item1BottomEdge - item2TopEdge);
        var bottomOverlap = Math.abs(item1TopEdge - item2BottomEdge);

        dir.x = leftOverlap < rightOverlap ? -1 : 1, dir.y = topOverlap < bottomOverlap ? -1 : 1;

        axis = (dir.x < 0 ? leftOverlap : rightOverlap) < (dir.y < 0 ? topOverlap : bottomOverlap) ? 'x' : 'y';

        return {
            axis: axis,
            direction: dir[axis]
        };
    };
};

exports.detectCollision = detectCollision;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _healthJs = require('./health.js');

var _movable = require('./movable');

var Enemy = function Enemy(constraints) {
    var health = (0, _healthJs.Health)();

    var dimensions = {
        width: 80,
        height: 80
    };

    var pos = {
        x: constraints[0] / 4,
        y: constraints[1] / 4
    };
    var acceleration = {
        x: 0,
        y: 0
    };
    var velocityMap = {
        'default': 5,
        running: 7
    };
    var accelStep = .025;
    var decelStep = .01;

    var damagePower = 5;
    var isRepelling = false;

    var walkingMap = [{
        duration: 2000,
        direction: 'right'
    }, {
        duration: 2000,
        direction: 'left'
    }];
    var attractionThreshold = 500;

    var getInput = (0, _movable.getWalkCycle)(walkingMap);
    var velocity = velocityMap['default'];

    var updatePosition = function updatePosition(targetX, targetY) {
        var input = getInput();
        var newAcceleration = acceleration;
        var newPos = undefined;
        newAcceleration = (0, _movable.attractCalc)(newAcceleration, pos, { x: targetX, y: targetY }, accelStep, decelStep, attractionThreshold);
        newAcceleration = (0, _movable.calculateCollisionAcceleration)(newAcceleration, getPos(), constraints, isRepelling);
        newPos = (0, _movable.calculatePos)(pos, newAcceleration, velocity);

        // MUTATIONS
        pos = newPos;
        acceleration = newAcceleration;
        isRepelling = false;
    };

    var attract = function attract() {
        var _attractCalc = (0, _movable.attractCalc)(pos.x, pos.y, targetX, targetY);

        var _attractCalc2 = _slicedToArray(_attractCalc, 2);

        var x = _attractCalc2[0];
        var y = _attractCalc2[1];

        pos = { x: x, y: y };
    };

    var repel = function repel(data) {
        isRepelling = data;
    };

    var getDamagePower = function getDamagePower() {
        return damagePower;
    };

    var getBoundingBox = function getBoundingBox() {
        return [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height];
    };

    var getPos = function getPos() {
        return Object.assign({}, pos, dimensions);
    };

    var render = function render(ctx) {
        renderSelf(ctx);
        health.renderHealthBar(ctx, getPos());
    };

    var renderSelf = function renderSelf(ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#d22';
        ctx.rect(pos.x, pos.y, dimensions.width, dimensions.height);
        ctx.fill();
    };

    var output = {
        attract: attract,
        updatePosition: updatePosition,
        getBoundingBox: getBoundingBox,
        getDamagePower: getDamagePower,
        getPos: getPos,
        repel: repel,
        render: render
    };

    return Object.assign({}, output, health);
};

exports.Enemy = Enemy;

},{"./health.js":3,"./movable":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var Health = function Health() {
    var healthBarHeight = 10;
    var healthBarStrokeWidth = 2;
    var health = 100;

    var updateHealth = function updateHealth(amount) {
        health = Math.max(0, Math.min(health + amount, 100)); // Health min 0 max 100
    };

    var renderHealthBar = function renderHealthBar(ctx, playerPos) {
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

    var getFillColor = function getFillColor(health) {
        if (health > 67) return '#0f0';
        if (health > 33) return '#FF8300';
        return '#f00';
    };

    return {
        getHealth: function getHealth() {
            return health;
        },
        hurt: function hurt(amount) {
            return updateHealth(-amount);
        },
        heal: function heal(amount) {
            return updateHealth(amount);
        },
        renderHealthBar: renderHealthBar
    };
};

exports.Health = Health;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var item = function item(constraints) {
    var width = 30;
    var height = 30;

    var pos = {
        x: Math.round(Math.random() * constraints[0]),
        y: Math.round(Math.random() * constraints[1])
    };
    var acceleration = {
        x: 0,
        y: 0
    };
    var velocity = {
        x: 10,
        y: 10
    };
    var accelStep = .025;
    var decelStep = .05;

    var collected = false;
    var healingPower = 10;

    var update = function update() {};

    var collect = function collect() {
        if (collected) return 0;
        collected = true;
        return healingPower;
    };

    var getBoundingBox = function getBoundingBox() {
        return [pos.x, pos.x + width, pos.y, pos.y + height];
    };

    var render = function render(ctx) {
        if (collected) return;
        ctx.beginPath();
        ctx.fillStyle = '#493';
        ctx.rect(pos.x, pos.y, width, height);
        ctx.fill();
    };

    return {
        update: update,
        collect: collect,
        getBoundingBox: getBoundingBox,
        render: render
    };
};

exports["default"] = item;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
function Keyboard() {
	var state = {
		left: false,
		right: false,
		up: false,
		down: false,
		shift: false,
		space: false
	};

	var bindings = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		16: 'shift',
		32: 'space'
	};

	var start = function start() {
		document.addEventListener('keydown', _onKeyDown, false);
		document.addEventListener('keyup', _onKeyUp, false);
	};

	var stop = function stop() {
		document.removeEventListener('keydown', _onKeyDown, false);
		document.removeEventListener('keyup', _onKeyUp, false);
	};

	var getState = function getState() {
		return state;
	};

	var _onKeyDown = function _onKeyDown(e) {
		return _onKey(e, true);
	};

	var _onKeyUp = function _onKeyUp(e) {
		return _onKey(e, false);
	};

	var _onKey = function _onKey(e, value) {
		var binding = bindings[e.keyCode];
		if (!binding) return;

		state[binding] = value;

		e.preventDefault && e.preventDefault();
		e.stopPropagation && e.stopPropagation();
	};

	return {
		start: start,
		stop: stop,
		getState: getState
	};
}

exports['default'] = Keyboard;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Loop = function Loop() {
	var lastTime = 0;
	var stopped = false;
	var callback = undefined;

	var start = function start(fn) {
		stopped = false;
		if (typeof fn !== "undefined") callback = fn;

		requestAnimationFrame(_frame);
	};

	var stop = function stop() {
		stopped = true;
	};

	var _frame = function _frame(time) {
		var delta = time - lastTime;
		lastTime = time;

		callback(delta);
		if (!stopped) requestAnimationFrame(_frame);
	};

	return {
		start: start,
		stop: stop
	};
};

exports["default"] = Loop;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var attractCalc = function attractCalc(curAccel, pos, target, accelStep, decelStep) {
    var threshold = arguments.length <= 5 || arguments[5] === undefined ? false : arguments[5];
    var ax = curAccel.x;
    var ay = curAccel.y;

    var _calculateDistance = calculateDistance(pos, target);

    var _calculateDistance2 = _slicedToArray(_calculateDistance, 3);

    var dx = _calculateDistance2[0];
    var dy = _calculateDistance2[1];
    var distance = _calculateDistance2[2];

    if (distance !== false && Math.abs(distance) < threshold) {
        calculateAcceleration(curAccel, accelStep, dx < 0 ? -1 : 1);
        ax = calculateAcceleration(ax, accelStep, dx < 0 ? -1 : 1);
        ay = calculateAcceleration(ay, accelStep, dy < 0 ? -1 : 1);

        return {
            x: ax,
            y: ay
        };
    }

    return calculateInputDeceleration(curAccel, decelStep);
};

var calculateDistance = function calculateDistance(pos, target) {
    var dx = target.x - pos.x;
    var dy = target.y - pos.y;
    return [dx, dy, Math.sqrt(dx * dx + dy * dy)];
};

var calculateVelocity = function calculateVelocity(velocityMap, input) {
    var velocityType = 'default';
    if (input.shift) velocityType = 'running';

    return velocityMap[velocityType];
};

var calculateInputAcceleration = function calculateInputAcceleration(curAccel, accelStep, decelStep, input) {
    var ax = curAccel.x;
    var ay = curAccel.y;

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

var calculateInputDeceleration = function calculateInputDeceleration(curAccel, decelStep) {
    var input = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
    var ax = curAccel.x;
    var ay = curAccel.y;

    // Deceleration
    if (ax !== 0 && !input.left && !input.right) ax = calculateDeceleration(ax, decelStep);
    if (ay !== 0 && !input.up && !input.down) ay = calculateDeceleration(ay, decelStep);

    return {
        x: ax,
        y: ay
    };
};

var calculateCollisionAcceleration = function calculateCollisionAcceleration(curAccel, pos, constraints, isHurt) {
    var x = pos.x;
    var y = pos.y;
    var ax = curAccel.x;
    var ay = curAccel.y;

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

var calculateAcceleration = function calculateAcceleration(curAccel, accelStep) {
    var dir = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

    var result = curAccel + accelStep * dir;
    return dir === 1 ? Math.min(1, result) : Math.max(-1, result);
};

var calculateDeceleration = function calculateDeceleration(curAccel, decelStep) {
    return curAccel < decelStep && curAccel > -decelStep ? 0 : calculateAcceleration(curAccel, decelStep, curAccel > 0 ? -1 : 1);
};

var calculatePos = function calculatePos(pos, acceleration, velocity) {
    return {
        x: Math.round(pos.x + velocity * acceleration.x),
        y: Math.round(pos.y + velocity * acceleration.y)
    };
};

var getWalkCycle = function getWalkCycle(walkCycle) {
    var lastUpdateTime = performance.now();
    var index = 0;

    return function () {
        var data = {};
        var currentSection = walkCycle[index];
        var currentDirection = currentSection.direction;
        var currentDuration = currentSection.duration;
        var currentTime = performance.now();

        if (currentTime > lastUpdateTime + currentDuration) {
            index = index < walkCycle.length - 1 ? index + 1 : 0;
            lastUpdateTime = currentTime;
        }

        data[currentDirection] = true;
        return data;
    };
};

exports.attractCalc = attractCalc;
exports.calculateVelocity = calculateVelocity;
exports.calculateInputAcceleration = calculateInputAcceleration;
exports.calculateInputDeceleration = calculateInputDeceleration;
exports.calculateCollisionAcceleration = calculateCollisionAcceleration;
exports.calculateAcceleration = calculateAcceleration;
exports.calculateDeceleration = calculateDeceleration;
exports.calculatePos = calculatePos;
exports.getWalkCycle = getWalkCycle;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _healthJs = require('./health.js');

var _movable = require('./movable');

var Player = function Player(constraints) {
    var health = (0, _healthJs.Health)();

    var dimensions = {
        width: 80,
        height: 80
    };

    var pos = {
        x: constraints[0] / 2,
        y: constraints[1] / 2
    };
    var acceleration = {
        x: 0,
        y: 0
    };
    var velocityMap = {
        'default': 5,
        running: 7
    };
    var accelStep = .025;
    var decelStep = .05;

    var damagePower = 25;
    var isRepelling = false;

    var updatePosition = function updatePosition(input) {
        var velocity = (0, _movable.calculateVelocity)(velocityMap, input);
        var inputAcceleration = (0, _movable.calculateInputAcceleration)(acceleration, accelStep, decelStep, input);
        var inputDeceleration = (0, _movable.calculateInputDeceleration)(inputAcceleration, decelStep, input);
        var collisionAcceleration = (0, _movable.calculateCollisionAcceleration)(inputDeceleration, getPos(), constraints, isRepelling);
        var newPos = (0, _movable.calculatePos)(pos, collisionAcceleration, velocity);

        // MUTATIONS
        pos = newPos;
        acceleration = collisionAcceleration;
        isRepelling = false;
    };

    var repel = function repel(data) {
        isRepelling = data;
    };

    var getDamagePower = function getDamagePower() {
        return damagePower;
    };

    var render = function render(ctx) {
        renderSelf(ctx);
        health.renderHealthBar(ctx, getPos());
    };

    var renderSelf = function renderSelf(ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#222';
        ctx.rect(pos.x, pos.y, dimensions.width, dimensions.height);
        ctx.fill();
    };

    var getBoundingBox = function getBoundingBox() {
        return [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height];
    };

    var getPos = function getPos() {
        return Object.assign({}, pos, dimensions);
    };

    var output = {
        updatePosition: updatePosition,
        getBoundingBox: getBoundingBox,
        getDamagePower: getDamagePower,
        getPos: getPos,
        repel: repel,
        render: render
    };

    return Object.assign({}, output, health);
};

exports.Player = Player;

},{"./health.js":3,"./movable":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var repeat = function repeat(simsNeeded, fn) {
	for (var i = simsNeeded - 1, x = 0; i >= 0; i--) {
		fn(simsNeeded, x);
		x++;
	};
};

var compose = function compose() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return function (x) {
		return args.reduce(function (prev, cur) {
			return cur.call(cur, prev);
		}, x);
	};
};

exports.repeat = repeat;
exports.compose = compose;

},{}],10:[function(require,module,exports){
(function (process,global){
/*
//  Polyfills
=====================================*/
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _appTools = require('./app/tools');

var _pluginsDomready = require('./plugins/domready');

var _pluginsDomready2 = _interopRequireDefault(_pluginsDomready);

var _appLoop = require('./app/loop');

var _appLoop2 = _interopRequireDefault(_appLoop);

var _appPlayer = require('./app/player');

var _appEnemy = require('./app/enemy');

var _appItem = require('./app/item');

var _appItem2 = _interopRequireDefault(_appItem);

var _appKeyboard = require('./app/keyboard');

var _appKeyboard2 = _interopRequireDefault(_appKeyboard);

var _appCollisions = require('./app/collisions');

if (!window.console) console = { log: function log() {} };

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
;if ("document" in self && !("classList" in document.createElement("_"))) {
	(function (j) {
		"use strict";if (!("Element" in j)) {
			return;
		}var a = "classList",
		    f = "prototype",
		    m = j.Element[f],
		    b = Object,
		    k = String[f].trim || function () {
			return this.replace(/^\s+|\s+$/g, "");
		},
		    c = Array[f].indexOf || function (q) {
			var p = 0,
			    o = this.length;for (; p < o; p++) {
				if (p in this && this[p] === q) {
					return p;
				}
			}return -1;
		},
		    n = function n(o, p) {
			this.name = o;this.code = DOMException[o];this.message = p;
		},
		    g = function g(p, o) {
			if (o === "") {
				throw new n("SYNTAX_ERR", "An invalid or illegal string was specified");
			}if (/\s/.test(o)) {
				throw new n("INVALID_CHARACTER_ERR", "String contains an invalid character");
			}return c.call(p, o);
		},
		    d = function d(s) {
			var r = k.call(s.getAttribute("class") || ""),
			    q = r ? r.split(/\s+/) : [],
			    p = 0,
			    o = q.length;for (; p < o; p++) {
				this.push(q[p]);
			}this._updateClassName = function () {
				s.setAttribute("class", this.toString());
			};
		},
		    e = d[f] = [],
		    i = function i() {
			return new d(this);
		};n[f] = Error[f];e.item = function (o) {
			return this[o] || null;
		};e.contains = function (o) {
			o += "";return g(this, o) !== -1;
		};e.add = function () {
			var s = arguments,
			    r = 0,
			    p = s.length,
			    q,
			    o = false;do {
				q = s[r] + "";if (g(this, q) === -1) {
					this.push(q);o = true;
				}
			} while (++r < p);if (o) {
				this._updateClassName();
			}
		};e.remove = function () {
			var t = arguments,
			    s = 0,
			    p = t.length,
			    r,
			    o = false;do {
				r = t[s] + "";var q = g(this, r);if (q !== -1) {
					this.splice(q, 1);o = true;
				}
			} while (++s < p);if (o) {
				this._updateClassName();
			}
		};e.toggle = function (p, q) {
			p += "";var o = this.contains(p),
			    r = o ? q !== true && "remove" : q !== false && "add";if (r) {
				this[r](p);
			}return !o;
		};e.toString = function () {
			return this.join(" ");
		};if (b.defineProperty) {
			var l = { get: i, enumerable: true, configurable: true };try {
				b.defineProperty(m, a, l);
			} catch (h) {
				if (h.number === -2146823252) {
					l.enumerable = false;b.defineProperty(m, a, l);
				}
			}
		} else {
			if (b[f].__defineGetter__) {
				m.__defineGetter__(a, i);
			}
		}
	})(self);
};

// Adapted from https://gist.github.com/paulirish/1579671 which derived from
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon

// MIT license

(function () {
	'use strict';

	var vendors = ['webkit', 'moz'];
	for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
		var vp = vendors[i];
		window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
	}
	if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
	 || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
		var lastTime = 0;
		window.requestAnimationFrame = function (callback) {
			var now = Date.now();
			var nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function () {
				callback(lastTime = nextTime);
			}, nextTime - now);
		};
		window.cancelAnimationFrame = clearTimeout;
	}
})();

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.0.2
 */

(function () {
	"use strict";function lib$es6$promise$utils$$objectOrFunction(x) {
		return typeof x === "function" || typeof x === "object" && x !== null;
	}function lib$es6$promise$utils$$isFunction(x) {
		return typeof x === "function";
	}function lib$es6$promise$utils$$isMaybeThenable(x) {
		return typeof x === "object" && x !== null;
	}var lib$es6$promise$utils$$_isArray;if (!Array.isArray) {
		lib$es6$promise$utils$$_isArray = function (x) {
			return Object.prototype.toString.call(x) === "[object Array]";
		};
	} else {
		lib$es6$promise$utils$$_isArray = Array.isArray;
	}var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;var lib$es6$promise$asap$$len = 0;var lib$es6$promise$asap$$toString = ({}).toString;var lib$es6$promise$asap$$vertxNext;var lib$es6$promise$asap$$customSchedulerFn;var lib$es6$promise$asap$$asap = function asap(callback, arg) {
		lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;lib$es6$promise$asap$$len += 2;if (lib$es6$promise$asap$$len === 2) {
			if (lib$es6$promise$asap$$customSchedulerFn) {
				lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
			} else {
				lib$es6$promise$asap$$scheduleFlush();
			}
		}
	};function lib$es6$promise$asap$$setScheduler(scheduleFn) {
		lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	}function lib$es6$promise$asap$$setAsap(asapFn) {
		lib$es6$promise$asap$$asap = asapFn;
	}var lib$es6$promise$asap$$browserWindow = typeof window !== "undefined" ? window : undefined;var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;var lib$es6$promise$asap$$isNode = typeof process !== "undefined" && ({}).toString.call(process) === "[object process]";var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";function lib$es6$promise$asap$$useNextTick() {
		return function () {
			process.nextTick(lib$es6$promise$asap$$flush);
		};
	}function lib$es6$promise$asap$$useVertxTimer() {
		return function () {
			lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
		};
	}function lib$es6$promise$asap$$useMutationObserver() {
		var iterations = 0;var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);var node = document.createTextNode("");observer.observe(node, { characterData: true });return function () {
			node.data = iterations = ++iterations % 2;
		};
	}function lib$es6$promise$asap$$useMessageChannel() {
		var channel = new MessageChannel();channel.port1.onmessage = lib$es6$promise$asap$$flush;return function () {
			channel.port2.postMessage(0);
		};
	}function lib$es6$promise$asap$$useSetTimeout() {
		return function () {
			setTimeout(lib$es6$promise$asap$$flush, 1);
		};
	}var lib$es6$promise$asap$$queue = new Array(1e3);function lib$es6$promise$asap$$flush() {
		for (var i = 0; i < lib$es6$promise$asap$$len; i += 2) {
			var callback = lib$es6$promise$asap$$queue[i];var arg = lib$es6$promise$asap$$queue[i + 1];callback(arg);lib$es6$promise$asap$$queue[i] = undefined;lib$es6$promise$asap$$queue[i + 1] = undefined;
		}lib$es6$promise$asap$$len = 0;
	}function lib$es6$promise$asap$$attemptVertx() {
		try {
			var r = require;var vertx = r("vertx");lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;return lib$es6$promise$asap$$useVertxTimer();
		} catch (e) {
			return lib$es6$promise$asap$$useSetTimeout();
		}
	}var lib$es6$promise$asap$$scheduleFlush;if (lib$es6$promise$asap$$isNode) {
		lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	} else if (lib$es6$promise$asap$$BrowserMutationObserver) {
		lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	} else if (lib$es6$promise$asap$$isWorker) {
		lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	} else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === "function") {
		lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	} else {
		lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	}function lib$es6$promise$$internal$$noop() {}var lib$es6$promise$$internal$$PENDING = void 0;var lib$es6$promise$$internal$$FULFILLED = 1;var lib$es6$promise$$internal$$REJECTED = 2;var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();function lib$es6$promise$$internal$$selfFulfillment() {
		return new TypeError("You cannot resolve a promise with itself");
	}function lib$es6$promise$$internal$$cannotReturnOwn() {
		return new TypeError("A promises callback cannot return that same promise.");
	}function lib$es6$promise$$internal$$getThen(promise) {
		try {
			return promise.then;
		} catch (error) {
			lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;return lib$es6$promise$$internal$$GET_THEN_ERROR;
		}
	}function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
		try {
			then.call(value, fulfillmentHandler, rejectionHandler);
		} catch (e) {
			return e;
		}
	}function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
		lib$es6$promise$asap$$asap(function (promise) {
			var sealed = false;var error = lib$es6$promise$$internal$$tryThen(then, thenable, function (value) {
				if (sealed) {
					return;
				}sealed = true;if (thenable !== value) {
					lib$es6$promise$$internal$$resolve(promise, value);
				} else {
					lib$es6$promise$$internal$$fulfill(promise, value);
				}
			}, function (reason) {
				if (sealed) {
					return;
				}sealed = true;lib$es6$promise$$internal$$reject(promise, reason);
			}, "Settle: " + (promise._label || " unknown promise"));if (!sealed && error) {
				sealed = true;lib$es6$promise$$internal$$reject(promise, error);
			}
		}, promise);
	}function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
		if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
			lib$es6$promise$$internal$$fulfill(promise, thenable._result);
		} else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
			lib$es6$promise$$internal$$reject(promise, thenable._result);
		} else {
			lib$es6$promise$$internal$$subscribe(thenable, undefined, function (value) {
				lib$es6$promise$$internal$$resolve(promise, value);
			}, function (reason) {
				lib$es6$promise$$internal$$reject(promise, reason);
			});
		}
	}function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
		if (maybeThenable.constructor === promise.constructor) {
			lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
		} else {
			var then = lib$es6$promise$$internal$$getThen(maybeThenable);if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
				lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
			} else if (then === undefined) {
				lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
			} else if (lib$es6$promise$utils$$isFunction(then)) {
				lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
			} else {
				lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
			}
		}
	}function lib$es6$promise$$internal$$resolve(promise, value) {
		if (promise === value) {
			lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
		} else if (lib$es6$promise$utils$$objectOrFunction(value)) {
			lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
		} else {
			lib$es6$promise$$internal$$fulfill(promise, value);
		}
	}function lib$es6$promise$$internal$$publishRejection(promise) {
		if (promise._onerror) {
			promise._onerror(promise._result);
		}lib$es6$promise$$internal$$publish(promise);
	}function lib$es6$promise$$internal$$fulfill(promise, value) {
		if (promise._state !== lib$es6$promise$$internal$$PENDING) {
			return;
		}promise._result = value;promise._state = lib$es6$promise$$internal$$FULFILLED;if (promise._subscribers.length !== 0) {
			lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
		}
	}function lib$es6$promise$$internal$$reject(promise, reason) {
		if (promise._state !== lib$es6$promise$$internal$$PENDING) {
			return;
		}promise._state = lib$es6$promise$$internal$$REJECTED;promise._result = reason;lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	}function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
		var subscribers = parent._subscribers;var length = subscribers.length;parent._onerror = null;subscribers[length] = child;subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;subscribers[length + lib$es6$promise$$internal$$REJECTED] = onRejection;if (length === 0 && parent._state) {
			lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
		}
	}function lib$es6$promise$$internal$$publish(promise) {
		var subscribers = promise._subscribers;var settled = promise._state;if (subscribers.length === 0) {
			return;
		}var child,
		    callback,
		    detail = promise._result;for (var i = 0; i < subscribers.length; i += 3) {
			child = subscribers[i];callback = subscribers[i + settled];if (child) {
				lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
			} else {
				callback(detail);
			}
		}promise._subscribers.length = 0;
	}function lib$es6$promise$$internal$$ErrorObject() {
		this.error = null;
	}var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();function lib$es6$promise$$internal$$tryCatch(callback, detail) {
		try {
			return callback(detail);
		} catch (e) {
			lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
		}
	}function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
		var hasCallback = lib$es6$promise$utils$$isFunction(callback),
		    value,
		    error,
		    succeeded,
		    failed;if (hasCallback) {
			value = lib$es6$promise$$internal$$tryCatch(callback, detail);if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
				failed = true;error = value.error;value = null;
			} else {
				succeeded = true;
			}if (promise === value) {
				lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());return;
			}
		} else {
			value = detail;succeeded = true;
		}if (promise._state !== lib$es6$promise$$internal$$PENDING) {} else if (hasCallback && succeeded) {
			lib$es6$promise$$internal$$resolve(promise, value);
		} else if (failed) {
			lib$es6$promise$$internal$$reject(promise, error);
		} else if (settled === lib$es6$promise$$internal$$FULFILLED) {
			lib$es6$promise$$internal$$fulfill(promise, value);
		} else if (settled === lib$es6$promise$$internal$$REJECTED) {
			lib$es6$promise$$internal$$reject(promise, value);
		}
	}function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
		try {
			resolver(function resolvePromise(value) {
				lib$es6$promise$$internal$$resolve(promise, value);
			}, function rejectPromise(reason) {
				lib$es6$promise$$internal$$reject(promise, reason);
			});
		} catch (e) {
			lib$es6$promise$$internal$$reject(promise, e);
		}
	}function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
		var enumerator = this;enumerator._instanceConstructor = Constructor;enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);if (enumerator._validateInput(input)) {
			enumerator._input = input;enumerator.length = input.length;enumerator._remaining = input.length;enumerator._init();if (enumerator.length === 0) {
				lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
			} else {
				enumerator.length = enumerator.length || 0;enumerator._enumerate();if (enumerator._remaining === 0) {
					lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
				}
			}
		} else {
			lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
		}
	}lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function (input) {
		return lib$es6$promise$utils$$isArray(input);
	};lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function () {
		return new Error("Array Methods must be provided an Array");
	};lib$es6$promise$enumerator$$Enumerator.prototype._init = function () {
		this._result = new Array(this.length);
	};var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function () {
		var enumerator = this;var length = enumerator.length;var promise = enumerator.promise;var input = enumerator._input;for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
			enumerator._eachEntry(input[i], i);
		}
	};lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function (entry, i) {
		var enumerator = this;var c = enumerator._instanceConstructor;if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
			if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
				entry._onerror = null;enumerator._settledAt(entry._state, i, entry._result);
			} else {
				enumerator._willSettleAt(c.resolve(entry), i);
			}
		} else {
			enumerator._remaining--;enumerator._result[i] = entry;
		}
	};lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function (state, i, value) {
		var enumerator = this;var promise = enumerator.promise;if (promise._state === lib$es6$promise$$internal$$PENDING) {
			enumerator._remaining--;if (state === lib$es6$promise$$internal$$REJECTED) {
				lib$es6$promise$$internal$$reject(promise, value);
			} else {
				enumerator._result[i] = value;
			}
		}if (enumerator._remaining === 0) {
			lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
		}
	};lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function (promise, i) {
		var enumerator = this;lib$es6$promise$$internal$$subscribe(promise, undefined, function (value) {
			enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
		}, function (reason) {
			enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
		});
	};function lib$es6$promise$promise$all$$all(entries) {
		return new lib$es6$promise$enumerator$$default(this, entries).promise;
	}var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;function lib$es6$promise$promise$race$$race(entries) {
		var Constructor = this;var promise = new Constructor(lib$es6$promise$$internal$$noop);if (!lib$es6$promise$utils$$isArray(entries)) {
			lib$es6$promise$$internal$$reject(promise, new TypeError("You must pass an array to race."));return promise;
		}var length = entries.length;function onFulfillment(value) {
			lib$es6$promise$$internal$$resolve(promise, value);
		}function onRejection(reason) {
			lib$es6$promise$$internal$$reject(promise, reason);
		}for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
			lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
		}return promise;
	}var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;function lib$es6$promise$promise$resolve$$resolve(object) {
		var Constructor = this;if (object && typeof object === "object" && object.constructor === Constructor) {
			return object;
		}var promise = new Constructor(lib$es6$promise$$internal$$noop);lib$es6$promise$$internal$$resolve(promise, object);return promise;
	}var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;function lib$es6$promise$promise$reject$$reject(reason) {
		var Constructor = this;var promise = new Constructor(lib$es6$promise$$internal$$noop);lib$es6$promise$$internal$$reject(promise, reason);return promise;
	}var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;var lib$es6$promise$promise$$counter = 0;function lib$es6$promise$promise$$needsResolver() {
		throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
	}function lib$es6$promise$promise$$needsNew() {
		throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;function lib$es6$promise$promise$$Promise(resolver) {
		this._id = lib$es6$promise$promise$$counter++;this._state = undefined;this._result = undefined;this._subscribers = [];if (lib$es6$promise$$internal$$noop !== resolver) {
			if (!lib$es6$promise$utils$$isFunction(resolver)) {
				lib$es6$promise$promise$$needsResolver();
			}if (!(this instanceof lib$es6$promise$promise$$Promise)) {
				lib$es6$promise$promise$$needsNew();
			}lib$es6$promise$$internal$$initializePromise(this, resolver);
		}
	}lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;lib$es6$promise$promise$$Promise.prototype = { constructor: lib$es6$promise$promise$$Promise, then: function then(onFulfillment, onRejection) {
			var parent = this;var state = parent._state;if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
				return this;
			}var child = new this.constructor(lib$es6$promise$$internal$$noop);var result = parent._result;if (state) {
				var callback = arguments[state - 1];lib$es6$promise$asap$$asap(function () {
					lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
				});
			} else {
				lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
			}return child;
		}, "catch": function _catch(onRejection) {
			return this.then(null, onRejection);
		} };function lib$es6$promise$polyfill$$polyfill() {
		var local;if (typeof global !== "undefined") {
			local = global;
		} else if (typeof self !== "undefined") {
			local = self;
		} else {
			try {
				local = Function("return this")();
			} catch (e) {
				throw new Error("polyfill failed because global object is unavailable in this environment");
			}
		}var P = local.Promise;if (P && Object.prototype.toString.call(P.resolve()) === "[object Promise]" && !P.cast) {
			return;
		}local.Promise = lib$es6$promise$promise$$default;
	}var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;var lib$es6$promise$umd$$ES6Promise = { Promise: lib$es6$promise$promise$$default, polyfill: lib$es6$promise$polyfill$$default };if (typeof define === "function" && define["amd"]) {
		define(function () {
			return lib$es6$promise$umd$$ES6Promise;
		});
	} else if (typeof module !== "undefined" && module["exports"]) {
		module["exports"] = lib$es6$promise$umd$$ES6Promise;
	} else if (typeof this !== "undefined") {
		this["ES6Promise"] = lib$es6$promise$umd$$ES6Promise;
	}lib$es6$promise$polyfill$$default();
}).call(undefined);
"use strict";

;(function () {
	var keyboard = (0, _appKeyboard2["default"])();
	var masterLoop = (0, _appLoop2["default"])();
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var cw = canvas.width = canvas.offsetWidth;
	var ch = canvas.height = canvas.offsetHeight;
	var player = (0, _appPlayer.Player)([cw, ch]);
	var enemy = (0, _appEnemy.Enemy)([cw, ch]);
	var items = Array.from(Array(20)).map(function (item) {
		return (0, _appItem2["default"])([cw, ch]);
	});
	var uncollidedItems = items;
	var camera = [0, 0];

	// This will run on document ready
	var init = function init() {

		var frame = function frame(t) {
			var simsNeeded = _calculateSimulatioins(t);
			var camera = undefined;
			var simulation = _simulate(player, enemy);

			simulation();

			ctx.save();
			ctx.clearRect(0, 0, cw, ch);
			camera = _calculateCameraTranslation([0, 0], player.getPos(), cw, ch);
			ctx.translate.apply(ctx, _toConsumableArray(camera));
			uncollidedItems.forEach(function (item) {
				return item.render(ctx);
			});
			player.render(ctx);
			enemy.render(ctx);
			ctx.restore();

			items = uncollidedItems;
		};

		// UNPURE AS FUCK
		var _simulate = function _simulate(player, enemy) {
			return function () {
				var playerPos = player.getPos();
				var collectedItemAmount = 0;
				var detectPlayerCollision = (0, _appCollisions.detectCollision)(player.getBoundingBox());
				var detectEnemyCollision = (0, _appCollisions.detectCollision)(enemy.getBoundingBox());

				var playerToEnemyCollision = detectPlayerCollision(enemy.getBoundingBox());
				var enemyToPlayerCollision = detectEnemyCollision(player.getBoundingBox());

				if (playerToEnemyCollision) {
					player.repel(playerToEnemyCollision, enemy.getDamagePower());
					enemy.hurt(player.getDamagePower());
				}
				if (enemyToPlayerCollision) {
					enemy.repel(enemyToPlayerCollision, player.getDamagePower());
					player.hurt(enemy.getDamagePower());
				}

				console.log(player.getHealth());

				if (player.getHealth() > 0) player.updatePosition(keyboard.getState());
				if (enemy.getHealth() > 0) enemy.updatePosition(playerPos.x, playerPos.y);

				// only need to render uncollided items
				var playerCollectItems = items.filter(function (item) {
					return detectPlayerCollision(item.getBoundingBox());
				});
				var enemyCollectItems = items.filter(function (item) {
					return detectEnemyCollision(item.getBoundingBox());
				});

				player.heal(playerCollectItems.reduce(function (prev, cur) {
					return prev + cur.collect();
				}, 0));
				enemy.heal(enemyCollectItems.reduce(function (prev, cur) {
					return prev + cur.collect();
				}, 0));
			};
		};

		var _calculateCameraTranslation = function _calculateCameraTranslation(camera, playerPos, cw, ch) {
			var playerX = playerPos.x + playerPos.width / 2;
			var playerY = playerPos.y + playerPos.height / 2;
			var buffer = Math.min(cw, ch) * .2;

			var _map = [ch - buffer, cw - buffer, buffer, buffer].map(function (x) {
				return Math.round(x);
			});

			var _map2 = _slicedToArray(_map, 4);

			var bT = _map2[0];
			var bR = _map2[1];
			var bB = _map2[2];
			var bL = _map2[3];

			if (playerX < bL - camera[0]) camera[0] -= playerX - (bL - camera[0]);
			if (playerX > bR - camera[0]) camera[0] -= playerX - (bR - camera[0]);
			if (playerY < bB - camera[1]) camera[1] -= playerY - (bB - camera[1]);
			if (playerY > bT - camera[1]) camera[1] -= playerY - (bT - camera[1]);

			return camera;
		};

		var _calculateSimulatioins = (function () {
			var fps = 60;
			var tick = 1000 / fps;
			var accumulator = 0;
			var simsNeeded = 0;

			return function (t) {
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

	(0, _pluginsDomready2["default"])(init);
})();

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./app/collisions":1,"./app/enemy":2,"./app/item":4,"./app/keyboard":5,"./app/loop":6,"./app/player":8,"./app/tools":9,"./plugins/domready":11,"ngpmcQ":12}],11:[function(require,module,exports){
/*! * domready (c) Dustin Diaz 2012 - License MIT */
"use strict";

!(function (e, t) {
  typeof module != "undefined" ? module.exports = t() : typeof define == "function" && typeof define.amd == "object" ? define(t) : this[e] = t();
})("domready", function (e) {
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
    self != top ? h ? n() : t.push(n) : (function () {
      try {
        s.doScroll("left");
      } catch (t) {
        return setTimeout(function () {
          e(n);
        }, 50);
      }n();
    })();
  } : function (e) {
    h ? e() : t.push(e);
  };
});

},{}],12:[function(require,module,exports){
// shim for using process in browser

'use strict';

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
    var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;

    if (canSetImmediate) {
        return function (f) {
            return window.setImmediate(f);
        };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[10])