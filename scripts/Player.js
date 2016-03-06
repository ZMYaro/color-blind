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
		this._currentAnimation = Player.ANIMATIONS.walk;
		this._currentFrame = 0;
	}
	
	// Constants
	Player.SPRITE_SHEET = 'sprite_sheets/chroma.png';
	Player.SPRITE_WIDTH = 15;
	Player.SPRITE_HEIGHT = 22;
	Player.ANIMATIONS = {
		idle: {
			row: 0,
			length: 9,
			increment: 0.25
		},
		walk: {
			row: 1,
			length: 9,
			increment: 0.25
		},
		run: {
			row: 2,
			length: 6,
			increment: 0.25
		},
		jump: {
			row: 3,
			length: 3,
			increment: 0
		}
	};
	Player.WIDTH = 1;
	Player.HEIGHT = 2;
	/** {Number} The fraction of the maximum speed to accelerate each frame */
	Player.ACC_FACTOR = 0.2;
	/** {Number} Maximum speed while walking */
	Player.MAX_WALK_SPEED = 0.1;
	/** {Number} Maximum speed while running */
	Player.MAX_RUN_SPEED = 0.3;
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
	Player.prototype.draw = function (ctx, scaleFactor, screenScroll) {
		// Update the animation.
		if (this.ySpeed === 0) {
			if (this.xSpeed === 0) {
				this._currentAnimation = Player.ANIMATIONS.idle;
			} else if (Math.abs(this.xSpeed) <= Player.MAX_WALK_SPEED) {
				this._currentAnimation = Player.ANIMATIONS.walk;
			} else {
				this._currentAnimation = Player.ANIMATIONS.run;
			}
		} else {
			this._currentAnimation = Player.ANIMATIONS.jump;
			if (this.onGround) {
				this._currentFrame = 0;
			} else if (this.ySpeed < 0) {
				this._currentFrame = 1;
			} else if (this.ySpeed > 0) {
				this._currentFrame = 2;
			}
		}
		this._currentFrame += this._currentAnimation.increment;
		if (this._currentFrame >= this._currentAnimation.length) {
			this._currentFrame = 0;
		}
		
		// Draw the player's sprite.
		drawSprite(assetManager.getImage(Player.SPRITE_SHEET),
			this.x + screenScroll,
			this.y + (2 / scaleFactor),
			this.width,
			this.height,
			Math.floor(this._currentFrame),
			this._currentAnimation.row,
			Player.SPRITE_WIDTH,
			Player.SPRITE_HEIGHT,
			this.xSpeed < 0,
			ctx,
			scaleFactor);
	};

	return Player;
})();
