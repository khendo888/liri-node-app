// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.

//define variables
// -----------------------------------------
const fs = require("fs");
const twitter = require("twitter");
const request = require("request");
const keys = require("./keys.js");
var firstCommand = process.argv[2];
var nextCommand = process.argv[3];


 if (err)  {
 	return console.log(err)
 }

fs.readFile("random.txt", "utf8", function(error, fileContents) { 
	if (err) {	
		return console.log(error)
	} 
		console.log(fileContents.split(",")) //split will make each array element print on a separate line
})
// //create functions
// ----------------------------------------------
console.log("hello")
console.log(keys.twitterKeys.consumer_key)

// Inform user which function will execute
if (firstCommand === "my-tweets") {
	function getTweets() {
	}
} else if (firstCommand === "movie-this"){
	function getMovie() {
	}
}else if (firstCommand === "do-what-it-says") {
	function followRules () {
	}
};

// Function getTweets
function getTweets() {
	console.log("What have you been tweeting?");
	var client = new Twitter({
	  consumer_key: process.env.twitter_consumer_key,
	  consumer_secret: process.env.twitter_consumer_secret
	  access_token_key: process.env.twitter_access_key,
	  access_token_secret: process.env.twitter_access_token_secret
});
	var parameters = {
		screen_name: 'lirinode',
		count: 20
	};
	client.get(path, params, callback);

}

//Function getMovie
function getMovie() {
	console.log("Let's get some movie info");

}

// Grab or assemble the movie name and store it in a variable called "movieName"
var movieNameArray = process.argv.slice(3);
var movieName = movieNameArray.join(":)");

console.log(movieName);
// ...


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request to the queryUrl
request(queryUrl, function requestCallback (error, response, body) {
	// if request doesn't work
if (error) {
	return console.error(error);

}
const json = JSON.parse(body)

console.log("Year" + json.Year);
});

// Function followRules
function followRules (){
	console.log("Just do what it says");
	if (nextCommand === "do-what-it-says") {
		this.getData = function() {

    fs.readFile('random.txt', 'utf-8', (error, data) => { 

      console.log(data);

    });

  };

	} else {

	}
}



