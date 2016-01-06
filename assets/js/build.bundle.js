(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
				value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var Background = function Background(url) {

				var image = new Image();

				var hasLoaded = false;
				image.onload = function () {
								return hasLoaded = true;
				};
				image.src = url;

				var render = function render(ctx, constraints, camera) {
								if (!hasLoaded) return;

								var _constraints = _slicedToArray(constraints, 2);

								var width = _constraints[0];
								var height = _constraints[1];

								var pattern = ctx.createPattern(image, 'repeat');

								ctx.rect(0, 0, width, height);
								ctx.fillStyle = pattern;
								ctx.fill();
				};

				return {
								render: render
				};
};

exports['default'] = Background;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _healthJs = require('./health.js');

var _collisions = require('./collisions');

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

    var damagePower = 25;
    var isRepelling = false;

    var walkingMap = [{
        duration: 2000,
        direction: 'right'
    }, {
        duration: 2000,
        direction: 'left'
    }];
    var attackThreshold = 500;

    var getInput = (0, _movable.getWalkCycle)(walkingMap);
    var velocity = velocityMap['default'];

    var updatePosition = function updatePosition(target, nearestItem) {
        var input = getInput();
        var isAlive = health.getHealth() > 0;
        var isDying = isAlive && health.getHealth() < 50;
        var newAcceleration = acceleration;
        var newPos = undefined;

        // attraction

        var _calculateDistance = (0, _movable.calculateDistance)(pos, isDying && nearestItem ? nearestItem : target);

        var _calculateDistance2 = _slicedToArray(_calculateDistance, 3);

        var dx = _calculateDistance2[0];
        var dy = _calculateDistance2[1];
        var distance = _calculateDistance2[2];

        var isAttacking = isAlive && distance !== false && Math.abs(distance) < attackThreshold;
        if (isAttacking || isDying && nearestItem) {
            newAcceleration = (0, _movable.attractCalc)(newAcceleration, accelStep, dx, dy);
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

    var detectCollision = function detectCollision(item) {
        return (0, _collisions.detectCollision)(getBoundingBox())(item);
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
        detectCollision: detectCollision,
        getPos: getPos,
        repel: repel,
        render: render
    };

    return Object.assign({}, output, health);
};

exports.Enemy = Enemy;

},{"./collisions":2,"./health.js":4,"./movable":8}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var item = function item(constraints) {
    var dimensions = {
        width: 30,
        height: 30
    };

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

    var isCollected = function isCollected() {
        return collected;
    };

    var getBoundingBox = function getBoundingBox() {
        return [pos.x, pos.x + dimensions.width, pos.y, pos.y + dimensions.height];
    };

    var getPos = function getPos() {
        return Object.assign({}, pos, dimensions);
    };

    var render = function render(ctx) {
        if (collected) return;
        ctx.beginPath();
        ctx.fillStyle = '#493';
        ctx.rect(pos.x, pos.y, dimensions.width, dimensions.height);
        ctx.fill();
    };

    return {
        update: update,
        collect: collect,
        isCollected: isCollected,
        getPos: getPos,
        getBoundingBox: getBoundingBox,
        render: render
    };
};

exports["default"] = item;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var attractCalc = function attractCalc(curAccerl, accelStep, dx, dy) {
    var ax = curAccerl.x;
    var ay = curAccerl.y;

    ax = calculateAcceleration(ax, accelStep, dx < 0 ? -1 : 1);
    ay = calculateAcceleration(ay, accelStep, dy < 0 ? -1 : 1);

    return {
        x: ax,
        y: ay
    };
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
exports.calculateDistance = calculateDistance;
exports.calculateVelocity = calculateVelocity;
exports.calculateInputAcceleration = calculateInputAcceleration;
exports.calculateInputDeceleration = calculateInputDeceleration;
exports.calculateCollisionAcceleration = calculateCollisionAcceleration;
exports.calculateAcceleration = calculateAcceleration;
exports.calculateDeceleration = calculateDeceleration;
exports.calculatePos = calculatePos;
exports.getWalkCycle = getWalkCycle;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _healthJs = require('./health.js');

var _collisions = require('./collisions');

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
        var newAcceleration = (0, _movable.calculateInputAcceleration)(acceleration, accelStep, decelStep, input);
        var newPos = undefined;

        newAcceleration = (0, _movable.calculateInputDeceleration)(newAcceleration, decelStep, input);
        newAcceleration = (0, _movable.calculateCollisionAcceleration)(newAcceleration, getPos(), constraints, isRepelling);
        newPos = (0, _movable.calculatePos)(pos, newAcceleration, velocity);

        // MUTATIONS
        pos = newPos;
        acceleration = newAcceleration;
        isRepelling = false;
    };

    var repel = function repel(data) {
        isRepelling = data;
    };

    var getDamagePower = function getDamagePower() {
        return damagePower;
    };

    var detectCollision = function detectCollision(item) {
        return (0, _collisions.detectCollision)(getBoundingBox())(item);
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
        detectCollision: detectCollision,
        getPos: getPos,
        repel: repel,
        render: render
    };

    return Object.assign({}, output, health);
};

exports.Player = Player;

},{"./collisions":2,"./health.js":4,"./movable":8}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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

var _appBackground = require('./app/background');

var _appBackground2 = _interopRequireDefault(_appBackground);

;(function () {
	var bg = (0, _appBackground2['default'])('assets/img/grass-texture.jpg');
	var keyboard = (0, _appKeyboard2['default'])();
	var masterLoop = (0, _appLoop2['default'])();
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var cw = canvas.width = canvas.offsetWidth;
	var ch = canvas.height = canvas.offsetHeight;
	var player = (0, _appPlayer.Player)([cw, ch]);
	var enemy = (0, _appEnemy.Enemy)([cw, ch]);
	var items = Array.from(Array(20)).map(function (item) {
		return (0, _appItem2['default'])([cw, ch]);
	});
	var uncollidedItems = items;

	// This will run on document ready
	var init = function init() {

		var frame = function frame(t) {
			var simsNeeded = _calculateSimulatioins(t);
			var camera = undefined;

			_simulate(player, enemy);

			ctx.clearRect(0, 0, cw, ch);
			ctx.save();
			camera = _calculateCameraTranslation([0, 0], player.getPos(), cw, ch);
			ctx.translate.apply(ctx, _toConsumableArray(camera));
			bg.render(ctx, [cw, ch], camera);
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
			var playerPos = player.getPos();
			var uncollidedItemPos = uncollidedItems.length ? uncollidedItems[0].getPos() : false;

			var playerToEnemyCollision = player.detectCollision(enemy.getBoundingBox());
			var enemyToPlayerCollision = enemy.detectCollision(player.getBoundingBox());

			if (playerToEnemyCollision) {
				player.repel(playerToEnemyCollision);
				enemy.hurt(player.getDamagePower());
			}
			if (enemyToPlayerCollision) {
				enemy.repel(enemyToPlayerCollision);
				player.hurt(enemy.getDamagePower());
			}

			uncollidedItems = items.filter(function (item) {
				return !item.isCollected();
			});
			player.updatePosition(keyboard.getState());
			enemy.updatePosition(playerPos, uncollidedItemPos);

			var playerCollectItems = uncollidedItems.filter(function (item) {
				return player.detectCollision(item.getBoundingBox());
			});
			var enemyCollectItems = uncollidedItems.filter(function (item) {
				return enemy.detectCollision(item.getBoundingBox());
			});

			player.heal(playerCollectItems.reduce(function (prev, cur) {
				return prev + cur.collect();
			}, 0));
			enemy.heal(enemyCollectItems.reduce(function (prev, cur) {
				return prev + cur.collect();
			}, 0));
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

	(0, _pluginsDomready2['default'])(init);
})();

},{"./app/background":1,"./app/enemy":3,"./app/item":5,"./app/keyboard":6,"./app/loop":7,"./app/player":9,"./app/tools":10,"./plugins/domready":12}],12:[function(require,module,exports){
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

},{}]},{},[11])