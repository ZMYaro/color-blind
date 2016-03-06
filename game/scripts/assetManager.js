'use strict';
var assetManager = (function () {
	
	var IMAGES_DIR = 'images/';
	
	var assetManager = {
		/** {Object<String,Audio>} A map of file names to audio files */
		_audioFiles: {},
		/** {Object<String,Image>} A map of file names to images */
		_images: {},
		
		/**
		 * Load an image into the map.
		 * @param {String} fileName - The file name of the image to load
		 * @param {Function} [callback] - Function to call when the image has loaded
		 */
		loadImage: function (fileName, callback) {
			// If the image was already loaded, call the callback, if any, and exit.
			if (fileName in this._images) {
				if (typeof callback === 'function') {
					callback();
				}
				return;
			}
			
			// Create the new Image.
			var newImage = new Image();
			
			// Set the callback, if any.
			if (typeof callback === 'function') {
				newImage.addEventListener('load', callback, false);
				newImage.addEventListener('error', callback, false);
			}
			
			// Actually load the image.
			newImage.src = IMAGES_DIR + fileName;
			
			// Store the Image object in the map.
			this._images[fileName] = newImage;
			
			var that = this;
			newImage.addEventListener('error', function () {
				// Delete improperly-loaded images.
				delete that._images[fileName];
			}, false);
		},
		
		/**
		 * Load an audio file into the map.
		 * @param {String} fileName - The file name of the audio file to load
		 * @param {Function} [callback] - Function to call when the audio file has loaded
		 */
		loadAudio: function (fileName, callback) {
			// If the audio file was already loaded, call the callback, if any, and exit.
			if (fileName in this._audioFiles) {
				if (typeof callback === 'function') {
					callback();
				}
				return;
			}
			
			// Create the new Audio.
			var newAudio = new Audio();
			
			// Set the callback, if any.
			if (typeof callback === 'function') {
				newAudio.addEventListener('load', callback, false);
				newAudio.addEventListener('error', callback, false);
			}
			
			// Actually load the audio file.
			newAudio.src = AUDIO_DIR + fileName;
			
			// Store the Audio object in the map.
			this._audioFiles[fileName] = newAudio;
			
			var that = this;
			newAudio.addEventListener('error', function () {
				// Delete improperly-loaded audio files.
				delete that._audioFiles[fileName];
			}, false);
		},
		
		/**
		 * Fetch a previously loaded image.
		 * @param {String} fileName - The file name of the image to retrieve
		 * @returns {Image}
		 */
		getImage: function (fileName) {
			if (fileName in this._images) {
				return this._images[fileName];
			}
			Console.error('Image \u201c' + fileName + '\u201d was requested without having been loaded.');
			return;
		},
		
		/**
		 * Fetch a previously loaded audio file.
		 * @param {String} fileName - The file name of the audio file to retrieve
		 * @returns {Audio}
		 */
		getAudio: function (fileName) {
			if (fileName in this._audioFiles) {
				return this._audioFiles[fileName];
			}
			Console.error('Audio file \u201c' + fileName + '\u201d was requested without having been loaded.');
			return;
		},
	};
	
	return assetManager;
})();