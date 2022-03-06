// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoalsByPlayers: function (...players) {
    let goals = 0;
    for (let i = 0; i < players.length; i++) {
      if (this.scored.indexOf(players[i]) > -1) {
        console.log(`${players[i]} score.`);
        goals += 1;
      }
    }
    console.log('Total game goals: ' + goals);
  },

  printGoals() {
    for (const [i, player] of this.scored.entries()) {
      console.log(`Goal ${i + 1} : ${player}`);
    }
  },

  calcAvg() {
    let avg = 0;
    const odds = Object.values(this.odds);
    for (const odd of odds) {
      avg += odd;
    }

    return avg / odds.length;
  },

  printOdds() {
    for (const [team, chance] of Object.entries(this.odds)) {
      let status = 'Odd of ';
      status += this[team] ? `victory ${this[team]}` : 'draw';

      console.log(`${status} : ${chance}`);
    }
  },

  getScoreStatistics() {
    let statistics = {};
    for (const [key, value] of Object.entries(this.scored)) {
      //console.log(key, value);

      if (Object.keys(statistics).indexOf(value) > -1) {
        statistics[value] += 1;
      } else {
        statistics[value] = 1;
      }
    }
    console.log(statistics);
  },
};

function challenge01() {
  const [players1, players2] = game.players;
  console.log(players1, players2);

  const [gk, ...fieldPlayers] = players1;
  console.log(gk, fieldPlayers);

  const allPlayers = [...players1, ...players2];
  console.log(allPlayers);

  const substitutes1 = ['Thiago', 'Coutinho', 'Perisic'];
  const players1Final = [...players1, ...substitutes1];
  console.log(players1Final);

  const { team1, x: draw, team2 } = game.odds;
  console.log(team1, draw, team2);

  game.printGoalsByPlayers('Davies', 'Muller', 'Lewandowski', 'Kimmich');

  team1 < team2 && console.log('Team 1 is more likely to win');
  team2 < team1 && console.log('Team 2 is more likely to win');
}
// challenge01();

function challenge02() {
  game.printGoals();

  console.log(game.calcAvg());

  game.printOdds();

  game.getScoreStatistics();
}

challenge02();
