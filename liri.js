const env    = require('dotenv').config();
const fs     = require('fs');
var myTweets = require('./src/my-tweets');
var getSong  = require('./src/spotify-this-song')
var command  = process.argv[2];

// gets the time that the file is executed
var time = new Date().toString();

// info to add to the log file
var log = `${command}: ${time}`;

// adjusts the log if we have more arguments
if (process.argv[3]) {
  log = `${command} -- ${process.argv[3]}: ${time}`;
}

// appends the log info to user.log
fs.appendFile('user.log', log + '\n', function(error) {
  if (error) {
    console.log(error)
  }
});

// runs the function for the appropriate command
if (command === 'my-tweets') {
  myTweets.getTweets();
} else if (command === 'spotify-this-song') {
  getSong.getSong(process.argv[3]);
}