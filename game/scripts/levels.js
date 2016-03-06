// Level JSON to be read by the level builder.
var LEVELS = [
	{
		"name": "Level 1: The Startening",
		"width": 70,
		"height": 30,
		"bgImage": "images/bgs/testBg.png",
		"playerStart": {
			"x": 2,
			"y": 8
		},
		"objects": [ {
				"type": "platform",
				"x": 0,
				"y": 16,
				"width": 32,
				"height": 4,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 0,
				"y": 0,
				"width": 1,
				"height": 16,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 20,
				"y": 8,
				"width": 4,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 22,
				"y": 12,
				"width": 10,
				"height": 4,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 27,
				"y": 6,
				"width": 5,
				"height": 10,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 35,
				"y": 12,
				"width": 30,
				"height": 4,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 40,
				"y": 8,
				"width": 30,
				"height": 4,
				"color": "#ffff00"
			}, 
			{
				"type": "platform",
				"x": 1,
				"y": 5,
				"width": 16,
				"height": 1,
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
				"x": 50,
				"y": 6,
				"width": 2,
				"height": 4
			}
		]
	}, // end of level 1
	{
		"name": "Level 2: The Sequal",
		"width": 40,
		"height": 15,
		"bgImage": "images/bgs/testBg.png",
		"playerStart": {
			"x": 3,
			"y": 6
		}, "objects": [ {
				"type": "platform",
				"x": 0,
				"y": 9,
				"width": 80,
				"height": 4,
				"color": "#ffff00"
			}, { // door eventually
				"type": "bolt",
				"x": 10,
				"y": 6,
				"width": 2,
				"height": 4
			} , {
				"type": "bolt",
				"x": 20,
				"y": 6,
				"width": 2,
				"height": 4
			}, {
				"type": "bolt",
				"x": 30,
				"y": 6,
				"width": 2,
				"height": 4
			}, {
				"type": "bolt",
				"x": 40,
				"y": 6,
				"width": 2,
				"height": 4
			}
		]
	}, // end of level 2
	{
		"name": "Level 3: Thread the needle",
		"width": 40,
		"height": 40,
		"bgImage": "images/bgs/testBg.png",
		"playerStart": {
			"x": 2,
			"y": 16
		}, "objects": [ {
				"type": "platform",
				"x": 0,
				"y": 0,
				"width": 1,
				"height": 18,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 0,
				"y": 18,
				"width": 21,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 1,
				"y": 15,
				"width": 3,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 1,
				"y": 13,
				"width": 2,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 1,
				"y": 11,
				"width": 1,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 3,
				"y": 9,
				"width": 1,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 1,
				"y": 6,
				"width": 1,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 2,
				"y": 3,
				"width": 3,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 5,
				"y": 11,
				"width": 1,
				"height": 7,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 5,
				"y": 0,
				"width": 1,
				"height": 8,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 5,
				"y": 11,
				"width": 6,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 11,
				"y": 9,
				"width": 1,
				"height": 3,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 9,
				"y": 15,
				"width": 2,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 9,
				"y": 15,
				"width": 1,
				"height": 3,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 13,
				"y": 15,
				"width": 1,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 14,
				"y": 14,
				"width": 3,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 14,
				"y": 9,
				"width": 1,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 16,
				"y": 11,
				"width": 1,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 17,
				"y": 7,
				"width": 1,
				"height": 11,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 20,
				"y": 0,
				"width": 1,
				"height": 20,
				"color": "#ffff00"
			}, { 
				"type": "bolt",
				"x": 3,
				"y": 2,
				"height": 2,
				"width": 2,
			} , {
				"type": "bolt",
				"x": 6,
				"y": 15,
				"width": 2,
				"height": 4
			}, { // bigOne eventually
				"type": "bolt",
				"x": 19,
				"y": 17,
				"width": 2,
				"height": 4
			}
		]
	}, // end of level 3
	{
		"name": "Level 4: Mad hops",
		"width": 50,
		"height": 25,
		"bgImage": "images/bgs/testBg.png",
		"playerStart": {
			"x": 3,
			"y": 15
		}, "objects": [ {
				"type": "platform",
				"x": 0,
				"y": 0,
				"width": 1,
				"height": 20,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 0,
				"y": 20,
				"width": 15,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 20,
				"y": 20,
				"width": 15,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 36,
				"y": 18,
				"width": 3,
				"height": 1,
				"color": "#ffff00"
			}, {
				"type": "platform",
				"x": 30,
				"y": 15,
				"width": 3,
				"height": 1,
				"color": "#ffff00"
			},  {
				"type": "platform",
				"x": 24,
				"y": 12,
				"width": 3,
				"height": 1,
				"color": "#ffff00"
			},  {
				"type": "platform",
				"x": 15,
				"y": 9,
				"width": 6,
				"height": 1,
				"color": "#ffff00"
			}, { // door eventually
				"type": "bolt",
				"x": 5,
				"y": 5,
				"width": 2,
				"height": 4
			}
		]
	}, // end of level 4

];
