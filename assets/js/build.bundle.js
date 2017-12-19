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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNLFVBQVUsR0FBRyxTQUFiLFVBQVUsQ0FBSSxHQUFHLEVBQUs7O0FBRTNCLFFBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O0FBRTFCLFFBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN0QixTQUFLLENBQUMsTUFBTSxHQUFHO2VBQU0sU0FBUyxHQUFHLElBQUk7S0FBQSxDQUFDO0FBQ3RDLFNBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztBQUViLFFBQU0sTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFJLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFLO0FBQzVDLFlBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTzs7MENBQ0UsV0FBVzs7WUFBNUIsS0FBSztZQUFFLE1BQU07O0FBQ3ZCLFlBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUVuRCxXQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLFdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLFdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNSLENBQUE7O0FBRUQsV0FBTztBQUNOLGNBQU0sRUFBTixNQUFNO0tBQ04sQ0FBQztDQUNMLENBQUE7O3FCQUVjLFVBQVUiLCJmaWxlIjoiL21udC9kL3dzbGhvbWUvc2l0ZXMvQmF0dGxlZ3JvdW5kL2Fzc2V0cy9qcy9hcHAvYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJhY2tncm91bmQgPSAodXJsKSA9PiB7XG4gICAgXG5cdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cdFxuXHRsZXQgaGFzTG9hZGVkID0gZmFsc2U7XG5cdGltYWdlLm9ubG9hZCA9ICgpID0+IGhhc0xvYWRlZCA9IHRydWU7XG5cdGltYWdlLnNyYyA9IHVybDtcblxuICAgIGNvbnN0IHJlbmRlciA9IChjdHgsIGNvbnN0cmFpbnRzLCBjYW1lcmEpID0+IHtcbiAgICBcdGlmKCFoYXNMb2FkZWQpIHJldHVybjtcbiAgICBcdGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IGNvbnN0cmFpbnRzO1xuXHRcdGNvbnN0IHBhdHRlcm4gPSBjdHguY3JlYXRlUGF0dGVybihpbWFnZSwgJ3JlcGVhdCcpO1xuXG5cdFx0Y3R4LnJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHBhdHRlcm47XG5cdFx0Y3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgIFx0cmVuZGVyXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDtcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL2NvbGxpc2lvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxTQUFsQixlQUFlLENBQUksS0FBSztXQUFLLFVBQUMsS0FBSyxFQUFLO29DQUMyQixLQUFLOztZQUFyRSxhQUFhO1lBQUUsY0FBYztZQUFFLFlBQVk7WUFBRSxlQUFlOztvQ0FDSSxLQUFLOztZQUFyRSxhQUFhO1lBQUUsY0FBYztZQUFFLFlBQVk7WUFBRSxlQUFlOztBQUVqRSxZQUFJLFNBQVMsR0FBRyxjQUFjLEdBQUcsYUFBYSxJQUFJLGFBQWEsR0FBRyxjQUFjLENBQUM7QUFDakYsWUFBSSxTQUFTLEdBQUcsZUFBZSxHQUFHLFlBQVksSUFBSSxZQUFZLEdBQUcsZUFBZSxDQUFDOztBQUVqRixZQUFJLFdBQVcsR0FBRyxTQUFTLElBQUksU0FBUyxDQUFBOztBQUV4QyxZQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sS0FBSyxDQUFBOztBQUc3QixZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixZQUFJLElBQUksR0FBRyxDQUFDLENBQUM7O0FBRWhCLFlBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0FBQzNELFlBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxDQUFDO0FBQzVELFlBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxDQUFDO0FBQzFELFlBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxDQUFDOztBQUU3RCxXQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMzQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUUzQyxZQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLEdBQUcsWUFBWSxDQUFBLElBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLGFBQWEsQ0FBQSxBQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7QUFFcEcsZUFBTztBQUNOLGdCQUFJLEVBQUUsSUFBSTtBQUNWLHFCQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztTQUNwQixDQUFDO0tBQ0w7Q0FBQSxDQUFBOztRQUVRLGVBQWUsR0FBZixlQUFlIiwiZmlsZSI6Ii9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL2NvbGxpc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZXRlY3RDb2xsaXNpb24gPSAoaXRlbTEpID0+IChpdGVtMikgPT4ge1xuICAgIGxldCBbaXRlbTFMZWZ0RWRnZSwgaXRlbTFSaWdodEVkZ2UsIGl0ZW0xVG9wRWRnZSwgaXRlbTFCb3R0b21FZGdlXSA9IGl0ZW0xO1xuICAgIGxldCBbaXRlbTJMZWZ0RWRnZSwgaXRlbTJSaWdodEVkZ2UsIGl0ZW0yVG9wRWRnZSwgaXRlbTJCb3R0b21FZGdlXSA9IGl0ZW0yO1xuXG4gICAgbGV0IG92ZXJsYXBzWCA9IGl0ZW0xUmlnaHRFZGdlID4gaXRlbTJMZWZ0RWRnZSAmJiBpdGVtMUxlZnRFZGdlIDwgaXRlbTJSaWdodEVkZ2U7XG4gICAgbGV0IG92ZXJsYXBzWSA9IGl0ZW0xQm90dG9tRWRnZSA+IGl0ZW0yVG9wRWRnZSAmJiBpdGVtMVRvcEVkZ2UgPCBpdGVtMkJvdHRvbUVkZ2U7XG5cbiAgICBsZXQgaGFzQ29sbGlkZWQgPSBvdmVybGFwc1kgJiYgb3ZlcmxhcHNYXG5cbiAgICBpZighaGFzQ29sbGlkZWQpIHJldHVybiBmYWxzZVxuXG5cbiAgICBsZXQgZGlyID0ge307XG4gICAgbGV0IGF4aXMgPSAwO1xuXG5cdGxldCBsZWZ0T3ZlcmxhcCA9IE1hdGguYWJzKGl0ZW0xUmlnaHRFZGdlIC0gaXRlbTJMZWZ0RWRnZSk7XG5cdGxldCByaWdodE92ZXJsYXAgPSBNYXRoLmFicyhpdGVtMUxlZnRFZGdlIC0gaXRlbTJSaWdodEVkZ2UpO1xuXHRsZXQgdG9wT3ZlcmxhcCA9IE1hdGguYWJzKGl0ZW0xQm90dG9tRWRnZSAtIGl0ZW0yVG9wRWRnZSk7XG5cdGxldCBib3R0b21PdmVybGFwID0gTWF0aC5hYnMoaXRlbTFUb3BFZGdlIC0gaXRlbTJCb3R0b21FZGdlKTtcblxuXHRkaXIueCA9IGxlZnRPdmVybGFwIDwgcmlnaHRPdmVybGFwID8gLTEgOiAxLFxuXHRkaXIueSA9IHRvcE92ZXJsYXAgPCBib3R0b21PdmVybGFwID8gLTEgOiAxXG5cdFxuXHRheGlzID0gKGRpci54IDwgMCA/IGxlZnRPdmVybGFwIDogcmlnaHRPdmVybGFwKSA8IChkaXIueSA8IDAgPyB0b3BPdmVybGFwIDogYm90dG9tT3ZlcmxhcCkgPyAneCcgOiAneSc7XG5cbiAgICByZXR1cm4ge1xuICAgIFx0YXhpczogYXhpcyxcbiAgICBcdGRpcmVjdGlvbjogZGlyW2F4aXNdXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZGV0ZWN0Q29sbGlzaW9uIH0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL2VuZW15LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7d0JBRVUsYUFBYTs7MEJBQ21CLGNBQWM7O3VCQVU5RCxXQUFXOztBQUVsQixJQUFNLEtBQUssR0FBRyxTQUFSLEtBQUssQ0FBSSxXQUFXLEVBQUs7QUFDM0IsUUFBSSxNQUFNLEdBQUcsdUJBQVEsQ0FBQzs7QUFFdEIsUUFBTSxVQUFVLEdBQUc7QUFDZixhQUFLLEVBQUUsRUFBRTtBQUNULGNBQU0sRUFBRSxFQUFFO0tBQ2IsQ0FBQTs7QUFFRCxRQUFJLEdBQUcsR0FBRztBQUNOLFNBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNyQixTQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDeEIsQ0FBQztBQUNGLFFBQUksWUFBWSxHQUFHO0FBQ2YsU0FBQyxFQUFFLENBQUM7QUFDSixTQUFDLEVBQUUsQ0FBQztLQUNQLENBQUM7QUFDRixRQUFNLFdBQVcsR0FBRztBQUNoQixtQkFBUyxDQUFDO0FBQ1YsZUFBTyxFQUFFLENBQUM7S0FDYixDQUFDO0FBQ0YsUUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFFBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQzs7QUFFdEIsUUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLFFBQUksV0FBVyxHQUFHLEtBQUssQ0FBQzs7QUFFeEIsUUFBTSxVQUFVLEdBQUcsQ0FDZjtBQUNJLGdCQUFRLEVBQUUsSUFBSTtBQUNkLGlCQUFTLEVBQUUsT0FBTztLQUNyQixFQUNEO0FBQ0ksZ0JBQVEsRUFBRSxJQUFJO0FBQ2QsaUJBQVMsRUFBRSxNQUFNO0tBQ3BCLENBQ0osQ0FBQTtBQUNELFFBQUksZUFBZSxHQUFHLEdBQUcsQ0FBQzs7QUFFMUIsUUFBTSxRQUFRLEdBQUcsMkJBQWEsVUFB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QVUsR0FBRyxTQUFiLFVBQVUsQ0FBSSxHQUFHLEVBQUs7QUFDeEIsV0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2hCLFdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3ZCLFdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVELFdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNkLENBQUE7O0FBRUQsUUFBTSxNQUFNLEdBQUc7QUFDWCxlQUFPLEVBQVAsT0FBTztBQUNQLHNCQUFjLEVBQWQsY0FBYztBQUNkLHNCQUFjLEVBQWQsY0FBYztBQUNkLHNCQUFjLEVBQWQsY0FBYztBQUNkLHVCQUFlLEVBQWYsZUFBZTtBQUNmLGNBQU0sRUFBTixNQUFNO0FBQ04sYUFBSyxFQUFMLEtBQUs7QUFDTCxjQUFNLEVBQU4sTUFBTTtLQUNULENBQUE7O0FBRUQsV0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDNUMsQ0FBQzs7UUFFTyxLQUFLLEdBQUwsS0FBSyIsImZpbGUiOiIvbW50L2Qvd3NsaG9tZS9zaXRlcy9CYXR0bGVncm91bmQvYXNzZXRzL2pzL2FwcC9lbmVteS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBIZWFsdGggfSBmcm9tICcuL2hlYWx0aC5qcyc7XG5pbXBvcnQgeyBkZXRlY3RDb2xsaXNpb24gYXMgZGV0ZWN0Q29sbGlzaW9uQ2FsYyB9IGZyb20gJy4vY29sbGlzaW9ucyc7XG5pbXBvcnQge1xuICAgIGF0dHJhY3RDYWxjLFxuICAgIGNhbGN1bGF0ZURpc3RhbmNlLFxuICAgIGNhbGN1bGF0ZVZlbG9jaXR5LFxuICAgIGNhbGN1bGF0ZUlucHV0QWNjZWxlcmF0aW9uLFxuICAgIGNhbGN1bGF0ZUlucHV0RGVjZWxlcmF0aW9uLFxuICAgIGNhbGN1bGF0ZUNvbGxpc2lvbkFjY2VsZXJhdGlvbixcbiAgICBjYWxjdWxhdGVQb3MsXG4gICAgZ2V0V2Fsa0N5Y2xlXG59IGZyb20gJy4vbW92YWJsZSc7XG5cbmNvbnN0IEVuZW15ID0gKGNvbnN0cmFpbnRzKSA9PiB7XG4gICAgbGV0IGhlYWx0aCA9IEhlYWx0aCgpO1xuICAgIFxuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB7XG4gICAgICAgIHdpZHRoOiA4MCxcbiAgICAgICAgaGVpZ2h0OiA4MFxuICAgIH1cblxuICAgIGxldCBwb3MgPSB7XG4gICAgICAgIHg6IGNvbnN0cmFpbnRzWzBdIC8gNCxcbiAgICAgICAgeTogY29uc3RyYWludHNbMV0gLyA0XG4gICAgfTtcbiAgICBsZXQgYWNjZWxlcmF0aW9uID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgfTtcbiAgICBjb25zdCB2ZWxvY2l0eU1hcCA9IHtcbiAgICAgICAgZGVmYXVsdDogNSxcbiAgICAgICAgcnVubmluZzogN1xuICAgIH07XG4gICAgY29uc3QgYWNjZWxTdGVwID0gLjAyNTtcbiAgICBjb25zdCBkZWNlbFN0ZXAgPSAuMDE7XG5cbiAgICBsZXQgZGFtYWdlUG93ZXIgPSAyNTtcbiAgICBsZXQgaXNSZXBlbGxpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IHdhbGtpbmdNYXAgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdCdcbiAgICAgICAgfSxcbiAgICBdXG4gICAgbGV0IGF0dGFja1RocmVzaG9sZCA9IDUwMDtcblxuICAgIGNvbnN0IGdldElucHV0ID0gZ2V0V2Fsa0N5Y2xlKHdhbGtpbmdNYXApO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gdmVsb2NpdHlNYXBbJ2RlZmF1bHQnXTtcblxuICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKHRhcmdldCwgbmVhcmVzdEl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBnZXRJbnB1dCgpO1xuICAgICAgICBjb25zdCBpc0FsaXZlID0gaGVhbHRoLmdldEhlYWx0aCgpID4gMDtcbiAgICAgICAgY29uc3QgaXNEeWluZyA9IGlzQWxpdmUgJiYgaGVhbHRoLmdldEhlYWx0aCgpIDwgNTA7XG4gICAgICAgIGxldCBuZXdBY2NlbGVyYXRpb24gPSBhY2NlbGVyYXRpb247XG4gICAgICAgIGxldCBuZXdQb3M7XG5cbiAgICAgICAgLy8gYXR0cmFjdGlvblxuICAgICAgICBsZXQgW2R4LCBkeSwgZGlzdGFuY2VdID0gY2FsY3VsYXRlRGlzdGFuY2UocG9zLCAoaXNEeWluZyAmJiBuZWFyZXN0SXRlbSA/IG5lYXJlc3RJdGVtIDogdGFyZ2V0KSk7XG4gICAgICAgIGxldCBpc0F0dGFja2luZyA9IGlzQWxpdmUgJiYgZGlzdGFuY2UgIT09IGZhbHNlICYmIE1hdGguYWJzKGRpc3RhbmNlKSA8IGF0dGFja1RocmVzaG9sZDtcbiAgICAgICAgaWYoaXNBdHRhY2tpbmcgfHwgKGlzRHlpbmcgJiYgbmVhcmVzdEl0ZW0pKSB7XG4gICAgICAgICAgICBuZXdBY2NlbGVyYXRpb24gPSBhdHRyYWN0Q2FsYyhuZXdBY2NlbGVyYXRpb24sIGFjY2VsU3RlcCwgZHgsIGR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0FjY2VsZXJhdGlvbiA9IGNhbGN1bGF0ZUlucHV0RGVjZWxlcmF0aW9uKGFjY2VsZXJhdGlvbiwgZGVjZWxTdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0FjY2VsZXJhdGlvbiA9IGNhbGN1bGF0ZUNvbGxpc2lvbkFjY2VsZXJhdGlvbihuZXdBY2NlbGVyYXRpb24sIGdldFBvcygpLCBjb25zdHJhaW50cywgaXNSZXBlbGxpbmcpO1xuICAgICAgICBuZXdQb3MgPSBjYWxjdWxhdGVQb3MocG9zLCBuZXdBY2NlbGVyYXRpb24sIHZlbG9jaXR5KTtcblxuICAgICAgICAvLyBNVVRBVElPTlNcbiAgICAgICAgcG9zICAgICAgICAgID0gbmV3UG9zXG4gICAgICAgIGFjY2VsZXJhdGlvbiA9IG5ld0FjY2VsZXJhdGlvbjtcbiAgICAgICAgaXNSZXBlbGxpbmcgICAgICAgPSBmYWxzZTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IGF0dHJhY3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBbeCwgeV0gPSBhdHRyYWN0Q2FsYyhwb3MueCwgcG9zLnksIHRhcmdldFgsIHRhcmdldFkpO1xuXG4gICAgICAgIHBvcyA9IHsgeCwgeSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGVsID0gKGRhdGEpID0+IHtcbiAgICAgICAgaXNSZXBlbGxpbmcgPSBkYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERhbWFnZVBvd2VyID0gKCkgPT4gZGFtYWdlUG93ZXI7XG5cbiAgICBjb25zdCBkZXRlY3RDb2xsaXNpb24gPSBpdGVtID0+IGRldGVjdENvbGxpc2lvbkNhbGMoZ2V0Qm91bmRpbmdCb3goKSkoaXRlbSk7XG5cbiAgICBjb25zdCBnZXRCb3VuZGluZ0JveCA9ICgpID0+IFtwb3MueCwgcG9zLnggKyBkaW1lbnNpb25zLndpZHRoLCBwb3MueSwgcG9zLnkgKyBkaW1lbnNpb25zLmhlaWdodF07XG5cbiAgICBjb25zdCBnZXRQb3MgPSAoKSA9PiBPYmplY3QuYXNzaWduKHt9LCBwb3MsIGRpbWVuc2lvbnMpO1xuXG4gICAgY29uc3QgcmVuZGVyID0gY3R4ID0+IHtcbiAgICAgICAgcmVuZGVyU2VsZihjdHgpO1xuICAgICAgICBoZWFsdGgucmVuZGVySGVhbHRoQmFyKGN0eCwgZ2V0UG9zKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNlbGYgPSAoY3R4KSA9PiB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZDIyJztcbiAgICAgICAgY3R4LnJlY3QocG9zLngsIHBvcy55LCBkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0cHV0ID0ge1xuICAgICAgICBhdHRyYWN0LFxuICAgICAgICB1cGRhdGVQb3NpdGlvbixcbiAgICAgICAgZ2V0Qm91bmRpbmdCb3gsXG4gICAgICAgIGdldERhbWFnZVBvd2VyLFxuICAgICAgICBkZXRlY3RDb2xsaXNpb24sXG4gICAgICAgIGdldFBvcyxcbiAgICAgICAgcmVwZWwsXG4gICAgICAgIHJlbmRlclxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvdXRwdXQsIGhlYWx0aCk7XG59O1xuXG5leHBvcnQgeyBFbmVteSB9OyJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL2hlYWx0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU0sTUFBTSxHQUFHLFNBQVQsTUFBTSxHQUFTO0FBQ2pCLFFBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMzQixRQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQztBQUMvQixRQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7O0FBRWpCLFFBQU0sWUFBWSxHQUFHLFNBQWYsWUFBWSxDQUFHLE1BQU0sRUFBSTtBQUMzQixjQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDeEQsQ0FBQTs7QUFFRCxRQUFNLGVBQWUsR0FBRyxTQUFsQixlQUFlLENBQUksR0FBRyxFQUFFLFNBQVMsRUFBSzs7QUFFeEMsV0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2hCLFdBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLFdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFJLGVBQWUsR0FBRyxDQUFDLEFBQUMsRUFBRSxBQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQSxBQUFDLEdBQUksb0JBQW9CLEVBQUUsZUFBZSxDQUFDLENBQUM7OztBQUdsSyxXQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDaEIsV0FBRyxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztBQUNyQyxXQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztBQUN6QixXQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUksb0JBQW9CLEdBQUcsQ0FBQyxBQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBSSxlQUFlLEdBQUcsQ0FBQyxBQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBSSxvQkFBb0IsR0FBRyxDQUFDLEFBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztLQUVoSyxDQUFBOztBQUVELFFBQU0sWUFBWSxHQUFHLFNBQWYsWUFBWSxDQUFHLE1BQU0sRUFBSTtBQUMzQixZQUFHLE1BQU0sR0FBRyxFQUFFLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFDOUIsWUFBRyxNQUFNLEdBQUcsRUFBRSxFQUFFLE9BQU8sU0FBUyxDQUFDO0FBQ2pDLGVBQU8sTUFBTSxDQUFDO0tBQ2pCLENBQUE7O0FBRUQsV0FBTztBQUNOLGlCQUFTLEVBQUU7bUJBQU0sTUFBTTtTQUFBO0FBQ3BCLFlBQUksRUFBRSxjQUFBLE1BQU07bUJBQUksWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQUE7QUFDckMsWUFBSSxFQUFFLGNBQUEsTUFBTTttQkFBSSxZQUFZLENBQUMsTUFBTSxDQUFDO1NBQUE7QUFDcEMsdUJBQWUsRUFBZixlQUFlO0tBQ2xCLENBQUM7Q0FDTCxDQUFBOztRQUVRLE1BQU0sR0FBTixNQUFNIiwiZmlsZSI6Ii9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL2hlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWx0aCA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFsdGhCYXJIZWlnaHQgPSAxMDtcbiAgICBjb25zdCBoZWFsdGhCYXJTdHJva2VXaWR0aCA9IDI7XG4gICAgbGV0IGhlYWx0aCA9IDEwMDtcblxuICAgIGNvbnN0IHVwZGF0ZUhlYWx0aCA9IGFtb3VudCA9PiB7XG4gICAgICAgIGhlYWx0aCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGhlYWx0aCArIGFtb3VudCwgMTAwKSk7IC8vIEhlYWx0aCBtaW4gMCBtYXggMTAwXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVySGVhbHRoQmFyID0gKGN0eCwgcGxheWVyUG9zKSA9PiB7XG4gICAgICAgIC8vIEZpbGxcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ2V0RmlsbENvbG9yKGhlYWx0aCk7XG4gICAgICAgIGN0eC5maWxsUmVjdChwbGF5ZXJQb3MueCArIGhlYWx0aEJhclN0cm9rZVdpZHRoLCBwbGF5ZXJQb3MueSAtIChoZWFsdGhCYXJIZWlnaHQgKiAyKSwgKHBsYXllclBvcy53aWR0aCAqIChoZWFsdGggLyAxMDApKSAtIGhlYWx0aEJhclN0cm9rZVdpZHRoLCBoZWFsdGhCYXJIZWlnaHQpO1xuXG4gICAgICAgIC8vIFN0cm9rZVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBoZWFsdGhCYXJTdHJva2VXaWR0aDtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdChwbGF5ZXJQb3MueCArIChoZWFsdGhCYXJTdHJva2VXaWR0aCAvIDIpLCBwbGF5ZXJQb3MueSAtIChoZWFsdGhCYXJIZWlnaHQgKiAyKSwgcGxheWVyUG9zLndpZHRoIC0gKGhlYWx0aEJhclN0cm9rZVdpZHRoIC8gMiksIGhlYWx0aEJhckhlaWdodCk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRGaWxsQ29sb3IgPSBoZWFsdGggPT4ge1xuICAgICAgICBpZihoZWFsdGggPiA2NykgcmV0dXJuICcjMGYwJztcbiAgICAgICAgaWYoaGVhbHRoID4gMzMpIHJldHVybiAnI0ZGODMwMCc7XG4gICAgICAgIHJldHVybiAnI2YwMCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICBcdGdldEhlYWx0aDogKCkgPT4gaGVhbHRoLFxuICAgICAgICBodXJ0OiBhbW91bnQgPT4gdXBkYXRlSGVhbHRoKC1hbW91bnQpLFxuICAgICAgICBoZWFsOiBhbW91bnQgPT4gdXBkYXRlSGVhbHRoKGFtb3VudCksXG4gICAgICAgIHJlbmRlckhlYWx0aEJhcixcbiAgICB9O1xufVxuXG5leHBvcnQgeyBIZWFsdGggfSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL2l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUViLElBQU0sSUFBSSxHQUFHLFNBQVAsSUFBSSxDQUFJLFdBQVcsRUFBSztBQUMxQixRQUFNLFVBQVUsR0FBRztBQUNmLGFBQUssRUFBRSxFQUFFO0FBQ1QsY0FBTSxFQUFFLEVBQUU7S0FDYixDQUFBOztBQUVELFFBQUksR0FBRyxHQUFHO0FBQ04sU0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxTQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hELENBQUM7QUFDRixRQUFJLFlBQVksR0FBRztBQUNmLFNBQUMsRUFBRSxDQUFDO0FBQ0osU0FBQyxFQUFFLENBQUM7S0FDUCxDQUFDO0FBQ0YsUUFBSSxRQUFRLEdBQUc7QUFDWCxTQUFDLEVBQUUsRUFBRTtBQUNMLFNBQUMsRUFBRSxFQUFFO0tBQ1IsQ0FBQztBQUNGLFFBQUksU0FBUyxHQUFHLElBQUksQ0FBQztBQUNyQixRQUFJLFNBQVMsR0FBRyxHQUFHLENBQUM7O0FBRXBCLFFBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN0QixRQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7O0FBRXRCLFFBQU0sTUFBTSxHQUFHLFNBQVQsTUFBTSxHQUFTLEVBRXBCLENBQUE7O0FBRUQsUUFBTSxPQUFPLEdBQUcsU0FBVixPQUFPLEdBQVM7QUFDbEIsWUFBRyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkIsaUJBQVMsR0FBRyxJQUFJLENBQUM7QUFDakIsZUFBTyxZQUFZLENBQUM7S0FDdkIsQ0FBQTs7QUFFRCxRQUFNLFdBQVcsR0FBRyxTQUFkLFdBQVc7ZUFBUyxTQUFTO0tBQUEsQ0FBQzs7QUFFcEMsUUFBTSxjQUFjLEdBQUcsU0FBakIsY0FBYztlQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7S0FBQSxDQUFDOztBQUVqRyxRQUFNLE1BQU0sR0FBRyxTQUFULE1BQU07ZUFBUyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDO0tBQUEsQ0FBQzs7QUFFeEQsUUFBTSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUcsR0FBRyxFQUFJO0FBQ2xCLFlBQUcsU0FBUyxFQUFFLE9BQU87QUFDckIsV0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2hCLFdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3ZCLFdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVELFdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNkLENBQUE7O0FBRUQsV0FBTztBQUNILGNBQU0sRUFBTixNQUFNO0FBQ04sZUFBTyxFQUFQLE9BQU87QUFDUCxtQkFBVyxFQUFYLFdBQVc7QUFDWCxjQUFNLEVBQU4sTUFBTTtBQUNOLHNCQUFjLEVBQWQsY0FBYztBQUNkLGNBQU0sRUFBTixNQUFNO0tBQ1QsQ0FBQTtDQUNKLENBQUM7O3FCQUVhLElBQUkiLCJmaWxlIjoiL21udC9kL3dzbGhvbWUvc2l0ZXMvQmF0dGxlZ3JvdW5kL2Fzc2V0cy9qcy9hcHAvaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBpdGVtID0gKGNvbnN0cmFpbnRzKSA9PiB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHtcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBoZWlnaHQ6IDMwXG4gICAgfVxuICAgIFxuICAgIGxldCBwb3MgPSB7XG4gICAgICAgIHg6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNvbnN0cmFpbnRzWzBdKSxcbiAgICAgICAgeTogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY29uc3RyYWludHNbMV0pXG4gICAgfTtcbiAgICBsZXQgYWNjZWxlcmF0aW9uID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgfTtcbiAgICBsZXQgdmVsb2NpdHkgPSB7XG4gICAgICAgIHg6IDEwLFxuICAgICAgICB5OiAxMFxuICAgIH07XG4gICAgbGV0IGFjY2VsU3RlcCA9IC4wMjU7XG4gICAgbGV0IGRlY2VsU3RlcCA9IC4wNTtcblxuICAgIGxldCBjb2xsZWN0ZWQgPSBmYWxzZTtcbiAgICBsZXQgaGVhbGluZ1Bvd2VyID0gMTA7XG5cbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGNvbGxlY3QgPSAoKSA9PiB7XG4gICAgICAgIGlmKGNvbGxlY3RlZCkgcmV0dXJuIDA7XG4gICAgICAgIGNvbGxlY3RlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBoZWFsaW5nUG93ZXI7XG4gICAgfVxuXG4gICAgY29uc3QgaXNDb2xsZWN0ZWQgPSAoKSA9PiBjb2xsZWN0ZWQ7XG5cbiAgICBjb25zdCBnZXRCb3VuZGluZ0JveCA9ICgpID0+IFtwb3MueCwgcG9zLnggKyBkaW1lbnNpb25zLndpZHRoLCBwb3MueSwgcG9zLnkgKyBkaW1lbnNpb25zLmhlaWdodF07XG4gICAgXG4gICAgY29uc3QgZ2V0UG9zID0gKCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgcG9zLCBkaW1lbnNpb25zKTtcblxuICAgIGNvbnN0IHJlbmRlciA9IGN0eCA9PiB7XG4gICAgICAgIGlmKGNvbGxlY3RlZCkgcmV0dXJuO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzQ5Myc7XG4gICAgICAgIGN0eC5yZWN0KHBvcy54LCBwb3MueSwgZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZSxcbiAgICAgICAgY29sbGVjdCxcbiAgICAgICAgaXNDb2xsZWN0ZWQsXG4gICAgICAgIGdldFBvcyxcbiAgICAgICAgZ2V0Qm91bmRpbmdCb3gsXG4gICAgICAgIHJlbmRlclxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW07Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL2tleWJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBUyxRQUFRLEdBQUc7QUFDbkIsS0FBSSxLQUFLLEdBQUc7QUFDWCxNQUFJLEVBQUUsS0FBSztBQUNYLE9BQUssRUFBRSxLQUFLO0FBQ1osSUFBRSxFQUFFLEtBQUs7QUFDVCxNQUFJLEVBQUUsS0FBSztBQUNYLE9BQUssRUFBRSxLQUFLO0FBQ1osT0FBSyxFQUFFLEtBQUs7RUFDWixDQUFDOztBQUVGLEtBQU0sUUFBUSxHQUFHO0FBQ2hCLElBQUUsRUFBRSxNQUFNO0FBQ1YsSUFBRSxFQUFFLElBQUk7QUFDUixJQUFFLEVBQUUsT0FBTztBQUNYLElBQUUsRUFBRSxNQUFNO0FBQ1YsSUFBRSxFQUFFLE9BQU87QUFDWCxJQUFFLEVBQUUsT0FBTztFQUNYLENBQUM7O0FBRUYsS0FBTSxLQUFLLEdBQUcsU0FBUixLQUFLLEdBQVM7QUFDbkIsVUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEQsVUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFDcEQsQ0FBQTs7QUFFRCxLQUFNLElBQUksR0FBRyxTQUFQLElBQUksR0FBUztBQUNsQixVQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzRCxVQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztFQUN2RCxDQUFBOztBQUVELEtBQU0sUUFBUSxHQUFHLFNBQVgsUUFBUTtTQUFTLEtBQUs7RUFBQSxDQUFDOztBQUU3QixLQUFNLFVBQVUsR0FBRyxTQUFiLFVBQVUsQ0FBSSxDQUFDO1NBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7RUFBQSxDQUFDOztBQUUxQyxLQUFNLFFBQVEsR0FBRyxTQUFYLFFBQVEsQ0FBSSxDQUFDO1NBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7RUFBQSxDQUFDOztBQUV6QyxLQUFNLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBSSxDQUFDLEVBQUUsS0FBSyxFQUFLO0FBQzVCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEMsTUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPOztBQUVyQixPQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDOztBQUV2QixHQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QyxHQUFDLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztFQUN6QyxDQUFBOztBQUVELFFBQU87QUFDTixPQUFLLEVBQUwsS0FBSztBQUNMLE1BQUksRUFBSixJQUFJO0FBQ0osVUFBUSxFQUFSLFFBQVE7RUFDUixDQUFDO0NBQ0Y7O3FCQUVjLFFBQVEiLCJmaWxlIjoiL21udC9kL3dzbGhvbWUvc2l0ZXMvQmF0dGxlZ3JvdW5kL2Fzc2V0cy9qcy9hcHAva2V5Ym9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBLZXlib2FyZCgpIHtcblx0bGV0IHN0YXRlID0geyBcblx0XHRsZWZ0OiBmYWxzZSwgXG5cdFx0cmlnaHQ6IGZhbHNlLCBcblx0XHR1cDogZmFsc2UsIFxuXHRcdGRvd246IGZhbHNlLCBcblx0XHRzaGlmdDogZmFsc2UsIFxuXHRcdHNwYWNlOiBmYWxzZSBcblx0fTtcblxuXHRjb25zdCBiaW5kaW5ncyA9IHsgXG5cdFx0Mzc6ICdsZWZ0JywgXG5cdFx0Mzg6ICd1cCcsIFxuXHRcdDM5OiAncmlnaHQnLCBcblx0XHQ0MDogJ2Rvd24nLCBcblx0XHQxNjogJ3NoaWZ0JywgXG5cdFx0MzI6ICdzcGFjZScgXG5cdH07XG5cblx0Y29uc3Qgc3RhcnQgPSAoKSA9PiB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF9vbktleURvd24sIGZhbHNlKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIF9vbktleVVwLCBmYWxzZSk7XG5cdH1cblxuXHRjb25zdCBzdG9wID0gKCkgPT4ge1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfb25LZXlEb3duLCBmYWxzZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBfb25LZXlVcCwgZmFsc2UpO1xuXHR9XG5cblx0Y29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZTtcblxuXHRjb25zdCBfb25LZXlEb3duID0gKGUpID0+IF9vbktleShlLCB0cnVlKTtcblxuXHRjb25zdCBfb25LZXlVcCA9IChlKSA9PiBfb25LZXkoZSwgZmFsc2UpO1xuXG5cdGNvbnN0IF9vbktleSA9IChlLCB2YWx1ZSkgPT4ge1xuXHRcdGNvbnN0IGJpbmRpbmcgPSBiaW5kaW5nc1tlLmtleUNvZGVdO1xuXHRcdGlmICghYmluZGluZykgcmV0dXJuO1xuXG5cdFx0c3RhdGVbYmluZGluZ10gPSB2YWx1ZTtcblxuXHRcdGUucHJldmVudERlZmF1bHQgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uICYmIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHN0YXJ0LFxuXHRcdHN0b3AsXG5cdFx0Z2V0U3RhdGVcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmQ7Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNLElBQUksR0FBRyxTQUFQLElBQUksR0FBUztBQUNsQixLQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDakIsS0FBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLEtBQUksUUFBUSxZQUFBLENBQUM7O0FBRWIsS0FBTSxLQUFLLEdBQUcsU0FBUixLQUFLLENBQVksRUFBRSxFQUFFO0FBQzFCLFNBQU8sR0FBRyxLQUFLLENBQUM7QUFDaEIsTUFBRyxPQUFPLEVBQUUsS0FBSyxXQUFXLEVBQUUsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7QUFFNUMsdUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDOUIsQ0FBQTs7QUFFRCxLQUFNLElBQUksR0FBRyxTQUFQLElBQUksR0FBYztBQUN2QixTQUFPLEdBQUcsSUFBSSxDQUFDO0VBQ2YsQ0FBQTs7QUFFRCxLQUFNLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBWSxJQUFJLEVBQUU7QUFDN0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUM5QixVQUFRLEdBQUcsSUFBSSxDQUFDOztBQUVoQixVQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEIsTUFBSSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUM1QyxDQUFDOztBQUVGLFFBQU87QUFDTixPQUFLLEVBQUwsS0FBSztBQUNMLE1BQUksRUFBSixJQUFJO0VBQ0osQ0FBQTtDQUNELENBQUE7O3FCQUVjLElBQUkiLCJmaWxlIjoiL21udC9kL3dzbGhvbWUvc2l0ZXMvQmF0dGxlZ3JvdW5kL2Fzc2V0cy9qcy9hcHAvbG9vcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExvb3AgPSAoKSA9PiB7XG5cdGxldCBsYXN0VGltZSA9IDA7XG5cdGxldCBzdG9wcGVkID0gZmFsc2U7XG5cdGxldCBjYWxsYmFjaztcblxuXHRjb25zdCBzdGFydCA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0c3RvcHBlZCA9IGZhbHNlO1xuXHRcdGlmKHR5cGVvZiBmbiAhPT0gXCJ1bmRlZmluZWRcIikgY2FsbGJhY2sgPSBmbjtcblx0XHRcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX2ZyYW1lKTtcblx0fVxuXG5cdGNvbnN0IHN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHRzdG9wcGVkID0gdHJ1ZTtcblx0fVxuXG5cdGNvbnN0IF9mcmFtZSA9IGZ1bmN0aW9uKHRpbWUpIHtcblx0XHRjb25zdCBkZWx0YSA9IHRpbWUgLSBsYXN0VGltZTtcblx0XHRsYXN0VGltZSA9IHRpbWU7XG5cblx0XHRjYWxsYmFjayhkZWx0YSk7XG5cdFx0aWYgKCFzdG9wcGVkKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX2ZyYW1lKTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHN0YXJ0LFxuXHRcdHN0b3Bcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb29wOyJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL21vdmFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNLFdBQVcsR0FBRyxTQUFkLFdBQVcsQ0FBSSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUs7UUFDN0MsRUFBRSxHQUFTLFNBQVMsQ0FBQyxDQUFDO1FBQWxCLEVBQUUsR0FBa0IsU0FBUyxDQUFDLENBQUM7O0FBRXhDLE1BQUUsR0FBRyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0QsTUFBRSxHQUFHLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFM0QsV0FBTztBQUNILFNBQUMsRUFBRSxFQUFFO0FBQ0wsU0FBQyxFQUFFLEVBQUU7S0FDUixDQUFDO0NBQ0wsQ0FBQTs7QUFFRCxJQUFNLGlCQUFpQixHQUFHLFNBQXBCLGlCQUFpQixDQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUs7QUFDdkMsUUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzVCLFFBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1QixXQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDakQsQ0FBQTs7QUFFRCxJQUFNLGlCQUFpQixHQUFHLFNBQXBCLGlCQUFpQixDQUFJLFdBQVcsRUFBRSxLQUFLLEVBQUs7QUFDOUMsUUFBSSxZQUFZLEdB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QUFxQjtRQUNyQixZQUFZLEdBQVosWUFBWTtRQUNaLFlBQVksR0FBWixZQUFZIiwiZmlsZSI6Ii9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL21vdmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdHRyYWN0Q2FsYyA9IChjdXJBY2NlcmwsIGFjY2VsU3RlcCwgZHgsIGR5KSA9PiB7XG4gICAgbGV0IFtheCwgYXldID0gW2N1ckFjY2VybC54LCBjdXJBY2NlcmwueV07XG5cbiAgICBheCA9IGNhbGN1bGF0ZUFjY2VsZXJhdGlvbihheCwgYWNjZWxTdGVwLCBkeCA8IDAgPyAtMSA6IDEpO1xuICAgIGF5ID0gY2FsY3VsYXRlQWNjZWxlcmF0aW9uKGF5LCBhY2NlbFN0ZXAsIGR5IDwgMCA/IC0xIDogMSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBheCxcbiAgICAgICAgeTogYXlcbiAgICB9O1xufVxuXG5jb25zdCBjYWxjdWxhdGVEaXN0YW5jZSA9IChwb3MsIHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBwb3MueDtcbiAgICBjb25zdCBkeSA9IHRhcmdldC55IC0gcG9zLnk7XG4gICAgcmV0dXJuIFtkeCwgZHksIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSldO1xufVxuXG5jb25zdCBjYWxjdWxhdGVWZWxvY2l0eSA9ICh2ZWxvY2l0eU1hcCwgaW5wdXQpID0+IHtcbiAgICBsZXQgdmVsb2NpdHlUeXBlID0gJ2RlZmF1bHQnO1xuICAgIGlmKGlucHV0LnNoaWZ0KSB2ZWxvY2l0eVR5cGUgPSAncnVubmluZyc7XG5cbiAgICByZXR1cm4gdmVsb2NpdHlNYXBbdmVsb2NpdHlUeXBlXTtcbn1cblxuY29uc3QgY2FsY3VsYXRlSW5wdXRBY2NlbGVyYXRpb24gPSAoY3VyQWNjZWwsIGFjY2VsU3RlcCwgZGVjZWxTdGVwLCBpbnB1dCkgPT4ge1xuICAgIGxldCBbYXgsIGF5XSA9IFtjdXJBY2NlbC54LCBjdXJBY2NlbC55XTtcbiAgICBcbiAgICAvLyBDb250cm9sc1xuICAgIGlmKGlucHV0LnJpZ2h0KSBheCA9IGNhbGN1bGF0ZUFjY2VsZXJhdGlvbihheCwgYXggPiAwID8gYWNjZWxTdGVwIDogZGVjZWxTdGVwKTtcbiAgICBpZihpbnB1dC5sZWZ0KSAgYXggPSBjYWxjdWxhdGVBY2NlbGVyYXRpb24oYXgsIGF4ID4gMCA/IGRlY2VsU3RlcCA6IGFjY2VsU3RlcCwgLTEpO1xuICAgIGlmKGlucHV0LmRvd24pICBheSA9IGNhbGN1bGF0ZUFjY2VsZXJhdGlvbihheSwgYXkgPiAwID8gYWNjZWxTdGVwIDogZGVjZWxTdGVwKTtcbiAgICBpZihpbnB1dC51cCkgICAgYXkgPSBjYWxjdWxhdGVBY2NlbGVyYXRpb24oYXksIGF5ID4gMCA/IGRlY2VsU3RlcCA6IGFjY2VsU3RlcCwgLTEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogYXgsXG4gICAgICAgIHk6IGF5XG4gICAgfTtcbn1cblxuY29uc3QgY2FsY3VsYXRlSW5wdXREZWNlbGVyYXRpb24gPSAoY3VyQWNjZWwsIGRlY2VsU3RlcCwgaW5wdXQgPSB7fSkgPT4ge1xuICAgIGxldCBbYXgsIGF5XSA9IFtjdXJBY2NlbC54LCBjdXJBY2NlbC55XTtcblxuICAgIC8vIERlY2VsZXJhdGlvblxuICAgIGlmKGF4ICE9PSAwICYmICFpbnB1dC5sZWZ0ICYmICFpbnB1dC5yaWdodCkgYXggPSBjYWxjdWxhdGVEZWNlbGVyYXRpb24oYXgsIGRlY2VsU3RlcCk7XG4gICAgaWYoYXkgIT09IDAgJiYgIWlucHV0LnVwICYmICFpbnB1dC5kb3duKSBheSA9IGNhbGN1bGF0ZURlY2VsZXJhdGlvbihheSwgZGVjZWxTdGVwKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGF4LFxuICAgICAgICB5OiBheVxuICAgIH07XG59XG5cbmNvbnN0IGNhbGN1bGF0ZUNvbGxpc2lvbkFjY2VsZXJhdGlvbiA9IChjdXJBY2NlbCwgcG9zLCBjb25zdHJhaW50cywgaXNIdXJ0KSA9PiB7XG4gICAgbGV0IFt4LCB5XSA9IFtwb3MueCwgcG9zLnldO1xuICAgIGxldCBbYXgsIGF5XSA9IFtjdXJBY2NlbC54LCBjdXJBY2NlbC55XTtcblxuICAgIGlmKGlzSHVydC5heGlzID09PSAneCcpIGF4ID0gaXNIdXJ0LmRpcmVjdGlvbjtcbiAgICBpZihpc0h1cnQuYXhpcyA9PT0gJ3knKSBheSA9IGlzSHVydC5kaXJlY3Rpb247XG5cbiAgICAvLyBDb25zdHJhaW50c1xuICAgIGlmKCh4ICsgcG9zLndpZHRoID4gY29uc3RyYWludHNbMF0gJiYgYXggPiAwKSB8fCAoeCA8IDAgJiYgYXggPCAwKSkgYXggPSBheCAqIC0uNTtcbiAgICBpZigoeSArIHBvcy5oZWlnaHQgPiBjb25zdHJhaW50c1sxXSAmJiBheSA+IDApIHx8ICh5IDwgMCAmJiBheSA8IDApKSBheSA9IGF5ICogLS41O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogYXgsXG4gICAgICAgIHk6IGF5XG4gICAgfTtcbn1cblxuY29uc3QgY2FsY3VsYXRlQWNjZWxlcmF0aW9uID0gKGN1ckFjY2VsLCBhY2NlbFN0ZXAsIGRpciA9IDEpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBjdXJBY2NlbCArIChhY2NlbFN0ZXAgKiBkaXIpO1xuICAgIHJldHVybiBkaXIgPT09IDEgPyBNYXRoLm1pbigxLCByZXN1bHQpIDogTWF0aC5tYXgoLTEsIHJlc3VsdCk7XG59XG5cbmNvbnN0IGNhbGN1bGF0ZURlY2VsZXJhdGlvbiA9IChjdXJBY2NlbCwgZGVjZWxTdGVwKSA9PiB7XG4gICAgcmV0dXJuIChjdXJBY2NlbCA8IGRlY2VsU3RlcCAmJiBjdXJBY2NlbCA+IC1kZWNlbFN0ZXApID8gMCA6IGNhbGN1bGF0ZUFjY2VsZXJhdGlvbihjdXJBY2NlbCwgZGVjZWxTdGVwLCBjdXJBY2NlbCA+IDAgPyAtMSA6IDEpO1xufVxuXG5jb25zdCBjYWxjdWxhdGVQb3MgPSAocG9zLCBhY2NlbGVyYXRpb24sIHZlbG9jaXR5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogTWF0aC5yb3VuZChwb3MueCArICh2ZWxvY2l0eSAqIGFjY2VsZXJhdGlvbi54KSksIFxuICAgICAgICB5OiBNYXRoLnJvdW5kKHBvcy55ICsgKHZlbG9jaXR5ICogYWNjZWxlcmF0aW9uLnkpKVxuICAgIH07XG59XG5cbmNvbnN0IGdldFdhbGtDeWNsZSA9ICh3YWxrQ3ljbGUpID0+IHtcbiAgICBsZXQgbGFzdFVwZGF0ZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBsZXQgaW5kZXggICAgICA9IDA7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uID0gd2Fsa0N5Y2xlW2luZGV4XTtcbiAgICAgICAgbGV0IGN1cnJlbnREaXJlY3Rpb24gPSBjdXJyZW50U2VjdGlvbi5kaXJlY3Rpb247XG4gICAgICAgIGxldCBjdXJyZW50RHVyYXRpb24gPSBjdXJyZW50U2VjdGlvbi5kdXJhdGlvbjtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgICAgICBpZihjdXJyZW50VGltZSA+IGxhc3RVcGRhdGVUaW1lICsgY3VycmVudER1cmF0aW9uKSB7XG4gICAgICAgICAgICBpbmRleCA9IGluZGV4IDwgd2Fsa0N5Y2xlLmxlbmd0aCAtIDEgPyBpbmRleCArIDEgOiAwO1xuICAgICAgICAgICAgbGFzdFVwZGF0ZVRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY3VycmVudERpcmVjdGlvbl0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxufVxuXG5leHBvcnQge1xuICAgIGF0dHJhY3RDYWxjLFxuICAgIGNhbGN1bGF0ZURpc3RhbmNlLFxuICAgIGNhbGN1bGF0ZVZlbG9jaXR5LFxuICAgIGNhbGN1bGF0ZUlucHV0QWNjZWxlcmF0aW9uLFxuICAgIGNhbGN1bGF0ZUlucHV0RGVjZWxlcmF0aW9uLFxuICAgIGNhbGN1bGF0ZUNvbGxpc2lvbkFjY2VsZXJhdGlvbixcbiAgICBjYWxjdWxhdGVBY2NlbGVyYXRpb24sXG4gICAgY2FsY3VsYXRlRGVjZWxlcmF0aW9uLFxuICAgIGNhbGN1bGF0ZVBvcyxcbiAgICBnZXRXYWxrQ3ljbGVcbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL3BsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozt3QkFFVSxhQUFhOzswQkFDbUIsY0FBYzs7dUJBTzlELFdBQVc7O0FBRWxCLElBQU0sTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFJLFdBQVcsRUFBSztBQUM1QixRQUFJLE1BQU0sR0FBRyx1QkFBUSxDQUFDOztBQUV0QixRQUFNLFVBQVUsR0FBRztBQUNmLGFBQUssRUFBRSxFQUFFO0FBQ1QsY0FBTSxFQUFFLEVBQUU7S0FDYixDQUFBOztBQUVELFFBQUksR0FBRyxHQUFHO0FBQ04sU0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3JCLFNBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUN4QixDQUFDO0FBQ0YsUUFBSSxZQUFZLEdBQUc7QUFDZixTQUFDLEVBQUUsQ0FBQztBQUNKLFNBQUMsRUFBRSxDQUFDO0tBQ1AsQ0FBQztBQUNGLFFBQU0sV0FBVyxHQUFHO0FBQ2hCLG1CQUFTLENBQUM7QUFDVixlQUFPLEVBQUUsQ0FBQztLQUNiLENBQUM7QUFDRixRQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdkIsUUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDOztBQUV0QixRQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDckIsUUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDOztBQUV4QixRQUFNLGNBQWMsR0FBRyxTQUFqQixjQUFjLENBQUksS0FBSyxFQUFLO0FBQzlCLFlBQU0sUUFBUSxHQUFHLGdDQUFrQixXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkQsWUFBSSxlQUFlLEdBQUcseUNBQTJCLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVGLFlBQUksTUFBTSxZQUFBLENBQUM7O0FBRVgsdUJBQWUsR0FBRyx5Q0FBMkIsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoRix1QkFBZSxHQUFHLDZDQUErQixlQUFlLEVBQUUsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3RHLGNBQU0sR0FBRywyQkFBYSxHQUFHLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7QUFHdEQsV0FBRyxHQUFZLE1BQU0sQ0FBQTtBQUNyQixvQkFBWSxHQUFHLGVBQWUsQ0FBQztBQUMvQixtQkFBVyxHQUFTLEtBQUssQ0FBQztLQUM3QixDQUFBOztBQUVELFFBQU0sS0FBSyxHQUFHLFNBQVIsS0FBSyxDQUFJLElBQUksRUFBSztBQUNwQixtQkFBVyxHQUFHLElBQUksQ0FBQztLQUN0QixDQUFBOztBQUVELFFBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWM7ZUFBUyxXQUFXO0tBQUEsQ0FBQzs7QUFFekMsUUFBTSxlQUFlLEdBQUcsU0FBbEIsZUFBZSxDQUFHLElBQUk7ZUFBSSxpQ0FBb0IsY0FBYyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FBQSxDQUFDOztBQUU1RSxRQUFNLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBRyxHQUFHLEVBQUk7QUFDbEIsa0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQixjQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ3pDLENBQUE7O0FBRUQsUUFBTSxVQUFVLEdBQUcsU0FBYixVQUFVLENBQUksR0FBRyxFQUFLO0FBQ3hCLFdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNoQixXQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN2QixXQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1RCxXQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDZCxDQUFBOztBQUVELFFBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWM7ZUFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO0tBQUEsQ0FBQzs7QUFFakcsUUFBTSxNQUFNLEdBQUcsU0FBVCxNQUFNO2VBQVMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQztLQUFBLENBQUM7O0FBRXhELFFBQU0sTUFBTSxHQUFHO0FBQ1gsc0JBQWMsRUFBZCxjQUFjO0FBQ2Qsc0JBQWMsRUFBZCxjQUFjO0FBQ2Qsc0JBQWMsRUFBZCxjQUFjO0FBQ2QsdUJBQWUsRUFBZixlQUFlO0FBQ2YsY0FBTSxFQUFOLE1BQU07QUFDTixhQUFLLEVBQUwsS0FBSztBQUNMLGNBQU0sRUFBTixNQUFNO0tBQ1QsQ0FBQTs7QUFFRCxXQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztDQUM1QyxDQUFDOztRQUVPLE1BQU0sR0FBTixNQUFNIiwiZmlsZSI6Ii9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL3BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBIZWFsdGggfSBmcm9tICcuL2hlYWx0aC5qcyc7XG5pbXBvcnQgeyBkZXRlY3RDb2xsaXNpb24gYXMgZGV0ZWN0Q29sbGlzaW9uQ2FsYyB9IGZyb20gJy4vY29sbGlzaW9ucyc7XG5pbXBvcnQge1xuICAgIGNhbGN1bGF0ZVZlbG9jaXR5LFxuICAgIGNhbGN1bGF0ZUlucHV0QWNjZWxlcmF0aW9uLFxuICAgIGNhbGN1bGF0ZUlucHV0RGVjZWxlcmF0aW9uLFxuICAgIGNhbGN1bGF0ZUNvbGxpc2lvbkFjY2VsZXJhdGlvbixcbiAgICBjYWxjdWxhdGVQb3Ncbn0gZnJvbSAnLi9tb3ZhYmxlJztcblxuY29uc3QgUGxheWVyID0gKGNvbnN0cmFpbnRzKSA9PiB7XG4gICAgbGV0IGhlYWx0aCA9IEhlYWx0aCgpO1xuXG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHtcbiAgICAgICAgd2lkdGg6IDgwLFxuICAgICAgICBoZWlnaHQ6IDgwXG4gICAgfVxuXG4gICAgbGV0IHBvcyA9IHtcbiAgICAgICAgeDogY29uc3RyYWludHNbMF0gLyAyLFxuICAgICAgICB5OiBjb25zdHJhaW50c1sxXSAvIDJcbiAgICB9O1xuICAgIGxldCBhY2NlbGVyYXRpb24gPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICB9O1xuICAgIGNvbnN0IHZlbG9jaXR5TWFwID0ge1xuICAgICAgICBkZWZhdWx0OiA1LFxuICAgICAgICBydW5uaW5nOiA3XG4gICAgfTtcbiAgICBjb25zdCBhY2NlbFN0ZXAgPSAuMDI1O1xuICAgIGNvbnN0IGRlY2VsU3RlcCA9IC4wNTtcblxuICAgIGxldCBkYW1hZ2VQb3dlciA9IDI1O1xuICAgIGxldCBpc1JlcGVsbGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSAoaW5wdXQpID0+IHtcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBjYWxjdWxhdGVWZWxvY2l0eSh2ZWxvY2l0eU1hcCwgaW5wdXQpO1xuICAgICAgICBsZXQgbmV3QWNjZWxlcmF0aW9uID0gY2FsY3VsYXRlSW5wdXRBY2NlbGVyYXRpb24oYWNjZWxlcmF0aW9uLCBhY2NlbFN0ZXAsIGRlY2VsU3RlcCwgaW5wdXQpO1xuICAgICAgICBsZXQgbmV3UG9zO1xuXG4gICAgICAgIG5ld0FjY2VsZXJhdGlvbiA9IGNhbGN1bGF0ZUlucHV0RGVjZWxlcmF0aW9uKG5ld0FjY2VsZXJhdGlvbiwgZGVjZWxTdGVwLCBpbnB1dCk7XG4gICAgICAgIG5ld0FjY2VsZXJhdGlvbiA9IGNhbGN1bGF0ZUNvbGxpc2lvbkFjY2VsZXJhdGlvbihuZXdBY2NlbGVyYXRpb24sIGdldFBvcygpLCBjb25zdHJhaW50cywgaXNSZXBlbGxpbmcpO1xuICAgICAgICBuZXdQb3MgPSBjYWxjdWxhdGVQb3MocG9zLCBuZXdBY2NlbGVyYXRpb24sIHZlbG9jaXR5KTtcblxuICAgICAgICAvLyBNVVRBVElPTlNcbiAgICAgICAgcG9zICAgICAgICAgID0gbmV3UG9zXG4gICAgICAgIGFjY2VsZXJhdGlvbiA9IG5ld0FjY2VsZXJhdGlvbjtcbiAgICAgICAgaXNSZXBlbGxpbmcgICAgICAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCByZXBlbCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlzUmVwZWxsaW5nID0gZGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXREYW1hZ2VQb3dlciA9ICgpID0+IGRhbWFnZVBvd2VyO1xuXG4gICAgY29uc3QgZGV0ZWN0Q29sbGlzaW9uID0gaXRlbSA9PiBkZXRlY3RDb2xsaXNpb25DYWxjKGdldEJvdW5kaW5nQm94KCkpKGl0ZW0pO1xuXG4gICAgY29uc3QgcmVuZGVyID0gY3R4ID0+IHtcbiAgICAgICAgcmVuZGVyU2VsZihjdHgpO1xuICAgICAgICBoZWFsdGgucmVuZGVySGVhbHRoQmFyKGN0eCwgZ2V0UG9zKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNlbGYgPSAoY3R4KSA9PiB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMjIyJztcbiAgICAgICAgY3R4LnJlY3QocG9zLngsIHBvcy55LCBkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Qm91bmRpbmdCb3ggPSAoKSA9PiBbcG9zLngsIHBvcy54ICsgZGltZW5zaW9ucy53aWR0aCwgcG9zLnksIHBvcy55ICsgZGltZW5zaW9ucy5oZWlnaHRdO1xuXG4gICAgY29uc3QgZ2V0UG9zID0gKCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgcG9zLCBkaW1lbnNpb25zKTtcblxuICAgIGNvbnN0IG91dHB1dCA9IHtcbiAgICAgICAgdXBkYXRlUG9zaXRpb24sXG4gICAgICAgIGdldEJvdW5kaW5nQm94LFxuICAgICAgICBnZXREYW1hZ2VQb3dlcixcbiAgICAgICAgZGV0ZWN0Q29sbGlzaW9uLFxuICAgICAgICBnZXRQb3MsXG4gICAgICAgIHJlcGVsLFxuICAgICAgICByZW5kZXJcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3V0cHV0LCBoZWFsdGgpO1xufTtcblxuZXhwb3J0IHsgUGxheWVyIH07Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUksVUFBVSxFQUFFLEVBQUUsRUFBSztBQUNsQyxNQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2hELElBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsR0FBQyxFQUFFLENBQUM7RUFDSixDQUFDO0NBQ0YsQ0FBQTs7QUFFRCxJQUFNLE9BQU8sR0FBRyxTQUFWLE9BQU87bUNBQU8sSUFBSTtBQUFKLE1BQUk7OztRQUFLLFVBQUMsQ0FBQztTQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsR0FBRztVQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztHQUFBLEVBQUUsQ0FBQyxDQUFDO0VBQUE7Q0FBQSxDQUFDOztRQUU5RSxNQUFNLEdBQU4sTUFBTTtRQUFFLE9BQU8sR0FBUCxPQUFPIiwiZmlsZSI6Ii9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvYXBwL3Rvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVwZWF0ID0gKHNpbXNOZWVkZWQsIGZuKSA9PiB7XG5cdGZvciAodmFyIGkgPSBzaW1zTmVlZGVkIC0gMSwgeCA9IDA7IGkgPj0gMDsgaS0tKSB7XG5cdFx0Zm4oc2ltc05lZWRlZCwgeCk7XG5cdFx0eCsrO1xuXHR9O1xufVxuXG5jb25zdCBjb21wb3NlID0gKC4uLmFyZ3MpID0+ICh4KSA9PiBhcmdzLnJlZHVjZSgocHJldiwgY3VyKSA9PiBjdXIuY2FsbChjdXIsIHByZXYpLCB4KTtcblxuZXhwb3J0IHsgcmVwZWF0LCBjb21wb3NlIH0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvZmFrZV8yNGYwY2NiNy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7O3dCQUVVLGFBQWE7OytCQUNmLG9CQUFvQjs7Ozt1QkFDeEIsWUFBWTs7Ozt5QkFDTixjQUFjOzt3QkFDZixhQUFhOzt1QkFDbEIsWUFBWTs7OzsyQkFDUixnQkFBZ0I7Ozs7NkJBQ2Qsa0JBQWtCOzs7O0FBRXpDLENBQUMsQ0FBQyxZQUFVO0FBQ1gsS0FBTSxFQUFFLEdBQU0sZ0NBQVcsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxLQUFNLFFBQVEsR0FBUSwrQkFBVSxDQUFDO0FBQ2pDLEtBQU0sVUFBVSxHQUFNLDJCQUFNLENBQUM7QUFDN0IsS0FBTSxNQUFNLEdBQVUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4RCxLQUFNLEdBQUcsR0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDLEtBQUksRUFBRSxHQUFnQixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDeEQsS0FBSSxFQUFFLEdBQWdCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUMxRCxLQUFJLE1BQU0sR0FBWSx1QkFBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLEtBQUksS0FBSyxHQUFhLHFCQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEMsS0FBSSxLQUFLLEdBQWEsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1NBQUksMEJBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFBQSxDQUFDLENBQUM7QUFDeEUsS0FBSSxlQUFlLEdB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QUFDOztBQUVqQixZQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ3hCLENBQUE7O0FBRUQsbUNBQVMsSUFBSSxDQUFDLENBQUM7Q0FDZixDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiIvbW50L2Qvd3NsaG9tZS9zaXRlcy9CYXR0bGVncm91bmQvYXNzZXRzL2pzL2Zha2VfMjRmMGNjYjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcmVwZWF0IH0gZnJvbSAnLi9hcHAvdG9vbHMnO1xuaW1wb3J0IGRvbXJlYWR5IGZyb20gJy4vcGx1Z2lucy9kb21yZWFkeSc7XG5pbXBvcnQgTG9vcCBmcm9tICcuL2FwcC9sb29wJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vYXBwL3BsYXllcic7XG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vYXBwL2VuZW15JztcbmltcG9ydCBJdGVtIGZyb20gJy4vYXBwL2l0ZW0nO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4vYXBwL2tleWJvYXJkJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vYXBwL2JhY2tncm91bmQnO1xuXG47KGZ1bmN0aW9uKCl7XG5cdGNvbnN0IGJnIFx0XHRcdD0gQmFja2dyb3VuZCgnYXNzZXRzL2ltZy9ncmFzcy10ZXh0dXJlLmpwZycpO1xuXHRjb25zdCBrZXlib2FyZCAgICAgID0gS2V5Ym9hcmQoKTtcblx0Y29uc3QgbWFzdGVyTG9vcCAgICA9IExvb3AoKTtcblx0Y29uc3QgY2FudmFzICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblx0Y29uc3QgY3R4ICAgICAgICAgICA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRsZXQgY3cgICAgICAgICAgICAgID0gY2FudmFzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoO1xuXHRsZXQgY2ggICAgICAgICAgICAgID0gY2FudmFzLmhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cdGxldCBwbGF5ZXIgICAgICAgICAgPSBQbGF5ZXIoW2N3LCBjaF0pO1xuXHRsZXQgZW5lbXkgICAgICAgICAgID0gRW5lbXkoW2N3LCBjaF0pO1xuXHRsZXQgaXRlbXMgICAgICAgICAgID0gQXJyYXkuZnJvbShBcnJheSgyMCkpLm1hcChpdGVtID0+IEl0ZW0oW2N3LCBjaF0pKTtcblx0bGV0IHVuY29sbGlkZWRJdGVtcyA9IGl0ZW1zO1xuXG5cdC8vIFRoaXMgd2lsbCBydW4gb24gZG9jdW1lbnQgcmVhZHlcblx0Y29uc3QgaW5pdCA9IGZ1bmN0aW9uKCl7XG5cblx0XHRjb25zdCBmcmFtZSA9IHQgPT4ge1xuXHRcdFx0bGV0IHNpbXNOZWVkZWQgPSBfY2FsY3VsYXRlU2ltdWxhdGlvaW5zKHQpO1xuXHRcdFx0bGV0IGNhbWVyYTtcblxuXHRcdFx0X3NpbXVsYXRlKHBsYXllciwgZW5lbXkpO1xuXG5cdFx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGN3LCBjaCk7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y2FtZXJhID0gX2NhbGN1bGF0ZUNhbWVyYVRyYW5zbGF0aW9uKFswLDBdLCBwbGF5ZXIuZ2V0UG9zKCksIGN3LCBjaCk7XG5cdFx0XHRjdHgudHJhbnNsYXRlKC4uLmNhbWVyYSk7XG5cdFx0XHRiZy5yZW5kZXIoY3R4LFtjdyxjaF0sY2FtZXJhKTtcblx0XHRcdHVuY29sbGlkZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW5kZXIoY3R4KSk7XG5cdFx0XHRwbGF5ZXIucmVuZGVyKGN0eCk7XG5cdFx0XHRlbmVteS5yZW5kZXIoY3R4KTtcblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cblx0XHRcdGl0ZW1zID0gdW5jb2xsaWRlZEl0ZW1zO1xuXHRcdH1cblxuXHRcdC8vIFVOUFVSRSBBUyBGVUNLXG5cdFx0Y29uc3QgX3NpbXVsYXRlID0gKHBsYXllciwgZW5lbXkpID0+IHtcblx0XHRcdGNvbnN0IHBsYXllclBvcyAgICAgICAgID0gcGxheWVyLmdldFBvcygpO1xuXHRcdFx0Y29uc3QgdW5jb2xsaWRlZEl0ZW1Qb3MgPSB1bmNvbGxpZGVkSXRlbXMubGVuZ3RoID8gdW5jb2xsaWRlZEl0ZW1zWzBdLmdldFBvcygpIDogZmFsc2U7XG5cblx0XHRcdGNvbnN0IHBsYXllclRvRW5lbXlDb2xsaXNpb24gPSBwbGF5ZXIuZGV0ZWN0Q29sbGlzaW9uKGVuZW15LmdldEJvdW5kaW5nQm94KCkpO1xuXHRcdFx0Y29uc3QgZW5lbXlUb1BsYXllckNvbGxpc2lvbiA9IGVuZW15LmRldGVjdENvbGxpc2lvbihwbGF5ZXIuZ2V0Qm91bmRpbmdCb3goKSk7XG5cblx0XHRcdGlmKHBsYXllclRvRW5lbXlDb2xsaXNpb24pIHtcblx0XHRcdFx0cGxheWVyLnJlcGVsKHBsYXllclRvRW5lbXlDb2xsaXNpb24pO1xuXHRcdFx0XHRlbmVteS5odXJ0KHBsYXllci5nZXREYW1hZ2VQb3dlcigpKTtcblx0XHRcdH1cblx0XHRcdGlmKGVuZW15VG9QbGF5ZXJDb2xsaXNpb24pIHtcblx0XHRcdFx0ZW5lbXkucmVwZWwoZW5lbXlUb1BsYXllckNvbGxpc2lvbik7XG5cdFx0XHRcdHBsYXllci5odXJ0KGVuZW15LmdldERhbWFnZVBvd2VyKCkpO1xuXHRcdFx0fVxuXG5cdFx0XHR1bmNvbGxpZGVkSXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiAhaXRlbS5pc0NvbGxlY3RlZCgpKTtcblx0XHRcdHBsYXllci51cGRhdGVQb3NpdGlvbihrZXlib2FyZC5nZXRTdGF0ZSgpKTtcblx0XHRcdGVuZW15LnVwZGF0ZVBvc2l0aW9uKHBsYXllclBvcywgdW5jb2xsaWRlZEl0ZW1Qb3MpO1xuXG5cdFx0XHRjb25zdCBwbGF5ZXJDb2xsZWN0SXRlbXMgPSB1bmNvbGxpZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gcGxheWVyLmRldGVjdENvbGxpc2lvbihpdGVtLmdldEJvdW5kaW5nQm94KCkpKTtcblx0XHRcdGNvbnN0IGVuZW15Q29sbGVjdEl0ZW1zID0gdW5jb2xsaWRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGVuZW15LmRldGVjdENvbGxpc2lvbihpdGVtLmdldEJvdW5kaW5nQm94KCkpKTtcblxuXHRcdFx0cGxheWVyLmhlYWwocGxheWVyQ29sbGVjdEl0ZW1zLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICsgY3VyLmNvbGxlY3QoKSwgMCkpO1xuXHRcdFx0ZW5lbXkuaGVhbChlbmVteUNvbGxlY3RJdGVtcy5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldiArIGN1ci5jb2xsZWN0KCksIDApKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IF9jYWxjdWxhdGVDYW1lcmFUcmFuc2xhdGlvbiA9IChjYW1lcmEsIHBsYXllclBvcywgY3csIGNoKSA9PiB7XG5cdFx0XHRjb25zdCBwbGF5ZXJYID0gcGxheWVyUG9zLnggKyAocGxheWVyUG9zLndpZHRoIC8gMik7XG5cdFx0XHRjb25zdCBwbGF5ZXJZID0gcGxheWVyUG9zLnkgKyAocGxheWVyUG9zLmhlaWdodCAvIDIpO1xuXHRcdFx0bGV0IGJ1ZmZlciA9IE1hdGgubWluKGN3LCBjaCkgKiAuMjtcblx0XHRcdGxldCBbYlQsIGJSLCBiQiwgYkxdID0gW2NoIC0gYnVmZmVyLCBjdyAtIGJ1ZmZlciwgYnVmZmVyLCBidWZmZXJdLm1hcCh4ID0+IE1hdGgucm91bmQoeCkpO1xuXG5cdFx0XHRpZihwbGF5ZXJYIDwgKGJMIC0gY2FtZXJhWzBdKSkgY2FtZXJhWzBdIC09IHBsYXllclggLSAoYkwgLSBjYW1lcmFbMF0pO1xuXHRcdFx0aWYocGxheWVyWCA+IChiUiAtIGNhbWVyYVswXSkpIGNhbWVyYVswXSAtPSBwbGF5ZXJYIC0gKGJSIC0gY2FtZXJhWzBdKTtcblx0XHRcdGlmKHBsYXllclkgPCAoYkIgLSBjYW1lcmFbMV0pKSBjYW1lcmFbMV0gLT0gcGxheWVyWSAtIChiQiAtIGNhbWVyYVsxXSk7XG5cdFx0XHRpZihwbGF5ZXJZID4gKGJUIC0gY2FtZXJhWzFdKSkgY2FtZXJhWzFdIC09IHBsYXllclkgLSAoYlQgLSBjYW1lcmFbMV0pO1xuXG5cdFx0XHRyZXR1cm4gY2FtZXJhO1xuXHRcdH1cblxuXHRcdGNvbnN0IF9jYWxjdWxhdGVTaW11bGF0aW9pbnMgPSAoKCkgPT4ge1xuXHRcdFx0Y29uc3QgZnBzICAgICAgID0gNjA7XG5cdFx0XHRjb25zdCB0aWNrICAgICAgPSAxMDAwIC8gZnBzO1xuXHRcdFx0bGV0IGFjY3VtdWxhdG9yID0gMDtcblx0XHRcdGxldCBzaW1zTmVlZGVkICA9IDA7XG5cdFx0XHRcdFxuXHRcdFx0cmV0dXJuIHQgPT4ge1xuXHRcdFx0XHQvLyBjYWxjdWxhdGUgc2ltdWxhdGFpb25zIG5lZWRlZFxuXHRcdFx0XHRhY2N1bXVsYXRvciArPSB0O1xuXHRcdFx0XHRzaW1zTmVlZGVkID0gTWF0aC5mbG9vcihhY2N1bXVsYXRvciAvIHRpY2spO1xuXHRcdFx0XHRhY2N1bXVsYXRvciAtPSBzaW1zTmVlZGVkICogdGljaztcblx0XHRcdFx0cmV0dXJuIHNpbXNOZWVkZWQ7XG5cdFx0XHR9XG5cdFx0fSkoKTtcblxuXHRcdGtleWJvYXJkLnN0YXJ0KCk7XG5cblx0XHRtYXN0ZXJMb29wLnN0YXJ0KGZyYW1lKTtcblx0fVxuXG5cdGRvbXJlYWR5KGluaXQpO1xufSkoKTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvcGx1Z2lucy9kb21yZWFkeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxDQUFDLENBQUEsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsU0FBTyxNQUFNLElBQUUsV0FBVyxHQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUMsQ0FBQyxFQUFFLEdBQUMsT0FBTyxNQUFNLElBQUUsVUFBVSxJQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsSUFBRSxRQUFRLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQTtDQUFDLENBQUEsQ0FBQyxVQUFVLEVBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUM7QUFBQyxLQUFDLEdBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQTtHQUFDLElBQUksQ0FBQyxHQUFDLEVBQUU7TUFBQyxDQUFDO01BQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztNQUFDLENBQUMsR0FBQyxRQUFRO01BQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxlQUFlO01BQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxRQUFRO01BQUMsQ0FBQyxHQUFDLGtCQUFrQjtNQUFDLENBQUMsR0FBQyxrQkFBa0I7TUFBQyxDQUFDLEdBQUMsb0JBQW9CO01BQUMsQ0FBQyxHQUFDLFlBQVk7TUFBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLFlBQVksR0FBQyxXQUFXO01BQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsWUFBVTtBQUFDLEtBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFlBQVU7QUFBQyxRQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQTtHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsUUFBSSxJQUFFLEdBQUcsR0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFBLFlBQVU7QUFBQyxVQUFHO0FBQUMsU0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtPQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxlQUFPLFVBQVUsQ0FBQyxZQUFVO0FBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBRSxDQUFBO0tBQUMsQ0FBQSxFQUFFLENBQUE7R0FBQyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsS0FBQyxHQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxDQUFBO0NBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Ii9tbnQvZC93c2xob21lL3NpdGVzL0JhdHRsZWdyb3VuZC9hc3NldHMvanMvcGx1Z2lucy9kb21yZWFkeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISAqIGRvbXJlYWR5IChjKSBEdXN0aW4gRGlheiAyMDEyIC0gTGljZW5zZSBNSVQgKi9cbiFmdW5jdGlvbihlLHQpe3R5cGVvZiBtb2R1bGUhPVwidW5kZWZpbmVkXCI/bW9kdWxlLmV4cG9ydHM9dCgpOnR5cGVvZiBkZWZpbmU9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGRlZmluZS5hbWQ9PVwib2JqZWN0XCI/ZGVmaW5lKHQpOnRoaXNbZV09dCgpfShcImRvbXJlYWR5XCIsZnVuY3Rpb24oZSl7ZnVuY3Rpb24gcChlKXtoPTE7d2hpbGUoZT10LnNoaWZ0KCkpZSgpfXZhciB0PVtdLG4scj0hMSxpPWRvY3VtZW50LHM9aS5kb2N1bWVudEVsZW1lbnQsbz1zLmRvU2Nyb2xsLHU9XCJET01Db250ZW50TG9hZGVkXCIsYT1cImFkZEV2ZW50TGlzdGVuZXJcIixmPVwib25yZWFkeXN0YXRlY2hhbmdlXCIsbD1cInJlYWR5U3RhdGVcIixjPW8/L15sb2FkZWR8XmMvOi9ebG9hZGVkfGMvLGg9Yy50ZXN0KGlbbF0pO3JldHVybiBpW2FdJiZpW2FdKHUsbj1mdW5jdGlvbigpe2kucmVtb3ZlRXZlbnRMaXN0ZW5lcih1LG4scikscCgpfSxyKSxvJiZpLmF0dGFjaEV2ZW50KGYsbj1mdW5jdGlvbigpey9eYy8udGVzdChpW2xdKSYmKGkuZGV0YWNoRXZlbnQoZixuKSxwKCkpfSksZT1vP2Z1bmN0aW9uKG4pe3NlbGYhPXRvcD9oP24oKTp0LnB1c2gobik6ZnVuY3Rpb24oKXt0cnl7cy5kb1Njcm9sbChcImxlZnRcIil9Y2F0Y2godCl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKG4pfSw1MCl9bigpfSgpfTpmdW5jdGlvbihlKXtoP2UoKTp0LnB1c2goZSl9fSk7Il19
},{}]},{},[11])