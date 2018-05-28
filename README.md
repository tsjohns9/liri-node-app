# liri-node-app

Liri is a command line node app that takes in parameters from the user, and returns data. To get started run ```npm install``` and configure your .env file to connect your Spotify and Twitter API keys. To see the necessary keys for each, reference the keys.js file.

Liri utilizes the Twitter, Spotify, and Open Movie Database API to return info based on what the user searched for.

There are four ways to interact with the app:

```
node liri my-tweets
node liri spotify-this-song Amarillo By Morning
node liri movie-this Napoleon Dynamite
node liri do-what-it-says
```

The first command returns your most recent tweets.
The second command will return a Spotify result for your song.
The third command will return an OMDB result for the movie.
The fourth command will read data from random.txt and execute a search based on the data.

## User Stories

1. I can see my last 20 tweets when I run `node liri my-tweets`.
2. If I run `node liri spotify-this-song Amarillo By Morning` the result will have the artist name, song title, album, and a link to the song on spotify.
3. If I run `node liri movie-this Napoleon Dynamite` the result will have the movie title, release year, IMDB rating, Rotten Tomatoes score, country the movie was produced in, languages released in, plot, and a list of actors.
4. If I run `node liri do-what-it-says` I will get a random result based on the command, and search term in random.txt.