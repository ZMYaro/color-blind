var KeyboardManager = (function () {
	'use strict';
	
	var LEFT_KEYS = [
			37, // Left
			65 // A
		],
		RIGHT_KEYS = [
			39, // Right
			68, // D
			69 // E
		],
		JUMP_KEYS = [
			13, // Enter
			32, // Space
			38, // Up
			87, // W
			188 // Comma
		],
		RUN_KEYS = [
			16 // Shift
		];
	
	function KeyboardManager() {
		this._keys = [];
		this._boundHandleKeyDown = this._handleKeyDown.bind(this);
		this._boundHandleKeyUp = this._handleKeyUp.bind(this);
	}
	
	KeyboardManager.prototype = {
		/**
		 * Whether a left key is being pressed
		 * @returns {Boolean}
		 */
		get left() {
			for (var i = 0; i < LEFT_KEYS.length; i++) {
				if (this._keys[LEFT_KEYS[i]]) {
					return true;
				}
			}
			return false;
		},
		
		/**
		 * Whether a right key is being pressed
		 * @returns {Boolean}
		 */
		get right() {
			for (var i = 0; i < RIGHT_KEYS.length; i++) {
				if (this._keys[RIGHT_KEYS[i]]) {
					return true;
				}
			}
			return false;
		},
		
		/**
		 * Whether a jump key is being pressed
		 * @returns {Boolean}
		 */
		get jump() {
			for (var i = 0; i < JUMP_KEYS.length; i++) {
				if (this._keys[JUMP_KEYS[i]]) {
					return true;
				}
			}
			return false;
		},
		
		/**
		 * Whether a run key is being pressed
		 * @returns {Boolean}
		 */
		get run() {
			for (var i = 0; i < RUN_KEYS.length; i++) {
				if (this._keys[RUN_KEYS[i]]) {
					return true;
				}
			}
			return false;
		},
		
		/**
		 * Enable keyboard event listeners.
		 */
		enable: function () {
			window.addEventListener('keydown', this._boundHandleKeyDown, false);
			window.addEventListener('keyup', this._boundHandleKeyUp, false);
		},
		
		/**
		 * Disable keyboard event listeners.
		 */
		disable: function () {
			window.removeEventListener('keydown', this._boundHandleKeyDown, false);
			window.removeEventListener('keyup', this._boundHandleKeyUp, false);
			this._keys = [];
		},
		
		/**
		 * Handle a key being pressed.
		 * @param {KeyboardEvent} e
		 */
		_handleKeyDown: function (e) {
			this._keys[e.keyCode] = true;
			if (LEFT_KEYS.indexOf(e.keyCode) !== -1 ||
					RIGHT_KEYS.indexOf(e.KeyCode) !== -1 ||
					JUMP_KEYS.indexOf(e.KeyCode) !== -1 ||
					RUN_KEYS.indexOf(e.KeyCode) !== -1) {
				e.preventDefault();
			}
		},
		
		/**
		 * Handle a key being released.
		 * @param {KeyboardEvent} e
		 */
		_handleKeyUp: function (e) {
			this._keys[e.keyCode] = false;
		}
	};
	
	return KeyboardManager;
})();
