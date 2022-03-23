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

//REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'm', 'l', 'k', 'n'];

function reverse_functions() {
    console.log('REVERSE function');

    console.log(arr2.reverse());
}
reverse_functions();
