// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (dogAges) {
    const humanAges = dogAges.map(function (age, i) {
        if (age <= 2) {
            return 2 * age;
        } else {
            return 16 + age * 4;
        }
    });

    console.log(humanAges);

    const matureAges = humanAges.filter(function (age, i) {
        return age >= 18;
    });
    console.log(matureAges);

    const totalAge = matureAges.reduce(function (acc, age) {
        return acc + age;
    });
    const avgAge = totalAge / matureAges.length;
    console.log(totalAge, matureAges.length, avgAge);

    return matureAges;
};

const calcAverageHumanAgeArrow = function (dogAges) {
    const humanAges = dogAges.map((age, i) => {
        if (age <= 2) return 2 * age;
        else return 16 + age * 4;
    });
    const matureAges = humanAges.filter((age, i) => age >= 18);
    const totalAge = matureAges.reduce((acc, age) => acc + age);

    console.log(humanAges);
    console.log(matureAges);
    console.log(totalAge);

    const avgAge = totalAge / matureAges.length;
    console.log(totalAge, matureAges.length, avgAge.toFixed(2));

    return matureAges;
};

const calcAverageHumanAgeChainingArrow = function (dogAges) {
    const totalAge = dogAges
        .map((age, i) => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter((age, i) => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

    console.log(totalAge);

    return totalAge;
};

console.log('without arrow functions');
const test1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(test1);

console.log('using arrow functions');
const test2 = calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]);
console.log(test2);

console.log('using chaining arrow functions');
const test22 = calcAverageHumanAgeChainingArrow([5, 2, 4, 1, 15, 8, 3]);
console.log(test22);

// console.log('using arrow functions 2');
// const test3 = calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]);
// console.log(test3);
