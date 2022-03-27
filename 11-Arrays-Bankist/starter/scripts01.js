'use strict';

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

function slice_functions() {
    console.log('SLICE function');
    console.log(arr.slice(2));
    console.log(arr.slice(2, 4));

    console.log(arr.slice(-1));
    console.log(arr.slice(-2));

    console.log(arr.slice(2, -1));
    console.log(arr.slice());

    console.log([...arr]);
}
slice_functions();

//SPLICE functions
function splice_functions() {
    console.log('SPLICE function');
    //console.log(arr.splice(2));
    console.log(arr);

    arr.splice(-1);
    console.log(arr);
    arr.splice(1, 2);
}
splice_functions();

function reverse_functions() {
    //REVERSE
    const arr2 = ['j', 'i', 'h', 'g', 'm', 'l', 'k', 'n'];
    console.log('REVERSE function');
    console.log(arr2.reverse());
    console.log(arr2);
}
reverse_functions();

function other_arrays_functions() {
    //CONCAT
    const arr2 = ['j', 'i', 'h', 'g', 'm', 'l', 'k', 'n'];
    console.log('CONCAT');
    const letters = arr.concat(arr2);
    console.log(letters);
    console.log([...arr, ...arr2]);

    //JOIN
    console.log('JOIN');
    console.log(letters.join(' - '));

    console.log('AT Method');
    const arr3 = [23, 11, 64];
    console.log(arr3[0]);
    console.log(arr3.at(0));

    //getting the last element
    console.log(arr3[arr3.length - 1]);
    console.log(arr3.slice(-1)[0]);
    console.log(arr3.at(-1));

    console.log('jonas'.at(0));
    console.log('jonas'.at(-1));
}
other_arrays_functions();

function looking_arrays() {
    console.log('LOOPING ARRAYS: forEach');
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    console.log('---------looping using for -----');
    // for (const movement of movements) {
    for (const [i, movement] of movements.entries()) {
        if (movement > 0) {
            console.log(`Movement ${i + 1}: You deposit ${movement}`);
        } else {
            console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
        }
    }

    console.log('---------looping using forEach -----');
    movements.forEach(function (movement, index, array) {
        if (movement > 0) {
            console.log(`Movement ${index + 1}: You deposit ${movement}`);
        } else {
            console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
        }
    });
}
looking_arrays();

function looping_arrays_with_map() {
    //map
    const currencies = new Map([
        ['USD', 'United States dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'Pound sterling'],
    ]);

    currencies.forEach(function (value, key, map) {
        console.log(`${key}:${value}`);
    });

    //sets
    const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR']);
    console.log(currenciesUnique);

    currenciesUnique.forEach(function (value, _, map) {
        console.log(`${value}:${value}`);
    });
}

looping_arrays_with_map();

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//     return mov * eurToUsd;
// });

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
    movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

// v1 - arrow function with details
// const movementsDescription = movements.map((mov, i, arr) => {
//     if (mov > 0) {
//         return `Movement ${i + 1}: You deposit ${mov}`;
//     } else {
//         return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//     }
// });

// v2 arrow function with return
// const movementsDescription = movements.map((mov, i) => {
//     return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
// });

// v3 arrow function without return
const movementsDescription = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);

console.log(movementsDescription);

const deposits = movements.filter(function (mov) {
    return mov > 0;
});

// const withdrawals = movements.filter(function (mov) {
//     return mov < 0;
// });

const withdrawals = movements.filter(mov => mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);

//accumulator => snowball
// const balance = movements.reduce(function (acc, current, index, array) {
//     console.log(`Itereatin ${index} : ${acc}`);
//     return acc + current;
// }, 100);

const balance = movements.reduce((acc, current) => acc + current);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov) {
        return acc;
    } else {
        return mov;
    }
}, movements[0]);
console.log(max);

// pipeline
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        // console.log(arr);
        return mov * eurToUsd;
    })
    .reduce((acc, mov) => acc + mov);

console.log(totalDepositsUSD);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

console.log(movements);

//equality
console.log(movements.includes(-130));

//condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 3500);
console.log(anyDeposits);

//every
console.log(movements);
console.log(movements.every(mov => mov > 0));

console.log(account4.movements);
console.log(account4.movements.every(mov => mov > 0));

const deposit = mov => mov > 0;
console.log(account4.movements.some(deposit));
console.log(account1.movements.every(deposit));
console.log(account1.movements.filter(deposit));

const array = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(array);
console.log(array.flat());

const arrayDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrayDeep);
console.log(arrayDeep.flat(1)); // only first level
console.log(arrayDeep.flat(2)); // also the second level

console.log(accounts);
const accountsMovements = accounts.map(acc => acc.movements);
console.log(accountsMovements);

const allMovements = accountsMovements.flat();
console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

//flat
const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners);
console.log(owners.sort());

console.log(movements);
// console.log(movements.sort()); //does not work

//return < 0, A, B (keep order)
//return > 0, B, A (switch order)

//sort ascending
movements.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
});
console.log(movements);

//sort descending
movements.sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 11;
});

//sort ascending
movements.sort((a, b) => a - b);
console.log(movements);

//sort descscending
movements.sort((a, b) => b - a);
console.log(movements);

const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log([1, 3, 4, 5]);

console.log(new Array(1, 3, 4, 6, 6, 7));

//empty arrays + fill method
const x = new Array(7);
console.log(x);

// x.map(() => 5);
// console.log(x);

// console.log(x.fill(3));
// console.log(x);

console.log(x.fill(4, 3, 5));
console.log(x);

arr2.fill(23, 2, 6);
console.log(arr2);

//array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const w = Array.from({ length: 100 }, (_, i) => parseInt(Math.random(0, 100) * 100));
console.log(w);

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI);
