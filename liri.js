require('dotenv').config();
var myTweets = require('./src/my-tweets');
var getSong = require('./src/spotify-this-song')
var command = process.argv[2];

// runs the function for the appropriate command
if (command === 'my-tweets') {
  myTweets.getTweets();
} else if (command === 'spotify-this-song') {
  getSong.getSong(process.argv[3]);
}