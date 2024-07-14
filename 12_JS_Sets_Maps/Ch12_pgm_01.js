const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c=new Set();
for(let i=1;i<=10;i++){
    c.add(i);
}
console.log(c);
c.delete(9)
console.log(c);


const countries = ['Finland', 'Sweden', 'Norway','Germany','India','USA']

const setCountries = [...new Set(countries)].map((country) => {
  console.log(`${country} has ${country.length} letters`);
});




// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country