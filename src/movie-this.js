var request = require ('request');

var movieThis = function(movie) {
  // If no movie is passed in, defaults to 'Mr. Nobody'
  movie = movie || 'Mr. Nobody'; 

  var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=c60e4c40";
  
  request(queryUrl, function (err, response, body) {
    var body = JSON.parse(body)

    // Runs if the server gave a successful response
    // Check body.Response to prevent the code from running if a movie is not found
    if (!err && body.Response === 'True' && response.statusCode === 200) {
      
      // limits the search to movies only
      if (body.Type === 'movie') {
        console.log('Title:', body.Title);
        console.log('Release Year:', body.Year);
        console.log('IMDB Rating',body.imdbRating);
        console.log('Rotten Tomatoes:', body.Ratings[1].Value);
        console.log('Country Movie was produced in:',body.Country);
        console.log('Languages the movie was released in:', body.Language);
        console.log('Plot:', body.Plot);
        console.log('Actors:', body.Actors);
        console.log('-----');
      } 
  
      else {
        console.log('Please search for a movie.')
      }
    } 
    
    // runs when an error occurs
    else {
      console.log(body.Error)
    }
  });

};

module.exports = { movieThis: movieThis };