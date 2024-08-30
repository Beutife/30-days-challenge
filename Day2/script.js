//Task 1 day 2

let challenged = '30 Days Of JavaScript';
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let sentence = 'You cannot end a sentence with because because because is a conjunction';

// Print the string
console.log(challenged);

// Print the length of the string
console.log(challenged.length);

// Change all characters to capital letters
console.log(challenged.toUpperCase()); 

// Change all characters to lowercase letters
console.log(challenged.toLowerCase()); 

// Cut (slice) out the first word
console.log(challenged.substring(0, 2)); 

// Slice out the phrase 'Days Of JavaScript'
console.log(challenged.slice(3)); 

// Check if the string contains 'Script'
console.log(challenged.includes('Script')); 

// Split the string into an array
console.log(challenged.split('')); 

// Split the string at the space
console.log(challenged.split(' ')); 

// Split the company string at the comma
console.log(company.split(',')); 

// Change 'JavaScript' to 'Python'
console.log(challenged.replace('JavaScript', 'Python'));

// What is the character at index 15?
console.log(challenged.charAt(15)); 

// What is the character code of 'J'?
console.log(challenged.charCodeAt(15));

// Use indexOf to find the position of the first 'a'
console.log(challenged.indexOf('a')); 

// Use lastIndexOf to find the position of the last 'a'
console.log(challenged.lastIndexOf('a')); 

// Use indexOf to find the position of the first occurrence of 'because'
console.log(sentence.indexOf('because')); 

// Use lastIndexOf to find the position of the last occurrence of 'because'
console.log(sentence.lastIndexOf('because')); 

// Use search to find the position of the first occurrence of 'because'
console.log(sentence.search('because'));

// Use trim to remove whitespace
console.log(' 30 Days Of JavaScript '.trim()); 

// Use startsWith with the string '30 Days Of JavaScript'
console.log(challenged.startsWith('30')); 

// Use endsWith with the string '30 Days Of JavaScript'
console.log(challenged.endsWith('JavaScript')); 

// Use match() method to find all 'a's
console.log(challenged.match(/a/g)); 

// Use concat() to merge strings
console.log(challenged.concat(' Days of ', 'JavaScript')); 

// Use repeat() method to print the string 2 times
console.log(challenged.repeat(2)); 
