# liri-node-app

Liri is a command line node app that takes in parameters from the user, and returns data.

Liri utilizes the Twitter, Spotify, and Open Movie Database API to return info based on what the user searched for.

If you want to see your latest tweets, run this from the command line:

```
node liri my-tweets
```

If you want to request song info from Spotify, run this command:

```
node spotify-this-song your song name here
```

To search the for a movie from the OMDB API you run this:

```
node movie-this your movie name here
```

In order for the Twitter and Spotify API to work you will need to create a .env file and provide your own API keys inside of that, which will then link to the keys.js file.