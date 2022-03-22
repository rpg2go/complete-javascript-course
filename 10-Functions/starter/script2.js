'use strict';

const runOnce = function () {
    console.log('This will never run again');
};

runOnce();

//IIFE = Imediate Invoke Function Expresion
(function () {
    console.log('This will never run again');

    const isPrivate = 23;
})();

// console.log(isPrivate); //Uncaught ReferenceError: isPrivate is not defined

(() => console.log('This is also never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 24;
}

// console.log(isPrivate); //Uncaught ReferenceError: isPrivate is not defined
console.log(notPrivate);
