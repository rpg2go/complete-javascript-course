/*
let javascriptisfun = true;
console.log(javascriptisfun);

console.log("typeof javascriptisfun is " + typeof javascriptisfun);

console.log(typeof 23);

console.log(typeof "Johas");

javascriptisfun = "Yes";
console.log("typeof javascriptisfun is " + typeof javascriptisfun);

let myName;
console.log(typeof myName);

myName = null;
console.log(typeof myName);
console.log(typeof null);

myName = "";
console.log(typeof myName);

*/
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

console.log("\n----------- STRING & TEMPLATES LITERALS ----------------\n");

const firstName = "Jonas";
const job = "teacher";
let birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew);

console.log(`Just a regular string....`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String2
multiple
lines`);

console.log("\n----------- IF STATEMENTS ----------------\n");

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("You can drive the car now");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You are too young. Wait another ${yearsLeft} years until you can drive the car!`
  );
}

birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`Century is ${century}`);

console.log("\n----------- TYPE CONVERSION and COERCION ----------------\n");
console.clear();

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

// type coercion
console.log("I am " + 23 + " years old");

console.log("I am " + "23" + " years old");

console.log("23" - "10" - 3);
console.log("23" + "10" - 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" % "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
