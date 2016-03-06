var cutscene = {
	width: 180,
	height: 120,
	currentFrame: 0,
	frames: 140,
	game: undefined,
	canvas: undefined,
	ctx: undefined,
	play: function (game) {
		game.pause();
		this.game = game;
		this.currentFrame = 0;
		this.canvas = document.getElementById('cutsceneCanvas');
		this.canvas.style.display = 'block';
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext('2d');
		raf(this.update.bind(this));
	},
	update: function() {
		this.ctx.drawImage(
			assetManager.getImage('cutscene.gif'),
			Math.floor(this.currentFrame) * this.width,
			0,
			this.width,
			this.height,
			0,
			0,
			this.width,
			this.height);
		
		
		this.currentFrame += 0.25;
		if (this.currentFrame >= this.frames) {
			this.end();
		} else {
			raf(this.update.bind(this));
		}
	},
	end: function () {
		this.canvas.style.display = 'none';
		this.game.loadLevel(2);
		this.game.resume();
	}
};