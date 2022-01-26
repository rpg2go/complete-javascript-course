////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

*/

const MIN_SCORE = 100;

let Dolphins_DS1 = [96, 108, 89];
let Dolphins_DS2 = [97, 112, 101];
let Dolphins_DS3 = [96, 108, 89];

let Koalas_DS1 = [88, 91, 110];
let Koalas_DS2 = [109, 95, 123];
let Koalas_DS3 = [109, 95, 106];


getWinner("Dolphines", calculateScore(Dolphins_DS1), "Koalas", calculateScore(Koalas_DS1));

getWinner("Dolphines", calculateScore(Dolphins_DS2), "Koalas", calculateScore(Koalas_DS2));

getWinner("Dolphines", calculateScore(Dolphins_DS3), "Koalas", calculateScore(Koalas_DS3));


function getWinner(team1Name, team1score, team2Name, team2score) {
    console.log("\n\n");
    console.log(`${team1Name} has an average score of ${team1score}`);
    console.log(`${team2Name} has an average score of ${team2score} `);

    if (team1score > team2score && team1score >= MIN_SCORE) {
        console.log(`The winner team is ${team1Name} with a score of ${team1score}`);
    } else if (team1score < team2score && team2score >= MIN_SCORE) {
        console.log(`The winner team is ${team2Name} with a score of ${team2score}`);
    } else if (team1score === team2score && team1score < MIN_SCORE) {
        console.log("Draw !!!");
    } else if (team1score === team2score && team1score >= MIN_SCORE) {
        console.log("Both win the throphy :)");
    } else {
        console.log("No one win the throphy :(");
    }
}

function calculateScore(values) {

    let score = 0;
    values.forEach((element) => {
        score = score + element;
    });

    return Number(score / values.length).toFixed(2);
}