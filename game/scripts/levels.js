// Level JSON to be read by the level builder.
var LEVELS = [
	{
		"name": "Level 1: The Startening",
		"width": 300,
		"height": 300,
		"bgImage": "images/bgs/testBg.png",
		"playerStart": {
			"x": 0,
			"y": 0
		},
		"objects": [{
			"type": "platform",
			"x": 0,
			"y": 2,
			"width": 4,
			"height": 1,
			"color": "#ffff00"
		}, {
			"type": "bolt",
			"x": 2,
			"y": 1
		}]
	}
];
