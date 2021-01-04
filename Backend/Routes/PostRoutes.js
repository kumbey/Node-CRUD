const express = require("express");
const router = express.Router(); // to create different routes

// import the controller file for functions
const postController = require("../Controllers/PostController");

// use
router.get("/", postController.baseRoute);

router.get("/getPosts", postController.getPosts);

module.exports = router;
