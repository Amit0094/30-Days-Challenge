const arr = [1,2,3,4,5,6]
const arr2 = Array(1,2,3,4,5)
const arr3 = Array(5).fill(1)

// console.log(arr);
// console.log(arr2);
// console.log(arr3);


// console.log(arr[0]); // first element
// console.log(arr[arr.length-1]); // last element

// push method

arr.push('Amit') // Appends new elements to the end of an array, and returns the new length of the array.

// console.log(arr);

// pop method

arr.pop('Amit') // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// console.log(arr);


const res = arr.shift() // it remove the first element from array and return it..
// console.log(res);
// console.log(arr);


arr.unshift(100) // returning new length of array
// console.log(arr);


const newArr = arr.map((ele)=> ele * 2) // returning new array with result

// console.log(newArr);


const filterArr = arr.filter((ele)=> ele % 2 == 0)
// console.log(filterArr);

const sumOfArr = arr.reduce((prevVal , currentVal)=>{
    return prevVal+currentVal
},0)

// console.log(sumOfArr);


// for loop

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach((ele)=> console.log(ele)) // forEach loop


const multiArr = [
    Array(10,20,30,40,50),
    Array(60,70,80,90,100)
]

console.log(multiArr);
// access specific element from array and log it to the console
console.log(multiArr[1][0]);