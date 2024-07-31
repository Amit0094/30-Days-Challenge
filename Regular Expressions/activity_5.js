let password = '12it@12A'

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\])(?!.*\s).{8,}$/

const res = regex.test(password)

// console.log(res);

// The regular expression (?=.*[a-z]) is a positive lookahead assertion. It is used to check if a string contains at least one lowercase letter without consuming characters in the string.











// Task - 10


let URL = `http://www.example.com`
let URL2 = `http:www.example.com`

let regex2 = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

let response = regex2.test(URL)
let response2 = regex2.test(URL2)

// console.log(response);
// console.log(response2);



