// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(arr) {
    let temperature = '';
    for (let i = 0; i < arr.length; i++) {
        temperature += '...' + arr[i] + ' degree in ' + (i + 1) + ' days'
    }

    return temperature;
}

const maxTemperatures = [17, 21, 23];

console.log(printForecast(maxTemperatures));