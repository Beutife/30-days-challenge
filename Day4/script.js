// 1. Grading Students Based on Their Scores
let studentMark = parseInt(prompt('Enter your score'));

if (studentMark >= 80 && studentMark <= 100) {
    console.log('You got an A');
} else if (studentMark >= 70 && studentMark <= 79) {
    console.log('You got a B');
} else if (studentMark >= 60 && studentMark <= 69) {
    console.log('You got a C');
} else if (studentMark >= 50 && studentMark <= 59) {
    console.log('You got a D');
} else if (studentMark >= 0 && studentMark <= 49) {
    console.log('You got an E, Do better');
} else {
    console.log('Invalid score');
}

// 2. Determining the Season Based on the Month
let month = prompt("What month are we?").toLowerCase();

if (month === "september" || month === "october" || month === "november") {
    console.log('The season is Autumn');
} else if (month === "december" || month === "january" || month === "february") {
    console.log('The season is Winter');
} else if (month === "march" || month === "april" || month === "may") {
    console.log('The season is Spring');
} else if (month === "june" || month === "july" || month === "august") {
    console.log('The season is Summer');
} else {
    console.log('Invalid month entered');
}

// 3. Checking if a Day is a Weekend or a Working Day
let today = prompt('What day is today?').toLowerCase();

if (today === 'saturday' || today === 'sunday') {
    console.log('It is a weekend');
} else {
    console.log('It is a weekday');
}

// 4. Determining the Number of Days in a Month
let userMonth = prompt('Enter a month:').toLowerCase();

if (userMonth === 'january' || userMonth === 'march' || userMonth === 'may' || userMonth === 'july' || userMonth === 'august' || userMonth === 'october' || userMonth === 'december') {
    console.log('This month has 31 days');
} else if (userMonth === 'february') {
    console.log('This month has 28 or 29 days');
} else if (userMonth === 'april' || userMonth === 'june' || userMonth === 'september' || userMonth === 'november') {
    console.log('This month has 30 days');
} else {
    console.log('Invalid month entered');
}

// 5. Checking User’s Age for Eligibility
let userAge = parseInt(prompt('Enter your age'));
let leftAge = 18 - userAge;

userAge >= 18 ? console.log('You\'re old enough to chat') : console.log(`You\'re left with ${leftAge} years to chat`);

// 6. Comparing Ages
let myAge = 23;
let yourAge = parseInt(prompt('Enter your age'));
let ageDifference = Math.abs(myAge - yourAge);

if (myAge > yourAge) {
    console.log(`I'm ${ageDifference} years older than you`);
} else if (myAge < yourAge) {
    console.log(`You're ${ageDifference} years older than me`);
} else {
    console.log('We are the same age!');
}

// 7. Comparing Two Numbers
let a = 4;
let b = 3;

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('b is greater than a');
}

// Using a ternary operator
a > b ? console.log('a is greater than b') : console.log('b is greater than a');

// 8. Checking if a Number is Even or Odd
let num = parseInt(prompt('Enter a number'));

if (num % 2 === 0) {
    console.log('It is an even number');
} else {
    console.log('It is an odd number');
}
