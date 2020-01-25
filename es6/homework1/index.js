/*  
This file contains code that prints out the 
characteristics of my favourite song, "number one for 
me" by Maher Zain who is a Swedish muslim singer.
*/

// List of song attributes begins
var song_title = "Number one for me"; //String
var artist = "Maher Zain"; //String
var featured_artists = ["Mesut Kurtis", "Irfan Makki", "Raef", "Hamza Namira"]; //Array
var album = "Forgive Me"; //String
var release_year = 2012; //Integer
var genre = "R&B/Soul"; //String
var duration = 4.31667; //Float
var available_on = "Deezer"; //String
// List of song attributes ends

//songAttributes in a constructor function
function SongAttributes(title, artist, featured_artists, album, release_year,
            genre, duration, available_on) {
                this.title = title;
                this.artist = artist;
                this.featured_artists = featured_artists;
                this.album = album;
                this.release_year = release_year;
                this.genre = genre;
                this.duration = duration;
                this.available_on = available_on;
                this.describeSong = function () {
                    console.log("The title of my favourite song is " + this.title);
                    console.log("by " + artist + ".");
                    console.log("The featured artists are " + this.featured_artists[0] + ", "
                                + this.featured_artists[1] + ", " + this.featured_artists[2]+ ", and "
                                + this.featured_artists[3] + ".");
                    console.log("It was released in the album " + this.album);
                    console.log("in the year ",this. release_year);
                    console.log("The genre is " + this.genre + ".");
                    console.log("It lasts for ", this.duration, "and");
                    console.log("it's available on " + this.available_on + ".\n");
                };
            }

// Printing song attributes 
console.log("The title of my favourite song is " + song_title);
console.log("by " + artist + ".");
console.log("The featured artists are " + featured_artists[0] + ", "
        + featured_artists[1] + ", " + featured_artists[2]+ ", and "
        + featured_artists[3] + ".");
console.log("It was released in the album " + album);
console.log("in the year ", release_year);
console.log("The genre is " + genre + ".");
console.log("It lasts for ", duration, "and");
console.log("it's available on " + available_on + ".\n");

// Initializing instance of SongAttributes object
var NumberOneForMe = new SongAttributes("Number one for me", "Maher Zain",
                            ["Mesut Kurtis", "Irfan Makki", "Raef", "Hamza Namira"],
                            "Forgive Me", 2012, "R&B/Soul", 4.31667, "Deezer");
// Testing out the new object
console.log("\nVersion printed from describeSong method:\n");
NumberOneForMe.describeSong();