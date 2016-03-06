"use strict"

function makePlatform() {
	var Platform;
	return Platform = {
		x : 0,
		y : 0,
		width : 0, 
		height : 0,
		color : null,
		_spriteSheet : null,
		_spriteWidth : 0,
		_spriteHeight : 0,


		/**
		* updates the game object
		* @param {player} player - the player object
		*/
		update: function(player) {

		}, // end update function

		/**
		* draws the object to the screen
		* @param {DrawingContext} ctx - the drawing context on which the collectible will be drawn
		* @param {int} scale - represents the screen size, allows proper resizing
		*/
		draw: function(ctx, scale) {
			ctx.save();
			ctx.fillStyle(color);
			ctx.fillRect(x * scale, y * scale, width * scale, height * scale);
			ctx.restore();
		}, // end draw function

	}
}