// Task - 1

const strVal = `Hey , I'm Amit . I like Programming.`

// localStorage.setItem('testKey',strVal) //set string to localStorage

// console.log('Retriving Value From LocalStorage');

// const response = localStorage.getItem('testKey') // fetch string value from localStorage

// console.log('Retrived Value : ',response);





// Task - 2


let obj = new Object()

obj.name = 'Amit'
obj.email = 'ap@google.com'
obj.password = `test@123`


// localStorage.setItem('authDets',JSON.stringify(obj))

// retrived auth details from localStorage

const dets = JSON.parse(localStorage.getItem('authDets'))

console.log(dets);
console.log(`Retrived Details : ${JSON.stringify(dets)}`);