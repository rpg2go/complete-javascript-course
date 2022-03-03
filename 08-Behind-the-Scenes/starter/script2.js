'use strict';

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 3));

// console.log(addExpr(2, 3)); // ReferenceError: addExpr is not defined

// console.log(addArrow(2, 3)); // using const: ReferenceError: Cannot access 'addArrow' before initialization
// console.log(addArrow(2, 3)); // using var:   ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

console.log(numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

/* this usage */

console.log(this); // window object

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAge(1991);

const calcAgeArrrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAgeArrrow(1991);

const jonas = {
    name: 'Jonas',
    year: 1989,
    calcAge: function () {
        console.log(this); // return upper object
        console.log(2037 - this.year); // return diff
    },
};

jonas.calcAge(); // return jonas object

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); //script2.js:69 Uncaught TypeError: Cannot read properties of undefined (reading 'year')
