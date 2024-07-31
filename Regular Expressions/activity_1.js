let text = "JavaScript is a versatile language. I love JavaScript because JavaScript is great!";
let regex = /javascript/gi;
let matches = text.match(regex);

// console.log(matches);  // ["JavaScript", "JavaScript", "JavaScript"]


// flags :
// g (global) ensures that all occurrences are matched, not just the first one.
// i (case-insensitive) ensures that the pattern matches "JavaScript" regardless of case.



// If you also want to log the matches along with their indices, you can use the exec() method in a loop:

// while ((match=regex.exec(text))!== null){
//     console.log(`${match[0]} and index : ${match.index}`);
// }





// Task - 2


let txt2 = "The year is 2024, and the time is 10:45 PM.";

const res = txt2.match(/\d/g)

// console.log(res);

// notes : 
// -->  /: The forward slashes are delimiters that indicate the beginning and end of the regular expression pattern

// --> \: The backslash is an escape character in regular expressions. It is used to indicate that the following character has a special meaning. In this case, it tells the regular expression engine to treat the d as a special character rather than a literal character.

//-->  \d: This is a predefined character class that matches any digit from 0 to 9. Without the backslash, d would simply match the letter "d"



let regex2 = /\d/g
while ((match = regex2.exec(txt2)) !== null) {
    console.log(`Found '${match[0]}' at index ${match.index}`);
}