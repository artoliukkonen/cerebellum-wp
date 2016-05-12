var Model = require('cerebellum/model');
var apiConfig = require("../config/api");

var Post = Model.extend({
  idAttribute: "id",
  cacheKey() {
    return `posts/${this.storeOptions.id}`;
  },

  url() {
    return `${apiConfig.url}/posts/${this.storeOptions.id}`;
  }
});

module.exports = Post;
