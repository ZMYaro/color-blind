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
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		
		this._spriteSheet = undefined;
		this._spriteWidth = 0;
		this._spriteHeight = 0;
	}
	
	GameObject.prototype = {
		get right() {
			return this.x + this.width;
		},
		
		get bottom() {
			return this.y + this.height;
		},
		
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
		 * @param {Number} screenScroll - How far to the left the screen has scrolled
		 * @abstract
		 */
		draw: function(ctx, scaleFactor, screenScroll) {
		}
	}
	
	return GameObject;
})();
