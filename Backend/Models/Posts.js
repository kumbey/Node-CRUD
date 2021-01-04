// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema
const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  desc: {
    type: String,
  },
});

module.exports = mongoose.model("posts", PostsSchema);
