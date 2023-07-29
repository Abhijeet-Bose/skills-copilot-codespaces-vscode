// Create web server
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const { stringify } = require("querystring");
const { json } = require("body-parser");
const { Console } = require("console");
const { response } = require("express");
const port = 3000;

// Set up the static directory to serve files from
app.use(express.static(path.join(__dirname, "public")));

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up the path for the comments
const commentsPath = path.join(__dirname, "data/comments.json");

// Set up the path for the posts
const postsPath = path.join(__dirname, "data/posts.json");

// Set up the path for the likes
const likesPath = path.join(__dirname, "data/likes.json");

// Set up the path for the users
const usersPath = path.join(__dirname, "data/users.json");

// Set up the path for the users
const sessionsPath = path.join(__dirname, "data/sessions.json");

// Set up the path for the users
const followsPath = path.join(__dirname, "data/follows.json");

// Set up the path for the users
const commentsLikesPath = path.join(__dirname, "data/commentsLikes.json");

// Set up the path for the users
const postsLikesPath = path.join(__dirname, "data/postsLikes.json");

// Set up the path for the users
const postsCommentsPath = path.join(__dirname, "data/postsComments.json");

// Set up the path for the users
const commentsCommentsPath = path.join(__dirname, "data/commentsComments.json");

// Set up the path for the users
const postsCommentsLikesPath = path.join(__dirname, "data/postsCommentsLikes.json");

// Set up the path for the users
const commentsCommentsLikesPath = path.join(__dirname, "data/commentsCommentsLikes.json");

// Set up the path for the users
const usersPostsPath = path.join(__dirname, "data/usersPosts.json");

// Set up the path for the users
const usersCommentsPath = path.join(__dirname, "data/usersComments.json");

// Set up the path for the users
const usersLikesPath = path.join(__dirname, "data/usersLikes.json");

// Set up the path for

