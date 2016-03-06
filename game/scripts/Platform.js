var Platform = (function() {
	'use strict';
	
	/**
	 * Create a new Platform instance.
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 * @param {String} color - The platform's color as a CSS color
	 */
	function Platform(x, y, width, height, color) {
		GameObject.apply(this, arguments);
		
		this._color = color;
	}
	
	Platform.prototype = Object.create(GameObject.prototype);
	
	/**
	 * Draw the platform to the game canvas.
	 * @param {CanvasRenderingContext2D} ctx - the drawing context on which the collectible will be drawn
	 * @param {Number} scaleFactor - The ratio of pixel to game grid square
	 */
	draw: function(ctx, scaleFactor) {
		ctx.save();
		ctx.fillStyle(color);
		ctx.fillRect(x * scaleFactor y * scaleFactor width * scaleFactor height * scaleFactor);
		ctx.restore();
	}
	
	return Platform;
})();
