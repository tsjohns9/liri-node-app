var keys       = require('../keys');
var SpotifyApi = require('node-spotify-api');
var spotify    = new SpotifyApi(keys.spotify);

var spotifyThis = function(song) {
  // If no song is passed in, defaults to 'The Sign', by Ace of Base
  song = song || 'Ace of Base';

  // parameters for our request to spotify
  var params = { type: 'track', query: song, limit: 1 };

  spotify.search(params, function(error, response) {
    if (error) {
      return console.log('An error occurred.')
    }
    
    // only runs if a song is returned
    if (response.tracks.items.length > 0) {
      var artist = response.tracks.items[0].album.artists[0].name;
      var link   = response.tracks.items[0].album.external_urls.spotify;
      var album  = response.tracks.items[0].album.name;
      var track  = response.tracks.items[0].name;

      console.log('Artist:', artist);
      console.log('Song:', track);
      console.log('Album:', album);
      console.log('Spotify Link:', link);
      console.log('-----');
    }

    else {
      console.log('Song not found!');
    }
  });
};

module.exports = { spotifyThis: spotifyThis };