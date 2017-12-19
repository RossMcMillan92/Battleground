const CanvasImage = (url, width, height) => {
	const image = new Image()
	
	let hasLoaded = false
	image.onload = () => hasLoaded = true
	image.src = url

    const render = (ctx, x, y, flipped) => {
		if(!hasLoaded) return
		drawImage(ctx, image, x, y, width, height, 0, flipped, false, false)
    }

    return {
    	render
    }
}

function drawImage(ctx, img, x, y, width, height, deg, flip, flop, center) {

	ctx.save();
	
	if(typeof width === "undefined") width = img.width;
	if(typeof height === "undefined") height = img.height;
	if(typeof center === "undefined") center = false;
	
	// Set rotation point to center of image, instead of top/left
	if(center) {
		x -= width/2;
		y -= height/2;
	}
	
	// Set the origin to the center of the image
	ctx.translate(x + width/2, y + height/2);
	
	// Rotate the canvas around the origin
	var rad = 2 * Math.PI - deg * Math.PI / 180;    
	ctx.rotate(rad);
	
	let flipScale
	let flopScale
	// Flip/flop the canvas
	if(flip) flipScale = -1; else flipScale = 1;
	if(flop) flopScale = -1; else flopScale = 1;
	ctx.scale(flipScale, flopScale);
	
	// Draw the image    
	ctx.drawImage(img, -width/2, -height/2, width, height);
	
	ctx.restore();
	}

export default CanvasImage
