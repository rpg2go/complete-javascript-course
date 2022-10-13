//Importing module
// import {
//   addToCart,
//   tp as totalPrice,
//   totalQuantity as quantity,
// } from './shoppingCart.js';

import * as ShoppingCart from './shoppingCart.js';
console.log('Importing module');

ShoppingCart.addToCart('Bread', '3');
console.log('totalPrice : ' + ShoppingCart.totalPrice);
console.log('totalQuantity : ' + ShoppingCart.tq);

/* in practice never mixed default export / import with normal export */
import add, { cart } from './shoppingCart.js';
add('Pizza', 2);
add('Bread', 5);
add('Appled', 7);
console.log(cart);

// console.log('Start fetching');
// /* this top level await is blocking the rest of execution */
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return {
//     title: data.at(-1).title,
//     text: data.at(-1).body,
//   };
// };

// //return a promise
// const lastPost = getLastPost();
// console.log(lastPost);

// // Not very clean
// lastPost.then(last => console.log(last));

// // user top level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost}).`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

// export in Node.Js
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart.`);
// };

// // import in Node.Js
// const {addToCart} = require('./shopping.js')

// import cloneDeep from '.././node_modules/lodash-es/cloneDeep.js';

// import cloneDeep from 'lodash-es';
import cloneDeep from '.././node_modules/lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
console.log("stateClone: " + JSON.stringify(stateClone));

const stateClone2 = cloneDeep(state);
console.log(stateClone2);

state.user.loggedIn = false;
console.log("stateClone: " + JSON.stringify(stateClone));
console.log("stateClone2: " + JSON.stringify(stateClone2));

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';

  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Test').then(x => console.log('Test promise'));

// import '../node_modules/core-js/stable';
import '../node_modules/core-js/stable/array';

//polyfilling async functions
import '../node_modules/regenerator-runtime/runtime';
