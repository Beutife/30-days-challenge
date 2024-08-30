//Task2
// Perimeter of triangle
let side1 = parseFloat(prompt('Enter side1'));
let side2 = parseFloat(prompt('Enter side2'));
let side3 = parseFloat(prompt('Enter side3'));
let perimeter = side1 + side2 + side3;
console.log(`The perimeter of the triangle is ${perimeter}`);

// Area of triangle
let base = parseFloat(prompt('Enter base of triangle'));
let height = parseFloat(prompt('Enter height of triangle'));
let area = (base * height) / 2;
console.log(`The area of the triangle is ${area}`);

// Area and perimeter of rectangle
let length = parseFloat(prompt('Enter length of rectangle'));
let breadth = parseFloat(prompt('Enter breadth of rectangle'));
let area1 = length * breadth;
let perimeter1 = 2 * (length + breadth);
console.log(`The area of the rectangle is ${area1} and its perimeter is ${perimeter1}`);

// Calculating slope
let x1 = parseFloat(prompt('Enter x1'));
let x2 = parseFloat(prompt('Enter x2'));
let y1 = parseFloat(prompt('Enter y1'));
let y2 = parseFloat(prompt('Enter y2'));
let slope = (y2 - y1) / (x2 - x1);
console.log(`The slope of the line is ${slope}`);

// Quadratic equation calculation
let q = 2;
let unknown = q**2 + 6*q + 9;
console.log(unknown);

// Name length check
let name = prompt('Enter name');
let nameLen = name.length;
nameLen > 7 ? console.log('Your name is long') : console.log('Your name is short');

// Comparing first and last names
let firstname = 'Beulah';
let lastName = 'Ude';
firstname.length > lastName.length 
? console.log(`Your first name, ${firstname}, is longer than your last name, ${lastName}`) 
: console.log(`Your last name, ${lastName}, is longer than your first name, ${firstname}`);

// Age comparison
let myAge = 250;
let yourAge = 25;
let age = myAge - yourAge;
console.log(`I am ${age} years older than you`);

// Check driving eligibility
let userAge = parseInt(prompt("Enter age"));
userAge >= 18 ? console.log('You\'re allowed to drive') : console.log('You\'re not allowed to drive');

// Calculate number of seconds lived
let secondsLived = userAge * 365 * 24 * 60 * 60; 
console.log(`You've lived ${secondsLived} seconds.`);



const now = new Date();

const year = now.getFullYear(); // YYYY
const month = (now.getMonth() + 1); // MM
const day = now.getDate(); // DD
const hours = now.getHours(); // HH
const minutes = now.getMinutes(); // mm

// Adding leading zeros to month, day, hours, and minutes if they are less than 10
const formattedMonth = month < 10 ? '0' + month : month;
const formattedDay = day < 10 ? '0' + day : day;
const formattedHours = hours < 10 ? '0' + hours : hours;
const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

const formattedTime = `${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}`;

console.log(formattedTime);
