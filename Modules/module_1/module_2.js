

const add = require('./module_1.js') // Default exports

const {person,subtract,multiply,divide} = require('./module_1.js')  // Named exports


add(10,20)

subtract(20,5)
console.log(person.pInfo());
multiply(20,5)
divide(20,5)