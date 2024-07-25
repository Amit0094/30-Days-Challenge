// Why losash ?
// It provides various inbuilt functions for collections, arrays, manipulated objects, and other utility methods that we can use directly instead of writing them from scratch. It makes it easier to iterate over the arrays, strings as well as objects. Its modular methods make the creation of composite functions easier.



// Requiring the lodash library
import lodash from 'lodash'

// Original array to be concatenated
let array = [1, 2, 3];

// Values to be added to original array 
let values = [0, 5, "a", "b"]

let newArray = lodash.concat(array, values);
console.log("Before concat: " + array);

// Printing newArray 
console.log("After concat: " + newArray);



// It is used to break the array in to small chunks.

let nArr = lodash.chunk(array, 1)  // [ [ 1 ], [ 2 ], [ 3 ] ]
console.log(nArr);