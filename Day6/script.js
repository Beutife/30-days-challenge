// Iterating from 0 to 10 using different loops

// For Loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// While Loop
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

// Do-While Loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Corrected For Loop Syntax
let k = 0;
for (; k <= 7; k++) {
  console.log(k);
}

//A loop to generate pattern__
for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i));
}

// Squaring Numbers in an Array
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of num) {
  console.log(number * number);
}

// Squaring and Cubing Numbers
for (const number of num) {
  console.log(number ** 2, number ** 3);
}

// Printing Odd/Even Status
i = 0;
while (i <= 100) {
  console.log(i % 2 === 0 ? 'Even' : 'Odd');
  i++;
}

// Checking Prime Numbers
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
      if (i % j === 0) {
          isPrime = false;
          break;
      }
  }
  if (isPrime) {
      console.log(i);
  }
}

// Summing Numbers from 0 to 100
let sum = 0;
for (let x = 0; x <= 100; x++) {
  sum += x;
}
console.log('Sum of Numbers from 0 to 100:', sum);

// Summing Even and Odd Numbers Separately
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
      sumEven += i;
  } else {
      sumOdd += i;
  }
}

console.log('Sum of Even Numbers:', sumEven);
console.log('Sum of Odd Numbers:', sumOdd);


//Array of 5 random numbers
let randomNum =[];
for (let i=0; i<=5; i++){
  let randomNumber = Math.floor(Math.random()* 101);
  randomNum.push(randomNumber);
}

//Unique array of random number
let uniqueRandomNumbers = new Set();
while (uniqueRandomNumbers.size < 5) {
    let randomNumber = Math.floor(Math.random() * 101);
    uniqueRandomNumbers.add(randomNumber);
}
console.log(Array.from(uniqueRandomNumbers));

//Generate 6-character random id
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomID = '';
for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters[randomIndex];
}
console.log(randomID);

//Generate number of characters
let numChar = 'xkqci4utda1lmbelpkm03rba';
let randID = [];
for(let i=0; i<numChar.length; i++){
 let randChar = Math.floor(Math.random()*i);
 randID += numChar[randChar];
}
console.log(randID);

// Function to generate a random hexadecimal color
function getRandomHexColor() {
  let hexColor = '#';
  let hexCharacters = '0123456789ABCDEF';
  
  for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexCharacters.length);
      hexColor += hexCharacters[randomIndex];
  }
  
  return hexColor;
}

// Function to generate a random RGB color
function getRandomRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  
  return `rgb(${r},${g},${b})`;
}

// Converting Country Names to Uppercase
const countries1 = [
  'Albania', 'Bolivia', 'Canada', 'Denmark',
  'Ethiopia', 'Finland', 'Germany', 'Hungary',
  'Ireland', 'Japan', 'Kenya'
];

for (let i = 0; i < countries1.length; i++) {
  countries1[i] = countries1[i].toUpperCase();
}
console.log('Countries in Uppercase:', countries1);

// Loop Through the Array
for (let i = 0; i < countries1.length; i++) {
  console.log(countries1[i]);
}

// Slicing and Pushing to a New Array
const empArr = countries1.slice(0, 3);
console.log('Sliced Array:', empArr);

// Searching for "land" in Country Names
let land = [];
const arrLand = ['Finland', 'Ireland', 'Iceland'];
for (const country of arrLand) {
  if (country.includes('land')) {
      land.push(country);
  }
}
console.log('Countries with "land" in their name:', land);

