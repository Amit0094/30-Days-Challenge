// Task - 6

const email = 'ap218905@gmail.com'

// let regex = /\b(\w+)@([\w.]+)\b/;
let regex = /^(\w+)@([\w.]+)$/;  // \w is equivalent to [a-zA-Z0-9_].  and @ play as a separator 

const result = email.match(regex)

// console.log(result[1] , result[2]);





// Task - 5

let format = `(123) 456-7890`

let regex2 = /\((\d{3})\)\s(\d{3})-(\d{4})/

let match = format.match(regex2)

console.log(match);