const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cprop) => {
      let temp = cprop.weight.metric.split("-");
      avgweight = (Number(temp[0]) + Number(temp[1])) / 2;

      console.log(`Average weight of ${cprop.name} is ${avgweight}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    const officialLanguages = data.flatMap((country) =>
      country.languages.map((lang) => lang.name)
    );
    let unique = officialLanguages.filter(
      (value, index, arr) => arr.indexOf(value) === index
    );
    console.log("Official Languages are:");
    console.log(
      unique.forEach((item, index) => {
        console.log(`${index}: ${item}\n`);
      })
    );
    // console.log(data);
    data.sort((a, b) => b.area - a.area);
    console.log("Top ten Countries");
    data.slice(0, 10).map((country) => {
      console.log(`${country.name} area is: ${country.area}`);
    });
  });
