var keys    = require('../keys');
var Twitter = require('twitter');
var client  = new Twitter(keys.twitter);

// gets last 20 tweets
var getTweets = function () {
  
  // specifies parameters for request
  var params = { screen_name: 'trevj55', count: 20 };

  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (error) {
      return console.log(error);
    }
    return tweets.forEach(a => console.log(a.text, 'created on ', a.created_at))
  });
};

module.exports = { getTweets };