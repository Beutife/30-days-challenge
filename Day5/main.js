// Importing variables from external files
import { webTech } from './webTech.js'; 
import { countries } from './countries.js';

// 1. Accessing imported variables
console.log('Web Technologies:', webTech);
console.log('Countries:', countries);

// 2. Changing string to array of words
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let textArr = text.split(' ');
console.log('Text Array:', textArr);
console.log('Number of Words:', textArr.length);

// 3. Modifying the shopping cart
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat'); 
}
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar'); 
}
if (shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1); 
}
// Modify 'Tea' to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'; 
console.log('Updated Shopping Cart:', shoppingCart);

// 4. Checking existence in arrays
console.log('Is Ethiopia in Countries?:', countries.includes('Ethiopia')); 
console.log('Does webTech include Sass?:', webTech.includes('Sass') ? 'Sass exists in webTech' : 'Sass does not exist in webTech');

// 5. Combining arrays
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd); 
console.log('Full Stack Technologies:', fullStack);

// 6. Calculating age statistics
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the ages from smallest to largest
ages.sort((a, b) => a - b);

// Find min and max ages
let minAge = ages[0];
let maxAge = ages[ages.length - 1];

// Find the median age
let midIndex = Math.floor(ages.length / 2);
let medianAge = ages.length % 2 === 0 ? (ages[midIndex - 1] + ages[midIndex]) / 2 : ages[midIndex];

// Calculate the average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let averageAge = sum / ages.length;

// Find the range of the ages
let range = maxAge - minAge;

// Compare min and max differences from average
let minDiff = Math.abs(minAge - averageAge);
let maxDiff = Math.abs(maxAge - averageAge);

console.log('Sorted Ages:', ages);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Range of Ages:', range);
console.log('Min Difference from Average:', minDiff);
console.log('Max Difference from Average:', maxDiff);

// 7. Example: First ten countries from a list
const countriesList = ['Nigeria', 'Canada', 'Brazil', 'Australia', 'Germany', 'France', 'India', 'China', 'Japan', 'South Africa', 'USA', 'UK'];
const firstTenCountries = countriesList.slice(0, 10); 
console.log('First Ten Countries:', firstTenCountries);
