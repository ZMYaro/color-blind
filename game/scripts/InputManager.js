var InputManager = (function () {
	'use strict';
	
	function InputManager() {
		this._keyboardManager = new KeyboardManager();
	}
	
	InputManager.prototype = {
		/**
		 * Whether a left input is being pressed.
		 * @returns {Boolean}
		 */
		get left() {
			return this._keyboardManager.leftKey;
		},
		
		/**
		 * Whether a right input is being pressed.
		 * @returns {Boolean}
		 */
		get right() {
			return this._keyboardManager.rightKey;
		},
		
		/**
		 * Whether an up input is being pressed.
		 * @returns {Boolean}
		 */
		get up() {
			return this._keyboardManager.upKey;
		},
		
		/**
		 * Whether a down input is being pressed.
		 * @returns {Boolean}
		 */
		get down() {
			return this._keyboardManager.downKey;
		},
		
		/**
		 * Enable input manager event listeners.
		 */
		enable: function () {
			this._keyboardManager.enable();
		},
		
		/**
		 * Disable input manager event listeners.
		 */
		disable: function () {
			this._keyboardManager.disable();
		},
	};
	
	return InputManager;
})();
