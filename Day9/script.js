const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach(country => console.log(country));
const upperCaseCountries = countries.map(country => country.toUpperCase());
console.log(upperCaseCountries);
const filterCountry = countries.filter(country => countries.includes('land'))
console.log(filterCountry)

const totalPrice = products
  .filter(product => typeof product.price === 'number' && product.price > 0) 
  .map(product => product.price) 
  .reduce((acc, price) => acc + price, 0); 

console.log(totalPrice);

const numbers1 = [1, 2, 3, 4, 5]
const sum = numbers1.reduce((acc, cur) => acc + cur, 0)

console.log(sum);

//get first ten countries
const countries1 = '';
const getFirstTenCountries = countries1.filter(country1 => countries().length === 10);
console.log(getFirstTenCountries);

let countryName = countries.sort(country => countries())

//10 most spoken language
// Your output should look like this

const countCountries = [
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]
function mostSpokenLanguages(countries, topN) {
  const languageCounts = {};
  
  countries.forEach(country => {
    country.languages.forEach(language => {
      if (languageCounts[language]) {
        languageCounts[language]++;
      } else {
        languageCounts[language] = 1;
      }
    });
  });

  const languageArray = [];
  for (const language in languageCounts) {
    languageArray.push({ country: language, count: languageCounts[language] });
  }

  languageArray.sort((a, b) => b.count - a.count);
  return languageArray.slice(0, topN);
}