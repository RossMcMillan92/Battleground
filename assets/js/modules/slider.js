/* ----------------

	Example:

	var Slider = require('./modules/slider'),
		basicSliders = querySelectorAll('.js-slider');

	for (var i = basicSliders.length - 1; i >= 0; i--) {
		Slider.init(basicSliders[i], {
			autoSlide: 15
		});
	};

---------------- */

var Slider = (function(){

	"use strict";

	var Tools = require('./tools.js'),
		Slider;

	Slider = function(element, options){
		var self = this;

		if(element === null) return;

		self.options = {
			fadeTime: .5,

			counter: false,
			autoSlide: false,

			slideSelector: 			'js-slide',
			controlLeftSelector: 	'js-control--left',
			controlRightSelector: 	'js-control--right',
			controlRadioSelector: 	'js-control--radio',

			activeClass: 			'is-active',
			outroClass: 			'is-fading-out',
			introClass: 			'is-fading-in',
			autoSlideStartClass: 	'has-started'
		}

		for(var key in options){
			self.options[key] = options[key];
		}

		self.$parent = element;
		self.$slides = element.querySelectorAll('.'+self.options.slideSelector);
		self.$radios = element.querySelectorAll('.'+self.options.controlRadioSelector);
		self.$controlLeft = element.querySelectorAll('.'+self.options.controlLeftSelector);
		self.$controlRight = element.querySelectorAll('.'+self.options.controlRightSelector);

		self.slideNum = self.$slides.length

		// find the current slide based on 'is-active' class
		self.slideCur = (function(){
			for (var i = 0; i < self.$slides.length; i++) {
				if(self.$slides[i].classList.contains(self.options.activeClass)) return i;
			};
			return 0;
		})();
		self.isFading = false;
		self.slideTimer = false;

		// fix binding
		self._autoSlide = self._autoSlide.bind(self);

		self._bindControls();
		if(self.options.counter) self._updateCounter();
		if(self.options.autoSlide) {
			element.classList.add(self.options.autoSlideStartClass);
			self._autoSlide();
		}
	}

	Slider.prototype._bindControls = function() {
		var self = this;
	
		function eventLeft(e){
			e.preventDefault();
			gotoSlide({'scroll': -1})
		}
		function eventRight(e){
			e.preventDefault();
			gotoSlide({'scroll': 1})
		}
		function eventRadio(e){
			e.preventDefault();
			var target = this.getAttribute('data-target_slide');
			gotoSlide({'target': target}, this)
		}

		if(self.$controlLeft.length){
			for (var i = self.$controlLeft.length - 1; i >= 0; i--) {
				self.$controlLeft[i].addEventListener('click', eventLeft, false);
			};
		}

		if(self.$controlRight.length){
			for (var i = self.$controlRight.length - 1; i >= 0; i--) {
				self.$controlRight[i].addEventListener('click', eventRight, false);
			};
		}

		if(self.$radios.length){
			for (var i = self.$radios.length - 1; i >= 0; i--) {
				self.$radios[i].addEventListener('click', eventRadio, false);
			};
		}

		function gotoSlide(target, radio){
			if(self.isFading) return;
			if(typeof radio !== "undefined"){
				if(radio.classList.contains(self.options.activeClass)) return;
			}
			if(self.slideTimer) clearInterval(self.slideTimer);
			self._slide(target);
			if(self.slideTimer) self._autoSlide();
		}
	}

	Slider.prototype._updateRadios = function() {
		var self = this;

		// reasign radio active class
		for (var i = self.$radios.length - 1; i >= 0; i--) {
			self.$radios[i].classList.remove(self.options.activeClass);
		};
		self.$radios[self.slideCur].classList.add(self.options.activeClass);
	};

	Slider.prototype._updateCounter = function() {
		var self = this,
			$counter = self.$parent.find(self.options.counter);

		$counter.html((self.slideCur + 1) + ' <span class="divider">/</span> '+self.slideNum)
	};

	Slider.prototype._autoSlide = function() {
		var self = this;

		self.slideTimer = setTimeout(function(){
			self._slide({'scroll': 1});
			self._autoSlide()
		}, self.options.autoSlide * 1000);
	};

	Slider.prototype._slide = function(dir){
		var self = this,
			$slideCur = self.$parent.querySelector('.'+self.options.slideSelector+'.'+self.options.activeClass) ? self.$parent.querySelector('.'+self.options.slideSelector+'.'+self.options.activeClass) : self.$slides[0] ,
			slideNew = 	typeof dir['scroll'] !== "undefined"
						? (self.slideCur + dir['scroll'] > (self.slideNum-1) ? 0 : (self.slideCur + dir['scroll'] < 0 ? (self.slideNum-1) : self.slideCur + dir['scroll']))
						: parseInt(dir['target']) >= self.slideNum ? 0 : parseInt(dir['target']),
			$slideNew = self.$slides[slideNew];

		$slideCur.classList.add(self.options.outroClass);
		$slideCur.classList.remove(self.options.activeClass);
		$slideNew.classList.add(self.options.introClass)

		self.isFading = true;

		setTimeout(function(){
			$slideCur.classList.remove(self.options.outroClass);
			$slideNew.classList.remove(self.options.introClass)
			$slideNew.classList.add(self.options.activeClass)

			self.isFading = false;
		}, self.options.fadeTime * 1000);

		self.slideCur = slideNew;
		
		if(self.options.counter) self._updateCounter();
		if(self.$radios.length) self._updateRadios();
	};

    return {
    	init: function(element, options){
    		var slider = new Slider(element, options)
    		return {
    			slideTo: function(target){
    				slider._slide({target});
    			},
    			slideForward: function(){
    				slider._slide({'scroll': 1});
    			},
    			slideBackward: function(){
    				slider._slide({'scroll': -1});
    			}
    		}
    	}
    };
})();

module.exports = Slider;