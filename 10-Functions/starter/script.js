'use strict';

const bookings = [];

//default parameter usage
const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 1;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };

    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH223', 2, 320);
createBooking('LH444', 3, 800);
createBooking('LH223', 5);
createBooking('LH223', undefined, 5);

// how passing arguments works: value vs reference
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schemedtman',
    passport: 232323232,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr ' + passenger.name;

    if (passenger.passport === 232323232) {
        // alert('Check In');
        console.log('Check In');
    } else {
        // alert('Wrong passport!');
        console.log('Wrong passport!');
    }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// is the same as doing....
const flightNum = flight;
const passenger = jonas;

console.log(flightNum, jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the fimes
const high5 = function () {
    console.log('👌');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

//functions returning functions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeting = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');
greeting('Hi')('Jonas');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book : function () {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}, ${name}`,
        });
    },
};

lufthansa.book(239, 'Jonas Schmedtman');
lufthansa.book(524, 'John Smith');
console.log(lufthansa);

const eurowinds = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//DOES NOT Work
// book(23, 'Sarah Willims');

//Call method
book.call(eurowinds, 23, 'Sarah Williams');
console.log(eurowinds);

book.call(lufthansa, 249, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, '583', 'Mary Cooper');
console.log(swiss);

// apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

//bind method
// book.call(eurowinds, 23, 'Sarah Williams');

const bookEW = book.bind(eurowinds);
bookEW(23, 'Steven Williams');
bookEW(43, 'Serena Williams');
console.log(eurowinds);

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

const bookEW23 = book.bind(eurowinds, 23);
bookEW23('Jonas Schedtman');
bookEW23('Martha Cooper');

console.log(eurowinds);

//With event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

// lufthansa.buyPlane();

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addVAT2 = value => {
    return addTax(0.23, value);
};

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVAT3 = addTaxRate(0.23);

console.log('addVAT-------');
console.log(addVAT(100));
console.log(addVAT(23));

console.log('addVAT2-------');
console.log(addVAT2(100));
console.log(addVAT2(23));

console.log('addVAT3-------');
console.log(addVAT3(100));
console.log(addVAT3(23));
