const Background = (url) => {
	const image = new Image();
	
	let hasLoaded = false;
	image.onload = () => hasLoaded = true;
	image.src = url;

    const render = (ctx, constraints, camera) => {
    	if(!hasLoaded) return;
    	const [width, height] = constraints;
		const pattern = ctx.createPattern(image, 'repeat');

		ctx.rect(0, 0, width, height);
		ctx.fillStyle = pattern;
		ctx.fill();
    }

    return {
    	render
    };
}

export default Background;
