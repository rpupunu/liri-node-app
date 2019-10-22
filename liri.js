// VARIABLE AND REQUIREMENTS //

require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./key.js");
var moment = require('moment');
moment().format();
var spotify = new Spotify(keys.spotify);
let operation = process.argv[2];
let input = process.argv[3];

if(operation === 'do-what-it-says') {
    false.readFile("random.txt", "utf8", function(error, data) {

        if(error) {
            return console.log(error);
        }

        console.log(data);

        var dataArr = data.split(",");

        operation = dataArr[0];
        input = dataArr[1];
        evalOperation();
    });
}

evalOperation();

function evalOperation() {
// CONCERT THIS //
if(operation === 'concert-this') {
    axios.get('https://rest.bandsintown.com/artists/'+input+'/events?app_id=codingbootcamp').then(
        function(response) {
            let Data = response.data[0];

            // console.log(Data);

            console.log('Venue Name: ' + Data.venue.name);
            console.log('Venue Location: ' + Data.venue.city + ' '  + Data.venue.region + ' ' + Data.venue.country);

            let concertDate = Data.datetime;
            concertDate = moment().utc().format('MM/DD/YYYY');
            console.log('Concert Date: ' + concertDate);
            console.log('Lineup: ' + Data.lineup[0]+ ', ' + Data.lineup[1]+ ', '+ Data.lineup[2]);
        }
)};

// SPOTIFY-THIS-SONG //
if(operation === 'spotify-this-song') {
    // if statement that will default to The Sign Ace of Base if no song is inputted.
    if(!input) {
        input = 'The Sign Ace of Base';
    }
    spotify.search({ type: 'track', query: input, limit: 1}, function(err, data) {
        if(err) {
            return console.log('Error occured: ' + err);
        }

        let Data = data.tracks.items[0];
        // console.log(Data);

        let artistList = '';
        for(let i = 0; i < Data.artists.length; i++) {
            artistList += Data.artists[i].name + ' ';
        }

        console.log('Artists: ' + artistList);
        console.log('Song: ' + Data.name);
        console.log('Preview URL: ' + Data.preview_url);
        console.log('Album: ' + Data.album.name);
})};

// MOVIE-THIS //
if(operation === `movie-this`) {
    if(!input) {
        input = 'Mr. Nobody';
    }

    axios.get('http://www.omdbapi.com/?apikey=trilogy&limit=1&t='+input).then(
        function(response) {
            let Data = response.data;
            let tomatoScore = '';
            console.log(Data);
            console.log('Title' + Data.Title);
            console.log('Year Released: ' + Data.Year);
            console.log('IMDB Rating: ' + Data.imdbRating);

            for(let i = 0; i < Data.Ratings.length; i++) {
                if(Data.Ratings[i].Source === 'Rotten Tomatoes') {
                    tomatoScore = Data.Ratings[i].Value;
                }
            }
            console.log('Rotten Tomotoes Rating: ' + tomatoScore);
            console.log('Country Where Movie Was Produced: ' + Data.Country);
            console.log('Language of the movie: ' + Data.Language);
            console.log('Movie Plot: ' + Data.Plot);
            console.log('Actors: ' + Data.Actors);
            
        }
    )
}
};






    

