var GamepadManager = (function () {
	'use strict';
	
	var MOVE_AXIS = 0, // Left stick horizontal
		LEFT_BUTTONS = [
			14 // D-pad left
		],
		RIGHT_BUTTONS = [
			15 // D-pad right
		],
		JUMP_BUTTONS = [
			0, // A
			1 // B
		],
		RUN_BUTTONS = [
			2, // X
			3, // Y
			7 // Right trigger
		];
	
	function GamepadManager() {
	
	}
	
	GamepadManager.prototype = {
		/**
		 * Whether a left input is active
		 * @returns {Boolean}
		 */
		get left() {
			var leftActive = false;
			this._getStandardGamepads().forEach(function (gamepad) {
				LEFT_BUTTONS.forEach(function (buttonCode) {
					if (gamepad.buttons[buttonCode].pressed) {
						leftActive = true;
					}
				});
				if (gamepad.axes[MOVE_AXIS] < -0.5) {
					leftActive = true;
				}
			});
			return leftActive;
		},
		
		/**
		 * Whether a right input is active
		 * @returns {Boolean}
		 */
		get right() {
			var rightActive = false;
			this._getStandardGamepads().forEach(function (gamepad) {
				RIGHT_BUTTONS.forEach(function (buttonCode) {
					if (gamepad.buttons[buttonCode].pressed) {
						rightActive = true;
					}
				});
				if (gamepad.axes[MOVE_AXIS] > 0.5) {
					rightActive = true;
				}
			});
			return rightActive;
		},
		
		/**
		 * Whether a jump button is being pressed
		 * @returns {Boolean}
		 */
		get jump() {
			var jumpActive = false;
			this._getStandardGamepads().forEach(function (gamepad) {
				JUMP_BUTTONS.forEach(function (buttonCode) {
					if (gamepad.buttons[buttonCode].pressed) {
						jumpActive = true;
					}
				});
			});
			return jumpActive;
		},
		
		/**
		 * Whether a run button is being pressed
		 * @returns {Boolean}
		 */
		get run() {
			var runActive = false;
			this._getStandardGamepads().forEach(function (gamepad) {
				RUN_BUTTONS.forEach(function (buttonCode) {
					if (gamepad.buttons[buttonCode].pressed) {
						runActive = true;
					}
				});
			});
			return runActive;
		},
		
		/**
		 * Get gamepads with standard button mappings.
		 * @returns {Array<Gamepad>}
		 */
		_getStandardGamepads: function () {
			var gamepads = [];
			Array.prototype.slice.call(navigator.getGamepads()).forEach(function (gamepad) {
				if (gamepad.mapping === 'standard') {
					gamepads.push(gamepad);
				}
			});
			return gamepads;
		}
	};
	
	return GamepadManager;
})();