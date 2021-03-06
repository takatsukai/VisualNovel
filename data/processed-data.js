var characters = /* create multiple characters and connect them to multiple photos/sprites */
{
  "default":{
    "poses":{
    },
    "name":""
  },

  "lumeria":{
    "poses":{
      "default":"img/character2.png",
      "confused":"img/character2_1.png",
      "happy":"img/character2.png"
    },
    "name":"Lumeria"
  },

  "aiko":{
    "poses":{
      "default":"img/character1.png",
      "happy":"img/character1.png",
      "shocked":"img/character1_1.png"
   
    },
    "name":"Aiko"
  }
}; 
 var places = /*connect scenery to images*/
{
  "black" : {
		"name":"???",
    	"image":"img/defaultBackground.jpg"
    },
	"ocean" : {
		"name":"Ocean",
    	"image":"img/background.jpg"
    },
  
    "home" : {
		"name":"Home",
    	"image":"img/purple.gif"
    },
  
    "forest" : {
		"name":"Forest",
    	"image":"img/forest.png"
    },
   
  "forest_darker" : {
		"name":"Forest",
    	"image":"img/forest2.jpg"
    },
  
    "forest_darkest" : {
		"name":"Forest",
    	"image":"img/forest3.jpg"
    },
  
    "pink_room" : {
		"name":"???",
    	"image":"img/pink_room.gif"
    }
  
};
 var story = /*all routes seperated in different sections, need key to enter true escape route */
[
    {  "title": "Start", 
     "tags": "", 
      "body": "<<place home>>\n{{lumeria,happy}} Down for another round of Bloons TD6?\n{{aiko}}Hell yeah!\n{{aiko}} What map should we pick?\n[[Let’s do the forest map.|transition_2]]\n[[Let’s do the ocean map.|transition_1]]",   "position": { 
   "x": 615,
   "y": 109 }, 
  "colorID": 0 
  },
  
  
  { "title": "transition_1", 
  "tags": "", 
   "body": "<<place black>>\n Suddenly, the light flickers out. \n {{lumeria, confused}} ...Huh, what’s…happening…?\n {{lumeria, confused}}[[Where are we?|ocean]]",   "position": { 
  "x": 928, 
  "y": 324 }, 
   "colorID": 0 
  },
  
  { "title": "transition_2", 
  "tags": "", 
   "body": "<<place black>>\n Suddenly, the light flickers out. \n {{lumeria, confused}} ...Huh, what’s…happening…?\n {{lumeria, confused}}[[Where are we?|forest]]", 
  "position": { 
  "x": 928, 
  "y": 324 }, 
   "colorID": 0 
  },

  { "title": "ocean", 
  "tags": "", 
   "body": "<<place ocean>>\n {{aiko}} ...\n{{aiko}} …It’s beautiful! \n[[Let’s swim in the water!|bad_end]]\n[[What’s that path ahead?|forest]]", 
  "position": { 
  "x": 928, 
  "y": 324 }, 
   "colorID": 0 
  },

 { "title": "forest", 
    "tags": "",
    "body": "<<place forest>>\n A forest gleaming in the sunlight unfolds in front of you. \n {{aiko}} Woah. Now that's a scenery change.\n{{lumeria, confused}}Oh my god...what should we do?\n[[Let's find a place to stay.| forest_2]]\n[[Give me a second.|wait_second]]\n[[What's that over there?|item]]", 
  "position": { 
  "x": 615, 
  "y": 540 },
   "colorID": 0 
  },

	{
		"title": "wait_second",
		"tags": "",
		"body": "{{aiko,happy}} Sure!\n{{aiko}}...\n{{aiko}} Okay...what now?\n [[Let's find a place to stay.| forest_2]]\n [[What's that over there?| item]]",
		"position": {
			"x": 856,
			"y": 887
		},
		"colorID": 0
	},
  
  	{
		"title": "item",
		"tags": "",
		"body": "<<string key true>>\n{{lumeria, confused}} What's this...?\n{{lumeria}} A key?\n{{aiko}} This might be useful.\n[[{{aiko}} Anyway... let's keep going!|forest_2]]", /*key becomes true, game registers you have key now.*/
		"position": {
			"x": 374,
			"y": 890
		},
		"colorID": 0
	},
  
    {
		"title": "forest_2",
		"tags": "",
		"body": "<<place forest_darker>>\n The forest darkens as the day goes by. \n{{lumeria}}The light's fading...\n [[{{aiko}} Let's find somewhere safe before the sun sets. |forest_3]]",
		"position": {
			"x": 374,
			"y": 890
		},
		"colorID": 0
	},
  
	
	{
		"title": "forest_3",
		"tags": "",
		"body": "<<place forest_darkest>>\nThe forest clears into a ominous opening.\n {{aiko,shocked}} Woah...now this is creepy.\n{{aiko, shocked}} ... \n{{aiko,shocked}} Don't mind me...I'll just wait here.\n{{lumeria}} ...\n[[{{aiko}} Ugh, fine...I'll come! Don't look at me like that.|final_room]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
  
	{
		"title": "final_room",
		"tags": "",
		"body": "<<place pink_room>> {{aiko, shocked}}...\n{{aiko,shocked}} Where are we...?\n{{lumeria,confused}} I have no idea. \n {{aiko,happy}} ...what's that over there? \n {{lumeria}} It's a gumball machine! \n [[{{aiko}} I have an idea...let's try using this key in that gumball machine. |good_end]] <<string key == true>> \n [[{{aiko}} I'm not sure what to do with it though...]] <<string key != true>>\n{{lumeria}}...?!\n[[{{aiko}} What's happening?! |bad_end]]", /* if have key good end, otherwise bad end */
		"position": {
			"x": 606,
			"y": 1272
		},
		"colorID": 0
	},
  
  	{
		"title": "good_end",
		"tags": "",
		"body": "<<place home>> {{aiko}}...!\n {{aiko}}We did it!\n [[{{lumeria}} We're home! |end]]",
		"position": {
			"x": 606,
			"y": 1272
		},
		"colorID": 0
	},
  
    {
		"title": "bad_end",
		"tags": "",
		"body": "<<place black>> {{aiko}}...!\n [[{{lumeria}} What the...! |bad_end_2]]",
		"position": {
			"x": 606,
			"y": 1272
		},
		"colorID": 0
	},
  
    {
		"title": "bad_end_2",
		"tags": "",
		"body": "<<place black>> \n [[You have died. Retry? |Start]]",
		"position": {
			"x": 606,
			"y": 1272
		},
		"colorID": 0
	}

]; 
