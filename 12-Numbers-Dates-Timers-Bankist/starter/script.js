'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-07-11T14:11:59.604Z',
    '2022-07-12T17:01:17.194Z',
    '2022-07-13T23:36:17.929Z',
    '2022-07-14T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>    
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

const now = new Date();
console.log(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const minutes = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;
    // day / month / year

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toDateString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0);

// based 10 : 0 - 9
// based 2  : 0 - 1

console.log(0.1 + 0.2); // 0.300000000000000004
console.log(0.1 + 0.2 === 0.3);

//conversion
console.log(Number(23));
console.log(+'23');

//parsing integers
console.log(Number.parseInt('30px', 10)); // -> 30
console.log(Number.parseInt('e30px', 10)); // -> NaN

//parsing floats
console.log(Number.parseInt(' 2.5rem ')); // -> 2
console.log(Number.parseFloat('    2.5rem   ')); // -> 2.5

//checking value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true
console.log(Number.isNaN(23 / 0)); // false

//checkging value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite('20x')); // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(20 / 0)); // false

//checking value is integer
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23.0)); // false
console.log(Number.isInteger(23 / 0)); // false

/* Math and Rounding */
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(25 ** (1 / 3));

console.log(Math.max(5, 18, 21, 24, 6));
console.log(Math.max(5, 18, '25', 24, 6));
console.log(Math.max(5, 18, '25x', 24, 6));

console.log(Math.min(5, 18, 21, 24, 6));
console.log(Math.min(5, 18, '25', 24, 6));
console.log(Math.min(5, 18, '25x', 24, 6));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
// 0 ... 1 => 0 ..... (max - min) -> min .... max
console.log(randomInt(10, 20));

//Rounding integers
console.log(Math.trunc(23.9));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//Rounding decimals

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.257).toFixed(2));
console.log(+(2.257).toFixed(2));

// Remainder operator
console.log(5 % 2);
console.log(5 / 2);
console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2 === 0 ? 'Even number' : 'Odd number');

const isEven = n => n % 2 === 0;

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }
    if (i % 3 === 0) {
      row.style.backgroundColor = 'blue';
    }
  });
});

//working with big numbers

const diameter = 2_897_875_645_465_444;
console.log(diameter);

const priceCents = 345_987;
console.log(priceCents);

const transferFee = 1_500;
console.log(transferFee);

const transferFee2 = 1_500;
console.log(transferFee2);

const PI = 3.1_45_45;
console.log(PI);

console.log(Number('230000'));
console.log(Number('230_000'));

// BigINT

console.log(2 ** 52 - 1);
console.log(2 ** 53 - 1);
console.log(2 ** 53 + 1);

console.log(Number.MAX_SAFE_INTEGER);

console.log(45454654464658978787787987988451213246); // 4.545465446465898e+37
console.log(45454654464658978787787987988451213246n); // 45454654464658978787787987988451213246n   -- bigInt
console.log(BigInt(45454654464658978787787987988451213246)); // 45454654464658978557304905605908004864n   -- bigInt

//Operations
console.log(10000n + 200000n);
console.log(89898978978790000n * 123131323231231312n);

const huge = 45454654464658978787787987988451213246n;
const num = 23;
//console.log(huge * num); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

//Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');
console.log(huge + ' is a REALLY Big Number');

//Divisions
console.log(11n / 3n);
console.log(11 / 3);

//Creating a date
// const now = new Date();
// console.log(now);

// console.log(new Date('Wed Jul 13 2022 08:52:45'));
// console.log(new Date('December 24, 2021'));

// console.log(account1);
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 32));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Workinig with dates
// const future = new Date(2037, 10, 19, 15, 23, 54, 213);
// console.log(future);
// console.log('YY : ' + future.getFullYear());
// console.log('MM: ' + future.getMonth());
// console.log('DD: ' + future.getDate());
// console.log('DN: ' + future.getDay());
// console.log('HH: ' + future.getHours());
// console.log('MM: ' + future.getMinutes());
// console.log('SS: ' + future.getSeconds());
// console.log('MS: ' + future.getMilliseconds());

// console.log(future.toISOString());
// console.log(new Date(1645156454124));

// future.setFullYear(2040);
// console.log(future);

const future = new Date(2037, 10, 19, 15, 23, 54, 213);
console.log(Number(future));
console.log(+future);
const calcDaysPassed = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(
  new Date(2037, 3, 14),
  new Date(2037, 3, 24, 10, 8)
);
console.log(days1);
