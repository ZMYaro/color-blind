'use strict';

/**
 * Draw a sprite to the canvas.
 * @param {Image} img - The image being drawn
 * @param {Number} x - The x-coordinate of the sprite's left side on the game grid
 * @param {Number} y - The y-coordinate of the sprite's top side on the game grid
 * @param {Number} width - The sprite's width on the game grid
 * @param {Number} height - The sprite's height on the game grid
 * @param {Number} frameCol - The frame's column on the sprite sheet
 * @param {Number} frameRow - The frame's row on the sprite sheet
 * @param {Number} frameWidth - The pixel width of each frame on the sprite sheet
 * @param {Number} frameHeight - The pixel width of each frame on the sprite sheet
 * @param {Number} scaleFactor - The ratio of pixel to game grid square
 * @param {CanvasRenderingContext2D} ctx - The rendering context of the game canvas
 */
function drawSprite(img, x, y, width, height, frameNumber, frameWidth, frameHeight, scaleFactor, ctx) {

}

/**
 * Check whether two game objects are colliding.
 * @param {GameObject} obj1
 * @param {GameObject} obj2
 * @returns {Boolean}
 */
function colliding(obj1, obj2) {
	return (obj1.x < obj2.x + obj2.width &&
		obj1.x + obj1.width > obj2.x &&
		obj1.y < obj2.y + obj2.height &&
		obj1.height + obj1.y > obj2.y) 
}

/**
 * A shim for supporting requestAnimationFrame in older browsers.
 * Based on the one by Paul Irish.
 * @param {Function} callback
 */
var raf = (window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	(function (callback) {
		setTimeout(callback, 1000 / 60);
	})).bind(window);
