// Task - 5


function reverseStr(str){
    if(str.length === 1){
        return str
    }
    return reverseStr(str.slice(1))+str[0]
}

const testStr1 = 'Amit'
const testStr2 = 'Elephant'

// console.log(reverseStr(testStr1));
// console.log(reverseStr(testStr2));





// Task - 6

function palindrome(str){
    if(str.length <= 1){
        return true
    }

    if(str[0] !== str[str.length-1]){
        return false
    }

    return palindrome(str.slice(1,-1))
}


console.log(palindrome('Amit'));
console.log(palindrome('racecar'));