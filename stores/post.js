var Model = require('cerebellum/model');
var apiConfig = require("../config/api");

var Post = Model.extend({
  idAttribute: "id",
  cacheKey() {
    return `posts/${this.storeOptions.id}`;
  },

  url() {
    return `${apiConfig.url}/wp-json/wp/v2/posts/${this.storeOptions.id}?_embed`;
  }
});

module.exports = Post;
