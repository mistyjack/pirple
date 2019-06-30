"""
Refactor homework1 code so all the variables are held as dictionary keys
and value. Then refactor your print statements so that it's a single
loop that passes through each item in the dictionary and prints out
it's key and then it's value.

a function that allows someone to guess the value of any key in the
dictionary, and find out if they were right or wrong. This function
should accept two parameters: Key and Value. If the key exists in the
dictionary and that value is the correct value, then the function should
return true. In all other cases, it should return false.
"""

favSong = {
    "song_title": "Number one for me",
    "artist": "Maher Zain",
    "featured_artist1": "Mesut Kurtis",
    "featured_artist2": "Irfan Makki",
    "featured_artist3": "Raef",
    "featured_artist4": "Hamza Namira",
    "album": "Forgive Me",
    "release_year": 2012,
    "genre": "R&B/Soul",
    "duration": 4.31667,
    "available_on": "Deezer"
}

for key in favSong:
    print(key + ":", favSong[key])
    
def guessKey(key, value):
    for keys in favSong:
        if key == keys and value == favSong[keys]:
            return True
        else:
            return False

gKey = input("Guess a key: ")
gValue = input("Guess the anser: ")

if guessKey(gKey, gValue):
    print("Good of you!")
else:
    print("Better luck next time")