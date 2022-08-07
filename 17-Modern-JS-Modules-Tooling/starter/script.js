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

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return {
    title: data.at(-1).title,
    text: data.at(-1).body,
  };
};

//return a promise
const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
lastPost.then(last => console.log(last));

// user top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
