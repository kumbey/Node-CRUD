const express = require("express");
const router = express.Router(); // to create different routes

// import the controller file for functions
const postController = require("../Controllers/PostController");

// use
router.get("/", postController.baseRoute);

// create
router.post("/create", postController.createPost);

// read all
router.get("/getPosts", postController.getPosts);

// read one
router.get("/getPost/:id", postController.getSinglePost);

// update
router.put("/post/:id/update", postController.updatePost);

// delete
router.delete("/delete/:id", postController.deletePost);

module.exports = router;
