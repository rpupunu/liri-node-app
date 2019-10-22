# liri-node-app
Node Homework 

The main run file is liri.js.  This file has 4 operations (assigned as the 3rd node argument):
1. concert-this
2. spotify-this-song
3. movie-this
4. do-what-it-says

require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./key.js");
var moment = require('moment');
moment().format();
var spotify = new Spotify(keys.spotify);
let operation = process.argv[2];
let input = process.argv[3];