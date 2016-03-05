"use strict"

function makeCollectible() {
	var Collectibe;
	return Collectibe = {
		x : 0,
		y : 0,
		width : 0, 
		height : 0,
		_spriteSheet : ,
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
		* @param {int} scale - represents the screen size, allows proper resizing
		*/
		draw: function(scale) {

		}, // end draw function

		/**
		* activates upon the collectible being collided with
		*/
		_onPickup: function() {

		}, // end _onPickup function

	}
}