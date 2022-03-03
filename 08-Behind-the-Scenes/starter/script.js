'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    // console.log(firstName);

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            //create new variable with the same name as outer scope
            const firstName = 'Steven';

            //reassigning outer scope's variable
            const output = 'New output';

            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }

        // console.log(str);
        console.log(millenial);

        // console.log(add(2, 3));

        console.log(output);
    }

    // console.log(millenial);
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);

// console.log(age);
// printAge();
