"use strict"

function makeGameObject() {
	var GameObj;
	return GameObj = {
		x : 0,
		y : 0,
		width : 0, 
		height : 0,
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

		}, // end draw function

	}
}