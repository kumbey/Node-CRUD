/* 
    this file will have all the applcation level configuration, as we go ahead we will keep on adding middlewares and supporting libraries
 */

const express = require("express"); // import express
const app = express(); // initialise app with express

// import our routes
const routes = require("./Routes/PostRoutes");

// middleware to use our routes
app.use("/", routes);

// export the app
module.exports = app;
