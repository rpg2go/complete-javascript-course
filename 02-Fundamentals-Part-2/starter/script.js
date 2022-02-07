// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = false;
// if (hasDriversLicense) console.log('I can drive')

// // const interface = 'Audio';
// // const private = 534;



// /************* FUNCTIONS ***********/

// function logger() {
//     console.log('My name is Jonas');
// }

// //calling / running / invoking function
// //logger();

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     console.log(juice);

//     const juicePieces = `Juice with ${applePieces} apples pieces and ${orangePieces} orange pieces`;
//     console.log(juicePieces);

//     return {
//         juice,
//         juicePieces
//     };
// }


// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleAndOrangeJuice = fruitProcessor(2, 3);

// const appleWithoutOrangeJuice = fruitProcessor(2, 2);

// // function declaration
// function calcAge(birthYear) {
//     return 2037 - birthYear
// }
// const age1 = calcAge(1991);


// // function expression 
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// // arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age1, age2, age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// console.log('\n\n************* ARRAYS ***********\n')

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// //add elements
// friends.push('Jess')
// friends.unshift('John');

// console.log(friends);



// //remove elements
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);


// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));


// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// if (friends.includes('Steven')) {
//     console.log('YOu have already a friend call Steven');
// }


// const years = new Array(1991, 1984, 1993, 2020);
// console.log(years[0]);
// console.log(friends.length, years.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtman', 2037 - 1991, friends];
// console.log(jonas);

// const calculateAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// calculateAge(years);

// const age01 = calculateAge(years[0]);
// const age02 = calculateAge(years[1]);
// const age03 = calculateAge(years[2]);
// console.log(age01, age02, age03);

// const ages = [calculateAge(years[0]), calculateAge(years[1]), calculateAge(years[2])];
// console.log(ages);




// const ex1 = parseFloat('3.02').toFixed(2);
// console.log(ex1); // 👉️ 3.02
// console.log(typeof ex1); // 👉️ string

// const ex2 = Number('3.05').toFixed(2);
// console.log(ex2); // 👉️ 3.06
// console.log(typeof ex2); // 👉️ string

// const ex12 = [ex1, ex2];
// console.log(ex12);
// console.log(typeof ex12);


// const ex3 = parseFloat('3.1').toFixed(2);
// console.log(ex3); // 👉️ 3.10

// const ex4 = parseFloat('3.509').toFixed(2);
// console.log(ex4); // 👉️ 3.51

// const ex5 = parseFloat('3.505').toFixed(2);
// console.log(ex5); // 👉️ 3.50

// const ex6 = '123.567';
// console.log(ex6);


/*************** ARRAYS *****************/

// /* array definition */
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michal', 'Peter', 'Steven']
// ];

// /* object definition */
// const jonasObj = {
//     firstName: 'Jonas',
//     lastName: 'Schemedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michal', 'Peter', 'Steven']
// }

// console.log(jonasObj);

// console.log(jonasObj['lastName']);

// console.log(`Firt name: ${jonasObj.firstName}, last name: ${jonasObj.lastName}, age: ${jonasObj.age}`);

// // jonasObj.firstName = 'Jonasss';

// console.log(`Firt name: ${jonasObj.firstName}, last name: ${jonasObj.lastName}, age: ${jonasObj.age}`);

// const namekey = 'Name';

// console.log(jonasObj['first' + namekey]);
// console.log(jonasObj['last' + namekey]);

// // console.log(jonasObj.'last' + namekey);

// const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstName, lastName, age, job and frinds')
// console.log(interestedIn);
// // console.log(jonasObj.interestedIn);
// if (jonasObj[interestedIn]) {
//     console.log(jonasObj[interestedIn]);
// }

// jonasObj.location = 'Portugal';
// jonasObj['twitter'] = '@jonasschmedtman'
// console.log(jonasObj);


// const friends = ['Michal', 'Peter', 'Steven'];

// // add elements
// const newFriends = friends.push('Jay');
// console.log(friends);
// console.log(newFriends);

// friends.unshift('John');
// console.log(friends);

// // remove elements
// friends.pop(); //last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //first
// console.log(friends);
// console.log(friends.indexOf('Peter')); // return position if found 
// console.log(friends.indexOf('Bob')); // return -1 if not found

// console.log(friends.includes("Peter")); // return true if found
// console.log(friends.includes("Bob")) //return false if not found

// friends.push(23)
// console.log(friends.includes("23")) //return false if not found
// console.log(friends.includes(23)) //return false if not found


// //challenge: Jonas has 3 friends, and his best friend is called Michael

// console.log(jonasObj['firstName'] + ' has ' + jonasObj.friends.length + ' friends , and his best friend is called ' + jonasObj.friends[0])
// console.log(`${jonasObj.firstName} has ${jonasObj.friends.length} friends , and his best friend is called ${jonasObj.friends[0]}`);


// /* object definition */
// const jonasObj = {
//     firstName: 'Jonas',
//     lastName: 'Schemedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michal', 'Peter', 'Steven'],
//     hasDriversLicence: true,


//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;;
//     // }

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     summary: function () {
//         console.log(`${this.firstName} is a ${this.age} old ${this.job} and he ${this.hasDriversLicence == true? 'has a'  : 'has no'} driver's license.`)
//     }
// }

// console.log(jonasObj);

// // console.log(jonasObj.calcAge(jonasObj.birth));
// // console.log(jonasObj['calcAge'](jonasObj.birth), jonasObj.calcAge(this.birthYeah));

// console.log(jonasObj.calcAge());

// console.log(jonasObj.age);

// console.log(jonasObj.summary());


/***** LOOOPS ******/

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetion ${rep} 👉️`);
// }

/* array definition */
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michal', 'Peter', 'Steven'],
    true
];

const jonasArrayTypes = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof (jonasArray[i]));

    //filling types array
    // jonasArrayTypes[i] = typeof (jonasArray[i]);
    jonasArrayTypes.push(typeof (jonasArray[i]));
}

console.log(jonasArrayTypes);

const years = [1991, 2007, 1969, 2020];