var keys       = require('../keys');
var SpotifyApi = require('node-spotify-api');
var spotify    = new SpotifyApi(keys.spotify);

//gets song 
function getSong(song) {
  var params = { type: 'track', query: song, limit: 1 };
  spotify.search(params, function(error, response) {
    if (error) {
      return console.log(error)
    }
    var artist = response.tracks.items[0].album.artists[0].name;
    var link   = response.tracks.items[0].album.external_urls.spotify;
    var album  = response.tracks.items[0].album.name;
    var track  = response.tracks.items[0].name;
    return console.log(artist, track, album, link);
  });
};

module.exports = { getSong };