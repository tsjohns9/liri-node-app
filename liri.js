require('dotenv').config();
var myTweets = require('./my-tweets');
var command = process.argv[2];

// runs the function for the appropriate command
if (command === 'my-tweets') {
  myTweets.getTweets();
}