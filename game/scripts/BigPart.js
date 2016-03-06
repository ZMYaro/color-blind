var BigPart = (function () {
	'use strict';
	
	/**
	 * Create a new big machine part instance.
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} levelNum - Which level big machine part is from
	 */
	function BigPart(x, y, levelNum) {
		Collectible.call(this, x, y, BigPart.WIDTH, BigPart.HEIGHT);
		
		this._levelNum = levelNum;
	}
	
	BigPart.WIDTH = 2;
	BigPart.HEIGHT = 2;
	
	BigPart.prototype = Object.create(Collectible.prototype);
	
	/**
	 * Draw the platform to the game canvas.
	 * @param {CanvasRenderingContext2D} ctx - The rendering context of the game canvas
	 * @param {Number} scaleFactor - The ratio of pixel to game grid square
	 * @override
	 */
	BigPart.prototype.draw = function (ctx, scaleFactor, screenScroll) {
		ctx.fillStyle = '#ff60e0';
		ctx.fillRect((this.x + screenScroll) * scaleFactor, this.y * scaleFactor, BigPart.WIDTH * scaleFactor, BigPart.HEIGHT * scaleFactor);
	};
	
	/**
	 * Handle the collectible being collected.
	 * @param {Game} game - The game instance in which the collectible was collected
	 */
	BigPart.prototype.collect = function (game) {
		// TODO: Go to the next level.
	};
	
	return BigPart;
})();