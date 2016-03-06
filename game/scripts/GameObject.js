var GameObject = (function () {
	'use strict';
	
	/**
	 * Initialize a new abstract GameObject.
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 * @abstract
	 */
	function GameObject(x, y, width, height) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		
		this._spriteSheet = undefined;
		this._spriteWidth = 0;
		this._spriteHeight = 0;
	}
	
	GameObject.prototype = {
		/**
		 * Update the object.
		 * @abstract
		 */
		update: function() {
		},

		/**
		 * Draw the object to the game canvas.
		 * @param {CanvasRenderingContext2D} ctx - The rendering context of the game canvas
		 * @param {Number} scaleFactor - The ratio of pixel to game grid square
		 * @abstract
		 */
		draw: function(ctx, scaleFactor) {
		}
	}
	
	return GameObject;
})();
