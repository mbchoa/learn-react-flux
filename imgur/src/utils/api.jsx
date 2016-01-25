// serve as point of contact with imgur API

var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'e88a59fd66eeed4';

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response) { // when async request is complete, execute function passed to then()
      return response.json();
    });
  }
};

// Api.get('images') -> https://api.imgur.com/3/images
