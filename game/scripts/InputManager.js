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
			return this._keyboardManager.left;
		},
		
		/**
		 * Whether a right input is being pressed.
		 * @returns {Boolean}
		 */
		get right() {
			return this._keyboardManager.right;
		},
		
		/**
		 * Whether an up input is being pressed.
		 * @returns {Boolean}
		 */
		get jump() {
			return this._keyboardManager.jump;
		},
		
		/**
		 * Whether a down input is being pressed.
		 * @returns {Boolean}
		 */
		get run() {
			return this._keyboardManager.run;
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
