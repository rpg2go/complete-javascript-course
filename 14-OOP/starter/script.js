'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    console.log(this);

    //never do this
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas instanceof Person);

// 1) New {} is created
// 2) function is called, this = {}
// 3) {} is linked to prototype
// 4) function automatically return {}

const matilda = new Person('Matilda', 2018);
console.log(matilda instanceof Person);

const jack = new Person('Jack', 1990);
console.log(jack instanceof Person);

// Prototypes e.g. Person.prototype

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}


jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(jonas);

Person.prototype.species = 'Homo Sapiences';

console.log(jonas.species, jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
//object.protytype (top of the prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);


const arr = [3, 6, 5, 7, 6, 4, 5];
console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);