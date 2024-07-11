// Passing a function an object as an argument

var planet1;
var getPlanetInfo;

planet1 = {
  name: "Jupiter",
  position: 5,
  type: "Gas Giant",
  radius: 69911,
  sizeRank: 1,
};

let planet2 = {
  name: "Earth",
  position: 3,
  type: "Habitable",
  radius: 59993,
  sizeRank: 3,
};

var getBorder = function () {
  return "================================";
};

getPlanetInfo = function (planet) {
  let planetDetails;
  planetDetails = "\n" + planet.name;
  planetDetails += "\n" + getBorder();
  planetDetails += "\n" + "position: " + planet.position;
  planetDetails += "\n" + "Type: " + planet.type;
  planetDetails += "\n" + "Radius: " + planet.radius;
  planetDetails += "\n" + "Size Rank: " + planet.sizeRank;
  planetDetails += "\n" + getBorder();
  planetDetails += "\n";
  return planetDetails;
};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */
