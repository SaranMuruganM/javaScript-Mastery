// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
  return {
    name: name,
    position: position,
    type: type,
    radius: radius,
    sizeRank: rank,
  };
};

getPlanetInfo = function (planet) {
  return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */

var getBorder = function () {
  return "================================";
};

let buildCar = (cname, ctype, price, milege) => {
  return {
    name: cname,
    type: ctype,
    price: price,
    milege: milege,
  };
};

let displayCar = (carDetails) => {
  let car = carDetails;
  car = "\n" + carDetails.name;
  car += "\n" + getBorder();
  car += "\n" + "Type: " + carDetails.type;
  car += "\n" + "Price: " + carDetails.price;
  car += "\n" + "Milege: " + carDetails.milege;
  car += "\n" + getBorder();
  car += "\n";
  return car;
};

car1 = buildCar("MG Astor", "SUV", "15.5 Lakhs", 12);
car2 = buildCar("Mahindra 700", "SUV", "25 Lakhs", 15);
console.log(displayCar(car1));
console.log(displayCar(car2));
