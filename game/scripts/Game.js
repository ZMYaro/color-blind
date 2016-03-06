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
		this._ctx.webkitImageSmoothingEnabled = false;
		this._ctx.mozImageSmoothingEnabled = false;
		this._ctx.msImageSmoothingEnabled = false;
		this._ctx.imageSmoothingEnabled = false;
		
		// Initialize the scale factor, which will be overwritten upon first level load.
		this._scaleFactor = 1;
		
		// Initialize game-related variables.
		this._playerStartX = 0;
		this._playerStartY = 0;
		this._levelWidth = 1;
		this._levelHeight = 1;
		this._screenScroll = 0;
		this._player = new Player();
		this._platforms = [];
		this._collectibles = [];
		this._visRadius = 4;
		
		// Initialize the input manager.
		this._inputManager = new InputManager();
		
		// Create bound functions for event listeners.
		this._boundResize = this.resize.bind(this);
		this._boundPause = this.pause.bind(this);
		this._boundResume = this.resume.bind(this);
		this._boundDraw = this._draw.bind(this);
		
		window.addEventListener('resize', this._boundResize, false);
		window.addEventListener('blur', this._boundPause, false);
		window.addEventListener('focus', this._boundResume, false);
		raf(this._boundDraw);
		
		return this;
	}

	// Constants
	Game.SCREEN_SCROLL_THRESHOLD = 8;
	
	Game.prototype = {
		/**
		 * Load a given level based on a given level JSON.
		 * @param {Object} levelJSON
		 */
		loadLevel: function (levelNum) {
			var levelJSON = LEVELS[levelNum];
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
					case 'bigPart':
						that._collectibles.push(new BigPart(objDef.x, objDef.y, levelNum));
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
			this._screenScroll = 0;
			this._collectibles.forEach(function (collectible) {
				collectible.collected = false;
			});
		},
		
		/**
		 * Suspend gameplay and remove event listeners.
		 */
		pause: function () {
			this._inputManager.disable();
			this._paused = true;
		},
		
		/**
		 * Re-add event listeners and resume gameplay.
		 */
		resume: function () {
			this._inputManager.enable();
			this._paused = false;
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
			if (this._paused) {
				return;
			}
			
			var that = this;
			
			if (this._player.y > this._levelHeight + 2) {
				// Die when off the bottom of the screen.
				this.resetLevel();
				return;
			} else {
				this._player.update(this._inputManager);
				
				// Check platform collisions.
				this._player.onGround = false;
				this._platforms.forEach(function (platform) {
					if (colliding(platform, that._player)) {
						if (that._player.bottom > platform.y &&
								that._player.y < platform.y &&
								that._player.bottom - platform.y < Player.MAX_FALL_SPEED) {
							// If player is through the platform, put the player one pixel into the platform.
							that._player.y -= (that._player.bottom - platform.y) - Platform.PLAYER_OVERLAP;
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
			
			this._collectibles.forEach(function (collectible) {
				if (!collectible.collected && colliding(collectible, that._player)) {
					collectible.collect(that);
				}
			});
		},
		
		/**
		 * Draw game objects to the canvas.
		 */
		_draw: function () {
			var that = this;
			
			this._update();
			
			// Scroll the screen with the player.
			if (this._player.x + this._screenScroll < Game.SCREEN_SCROLL_THRESHOLD &&
					this._player.right + this._screenScroll <= window.innerWidth / this._scaleFactor - Game.SCREEN_SCROLL_THRESHOLD &&
					this._player.x > Game.SCREEN_SCROLL_THRESHOLD) {
				this._screenScroll += Game.SCREEN_SCROLL_THRESHOLD -
					(this._player.x + this._screenScroll);
			} else if (this._player.right + this._screenScroll > window.innerWidth / this._scaleFactor - Game.SCREEN_SCROLL_THRESHOLD &&
					this._player.x + this._screenScroll >= Game.SCREEN_SCROLL_THRESHOLD &&
					this._player.right < this._levelWidth - Game.SCREEN_SCROLL_THRESHOLD) {
				this._screenScroll += window.innerWidth / this._scaleFactor - Game.SCREEN_SCROLL_THRESHOLD -
					(this._player.right + this._screenScroll);
			}
			
			// Clear the screen.
			this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
			
			// Draw platforms.
			this._platforms.forEach(function (platform) {
				platform.draw(that._ctx, that._scaleFactor, that._screenScroll);
			});
			
			// Change the color of platforms in a radius around the player.
			this._ctx.save();
			this._ctx.globalCompositeOperation = 'source-atop';
			// TODO: Add cycling colors.
			this._ctx.fillStyle = 'darkred';
			this._ctx.beginPath();
			var playerMidX = (this._player.x + this._screenScroll + this._player.width / 2) * this._scaleFactor,
				playerMidY = (this._player.y + this._player.height / 2) * this._scaleFactor;
			this._ctx.arc(playerMidX, playerMidY, this._visRadius * this._scaleFactor, 0, 2 * Math.PI);
			this._ctx.closePath();
			this._ctx.fill();
			this._ctx.restore();
			
			// Draw collectibles.
			this._collectibles.forEach(function (collectible) {
				collectible.draw(that._ctx, that._scaleFactor, that._screenScroll);
			});
			
			// Draw the player.
			this._player.draw(this._ctx, this._scaleFactor, this._screenScroll);
			
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
