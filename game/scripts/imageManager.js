'use strict';
var imageManager = (function () {
	
	var IMAGES_DIR = 'images/';
	
	var imageManager = {
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
			
			// Set the call back, if any.
			if (typeof callback === 'function') {
				newImage.addEventListener('load', callback, false);
				newImage.addEventListener('error', callback, false);
			}
			
			newImage.src = IMAGES_DIR + fileName;
			
			this._images[fileName] = newImage;
			
			var that = this;
			newImage.addEventListener('error', function () {
				// Delete improperly-loaded images.
				delete that._images[fileName];
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
		}
	};
	
	return imageManager;
})();