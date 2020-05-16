/*
    The difference between a list and an array

    The elements contained in a list cannot be modified 
    after definition while that contained in an array can 
    be modified.

    A list should be used when it is certain that the varibles
    contained in it will not be changing, e.g. a list of English vowels.
    An array should be used when there is likely going to be changes
    to variables contained in it, e.g. an array of the first three 
    students to arrive.

    The word mutable refers to a property that tells that there's most
    likely going to be a change. When an array or list is mutable, it
    tells the ease with which the array or list can be modified. The
    modification includes altering the size of the array.
*/

val vowels = listOf <Char> ('a', 'e', 'i', 'o', 'u')
var studentNames = arrayOf <String> ("Misty", "Jack", "Chan")