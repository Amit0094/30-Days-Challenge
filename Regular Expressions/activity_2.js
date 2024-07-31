// Pattern: `\b[A-Z][a-z]*\b`

//--> \b: Word boundary ensures that the match is at the start of a word.

//--> [A-Z]: Matches any uppercase letter.

//--> [a-z]*: Matches zero or more lowercase letters following the uppercase letter.

// --> \b: Word boundary ensures that the match is at the end of a word.



let str = "JavaScript is a Versatile Language. I love Programming in JavaScript.";

let regex = /\b[A-Z][a-zA-Z]*\b/g;

let matches1 = str.match(regex);

// console.log(matches);











// Task - 4


let str2 = "The price is 123 dollars, and the code is 4567.";

let regex2 = /\d+/g

let res = str2.match(regex2)

console.log(res);