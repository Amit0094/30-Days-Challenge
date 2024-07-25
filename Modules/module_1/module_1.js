function add(val1,val2){
    console.log(val1+val2);
}

// console.log('module_1'); // it is also display in module_2.js file

// Concept
// require.main: This is a special property in Node.js that points to the file that was run directly using the node command.
// module: This represents the current file/module you are working in.

if(require.main === module){
    console.log('module_1');
}


const person = {
    pName : 'Amit',
    pAge : 18,
    pInfo : function(){
        console.log(`${this.pName} is ${this.pAge} years old...`);
    }
}


function subtract(num1,num2){
    console.log(num2-num1);
}
function multiply(num1,num2){
    console.log(num2*num1);
}
function divide(num1,num2){
    console.log(num1/num2);
}


// The two primary module systems used in JavaScript are ES6 modules and CommonJS
// and here i am using CommonJS module system

// Read more : https://chatgpt.com/share/76748085-4f76-4bd7-89e7-942df875bd32 (chatGPT response)

// Default export
module.exports = add;

// Named exports
module.exports.subtract = subtract;
module.exports.person = person;
module.exports.multiply = multiply;
module.exports.divide = divide;