var Model = require('cerebellum/model');
var apiConfig = require("../config/api");

var Posts = Model.extend({
  cacheKey: "posts",
  idAttribute: "id",
  url: function() {
    return apiConfig.url +"/posts";
  }
});

module.exports = Posts;
