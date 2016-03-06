var InputManager = (function () {
	'use strict';
	
	function InputManager() {
		this._keyboardManager = new KeyboardManager();
		this._gamepadManager = new GamepadManager();
	}
	
	InputManager.prototype = {
		/**
		 * Whether a left input is being pressed
		 * @returns {Boolean}
		 */
		get left() {
			return this._keyboardManager.left || this._gamepadManager.left;
		},
		
		/**
		 * Whether a right input is being pressed
		 * @returns {Boolean}
		 */
		get right() {
			return this._keyboardManager.right || this._gamepadManager.right;
		},
		
		/**
		 * Whether an up input is being pressed
		 * @returns {Boolean}
		 */
		get jump() {
			return this._keyboardManager.jump || this._gamepadManager.jump;
		},
		
		/**
		 * Whether a run input is being pressed
		 * @returns {Boolean}
		 */
		get run() {
			return this._keyboardManager.run || this._gamepadManager.run;
		},
		
		/**
		 * Enable input manager event listeners.
		 */
		enable: function () {
			this._keyboardManager.enable();
			this._gamepadManager.enable();
		},
		
		/**
		 * Disable input manager event listeners.
		 */
		disable: function () {
			this._keyboardManager.disable();
			this._gamepadManager.disable();
		}
	};
	
	return InputManager;
})();
