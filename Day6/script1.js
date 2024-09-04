const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
    'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];
const mernStack = ["MongoDB", "Express", "React", "Node"];

//Copy the countries array (Avoid Mutation)
const copiedCountries = [...countries];

// Sort the copied countries array and store in a variable sortedCountries
const sortedCountries = [...copiedCountries].sort();
console.log('Sorted Countries:', sortedCountries);

// Sort the webTechs and mernStack arrays
const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();
console.log('Sorted WebTechs:', sortedWebTechs);
console.log('Sorted MERN Stack:', sortedMernStack);

//Extract all the countries that contain the word 'land' and print them as an array
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log('Countries with "land":', countriesWithLand);

//Find the country containing the highest number of characters
let longestCountry = countries[0];
for (const country of countries) {
    if (country.length > longestCountry.length) {
        longestCountry = country;
    }
}
console.log('Country with the longest name:', longestCountry);

//Re-extract countries containing the word 'land' (same as Task 4)
console.log('Re-extracted countries with "land":', countriesWithLand);

