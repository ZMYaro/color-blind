var Player = (function() {
	'use strict';
	
	/**
	 * Create a new Player instance.
	 */
	function Player() {
		GameObject.call(this, 0, 0, Player.WIDTH, Player.HEIGHT);
		
		this.onGround = true;
		
		this.xSpeed = 0;
		this.ySpeed = 0;
		
		this._spriteSheet = Player.SPRITE_SHEET;
		this._spriteWidth = 0;
		this._spriteHeight = 0;
	}
	
	// Constants
	Player.SPRITE_SHEET = 'sprite_sheets/chroma.png';
	Player.WIDTH = 1;
	Player.HEIGHT = 2;
	/** {Number} The fraction of the maximum speed to accelerate each frame */
	Player.ACC_FACTOR = 0.2;
	/** {Number} Maximum speed while walking */
	Player.MAX_WALK_SPEED = 0.1;
	/** {Number} Maximum speed while running */
	Player.MAX_RUN_SPEED = 0.4;
	/** {Number} The initial acceleration when jumping */
	Player.JUMP_SPEED = 0.4;
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
		var maxSpeed = (this.onGround && im.run) ? Player.MAX_RUN_SPEED : Player.MAX_WALK_SPEED;	
		if (im.left && !im.right) {
			// Move left.
			if (this.xSpeed > -maxSpeed) {
				this.xSpeed -= Player.ACC_FACTOR * maxSpeed;
			} else {
				if (this.onGround) {
					// Slow from run to walk on ground if not running.
					this.xSpeed = -maxSpeed;
				}
			}
		} else if (im.right && !im.left) {
			// Move right.
			if (this.xSpeed < maxSpeed) {
				this.xSpeed += Player.ACC_FACTOR * maxSpeed;
			} else {
				if (this.onGround) {
					// Slow from run to walk on ground if not running.
					this.xSpeed = maxSpeed;
				}
			}
		} else {
			// Slow/stop.
			if (this.xSpeed > Player.STOP_THRESHOLD) {
				this.xSpeed -= Player.ACC_FACTOR * Player.MAX_WALK_SPEED;
			} else if (this.xSpeed < -Player.STOP_THRESHOLD) {
				this.xSpeed += Player.ACC_FACTOR * Player.MAX_WALK_SPEED;
			} else {
				this.xSpeed = 0;
			}
		}
		
		if (this.onGround) {
			if (im.jump) {
				this.ySpeed = -Player.JUMP_SPEED;
			} else {
				this.ySpeed = 0;
			}
		} else {
			this.ySpeed += Player.ACC_FACTOR * Player.MAX_WALK_SPEED;
		}
		
		this.x += this.xSpeed;
		this.y += this.ySpeed;
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
