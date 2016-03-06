var Bolt = (function() {
	'use strict';
	
	/**
	 * Create a new Bolt instance.
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	function Bolt(x, y, width, height) {
		Collectible.apply(this, arguments);

		this._spriteSheet = "bolt.png";
	}
	
	Bolt.prototype = Object.create(Collectible.prototype);
	
	/**
	 * Draw the platform to the game canvas.
	 * @param {CanvasRenderingContext2D} ctx - the drawing context on which the collectible will be drawn
	 * @param {Number} scaleFactor - The ratio of pixel to game grid square
	 * @override
	 */
	Bolt.prototype.draw = function (ctx, scaleFactor) {
		ctx.save();
		ctx.fillStyle = ("black");
		ctx.fillRect(this._x * scaleFactor, this._y * scaleFactor, this._width * scaleFactor, this._height * scaleFactor);
		ctx.restore();
	};
	
	return Bolt;
})();
