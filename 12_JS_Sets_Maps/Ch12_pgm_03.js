const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
const countriesAPI = "https://restcountries.com/v2/all";
const datum = {};
const fetchData = async (country) => {
  const response = await fetch(country);
  const result = await response.json();
  result.forEach((country) =>
    country.languages.forEach((language) => {
      const { name } = language;
      if (datum[name]) {
        datum[name]++;
      } else {
        datum[name] = 1;
      }
    })
  );
  return datum;
};

const mostSpeakenLanguages = async (country, limit) => {
  const result = await fetchData(country);
  const sortedLanguages = Object.keys(result)
    .map((language) => ({ [language]: result[language] }))
    .sort((a, b) =>Object.values(b)[0] - Object.values(a)[0]);
    

  console.log(sortedLanguages.slice(0, limit));
};
mostSpeakenLanguages(countriesAPI, 1);
// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:

//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]
