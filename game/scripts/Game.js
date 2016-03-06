var Game = (function () {
	'use strict';
	
	/**
	 * Create a new Game instance.
	 * @param {HTMLCanvasElement} canvas - The game canvas
	 */
	function Game(canvas) {
		this._paused = true;
		
		// Initialize the canvas.
		this._canvas = canvas;
		this._ctx = canvas.getContext("2d");
		
		// Initialize the scale factor, which will be overwritten upon first level load.
		this._scaleFactor = 1;
		
		// Initialize game-related objects.
		this._playerStartX = 0;
		this._playerStartY = 0;
		this._levelWidth = 1;
		this._levelHeight = 1;
		this._player = new Player();
		this._platforms = [];
		this._collectibles = [];
		this._visRadius = 4;
		
		// Initialize the input manager.
		this._inputManager = new InputManager();
		
		// Create bound functions for event listeners.
		this._boundResize = this.resize.bind(this);
		this._boundDraw = this._draw.bind(this);
		
		window.addEventListener('resize', this._boundResize, false);
		raf(this._boundDraw);
		
		return this;
	}

	Game.prototype = {
		/**
		 * Load a given level based on a given level JSON.
		 * @param {Object} levelJSON
		 */
		loadLevel: function (levelJSON) {
			this._levelWidth = levelJSON.width;
			this._levelHeight = levelJSON.height;
			
			this._playerStartX = levelJSON.playerStart.x;
			this._playerStartY = levelJSON.playerStart.y;
			this._player.x = levelJSON.playerStart.x;
			this._player.y = levelJSON.playerStart.y;
			
			this._platforms = [];
			this._collectibles = [];
			
			var that = this;
			levelJSON.objects.forEach(function (objDef) {
				switch (objDef.type) {
					case 'platform':
						that._platforms.push(new Platform(objDef.x, objDef.y, objDef.width, objDef.height, objDef.color));
						break;
					case 'bolt':
						that._collectibles.push(new Bolt(objDef.x, objDef.y, objDef.width, objDef.height));
						break;
					default:
						return; // Continue the for-each loop.
				}
			});
			
			// Update the scale factor for the new level.
			this.resize();
		},
		
		/**
		 * Reset the player to the starting position.
		 */
		resetLevel: function () {
			this._player.x = this._playerStartX;
			this._player.y = this._playerStartY;
			this._player.xSpeed = 0;
			this._player.ySpeed = 0;
		},
		
		/**
		 * Suspend gameplay and remove event listeners.
		 */
		pause: function () {
			this._inputManager.disable();
		},
		
		/**
		 * Re-add event listeners and resume gameplay.
		 */
		resume: function () {
			this._inputManager.enable();
		},
		
		/**
		 * Recompute scale factor.
		 */
		resize: function () {
			this._scaleFactor = window.innerHeight / this._levelHeight;
			this._canvas.width = window.innerWidth;
			this._canvas.height = window.innerHeight;
		},
		
		/**
		 * Update game objects.
		 */
		_update: function () {
			var that = this;
			
			if (this._player.y > this._levelHeight + 2) {
				// Die when off the bottom of the screen.
				this.resetLevel();
			} else {
				this._player.update(this._inputManager);
				
				// Check platform collisions.
				this._player.onGround = false;
				this._platforms.forEach(function (platform) {
					if (colliding(platform, that._player)) {
						if (that._player.bottom > platform.y &&
								that._player.y < platform.y &&
								that._player.bottom - platform.y < Player.MAX_FALL_SPEED) {
							// If player is through the platform, put the player on top of the platform.
							that._player.y -= (that._player.bottom - platform.y);
							that._player.onGround = true;
						} else if (that._player.y < platform.bottom &&
								that._player.bottom > platform.bottom &&
								platform.bottom - that._player.y < Player.MAX_FALL_SPEED) {
							// If the player hits the platform from below, stop the player.
							that._player.y += (platform.bottom - that._player.y);
							that._player.ySpeed = 0;
						} else if (that._player.right < platform.x + 0.5) {
							// Check collisions from the left.
							that._player.x -= (that._player.right - platform.x);
						} else if (that._player.x > platform.right - 0.5) {
							// Check collisions from the right.
							that._player.x += (platform.right - that._player.x);
						}
					}
				});
			}
		},
		
		/**
		 * Draw game objects to the canvas.
		 */
		_draw: function () {
			var that = this;
			
			this._update();
			
			// Clear the screen.
			this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
			
			// Draw platforms.
			this._platforms.forEach(function (platform) {
				platform.draw(that._ctx, that._scaleFactor);
			});
			
			// Change the color of platforms in a radius around the player.
			this._ctx.save();
			this._ctx.globalCompositeOperation = 'source-atop';
			// TODO: Add cycling colors.
			this._ctx.fillStyle = 'darkred';
			this._ctx.beginPath();
			var playerMidX = (this._player.x + this._player.width / 2) * this._scaleFactor,
				playerMidY = (this._player.y + this._player.height / 2) * this._scaleFactor;
			this._ctx.arc(playerMidX, playerMidY, this._visRadius * this._scaleFactor, 0, 2 * Math.PI);
			this._ctx.closePath();
			this._ctx.fill();
			this._ctx.restore();
			
			// Draw collectibles.
			this._collectibles.forEach(function (collectible) {
				collectible.draw(that._ctx, that._scaleFactor);
			});
			
			// Draw the player.
			this._player.draw(this._ctx, this._scaleFactor);
			
			// Draw the background.
			// This gets drawn last, but the drawing mode ensures it only fills transparent pixels.
			this._ctx.save();
			this._ctx.globalCompositeOperation = 'destination-over';
			// TODO: Add background images.
			this._ctx.fillStyle = 'yellow';
			this._ctx.fillRect(0, 0, this._levelWidth * this._scaleFactor, this._levelHeight * this._scaleFactor);
			this._ctx.restore();
			
			raf(this._boundDraw);
		}
	};
	
	return Game;
})();
