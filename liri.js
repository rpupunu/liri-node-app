// VARIABLE AND REQUIREMENTS //

require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var moment = require('moment');
moment().format();
var spotify = new Spotify(keys.spotify);
let operation = process.argv[2];
let input = process.argv[3];

// CONCERT THIS //

if(operation === 'concert-this') {
    axios.get('htts://rest.bandintown.com/artist/' + input + '/events?app_id=codingbootcamp').then(
        function(response) {
            let concert = response.data[0];

            console.log('Venue Name: ' + concert.venue.name);
            console.log('Venue Location: ' + concert.venue.city + ' '  + concert.venue.region + ' ' + concert.venue.country);

            let concertDate = concert.datetime;
            concertDate = moment().utc().format('MM/DD/YYYY');
            console.log('Concert Date: ' + concertDate);
        }
    )};

    

