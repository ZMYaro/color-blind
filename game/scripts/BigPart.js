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
		this._currentFrame = 0;
	}
	
	BigPart.WIDTH = 2;
	BigPart.HEIGHT = 2;
	BigPart.FRAME_COUNT = 5;
	BigPart.FRAME_INCREMENT = 0.1;
	BigPart.SPRITE_WIDTH = 23;
	BigPart.SPRITE_HEIGHT = 25;
	BigPart.SPRITE_SHEETS = [
		'sprite_sheets/bigpart1.png',
		'sprite_sheets/bigpart2.png',
		'sprite_sheets/bigpart3.png',
		'sprite_sheets/bigpart4.png',
		'sprite_sheets/bigpart5.png'
	];
	
	// Extend Collectible.
	BigPart.prototype = Object.create(Collectible.prototype);
	
	/**
	 * Draw the platform to the game canvas.
	 * @param {CanvasRenderingContext2D} ctx - The rendering context of the game canvas
	 * @param {Number} scaleFactor - The ratio of pixel to game grid square
	 * @param {Number} screenScroll - How far to the left the screen has scrolled
	 * @override
	 */
	BigPart.prototype.draw = function (ctx, scaleFactor, screenScroll) {
		/*ctx.fillStyle = '#ff60e0';
		ctx.fillRect((this.x + screenScroll) * scaleFactor, this.y * scaleFactor, BigPart.WIDTH * scaleFactor, BigPart.HEIGHT * scaleFactor);*/
		
		this._currentFrame += BigPart.FRAME_INCREMENT;
		if (this._currentFrame >= BigPart.FRAME_COUNT) {
			this._currentFrame = 0;
		}
		
		drawSprite(assetManager.getImage(BigPart.SPRITE_SHEETS[this._levelNum - 1]),
			this.x + screenScroll,
			this.y,
			this.width,
			this.height,
			Math.floor(this._currentFrame),
			0,
			BigPart.SPRITE_WIDTH,
			BigPart.SPRITE_HEIGHT,
			false,
			ctx,
			scaleFactor);
	};
	
	/**
	 * Handle the collectible being collected.
	 * @param {Game} game - The game instance in which the collectible was collected
	 */
	BigPart.prototype.collect = function (game) {
		if (this._levelNum === 1) {
			// Play the cutscene after the first level.
			cutscene.play(game);
		} else {
			// Load the next level.
			game.loadLevel(this._levelNum + 1);
		}
	};
	
	return BigPart;
})();