function outerFunc() {
    let outerVar = 'Amit'

    function innerFunc() {
        console.log(outerVar);
    }

    return innerFunc
}


// const newFunc = outerFunc()
// newFunc()


// Task - 2

function counter() {
    let counter = 1

    return {
        increment() {
            counter++
        },

        logCounter() {
            console.log(`Current counter value : ${counter}`);
        }
    }
}


// let newCounter = counter()
// newCounter.increment()
// newCounter.increment()
// newCounter.increment()
// newCounter.logCounter()




function generateID() {
    let ID = Math.floor(Math.random() * 10 + 1)

    function monitor() {
        console.log(`Last created Id is ${ID++}`);
    }

    return monitor
}

// const newID = generateID()

// newID()
// newID()
// newID()









function createGreeting(name) {
    return function () {
        return `GoodMorning ${name}`
    }
}

// const greetAmit = createGreeting('Amit')
// const greetRaj = createGreeting('Raj')

// console.log(greetAmit());
// console.log(greetRaj());









// let functionArr = []

// for (let i = 0; i < 10; i++) {
//     functionArr[i] = (function(){
//         return function(){
//             console.log(`this function has index ${i}`);
//         }
//     })()
// }

// functionArr[0]()
// functionArr[1]()
// functionArr[2]()



// function module() {
//     let item = []

//     function add(value) {
//         item.push(value)
//     }

//     function remove(value){
//         item = item.filter((item)=>{
//            return item !== value
//         })
//     }
//     function showItem(){
//         console.log(...item);
//     }

//     return {
//         add,remove,showItem
//     }
// }


// const itemStore = module()

// itemStore.add('Apple')
// itemStore.add('Banana')
// itemStore.add('Litchi')

// itemStore.remove('Banana')

// itemStore.showItem()








// Task - 7

// function main(){

//     let addAns = 0

//     return function add(val){
//         console.log(`Previous Result : ${addAns}`);
//         addAns = val+10
//         console.log(`New Result : ${addAns}`);
//     }
// }

// const newFunc = main()

// newFunc(3)
// newFunc(4)




// Task - 8

function fact(val){
    let factRes = 1

    return function(){
        for (let i = 1; i <= val; i++) {
            factRes *= i
        }
        console.log(`Factorial of ${val} is : ${factRes}`);
    }
}

const fact5 = fact(5)
const fact10 = fact(10)

fact5()
fact10()