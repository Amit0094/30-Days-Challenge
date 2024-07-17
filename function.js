function checkEvenOdd(num){
    if(num % 2 == 0){
        console.log('Number is Even');
    }else{
        console.log('Number is Odd');
    }
}

// checkEvenOdd(3)

function squareNum(num){
    return num**2
}
// let res = squareNum(5)
// console.log(res);


function maxVal(val1 , val2){
    if(val1 > val2){
        console.log(`${val1} is greater`);
    }else{
        console.log(`${val2} is greater`);
    }
}
// maxVal(100,20)


function concatenateString(str1, str2){
    return str1 + ' ' + str2
}

// let res = concatenateString('Hi','Amit')
// console.log(res);

const sum = (num1, num2)=>{
    return num1 + num2
}

// let res = sum(10,20)
// console.log(res);

const check = (str , findChar)=>{
    let res = str.includes(findChar)
    return res
}

// let res = check('hi , how are you !' , 'b')
// console.log(res);


function defaultPara(num1 , num2 = 10){
    return num1*num2
}

// let res = defaultPara(5)
// console.log(res);


function greeting(name , age = 20){
    return `Hey , ${name} nice to meet you . You are looking so intelligent , and you are just ${age} year old...`
}

// let response = greeting('Amit',18)
// console.log(response);


// higher-order function ...

function area(radius){
    return Math.PI * radius * radius
}

function diameter(radius){
    return 2*radius
}

let radius = [2,4,6]

function calculate(radius , logic){
    let output = []
    radius.forEach((radi)=>{
        output.push(logic(radi))
    })

    return output
}

// let res = calculate(radius,area)
// console.log(res);


function greet(){
    console.log('Welcome sir , nice to meet you');
}

function HOF(fnc , num){
    for (let i = 0; i < num; i++) {
        fnc()
    }
}

// HOF(greet , 6)