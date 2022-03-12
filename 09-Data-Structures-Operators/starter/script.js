'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  // [`day-${2 + 4}`]: {
  //   open: 0, // Open 24 hours
  //   close: 24,
  // },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 23,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //before ES6
  //openingHours: openingHours,

  //ES6 : enhanced literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:30', address }) {
    console.log(
      `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

function destructuringArrays() {
  const arr = [2, 3, 4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  const [x, y, z] = arr;

  console.log(x, y, z);

  const [first, , second] = restaurant.categories;
  console.log(first, second);

  let [main, , secondary] = restaurant.categories;
  console.log(main, secondary);

  // switching  variable - old style
  // const temp = main;
  // main = secondary;
  // secondary = temp;
  // console.log(main, secondary);

  // switching  variable - using destructuring
  [main, secondary] = [secondary, main];
  console.log(main, secondary);

  console.log(restaurant.order(2, 0));

  //return 2 values from a function
  const [starter, mainCourse] = restaurant.order(2, 0);

  //destructuring nested arrays
  const nested = [2, 4, [5, 6]];
  // const [i, , j] = nested;
  // console.log(i, j);

  const [i, , [j, k]] = nested;
  console.log(i, j, k);

  //default values

  const [p = 1, q = 1, r = 1] = [8, 9];
  console.log(p, q, r);
}
// destructuringArrays();

function destructuringObjects() {
  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);

  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;

  console.log(restaurantName, hours, tags);

  const { menu = [], starterMenu: starters = [] } = restaurant;
  console.log(menu, starters);

  //Mutating variabiles
  let a = 111;
  let b = 999;

  const obj = { a: 23, b: 7, c: 14 };
  ({ a, b } = obj);
  console.log(a, b);

  //nested objects
  const {
    fri: { open: o, close: c },
  } = openingHours;
  console.log(open, close);
  console.log(o, c);

  restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
  });

  restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
  });
}
// destructuringObjects();

function spreadOperator() {
  const arr = [7, 8, 9];
  const badNewArr = [1, 2, arr[0], arr[1], arr[3]];
  console.log(badNewArr);

  const newArr0 = [1, 2, arr];
  console.log(newArr0);

  const newArr = [1, 2, ...arr];
  console.log(newArr);

  console.log(...newArr);

  const newMenu = [...restaurant.mainMenu, 'Gnocci'];
  console.log(newMenu);

  //copy array
  const mainMenuCopy = [...restaurant.mainMenu];
  console.log(mainMenuCopy);

  //join array
  const joinMenuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
  console.log(joinMenuCopy);

  //iterable: arrays, strings, maps, sets. NOT Objects
  const str = 'Jonas';
  const letters = [...str, 'S.'];
  console.log(letters);
  const letters2 = [...str];
  console.log(letters2);

  // const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt('Ingredient 2?'),
  //   prompt('Ingredient 3?'),
  // ];

  // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

  // restaurant.orderPasta(...ingredients);

  const newRestaurant = {
    foundedIn: 1998,
    ...restaurant,
    founder: 'Giuseppe',
  };
  console.log(newRestaurant);

  const restaurantCopy = { ...restaurant };
  restaurantCopy.Name = 'Ristorante Roma';

  console.log(restaurantCopy.name);
  console.log(restaurant.name);

  //1) Destructuring on arrays
  const arr2 = [1, 2, ...[3, 4, 5]];

  //SPREAD, because of right side of =
  const [a, b, ...others] = [1, 2, 3, 4, 5];
  console.log('spread because of =', a, b, others);

  //rest element & distructuring
  const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
  ];
  console.log(pizza, risotto, otherFood);

  //destructuring on objects
  const { sat, ...weekdays } = restaurant.openingHours;
  console.log(sat, weekdays);

  // 2) Functions

  const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log('sum of ' + numbers + ' is ' + sum);
  };

  add(2, 3);
  add(5, 3, 7, 3);
  add(8, 2, 6, 9, 0, 9);

  const x = [23, 5, 7];
  add(...x);

  restaurant.orderPizza('mushrooms', 'onion', 'olives', 'paprika', 'spinach');

  restaurant.orderPizza('mushrooms');
}
// spreadOperator();

function OR_logicalOperators() {
  //short-circuiting
  console.log('------------ OR Operator -------------');

  console.log(3 || 'Jonas');

  console.log('' || 'Jonas');

  console.log(true || 0);

  console.log(undefined || null);

  console.log(undefined || 0 || '' || 'Hello' || 23 || null);

  restaurant.numGuests = 350;
  const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guest1);

  const guest2 = restaurant.numGuests || 10;
  console.log(guest2);
}
// OR_logicalOperators();

function AND_logicalOperators() {
  //short-circuiting
  console.log('------------ AND Operator -------------');

  console.log(0 && 'Jonas');

  console.log(7 && 'Jonas');

  console.log('Hello' && 23 && null && 'Jonas');

  //practical examples
  if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
  }

  restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
}
// AND_logicalOperators();

//nulish : null && undefined (NOT 0 or '')
function nullish_logicalOperators() {
  restaurant.numGuests = 350;
  const guestCorrect = restaurant.numGuests ?? 10;
  console.log(guestCorrect);
}
// nullish_logicalOperators();

//Logical assignment operators
function logical_assignment_operators() {
  console.log('---- Logical Assignment Operator ----');

  const rest1 = {
    name: 'Capri',
    // numGuests: 20,
  };
  const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
  };

  // OR assignment operator
  // rest1.numGuests = rest1.numGuests || 10;
  // rest2.numGuests = rest2.numGuests || 10;
  // rest1.numGuests ||= 10;
  // rest2.numGuests ||= 10;

  //NULLish assigment operator
  rest1.numGuests ??= 10;
  rest2.numGuests ??= 10;

  // rest1.owner = rest1.owner && '<ANONYMOUS>';
  // rest2.owner = rest2.owner && '<ANONYMOUS>';
  rest1.owner &&= '<ANONYMOUS>';
  rest2.owner &&= '<ANONYMOUS>';

  console.log(rest1);
  console.log(rest2);
}
// logical_assignment_operators();

function for_of_loop() {
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

  for (const item of menu) console.log(item);

  for (const item of menu.entries()) {
    console.log(`${item[0] + 1} : ${item[1]}`);
  }
  console.log(...menu.entries());

  for (const [i, elem] of menu.entries()) {
    console.log(`${i + 1} : ${elem}`);
  }
}

// for_of_loop();

function enhanced_literal() {
  console.log(restaurant);
}
// enhanced_literal();

function optional_chaining() {
  console.log(restaurant);

  if (restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

  if (restaurant.openingHours.tue)
    console.log(restaurant.openingHours.tue.close);

  // console.log(restaurant.openingHours.mon.open); //return Uncaught TypeError: Cannot read properties of undefined (reading 'open')

  //with optional chaining
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours.fri?.open);

  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed'; //openingHours[day] is the same with openingHours.mon
    console.log(`On ${day}, we are open at ${open}`);
  }

  //methods
  console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
  console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

  //arrays

  // const users = [{ name: 'Jonas', email: 'jonas@ggg.com' }];
  const users = [];
  console.log(users[0]?.name ?? 'Users array is empty');
}
// optional_chaining();

function looping_objects() {
  //Properties NAMES
  const properties = Object.keys(openingHours);
  console.log(properties);

  let openStr = `We are opened in ${properties.length} days: `;

  for (const day of Object.keys(openingHours)) {
    openStr += `${day}, `;
  }

  console.log(openStr);

  //Properties VALUES
  const values = Object.values(openingHours);
  console.log(values);

  //Properties ENTRIES

  //Entire object
  const entries = Object.entries(openingHours);
  console.log(entries);

  // [key, value]
  for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we are opend at ${open} and closed at ${close}`);
  }
}
// looping_objects();

function sets_objects() {
  console.log(new Set('Jonas'));
  console.log(new Set());

  const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta']);
  console.log(orderSet);
  console.log(orderSet.size);

  console.log(orderSet.has('Pizza'), orderSet.has('Bread'));
  console.log(orderSet.add('Bread'));
  console.log(orderSet.add('Bread'));
  console.log(orderSet.delete('bread'));
  console.log(orderSet);
  console.log(orderSet.delete('Bread'));
  console.log(orderSet);

  // orderSet.clear();
  // console.log(orderSet);

  for (const item of orderSet) console.log(item);

  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUniqueue = new Set(staff);
  console.log(staffUniqueue);

  const staffUniqueueArray = [...new Set(staff)];
  console.log(staffUniqueueArray);

  console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
  );

  console.log(new Set('mariusddd').size);
}

// sets_objects();

function map_objects() {
  const rest = new Map();
  rest.set('name', 'Classico Italiano');
  rest.set(1, 'Firenze, Italy');
  rest.set(2, 'Lisbon, Portugal');
  rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

  console.log(rest);
  console.log(rest.get(true));
  console.log(rest.get(false));
  console.log(rest.get('1'));
  console.log(rest.get(1));

  let time = 21;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
  time = 8;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

  console.log(rest.has('categories'));
  rest.delete(2);
  console.log(rest);
  console.log(rest.size);

  // rest.clear();
  // console.log(rest.size);

  // rest.set([1, 2], 'Test');
  // console.log(rest.get([1, 2]));
  const arr = [1, 2];
  rest.set(arr, 'Test');
  console.log(rest.get(arr));
  console.log(rest);

  rest.set(document.querySelector('h1'), 'Heading');
  console.log(rest);

  const questions = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!'],
  ]);

  console.log(questions);

  console.log(Object.entries(openingHours));

  const hoursMap = new Map(Object.entries(openingHours));
  console.log(hoursMap);

  //iteration

  for (const [key, value] of questions) {
    if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
  }
  // const answer = Number(prompt('Your answer'));
  const answer = 3;
  console.log(answer);

  console.log(questions.get(questions.get('correct') === answer));

  console.log(...questions);
  console.log(...questions.keys());
  console.log(...questions.values());
}

// map_objects();

function learning_strings() {
  const airline = 'TAP Air Portugal';
  const plane = 'A320';
  console.log(plane[0]);
  console.log(plane[1]);
  console.log(plane[2]);
  console.log('B737'[0]);

  console.log(airline.length);
  console.log('B737'.length);

  console.log(airline.indexOf('r'));

  console.log(airline.lastIndexOf('r'));

  console.log(airline.indexOf('portugal'));
  console.log(airline.indexOf('Portugal'));

  console.log(airline.slice(4));
  console.log(airline.slice(4, 7));
  console.log(airline.slice(0, airline.indexOf(' ')));
  console.log(airline.slice(airline.lastIndexOf(' ') + 1));

  console.log(airline.slice(-2));
  console.log(airline.slice(1, -1));

  const checkMiddleSeat = function (seat) {
    if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E')
      console.log(`You got a middle seat ${seat}`);
  };

  checkMiddleSeat('11B');
  checkMiddleSeat('23C');
  checkMiddleSeat('3E');

  console.log(new String('jonas'));
  console.log(typeof new String('jonas'));
  console.log(new String('jonas').slice(1));
  console.log(typeof new String('jonas').slice(1));
}

learning_strings();
