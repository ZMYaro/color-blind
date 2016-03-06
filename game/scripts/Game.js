var Game = (function () {
	'use strict';
	
	/**
	 * Create a new Game instance.
	 * @param {HTMLCanvasElement} canvas - The game canvas
	 */
	function Game(canvas) {
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
		//this._player = new Player();
		this._gameObjects = [];
		
		this._boundResize = this.resize.bind(this);
		window.addEventListener('resize', this._boundResize, false);
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
			
			this._gameObjects = [];
			
			var that = this;
			levelJSON.objects.forEach(function (objDef) {
				var newObj;
				switch (objDef.type) {
					case 'platform':
						newObj = new Platform(objDef.x, objDef.y, objDef.width, objDef.height, objDef.color);
						break;
					case 'bolt':
						newObj = new Bolt(objDef.x, objDef.y, objDef.width, objDef.height);
						break;
					default:
						return; // Continue the for-each loop.
				}
				that._gameObjects.push(newObj);
			});
			
			// Update the scale factor for the new level.
			this.resize();
		},
		
		/**
		 * Suspend gameplay and remove event listeners.
		 */
		pause: function () {
			window.removeEventListener('resize', this._boundResize, false);
		},
		
		/**
		 * Re-add event listeners and resume gameplay.
		 */
		resume: function () {
			window.addEventListener('resize', this._boundResize, false);
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
			// TODO
		},
		
		/**
		 * Draw game objects to the canvas.
		 */
		_draw: function () {
			// TODO
			for (var i = 0; i < this._gameObjects.length; i++)
				this._gameObjects[i].draw(this._ctx, this._scaleFactor);
		}
	};
	
	return Game;
})();