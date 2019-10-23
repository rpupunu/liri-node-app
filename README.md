# liri-node-app Node Homework 

///*LINK TO A DEMO VIDEO*///

https://drive.google.com/file/d/1cD7aIS_XeACt_J5X_5CtQITloRFZv_pw/view

////////////////////////////

The node.js file takes 2 arguments:
operation = process.argv[2];
input = process.argv[3];

The main run file is liri.js.  This file has 4 operations (assigned as the 3rd node argument):
    1. concert-this
    2. spotify-this-song
    3. movie-this
    4. do-what-it-says

Each operation has a input (assigned to the 4th node argument):
    1. 'name of an artist'
    2. 'name of a song'
    3. 'name of a movie'
    4. This operation doesnt take a 4th arugment but instead reads the random.txt file and runs the opertion and input from that file.

Here are examples of the command line you would use for each operation replacing the 'input...' with an artist, song, or movie for each specific operation.
    1. node liri.js concert-this 'input artist here'
    2. node liri.js spotify-this-song 'input song here'
    3. node liri.js movie-this 'input movie here'
    4. node liri.js do-what-it-says

### 1. concert-this (SCREENSHOTS screenshots/concert_this_screenshot.png)

This operation takes the name of a musical artist and will return the following information on their next upcoming concert event:
    Venue Name: Name of the venue holding the concert.
    Venue Location: City, State/Region, Country
    Concert Date: DD/MM/YYYY
    Lineup: All artist appearing at the concert

### 2. spotify-this-song (SCREENSHOTS screenshots/spotify_this_song.screenshot.png)

This operation takes the name of a song and using Spotify's API will return the following information about the song:
    Artists: Artist who performed the song.
    Song: Name of the song inputted. 
    Preview URL: URL provided by spotify that will open a browers and give you a preview of the song.
    Album: Name of the albumn.

### 3. movie-this (SCREENSHOTS screenshots/movie_this_screenshot.png)

This operation take the name of a movie and using OMBD's api will return the following information about the movie:
    Title: Name of the movie you inputted.
    Year Released: The year the movie was released.
    IMDB Rating: IMDB's rating of the movie.
    Rotten Tomatoes Rating: The Rotten Tomatoes rating of the movie.
    Country Where Movie Was Produced: Country(s) where the movie was filmed and produced in.
    Language of the Movie: All of the languages the movie was released in.
    Movie Plot: A brief summary of the plot about the movie.
    Actors: The main actor/actresses in the movie.

### log.txt file

The liri.js bot also has a log.txt file that will log each and every output the liri bot puts out.  It will create an exact replica of the output and write it to the log.txt file.
(SCREENSHOTS screenshots/log_txt_screensht.png)



