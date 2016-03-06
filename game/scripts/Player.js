var Player = (function() {
	'use strict'

	function Player(x, y, width, height) {
		GameObject.apply(this, arguments);

		this._spriteSheet = null;
		this._spriteWidth = 0;
		this._spriteHeight = 0;
	}

	/**
	* Draw the Player to the game canvas.
	* @param {CanvasRenderingContext2D} ctx - the drawing context on which the collectible will be drawn
	* @param {Number} scale - The ratio of pixel to game grid square
	*/
	Player.prototype.draw = function(ctx, scale) {
		ctx.save();
		ctx.fillStyle = "grey";
		ctx.fillRect = (0, 0, 100, 100);
		ctx.restore();
	};

	return Player;
})();