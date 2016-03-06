var Game = (function () {
	'use strict';
	
	/**
	 * Create a new Game instance.
	 * @param {HTMLCanvasElement} canvas - The game canvas
	 */
	function Game(canvas) {
		// Initialize the canvas.
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		
		// Initialize the scale factor, which will be overwritten upon first level load.
		this._scaleFactor = 1;
		
		// Initialize game-related objects.
		this._levelHeight = 1;
		//this._player = new Player();
		this._gameObjects = [];
		
		return this;
	}

	Game.prototype = {
		/**
		 * Load a given level based on a given level JSON.
		 * @param {Object} levelJSON
		 */
		loadLevel: function (levelJSON) {
			// TODO
		},
		
		/**
		 * Suspend gameplay and remove event listeners.
		 */
		pause: function () {
			// TODO
		},
		
		/**
		 * Re-add event listeners and resume gameplay.
		 */
		resume: function () {
			// TODO
		},
		
		/**
		 * Recompute scale factor.
		 */
		resize: function () {
			// TODO
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
		}
	};
	
	return Game;
})();