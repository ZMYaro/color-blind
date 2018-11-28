var Collectible = (function () {
	'use strict';
	
	/**
	 * Initialize a new abstract Collectible.
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 * @abstract
	 */
	function Collectible(x, y, width, height) {
		GameObject.apply(this, arguments);
		this.collected = false;
	}
	
	// Extend GameObject.
	Collectible.prototype = Object.create(GameObject.prototype);
	
	/**
	 * Handle the collectible being collected.
	 * @param {Game} game - The game instance in which the collectible was collected
	 */
	Collectible.prototype.collect = function (game) {
		this.collected = true;
	}
	
	return Collectible;
})();
