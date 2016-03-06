var Door = (function () {
	'use strict';
	
	/**
	 * Create a new Door instance.
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} levelNum - Which level the door goes to
	 */
	function Door(x, y, levelNum) {
		Collectible.call(this, x, y, Door.WIDTH, Door.HEIGHT);
		
		this._levelNum = levelNum;
	}
	
	Door.WIDTH = 1;
	Door.HEIGHT = 2;
	Door.COLOR = 'white';
	
	Door.prototype = Object.create(Collectible.prototype);
	
	/**
	 * Draw the door to the game canvas.
	 * @param {CanvasRenderingContext2D} ctx - The rendering context of the game canvas
	 * @param {Number} scaleFactor - The ratio of pixel to game grid square
	 * @override
	 */
	Door.prototype.draw = function (ctx, scaleFactor, screenScroll) {
		ctx.fillStyle = 'azure';
		ctx.fillRect((this.x + screenScroll) * scaleFactor, this.y * scaleFactor, Door.WIDTH * scaleFactor, Door.HEIGHT * scaleFactor);
		ctx.fillStyle = 'black';
		ctx.font = (scaleFactor / 2) + 'px \"Press Start 2P\", monospace';
		ctx.fillText(this._levelNum, (this.x + Door.WIDTH / 4 + screenScroll) * scaleFactor, this.y * scaleFactor);
	};
	
	/**
	 * Handle the door being entered.
	 * @param {Game} game - The game instance in which the door was entered
	 */
	Door.prototype.collect = function (game) {
		game.loadLevel(this._levelNum);
	};
	
	return Door;
})();