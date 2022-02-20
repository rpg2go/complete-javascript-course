'use strict';

const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lotter draw is happening...');
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You win 😁😁😁😁');
        } else {
            reject(new Error('You lost your money 😥😥😥'));
        }
    }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//promisifing setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(1)
    .then(() => {
        console.log('1 seconds past');
        return wait(1);
    })
    .then(() => {
        console.log('2 seconds past');
        return wait(1);
    })
    .then(() => {
        console.log('3 seconds past');
        return wait(1);
    })
    .then(() => {
        console.log('4 seconds past');
        return wait(1);
    })
    .then(() => {
        console.log('5 seconds past');
        return wait(1);
    });

Promise.resolve('abc').then(res => console.log(res));

Promise.reject(new Error('rejection error')).catch(err => console.log(err));
