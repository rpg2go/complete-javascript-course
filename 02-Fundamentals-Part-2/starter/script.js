'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = false;
if (hasDriversLicense) console.log('I can drive')

// const interface = 'Audio';
// const private = 534;



/************* FUNCTIONS ***********/

function logger() {
    console.log('My name is Jonas');
}

//calling / running / invoking function
//logger();

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    console.log(juice);

    const juicePieces = `Juice with ${applePieces} apples pieces and ${orangePieces} orange pieces`;
    console.log(juicePieces);

    return {
        juice,
        juicePieces
    };
}


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleAndOrangeJuice = fruitProcessor(2, 3);

const appleWithoutOrangeJuice = fruitProcessor(2, 2);

// function declaration
function calcAge(birthYear) {
    return 2037 - birthYear
}
const age1 = calcAge(1991);


// function expression 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


console.log('\n\n************* ARRAYS ***********\n')

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//add elements
friends.push('Jess')
friends.unshift('John');

console.log(friends);



//remove elements
const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);


console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('YOu have already a friend call Steven');
}


const years = new Array(1991, 1984, 1993, 2020);
console.log(years[0]);
console.log(friends.length, years.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtman', 2037 - 1991, friends];
console.log(jonas);

const calculateAge = function (birthYeah) {
    return 2037 - birthYeah;
}

calculateAge(years);

const age01 = calculateAge(years[0]);
const age02 = calculateAge(years[1]);
const age03 = calculateAge(years[2]);
console.log(age01, age02, age03);

const ages = [calculateAge(years[0]), calculateAge(years[1]), calculateAge(years[2])];
console.log(ages);




const ex1 = parseFloat('3.02').toFixed(2);
console.log(ex1); // 👉️ 3.02
console.log(typeof ex1); // 👉️ string

const ex2 = Number('3.05').toFixed(2);
console.log(ex2); // 👉️ 3.06
console.log(typeof ex2); // 👉️ string

const ex12 = [ex1, ex2];
console.log(ex12);
console.log(typeof ex12);


const ex3 = parseFloat('3.1').toFixed(2);
console.log(ex3); // 👉️ 3.10

const ex4 = parseFloat('3.509').toFixed(2);
console.log(ex4); // 👉️ 3.51

const ex5 = parseFloat('3.505').toFixed(2);
console.log(ex5); // 👉️ 3.50

const ex6 = '123.567';
console.log(ex6);