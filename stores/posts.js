var Model = require('cerebellum/model');
var apiConfig = require("../config/api");

var Posts = Model.extend({
  cacheKey: "posts",
  idAttribute: "id",
  url: function() {
    return apiConfig.url +"/wp-json/wp/v2/posts?_embed&per_page=20";
  }
});

module.exports = Posts;
