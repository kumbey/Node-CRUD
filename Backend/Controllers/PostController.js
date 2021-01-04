// first we need mongooes to use our model
const mongoose = require("mongoose");
// next we import our posts model
const Posts = mongoose.model("posts");

// function for base route on "/"
exports.baseRoute = async (req, res) => {
  res.send("Server Running");
};

// function to get posts on route "/getPosts"
exports.getPosts = async (req, res) => {
  const posts = await Posts.find();
  res.json(posts);
};
