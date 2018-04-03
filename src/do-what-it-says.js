var fs = require('fs');
var getSong = require('./spotify-this-song');
var getMovie = require('./movie-this');

var randomThis = function() {
  return fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    if (dataArr[0] === 'spotify-this-song') {
      getSong.spotifyThis(dataArr[1]);
    }

    else if (dataArr[0] === 'movie-this') {
      getMovie.movieThis(dataArr[1]);
    }
    
  });
};

module.exports = { randomThis: randomThis };