var Player = (function() {
	'use strict';
	
	/**
	 * Create a new Player instance.
	 */
	function Player() {
		GameObject.call(this, 0, 0, Player.WIDTH, Player.HEIGHT);
		
		this.onGround = true;
		
		this._xSpeed = 0;
		this._ySpeed = 0;
		
		this._spriteSheet = null;
		this._spriteWidth = 0;
		this._spriteHeight = 0;
	}
	
	// Constants
	Player.WIDTH = 1;
	Player.HEIGHT = 2;
	/** {Number} Acceleration while not moving */
	Player.ACCELERATION = 0.02;
	/** {Number} Maximum speed while walking */
	Player.MAX_WALK_SPEED = 0.1;
	/** {Number} Maximum speed while running */
	Player.MAX_RUN_SPEED = 0.6;
	/** {Number} Maximum vertical speed */
	Player.MAX_FALL_SPEED = 0.6;
	/** {Number} The speed at which to consider the player stopped */
	Player.STOP_THRESHOLD;

	Player.prototype = Object.create(GameObject.prototype);
	
	/**
	 * Move the player.
	 * @param {InputManager} im
	 */
	Player.prototype.update = function (im) {
		if (im.left && !im.right) {
			this._xSpeed -= Player.ACCELERATION;
			if (this._xSpeed < -Player.MAX_WALK_SPEED) {
				this._xSpeed = -Player.MAX_WALK_SPEED;
			}
		} else if (im.right && !im.left) {
			this._xSpeed += Player.ACCELERATION;
			if (this._xSpeed > Player.MAX_WALK_SPEED) {
				this._xSpeed = Player.MAX_WALK_SPEED;
			}
		} else {
			if (this._xSpeed > Player.STOP_THRESHOLD) {
				this._xSpeed -= Player.ACCELERATION;
			} else if (this._xSpeed < -Player.STOP_THRESHOLD) {
				this._xSpeed += Player.ACCELERATION;
			} else {
				this._xSpeed = 0;
			}
		}
		
		if (this.onGround) {
			this._ySpeed = 0;
		} else {
			this._ySpeed += Player.ACCELERATION;
		}
		
		this.x += this._xSpeed;
		this.y += this._ySpeed;
	};
	
	/**
	 * Draw the Player to the game canvas.
	 * @param {CanvasRenderingContext2D} ctx - The rendering context of the game canvas
	 * @param {Number} scaleFactor - The ratio of pixel to game grid square
	 */
	Player.prototype.draw = function (ctx, scaleFactor) {
		ctx.save();
		ctx.fillStyle = "grey";
		ctx.fillRect(this.x * scaleFactor, this.y * scaleFactor, this.width * scaleFactor, this.height * scaleFactor);
		ctx.restore();
	};

	return Player;
})();
