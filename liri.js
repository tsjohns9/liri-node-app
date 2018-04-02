var env          = require('dotenv').config();
var fs           = require('fs');
var getTweets     = require('./src/my-tweets');
var getSong      = require('./src/spotify-this-song');
var getMovie     = require('./src/movie-this');
var command      = process.argv[2];

// used for when a song/movie has more than one word
var searchString = process.argv[3];

// gets the time that the file is executed to use in log.txt
var time = new Date().toString();

// default info to add to the log file
var log = `${command}: ${time}`;

// adds each argument to a string so you can search for a song that is longer than one word
if (process.argv.length > 3) {
  for (i = 4; i < process.argv.length; i++) {
    searchString += '+' + process.argv[i];
  }
  // adds all the arguments to the log
  log = `${command} -- ${searchString}: ${time}`;
}

// appends the log info to user.log
fs.appendFile('log.txt', log + '\n', function(error) {
  if (error) {
    return console.log(error)
  }
});

// runs the function for the appropriate command
if (command === 'my-tweets') {
  getTweets.myTweets();

} else if (command === 'spotify-this-song') {
  getSong.spotifyThis(searchString);

} else if (command === 'movie-this') {
  getMovie.movieThis(searchString);
}