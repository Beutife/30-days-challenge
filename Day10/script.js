const set = new Set([1, 2, 3, 4, 5]);
set.delete(3);
console.log(set);


const anotherSet = new Set([1, 2, 3, 4, 5]);
anotherSet.clear();
console.log(anotherSet);


const array = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const stringSet = new Set(array);
console.log(stringSet);


const countries1 = ['Nigeria', 'United States', 'India', 'Brazil', 'Japan'];
const countryMap = new Map();
countries1.forEach((country) => {
  countryMap.set(country, country.length);
});
console.log(countryMap);


const a = [1, 2, 3, 4, 5];
const b = [4, 8, 6, 2, 4];
const c = new Set([...a, ...b]);
console.log(c);


const d = a.filter((num) => b.includes(num));
console.log(d);


for (const nums of a) {
  const add = b.concat(nums);
  console.log(add);
}


const languages = [
  { English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 }
];


function mostSpokenLanguage(countries, numOfLanguage) {
  const languageCount = {};
  
  countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (language in languageCount) {
        languageCount[language]++;
      } else {
        languageCount[language] = 1;  
      }
    });
  });

  const sortedLanguage = Object.entries(languageCount)
    .map(([language, count]) => ({ [language]: count }))
    .sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

  return sortedLanguage.slice(0, numOfLanguage);
}

const countries = [
  { languages: ['English', 'French'] },
  { languages: ['Spanish', 'English'] },
  { languages: ['Arabic', 'English'] },
];

console.log(mostSpokenLanguage(countries, 2));
