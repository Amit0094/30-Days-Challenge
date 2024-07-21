const book = {
    title: 'Javascript',
    author: 'Brendan Eich',
    year: 1995,
    // method
    info() {
        console.log(`${this.title} is written by ${this.author}`);
    },

    // method for updating year of book obj

    yearUpdate(year) {
        this.year = year
        // console.log(`current year is ${this.year}`);
    },

    // decision pending ******
    // strInfo(){
    //     str = `${this.title} is written in ${this.year}`
    //     return str
    // }

}

// console.log(book);

// console.log(book.title);
// console.log(book.author);

// book.info()

// book.yearUpdate(2019)
// console.log(book.year);


const library = {
    name: 'Programming',
    books: [
        {title : 'Javascript' , author : 'Brendan Eich' , year : 1995},
        {title : 'Python' , author : 'Guido van Rossum' , year : 1956}
    ]

}

// console.log(library);
// console.log(library.name);
// library.books.forEach((obj)=>{
//     console.log(obj.title);
// })


// decision pending ******
// let res = book.strInfo()
// console.log(res);



// for (const key in book) {
//     if(book.hasOwnProperty(key)){
//         console.log(`${key} : ${book[key]}`);
//     }
// }

// console.log(Object.keys(book) , Object.values(book));

let entries = Object.entries(book)
// console.log(entries);

let {title , author} = book // object  Destructuring

// console.log(title , author);

let obj1 = {a:1,b:2,c:3}
let obj2 = {d:4,e:5,f:6}

let mergedObj = {...obj1 , ...obj2} // spread operator
// console.log(mergedObj);


// let freeze = Object.freeze({title : 'Me'})
// freeze.title = 'me2'
// console.log(freeze.title);

// Object.freeze(book)
// book.title = 'me'
// console.log(book.title);



//*************************************************************************************/

// delete book.title
// console.log(book.title);