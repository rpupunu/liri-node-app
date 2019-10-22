// VARIABLE AND REQUIREMENTS //

require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./key.js");
var moment = require('moment');
var fs = require("fs");
moment().format();
var spotify = new Spotify(keys.spotify);
let operation = process.argv[2];
let input = process.argv[3];

if(operation === 'do-what-it-says') {

    fs.readFile("random.txt", "utf8", function(error, data) {

        if(error) {
            return console.log(error);
        }
        console.log('*_____________________________________*');
        console.log(data);
        console.log('*_____________________________________*');

        var dataArr = data.split(",");

        operation = dataArr[0];
        input = dataArr[1]; 
        evalOperation();

        // APPEND THE log.txt FILE WITH THE CONSOLED RESULTS //
        fs.appendFile("log.txt", 
        "\n*___________do-what-it-says___________*" +
        "\n" + data +
        "\n*_____________________________________*", function(err) {
            if (err) {
                return console.log(err);
            }
        });
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
            console.log('*____________concert-this_____________*');
            console.log('Venue Name: ' + Data.venue.name);
            console.log('Venue Location: ' + Data.venue.city + ', '  + Data.venue.region + ' ' + Data.venue.country);

            let concertDate = Data.datetime;
            let lineup = '';
            for(let i = 0; i < Data.lineup.length; i++) {
                lineup += Data.lineup[i] + ' ';
            }
            concertDate = moment().utc().format('MM/DD/YYYY');
            console.log('Concert Date: ' + concertDate);
            console.log('Lineup: ' + lineup);
            console.log('*_____________________________________*');

            // APPEND THE log.txt FILE WITH THE CONSOLED RESULTS //
            fs.appendFile("log.txt", 
            "\n*____________concert-this_____________*" +
            "\nVenue Name: " + Data.venue.name +
            "\nVenue Location: " + Data.venue.name +
            "\nConcert Date: " + concertDate +
            "\nLineup: " + Data.lineup[0]+ ', ' + Data.lineup[1]+ ', '+ Data.lineup[2] +
            "\n*_____________________________________*", function(err) {
                if (err) {
                    return console.log(err);
                }
            });
        }
)};

// SPOTIFY-THIS-SONG //
if(operation === 'spotify-this-song') {
    // if statement that will default to The Sign Ace of Base if no song is inputted.
    if(!input) {
        input = 'The Sign Ace of Base';
    }
    spotify.search({ type: 'track', query: input, limit: 3}, function(err, data) {
        if(err) {
            return console.log('Error occured: ' + err);
        }

        let Data = data.tracks.items[0];
        // console.log(Data);

        let artistList = '';
        for(let i = 0; i < Data.artists.length; i++) {
            artistList += Data.artists[i].name + ' ';
        }
        console.log('*__________spotify-this-song__________*');
        console.log('Artists: ' + artistList);
        console.log('Song: ' + Data.name);
        console.log('Preview URL: ' + Data.preview_url);
        console.log('Album: ' + Data.album.name);
        console.log('*_____________________________________*');

        // APPEND THE log.txt FILE WITH THE CONSOLED RESULTS //
        fs.appendFile("log.txt", 
        "\n*__________spotify-this-song__________*" +
        "\nArtists: " + artistList +
        "\nSong: " + Data.name +
        "\nPreviewURL: " + Data.preview_url +
        "\nAlbum: " + Data.album.name +
        "\n*_____________________________________*", function(err) {
            if (err) {
                return console.log(err);
            }
        });
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
            // console.log(Data);

            console.log('*______________movie-this_____________*');
            console.log('Title' + Data.Title);
            console.log('Year Released: ' + Data.Year);
            console.log('IMDB Rating: ' + Data.imdbRating);

            for(let i = 0; i < Data.Ratings.length; i++) {
                if(Data.Ratings[i].Source === 'Rotten Tomatoes') {
                    tomatoScore = Data.Ratings[i].Value;
                }
            }
            console.log('Rotten Tomatoes Rating: ' + tomatoScore);
            console.log('Country Where Movie Was Produced: ' + Data.Country);
            console.log('Language of the Movie: ' + Data.Language);
            console.log('Movie Plot: ' + Data.Plot);
            console.log('Actors: ' + Data.Actors);
            console.log('*_____________________________________*');
            // APPEND THE log.txt FILE WITH THE CONSOLED RESULTS //
            fs.appendFile("log.txt", 
            "\n*______________movie-this_____________*" +
            "\nTitle: " + Data.Title +
            "\nYear Released: " + Data.Year +
            "\nIMDB Rating: " + Data.imdbRating +
            "\nRotten Tomatoes Rating: " + tomatoScore +
            "\nCountry Where Movie Was Produced: " + Data.Country +
            "\nLanguage of the Movie: " + Data.Language +
            "\nMovie Plot: " + Data.Plot +
            "\nActors: " + Data.Actors +
            "\n*_____________________________________*", function(err) {
                if (err) {
                    return console.log(err);
                }
            });

        }
    )
}
};






    

