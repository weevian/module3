// Wod Day 11 - Easy one for today... String and Character

// Alice wrote a sequence of words in CamelCase as a string of letters, , having 
// the following properties:

// It is a concatenation of one or more words consisting of English letters. 
// All letters in the first word are lowercase. For each of the subsequent words, 
// the first letter is uppercase and rest of the letters are lowercase. Given s , 
// print the number of s words in on a new line.

function wordCount(str){
var sum = 0;
    for (i=0; i < str.length; i++){
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91){
            sum++;
        } 
    }
return sum+1
}

console.log(wordCount("saveChangesInTheEditor"))
console.log(wordCount("saveButtonPressed"))