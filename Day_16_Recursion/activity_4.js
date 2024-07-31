// Task - 7

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if(left>right){
        return -1
    }

    const mid = Math.floor((left+right)/2)

    if(arr[mid] === target){
        return mid
    }
     // If the target is less than the middle element, search in the left half
    if(arr[mid]>target){
        return binarySearch(arr,target,left,mid-1)
    }

    // // If the target is greater than the middle element, search in the right half
    return binarySearch(arr,target,mid+1,right)
}



const sortedArr = [10,20,30,40,50]

// console.log(binarySearch(sortedArr,20));
// console.log(binarySearch(sortedArr,50));
// console.log(binarySearch(sortedArr,30));






// Task - 8

function totalOccurrences(arr,target){
    if(arr.length === 0){
        return 0
    }

    const count = arr[0]===target ? 1 : 0

    return count+totalOccurrences(arr.slice(1),target)
}


console.log(totalOccurrences([1,2,1,3,1,4,1,5,1],1));