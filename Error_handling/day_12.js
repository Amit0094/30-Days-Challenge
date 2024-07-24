// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('something went wrong...')
//     }, 2000);
// })


// async function error(a, b) {
//     try {
//         let res = await promise
//         console.log(res);
//     }catch(error){
//         console.log(error);
//     }
// }
// error(10, 3)


// function divide(num1, num2) {
//     if (num2 === 0) {
//         throw new Error('denominator should not be zero')
//     } else {
//         return num1 / num2
//     }
// }

// try {
//     let res = divide(12, 2)
//     console.log(res);
// }
// catch(error){
//     console.log(error.message);
// }
// finally{
//     console.log('finally executed');
// }


// Task - 5

// const input = document.getElementById('username')
// input.addEventListener('keyup',(e)=>{
//     if(e.key==='Enter'){
//         try{
//             validate(input.value)
//         }catch(error){
//             console.log(error.message);
//         }
//     }
// })


// function validate(str){
//     if(str == ''){
//         throw new Error('input field is empty')
//     }else{
//         console.log('Enter data is correct');
//     }
// }


// Task - 6

// const promise2 = new Promise((resolve, reject) => {
//     let rndNum = Math.random()
//     if (rndNum < 0.5) {
//         resolve('promise resolve')
//     } else {
//         reject('promise rejected')
//     }
// })


// promise2.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



// Task - 7


// async function resolver() {
//     try {
//         let res = await promise2
//         console.log(res);
//     }catch(error){
//         console.log(error);
//     }
// }


// resolver()



// Task - 8

// let res = fetch('https:/api.github/Amit0094') // Invalid URL

// res.then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error.message , 'Something went wrong');
// })


// Task - 9

// async function error_handler(){
//     try{
//         let res = await fetch('https:/api.github/Amit0094') // Invalid URL
//         console.log(res);
//     }catch(error){
//         console.log(error.message, 'Something went wrong');
//     }
// }

// error_handler()



// Task - 4


class customError extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'CustomError'
    }
}

function riskyFunc() {
    throw new customError('This is customError message...')
    // throw new Error('this is unexpected Error...')
}

try {
    riskyFunc()
} catch (error) {
    if (error instanceof customError) {
        console.log(error.message);
        console.log(error.name);
    }else{
        console.log(error.message);
    }
}