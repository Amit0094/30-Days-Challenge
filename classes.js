class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    sayHello(){
        console.log(`${this.name} says Hello !`);
        // console.log(`Age before update : ${this.age}`);
    }

    updateAge(age){
        this.age = age
        console.log(`Age after update : ${this.age}`);
    }

    static msgDisplay(){
        return 'Random calls...'
    }
}

// const user = new Person('Amit',21)

// user.sayHello()
// user.updateAge(32)

// ********************************************************

// Trying to access the static method through an instance will not work
// console.log(user.msgDisplay()); // This will throw an error

// Accessing the static method through the class
// console.log(Person.msgDisplay());



// NOTE:
// Yes, in JavaScript, when you extend a class and you have a constructor in the derived class, you must call the super method before you can use the this keyword. The super method calls the parent class's constructor, initializing the parent's properties before you can use this to refer to the instance of the derived class.

class Student extends Person{
    constructor(name , age , studentID){
         // Call the parent class constructor first
        super(name,age)
        // Then initialize the Student-specific property
        this.studentID = studentID
        // No, you cannot replace Student.studentCount++ with this.studentCount++ in this case. The reason is that this refers to the instance of the class, not the class itself. Static properties and methods belong to the class itself, not to any specific instance, so they should be accessed through the class name.
        Student.studentCount++
    }

    static studentCount = 0

    getID(){
        return this.studentID
    }

    sayHello(){
        super.sayHello()
        console.log(`Student_ID : ${this.studentID}`);
    }

}

// const newStudent = new Student('Raj',21,101)

// console.log(newStudent.getID());
// newStudent.sayHello()

// console.log(Student.studentCount);












// ********************************************************************************


class Person2 {
    constructor (firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName(){
        console.log(`fullName : ${this.firstName} ${this.lastName}`);
    }

    // Yes, in JavaScript, a setter method can only take a single parameter. This parameter represents the value that is being assigned to the property. Unlike regular methods, which can accept multiple parameters, setters are designed to handle only the value being set.

    set fullName(name){
        const [firstName,lastName] = name.split(" ")
        this.firstName = firstName || ''
        this.lastName = lastName || ''
    }
}

// const newPerson = new Person2('Amit','Pal')

// newPerson.fullName
// newPerson.fullName = 'Raj Kumar'
// newPerson.fullName















// *******************************************************************************



class Account {
    #balance

    constructor(balance){
        if(balance < 0){
            throw new Error('Amount should be greater than zero.')
        }
        this.#balance = balance
    }

    deposite(balance){
        if(balance < 0){
            throw new Error('Deposite balance should be grater than zero.')
        }

        this.#balance += balance
    }

    
    withDraw(balance){
        if(balance < 0){
            throw new Error('WithDraw balance should be grater than zero.')
        }

        this.#balance -= balance
    }


    getBalance(){
        console.log(`Total Balance : ${this.#balance}`);
    }
}


const newAccountHolder = new Account(100)

// newAccountHolder.getBalance()

// newAccountHolder.deposite(10)
// newAccountHolder.withDraw(30)
// newAccountHolder.getBalance()