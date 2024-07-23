// task -1 
// const promise1 = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         resolve('promise resolved')
//     }, 2000);
// })

// promise1.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// task - 2
// const promise2 = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         reject('promise rejected because of some error')
//     }, 2000);
// })

// promise2.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// task - 4
// async function

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('promise resolved')
//     }, 3000);
// })


// async function resolver(){
//     let res = await promise3
//     console.log(res);
// }

// resolver()



// task - 5
// const promise4 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject('promise rejected')
//     }, 2000);
// })

// async function rejection(){
//     try{
//         let res = await promise4
//         console.log(res);
//     }
//     catch (error){
//         console.log(error);
//     }
// }

// rejection()



// Task - 3  (promise chaining)

// function fetchData(data , time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('promise resolved' , data);
//             resolve(data)
//         }, time);
//     })
// }


// fetchData('sample-data-1',2000).then((res)=>{
//     console.log(res);
//     return fetchData('sample-data-2' , 3000)
// }).then((res)=>{
//     console.log(res);
//     return fetchData('sample-data-3' , 2000)
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



// Task - 6

// const data = fetch('https://api.github.com/users/Amit0094')

// const promise5 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(data)
//     }, 2000);
// })


// promise5.then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// Task - 7

// const data = fetch('https://api.github.com/users/Amit0094')

// async function waitforData(){
//     let res = await data
//     let jData = await res.json()
//     console.log(jData);
// }


// waitforData()



// Task - 8

// const promise6 = new Promise((resolve,reject)=>{
//     let rndNum = Math.random()
//     if(rndNum < 0.5){
//         console.log('promise_1 resolved');
//         resolve('resolve')
//     }else{
//         reject('something went wrong')
//     }
// })
// const promise7 = new Promise((resolve,reject)=>{
//     let rndNum =Math.random()
//     if(rndNum < 0.5){
//         console.log('promise_2 resolved');
//         resolve('resolve')
//     }else{
//         reject('something went wrong')
//     }
// })
// (promise.all)

// const promise = Promise.all([promise6,promise7])
// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// (promise.race)

// Simulating server fetch with a promise
function fetchDataFromServer(data, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
}

// Example promises
const promise1 = fetchDataFromServer('Data 1', 1000);
const promise2 = fetchDataFromServer('Data 2', 2000);
const promise3 = fetchDataFromServer('Data 3', 1500);

// Using Promise.race to log the first resolved value
Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log(`First resolved value: ${result}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
