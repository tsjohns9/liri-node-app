var keys    = require('../keys');
var Twitter = require('twitter');
var client  = new Twitter(keys.twitter);

// gets last 20 tweets
var myTweets = function () {
  
  // specifies parameters for request
  var params = { screen_name: 'trevj55', count: 20 };

  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (error) {
      return console.log(error[0].message);
    }
    return tweets.forEach(a => {
      console.log(a.text);
      console.log(a.created_at);
      console.log('-----');
    })
  });
};

module.exports = { myTweets: myTweets };