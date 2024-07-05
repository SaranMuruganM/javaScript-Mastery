// Using a property in a calculation

var player1;
var player2;

player1 = {
  name: "Max",
  score: 0,
};

player2 = {
  name: "ben",
  score: 10,
};
console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

let percent = player1.score * (10 / 100);

player1.score = player1.score + percent;

console.log(player1.name + " has scored " + player1.score);

// Sum of ben and Max

console.log("Sum of Max and Ben scores is:" + (player1.score + player2.score));
/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */
