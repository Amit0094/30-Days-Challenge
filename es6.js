let pName = 'Amit'
let pAge = 29

const str = `Hi  I'm ${pName} and I am ${pAge} year old...`

// console.log(str);

const multiStr = `Construction of the mausoleum was completed in 1648, but work continued on other phases of the project for another five years. The first ceremony held at the mausoleum was an observance by Shah Jahan, on 6 February 1643, of the 12th anniversary of the death of Mumtaz Mahal. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹5 million, which in 2023 would be approximately ₹35 billion (US$77.8 million).`

// console.log(multiStr);


const arr = [10, 20, 30, 40, 50, 60]

let [a, b] = arr

// console.log(a,b);

const book = {
    title: 'Javascript',
    author: 'Brendan Eich',
    year: 1995
}

const { title, author } = book

// console.log(title , author);






// spread operator

let oldArr = ['Pink', 'Red', 'Orange', 'Black']

let newArr = [...oldArr, 1, 2, 3, 4]
// console.log(newArr);


function add(...arg) {
    let result = 0
    arg.forEach((num) => result += num)
    return result
}


let response = add(10, 20, 30, 40, 50, 60)
// console.log(response);



function product(val1, val2 = 1) {
    return val1 * val2
}

// console.log(product(10,5)); // with second argument
// console.log(product(10)); // without second argument



// *****Enhanced Object Literals***************

let objName = 'Amit'
let objAge = 21
let objLocation = 'Patna'

function objInfo() {
    console.log(`Hi , ${objName}`);
}

// Using Object Literal Enhancement 
// combines all variables into a demo object

const demo = { objName, objAge, objLocation, objInfo }

// console.log(demo);
// demo.objInfo()




// computed property

const propertyName = "dynamicPropertyName";
const obj = {
    [propertyName]: 'value' // the value assign to propertyName is the key of 'value' in obj
}

// console.log(obj);


function createPerson(name, age) {
    return {
        name ,       // value pass to name is placed as value in obj and name is his key
        age,
        [`is${name}Adult`] : age >= 18
    }
}

const person = createPerson("Amit", 19);
console.log(person);