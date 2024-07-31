function sumOfArray(arr){
    if(arr.length === 0){
        return 0
    }

    return arr[0]+sumOfArray(arr.slice(1))
}


const testArr1 = [1,2,3,4,5]
const testArr2 = []

// console.log(sumOfArray(testArr1));
// console.log(sumOfArray(testArr2));




// Task - 4


function maxElement(arr){
    if(arr.length === 1){
        return arr[0]
    }
    return Math.max(arr[0],maxElement(arr.slice(1)))
}

const testArr3 = [10,20,30]
console.log(maxElement(testArr3));