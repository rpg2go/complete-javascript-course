'use strict';

var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1989,
    calcAge: function () {
        console.log(this); // return upper object
        console.log(2037 - this.year); // return diff

        //solution 1
        // const self = this;
        // const isMillenial = function () {
        //     // console.log(this);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        //solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};

// jonas.calcAge(); // return jonas object
jonas.greet();

jonas.calcAge();

// console.log(this);
// console.log(this.firstName);

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);

addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    // console.log(arguments);
    return a + b;
};

addArrow(2, 5, 8);

// primitives vs objects

console.log('primitives vs objects.....');

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log(friend);
console.log(me);

let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

console.log(me);
me.name = 'Marius';

const meCopy = Object.assign({}, me);
console.log(meCopy);
