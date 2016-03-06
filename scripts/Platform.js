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
	
	// Constants
	/** {Number} The amount by which a player on a platform should overlap the platform */
	Platform.PLAYER_OVERLAP = 0.01;
	
	Platform.prototype = Object.create(GameObject.prototype);
	
	/**
	 * Draw the platform to the game canvas.
	 * @param {CanvasRenderingContext2D} ctx - The rendering context of the game canvas
	 * @param {Number} scaleFactor - The ratio of pixel to game grid square
	 * @override
	 */
	Platform.prototype.draw = function (ctx, scaleFactor, screenScroll) {
		ctx.save();
		ctx.fillStyle = (this._color);
		ctx.fillRect((this.x + screenScroll) * scaleFactor, this.y * scaleFactor, this.width * scaleFactor, this.height * scaleFactor);
		ctx.restore();
	};
	
	return Platform;
})();
