'use strict';

console.log('Test started');

setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Resolve promise 1').then(response => console.log(response));

Promise.resolve('Resolve promise 2').then(response => {
    for (let i = 0; i < 1000000000; i++) {
        i++;
    }
    console.log(response);
});

console.log('Test end');
