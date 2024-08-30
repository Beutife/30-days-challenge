//Task 2 Day 2

// Print the statement with quotes
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Print the quote by Mother Teresa
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// Check if typeof '10' is exactly equal to 10
let numStr = '10';
let num = 10;
console.log(typeof numStr === typeof num); // false

// Make it exactly equal by converting '10' to a number
let numAsNumber = +numStr;
console.log(numAsNumber === num); // true

// Check if parseFloat('9.8') is equal to 10
let floatNum = parseFloat('9.8');
console.log(floatNum === 10); 

// Make it exactly equal by rounding or adjusting
let adjustedNum = Math.round(floatNum); 
console.log(adjustedNum === 10); // true

// Check if 'on' is found in both 'python' and 'jargon'
let word1 = 'python';
let word2 = 'jargon';
let isInPython = word1.includes('on');
let isInJargon = word2.includes('on');
console.log(isInPython && isInJargon); // true

// Check if 'jargon' is in the sentence
let checkSentence = 'I hope this course is not full of jargon.';
console.log(checkSentence.includes('jargon')); // true

// Generate a random number between 0 and 100 inclusively
let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

// Generate a random number between 50 and 100 inclusively
let randomNumBetween50And100 = Math.floor(Math.random() * 51) + 50;
console.log(randomNumBetween50And100);

// Generate a random number between 0 and 255 inclusively
let randomNumBetween0And255 = Math.floor(Math.random() * 256);
console.log(randomNumBetween0And255);

// Access the 'JavaScript' string characters using a random number
let str = "JavaScript";
let randomIndex = Math.floor(Math.random() * str.length);
let randomChar = str[randomIndex];
console.log(randomChar);

// Print the pattern with escape characters
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// Use substr to slice out the phrase from the sentence
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let slicedPhrase = sentence.substring(12, 16);
console.log(slicedPhrase);

// Count the number of occurrences of 'love' in the sentence
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveCount = loveSentence.toLowerCase().split(/\s+/).filter(word => word === 'love').length;
console.log(`The word "love" appears ${loveCount} times.`);

// Use match() to count the number of 'because'
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
let becauseCount = (becauseSentence.match(/because/g) || []).length;
console.log(`The word "because" appears ${becauseCount} times.`);

//Cleaning the text

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


;//calculating annual Income
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let salary = 5000;
let annualBonus = 10000;
let onlineCourse = 15000;

let annualSalary = salary*12;
let annualCourse = onlineCourse*12

let annualIncome = (annualSalary + annualBonus + annualCourse);
console.log(annualIncome);

