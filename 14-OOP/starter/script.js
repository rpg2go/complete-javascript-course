'use strict';

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     console.log(this);

//     //never do this
//     // this.calcAge = function() {
//     //     console.log(2037 - this.birthYear);
//     // }
// }

// const jonas = new Person('Jonas', 1991);
// console.log(jonas instanceof Person);

// // 1) New {} is created
// // 2) function is called, this = {}
// // 3) {} is linked to prototype
// // 4) function automatically return {}

// const matilda = new Person('Matilda', 2018);
// console.log(matilda instanceof Person);

// const jack = new Person('Jack', 1990);
// console.log(jack instanceof Person);

// // Prototypes e.g. Person.prototype

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear);
// }

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// console.log(jonas);

// Person.prototype.species = 'Homo Sapiences';

// console.log(jonas.species, jonas.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// //object.protytype (top of the prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 5, 7, 6, 4, 5];
// console.log(arr.__proto__);

// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//     return [...new Set(this)];
// }

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// class expression
//const PersonClass = class {}

// class declaration
// class PersonClass { }

// class Person {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     //method will be added to .prototype property
//     calcAge() {
//         return 2037 - this.birthYear;
//     }

//     greet = function() {
//         console.log(`Hey ${this.firstName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name
//         else alert(`${name} is not a full name`);
//     }

//     get fullName() {
//         return this._fullName;
//     }
// }

// Person.hey = function() {
//     console.log(this);
//     console.log('Hey there :)');
// };

// const jessica = new Person('jessica', 1990);
// console.log(jessica);
// console.log(jessica.calcAge());

// console.log(jessica.__proto__ === Person.prototype);

// jessica.fullName = 'Jessica Alba';
// console.log(jessica);

// // Person.prototype.greet = function() {
// //     console.log(`Hey ${this.firstName}`);
// // }

// //jessica.greet();

// const walter = new Person('walter', 1995);

// Person.hey();

// const account = {
//     owner: 'Jonas',
//     movements: [200, 500, 350, 140],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(move) {
//         this.movements.push(move);
//     },
// }

// console.log(account.latest);
// console.log(account.movements);
// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//     calcAge() {
//         this.age = 2037 - this.birthYear
//         console.log(this.age);
//     },
//     init(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     }
// }

// const steve = Object.create(PersonProto)
// console.log(steve);
// steve.name = 'Steve';
// steve.birthYear = 1991

// steve.calcAge();

// console.log(steve.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1995);
// sarah.calcAge()
// console.log(sarah);

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear);
// }

// const Student = function(firstName, birthYear, course) {
//     // this.firstName = firstName;
//     // this.birthYear = birthYear;
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__); //student
// console.log(mike.__proto__.__proto__); //person
// console.log(mike.__proto__.__proto__.__proto__); // object
// console.log(mike.__proto__.__proto__.__proto__.__proto__); // null

// console.dir(Student.prototype.constructor); //student

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     //method will be added to .prototype property
//     calcAge() {
//         return 2037 - this.birthYear;
//     }

//     greet = function() {
//         console.log(`Hey ${this.firstName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name
//         else alert(`${name} is not a full name`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log('Hey there :)');
//     }
// }

// class Student extends PersonCl {
//     constructor(firstName, birthYear, course) {
//         //always needs to happen first
//         super(firstName, birthYear);
//         this.course = course;
//     }

//     introduce() {
//         console.log(`My nam is ${this.firstName} and I study ${this.course}`);
//     }

//     calcAge() {
//         console.log(`I'm ${2037 - this.birthYear} old, but as a student I feel more like ${2037 - this.birthYear - 10}.`);
//     }
// }

// const martha = new Student('Martha', 1990, 'Computer scince');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//     calcAge() {
//         this.age = 2037 - this.birthYear
//         console.log(this.age);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steve = Object.create(PersonProto)
// steve.init('steve', 1990)
// console.log(steve);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }

// StudentProto.introduce = function() {
//     console.log(`My nam is ${this.firstName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// console.log(jay);

// jay.init('Jay', 2000, 'Computer Science')
// jay.introduce();
// jay.calcAge();

class Account {
    // 1) public fields
    locale = navigator.language;

    // 2) private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;

        //protected
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log('Thank you for opening an account.');
    }

    getPin() {
        return this.#pin;
    }

    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    #approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved.`);
        }
        return this;
    }
}

const acc1 = new Account('Jonas', 'EUR', '11234');
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(50);
// acc1.movements.push(-10);

acc1.deposit(100);
acc1.deposit(50);
acc1.deposit(30);
acc1.withdraw(10);

console.log(acc1);

acc1.requestLoan(1000);

console.log(acc1.getMovements());

console.log(acc1.getPin());

acc1.deposit(300).deposit(100).withdraw(200).requestLoan(100).withdraw(300);
console.log(acc1);
console.log(acc1.getMovements());
