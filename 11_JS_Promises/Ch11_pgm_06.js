const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Print out all the cat names in to catNames variable.

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cname) => {
      console.log(cname.name);
    });
  })
  .catch((err) => {
    console.log(err);
  });
