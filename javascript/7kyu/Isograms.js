// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    const arrOfChars = str.toLowerCase().split(''); 
    const value = arrOfChars.filter((char, i) => arrOfChars.indexOf(char) === i);
    if (str.length === value.length) {
        return true; 
    } else {
        return false;
    };
};

// Option 2
// function isIsogram(str){
// 	return new Set(str.toLowerCase()).size == str.length;
// }