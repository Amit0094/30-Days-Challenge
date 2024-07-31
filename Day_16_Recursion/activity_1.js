// Task - 1

function factorial(num){
    if(num === 0){
        return 1
    }
    else{
        return num*factorial(num-1)
    }
}

// const fact5 = factorial(5)
// const fact10 = factorial(10)

// console.log(fact5);
// console.log(fact10);





// Task - 2


// 1, 1, 2, 3, 5, 8, 13 - Fibonacci number

function Fibonacci(position){
    if(position <= 1){
        return position
    }
    else{
        return Fibonacci(position-1)+Fibonacci(position-2)
    }
}


console.log(Fibonacci(6));
console.log(Fibonacci(4));