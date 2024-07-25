// The two primary module systems used in JavaScript are ES6 modules and CommonJS
// and here i am using ES6 module system 

// Use the .mjs file extension for ES6 modules, or you can use the .js extension and specify the module type in your package.json.

// If you prefer using the .js extension, create a package.json file with the following content:
// {
//     "type": "module"
// }


export function sayHello(){
    console.log('Amit says hello !');
}

export const numOne = 12
export const numTwo = 25
export const strOne = 'Amit'

export function square(val){
    console.log(`${val*val}`);
}