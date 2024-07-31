// sum of elements of array ****************************************************

// function sumOfArr(arr){
//     if(arr.length === 1){
//         return arr[0]
//     }
//     else if(arr.length === 0){
//         console.log('Array is Empty');
//         return
//     }

//     return arr[0]+sumOfArr(arr.slice(1))
// }

// console.log(sumOfArr([1,2,3,4,5]));
// console.log(sumOfArr([10,20,30,40,50]));
// console.log(sumOfArr([10]));
// console.log(sumOfArr([]));



// find greater number from a given array (long method) ************************

// let maxEle;
// let index = 0;
// function maxElement(arr) {
//     if (maxEle === undefined) {
//         maxEle = arr[0]
//     }
//     if (arr.length === 0) {
//         console.log('Array is Empty');
//     }
//     if (index >= arr.length - 1) { // 3 >= 3 // false
//         const result = maxEle
//         maxEle = undefined
//         index = 0
//         return result;
//     } else {
//         if (maxEle < arr[index + 1]) {
//             maxEle = arr[index + 1]
//             index++
//             return maxElement(arr)
//         } else {
//             index++
//             return maxElement(arr)
//         }
//     }

// }

// console.log(maxElement([10, 20, 40, 5]));
// console.log(maxElement([1]));
// console.log(maxElement([100, 40, 80, 300, 4, 3, 2]));
// console.log(maxElement([30,20,10,0]));
// console.log(maxElement([30,20,10,0,400]));



// find greater number from a given array (short method)***************************


// function maxElement(arr){
//     if(arr.length === 1){
//         return arr[0]
//     }
//     if(arr.length === 0){
//         return 'Array is Empty'
//     }
//     return Math.max(arr[0],maxElement(arr.slice(1)))
// }

// console.log(maxElement([40,300,20,100]));
// console.log(maxElement([1,2,300,4,3,700]));
// console.log(maxElement([1]));
// console.log(maxElement([]));









// reverse the string****************************************************

function reverseStr(str) { // Amit
    if (str.length === 1) {
        return str
    }

    return str[str.length - 1] + reverseStr(str.slice(0, -1)) // tima
}

// console.log(reverseStr('Amit'));



// check string is palindrome or not********************************************

function checkPalindrome(str) {
    if (str.length === 1) {
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    console.log(str);
    return checkPalindrome(str.slice(1, -1))
}

// console.log(checkPalindrome('apple'));
// console.log(checkPalindrome('madam'));





// ****************************************************************************
// binary search on array to find the element of array and returning its index
// sorted array = [10,20,30,40,50]
// sorted array = [50,40,30,20,10]
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    let mid = Math.floor((left + right) / 2)
    if (arr.length === 1) {
        if (arr[0] === target) {
            return 0
        } else {
            return 'Target not found'
        }
    }
    if (mid === arr.length - 1 && target !== arr[mid]) {
        return 'Target not found'
    }
    if (target === arr[mid]) {
        return mid
    }
    else if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1)
    }
    else if (target > arr[mid]) {
        return binarySearch(arr, target, mid + 1, right)
    }
    else {
        return 'Target not found'
    }
}

// console.log(binarySearch([10,20,30,40,50],50));
// console.log(binarySearch([10,20,30,40,50],10));
// console.log(binarySearch([10,20,30,40,50],30));
// console.log(binarySearch([10,20,30,40,50],90));
// console.log(binarySearch([10],90));
// console.log(binarySearch([10],10));













// ****************************************************************************

// calculate the occurrences of target element in the array (long-form)
// example = [1,2,1,3,1,4,1]
// let counter = 0;
// let index = 0;
// function occurrences(arr, target) {
//     if(index>arr.length){
//         let temp = counter
//         counter = 0
//         index = 0
//         return temp
//     }
//     if (arr[index] === target) {
//         index++
//         counter++
//         return occurrences(arr, target)
//     }else{
//         index++
//         return occurrences(arr,target)
//     }
// }
// console.log(occurrences([1,2,1,1,4,1,5,1],1));
// console.log(occurrences([1,2,1,1,4,4,4,1,5,1],4));
// console.log(occurrences([4,2,3,2,32,32],1));



// calculate the occurrences of target element in the array (short-form)

function occurrences(arr, target) {
    if(arr.length === 0){
        return 0
    }

    let count = arr[0]===target ? 1 : 0

    return count+occurrences(arr.slice(1),target)
}

console.log(occurrences([1, 2, 1, 1, 4, 1, 5, 1], 1));