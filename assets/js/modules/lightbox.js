import Hammer from '../libs/hammer';

let Lightbox = module.exports = (function() {

	"use strict";

	let instance;

	function lightbox() {

		let $body = document.body,
			Tools = require('./tools'),

			$lightbox,
			$lightbox__bgclose,
			$lightbox__content,
			$lightbox__close,

			isBuilt = false,
			isHidden = false,

			thisRes = false,
			thisRej = false,

			animateTime = .3; // s

		function _build() {
			if(isBuilt) return false;

			let $$lightbox = document.createElement('div'),
				$$lightbox__bgclose = document.createElement('div'),
				$$lightbox__wrapper = document.createElement('div'),
				$$lightbox__content = document.createElement('div'),
				$$lightbox__close = document.createElement('div');

			$$lightbox.className = 'lightbox';
			$$lightbox__bgclose.className = 'lightbox__bgclose';
			$$lightbox__wrapper.className = 'lightbox__wrapper';
			$$lightbox__content.className = 'lightbox__content';
			$$lightbox__close.className = 'lightbox__close';

			$$lightbox__close.innerHTML = '&times;';

			$$lightbox__wrapper.appendChild($$lightbox__content);
			$$lightbox__wrapper.appendChild($$lightbox__close);

			$$lightbox.appendChild($$lightbox__bgclose);
			$$lightbox.appendChild($$lightbox__wrapper);

			document.body.appendChild($$lightbox);

			$lightbox = $$lightbox;
			$lightbox__bgclose = $$lightbox__bgclose;
			$lightbox__content = $$lightbox__content;
			$lightbox__close = $$lightbox__close;

			_bindings();

			isBuilt = true
			return isBuilt;
		}

		function _bindings() {
		    let hammerBgClose = new Hammer($lightbox__bgclose);
		    let hammerClose = new Hammer($lightbox__close);

			// $lightbox__bgclose.addEventListener('click', _destroy);
			// $lightbox__close.addEventListener('click', _destroy);

			hammerBgClose.on('tap', _destroy)
			hammerClose.on('tap', _destroy)
		}

		function _insertData(data) {
			// insert data to lightbox__content
			$lightbox__content.innerHTML = data;
		}

		function _appendHTML(data) {
			// insert data to lightbox__content
			$lightbox__content.appendChild(data);
		}

		function _createConfirmWindow(data, res, rej) {
			let formFrag = document.createDocumentFragment();
			let messageContainer = document.createElement('p');
			let yesButton = document.createElement('button');
			let noButton = document.createElement('button');

		    let hammerYes = new Hammer(yesButton);
		    let hammerNo = new Hammer(noButton);

			messageContainer.innerHTML = data;
			yesButton.innerHTML = 'Yes';
			noButton.innerHTML = 'No';

			yesButton.className = 'lightbox__button lightbox__button--yes btn btn--secondary btn--rounded';
			noButton.className = 'lightbox__button lightbox__button--no btn btn--plain btn--rounded';

			hammerYes.on('tap', () => {
				thisRes();
				_removePromiseFns()
				_destroy();
			});
			hammerNo.on('tap', () => {
				thisRej();
				_removePromiseFns()
				_destroy();
			});

			formFrag.appendChild(messageContainer);
			formFrag.appendChild(yesButton);
			formFrag.appendChild(noButton);

			_appendHTML(formFrag);
		}

		function _show() {
			// set classes
			$lightbox.classList.remove('is-hidden');
			$body.classList.add('lightbox-is-active');

			requestAnimationFrame(function() {
				$lightbox.classList.add('is-animating-in');
			})

			setTimeout(() => {
				requestAnimationFrame(function() {
					$lightbox.classList.remove('is-animating-in');
					$lightbox.classList.add('is-visible');
				})
			}, 1500);

			isHidden = false
			return true;
		}

		function _hide() {
			if(isHidden) return false;

			// hide dom object
			$lightbox.classList.remove('is-visible');
			$lightbox.classList.add('is-hidden');
			$body.classList.remove('lightbox-is-active');

			isHidden = true
			return true;
		}

		function _destroy() {
			if(!isBuilt) return false;

			_hide();
			setTimeout(function() {
				if(thisRej) thisRej();
				_removePromiseFns()
				$lightbox.parentNode.removeChild($lightbox);
			}, animateTime * 1000);

			isBuilt = false;
			return true;
		}

		function _removePromiseFns() {
			thisRej = false;
			thisRes = false;
		}

		function _ajax(url, callback) {
			let ajax = $.ajax(url);

			ajax.done(function(ajaxData) {
				runCallbacks(ajaxData);
			});

			ajax.fail(function() {
				runCallbacks('FAILED TO CONNECT')
			})

			function runCallbacks(data) {
				if(typeof callback[0] !== "undefined") {
					for (let i = callback.length - 1; i >= 0; i--) {
						callback[i](data);
					};
					return;
				}
				if(typeof callback !== "undefined") callback(data);
			}
		}

		return {
			display: function(data, callback) {
				return new Promise((res, rej) => {
						
					_build();

					function show() {
						if(typeof data !== "undefined") {
							// _insertData(data);
							// _show();
							if(confirm('Are you sure?')) {
								res();
							} else {
								rej();
							}
						} 
					}
					requestAnimationFrame(show);
				})
			},

			confirm: function(data, callback) {
				return new Promise((res, rej) => {
						
					_build();

					function show() {
						if(typeof data !== "undefined") {
							thisRes = res;
							thisRej = rej;

							_createConfirmWindow(data, res, rej);
							_show();
							// if(confirm('Are you sure?')) {
							// 	res();
							// } else {
							// 	rej();
							// }
						} 
					}
					requestAnimationFrame(show);
				})
			},

			hide: function() {
				return _hide();
			},

			destroy: function() {
				return _destroy();
			}
		}

	}

	return {
		getInstance: function() {
			if(!instance) {
				instance = lightbox();
			}

			return instance;
		}
	}
})();