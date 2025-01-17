// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

let getBig=(value)=>{
    return value.toUpperCase();
}

let getSmall=(value)=>{
    return value.toLowerCase();
}
console.log(planet + " becomes " + bigPlanet);
console.log(getBig("martha"));
console.log(getSmall("ELLIE"));



/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */