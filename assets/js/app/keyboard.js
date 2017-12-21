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
		65: 'left', 
		87: 'up', 
		68: 'right', 
		83: 'down', 
		16: 'shift', 
		32: 'space' 
	};

	const start = () => {
		document.addEventListener('keydown', _onKeyDown, false);
		document.addEventListener('keyup', _onKeyUp, false);
	}

	const stop = () => {
		document.removeEventListener('keydown', _onKeyDown, false);
		document.removeEventListener('keyup', _onKeyUp, false);
	}

	const getState = () => state;

	const _onKeyDown = (e) => _onKey(e, true);

	const _onKeyUp = (e) => _onKey(e, false);

	const _onKey = (e, value) => {
		const binding = bindings[e.keyCode];
		
		if (!binding) return;

		state[binding] = value;

		e.preventDefault && e.preventDefault();
		e.stopPropagation && e.stopPropagation();
	}

	return {
		start,
		stop,
		getState
	};
}

export default Keyboard;