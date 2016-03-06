// Level JSON to be read by the level builder.
var LEVELS = [
	{
		"name": "Level 1: The Startening",
		"width": 200,
		"height": 16,
		"bgImage": "images/bgs/testBg.png",
		"playerStart": {
			"x": 0,
			"y": 0
		},
		"objects": [{
			"type": "platform",
			"x": 0,
			"y": 12,
			"width": 200,
			"height": 4,
			"color": "#ffff00"
		}, {
			"type": "bolt",
			"x": 2,
			"y": 1,
			"width": 2,
			"height": 2
		}, {
			"type": "bolt",
			"x": 30,
			"y": 1,
			"width": 2,
			"height": 2
		}, {
			"type": "bolt",
			"x": 30,
			"y": 100,
			"width": 2,
			"height": 2
		}, {
			"type": "bolt",
			"x": 300,
			"y": 100,
			"width": 2,
			"height": 2
		}]
	}
];
