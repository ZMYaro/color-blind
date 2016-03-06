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
	}
	
	Collectible.prototype = Object.create(GameObject.prototype);
	
	/**
	 * Handle the collectible being collected.
	 */
	Collectible.prototype.onCollect = function () {
	}
	
	return Collectible;
})();
