// Displaying a player's information

var showPlayerInfo;
var showPlayerName;
var showPlayerHealth;
var showPlayerPlace;

showPlayerName = function (playerName) {
  console.log(playerName);
};

showPlayerHealth = function (playerName, playerHealth) {
  console.log(playerName + " has health " + playerHealth);
};

showPlayerPlace = function (playerName, playerPlace) {
  console.log(playerName + " is in " + playerPlace);
};

let showLine = () => {
  console.log("----------------------------");
};

let showBlankLine = () => {
  console.log("\n");
};

showPlayerInfo = function (playerName, playerPlace, playerHealth) {
  console.log("");
  showPlayerName(playerName);
  showLine();
  showBlankLine();
  showPlayerPlace(playerName, playerPlace);
  showPlayerHealth(playerName, playerHealth);
  showBlankLine();
  showLine();
  console.log("");
};

showPlayerInfo("Kandra", "The Dungeon of Doom", 50);
showPlayerInfo("Dax", "The Old Library", 40);

/* Further Adventures
 *
 * 1) Create a function called showLine
 *    that logs a line of dashes to the console.
 *    ----------------------------
 *
 * 2) Update the showPlayerInfo function to
 *    use the showLine function rather than
 *    logging dashes to the console directly.
 *
 * 3) Create and use a showBlankLine function
 *    for logging a blank line to the console.
 *
 */
