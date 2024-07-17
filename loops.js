// Task - 1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// Task - 2
// let num = 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }


// Task - 3 

// let num2 = 1
// let res = 0
// while (num2 <= 10) {
//     res += num2
//     num2++
// }

// console.log(res);


// Task - 4

// let i = 10
// while (i > 0) {
//     console.log(i);
//     i--
// }

// Task - 5

// let num3 = 1
// do {
//     console.log(num3);
//     num3++
// } while (num3 < 6);



// Task - 6

// 5 = 5 * 4 * 3 * 2 * 1

// let factNum = 5
// let res = 1
// do {
//     res *= factNum
//     factNum--
// } while (factNum > 0);

// console.log(res);


// Task - 7

// let patterns = ''
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         patterns += '* '
//     }

//     patterns += '\n'
// }

// console.log(patterns);


// Task - 8


// for (let i = 1; i <= 10; i++) {
//     if(i===5){
//         continue
//     }
//     else{
//         console.log(i);
//     }
// }


// Task - 9

for (let i = 1; i <= 10; i++) {
    if(i === 7){
        console.log('Number is 7 so loop is being stoped...');
        break
    }
    else{
        console.log(i);
    }
}