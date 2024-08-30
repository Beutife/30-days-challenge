const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

//Task 1

//use the typeof operator to check different data types
let firstname = 'Beulah';
let lastName = 'Ude';
let country = 'Nigeria';
let city ='Lagos';
let age = 20;
let isMarried = false;
let year1 = 2024;

console.log(typeof firstname);//string
console.log(typeof lastName); //string
console.log(typeof country); //string
console.log(typeof city); //string
console.log(typeof age); //number
console.log(typeof isMarried); //boolean
console.log(typeof year1) //number

//Check if type of '10' is equal to 10
console.log(typeof '10'=== 10); //false
 console.log(typeof parseInt('9.8')===10);

 let num = parseInt('9.8');
 let newNum = Number(Math.round(parseInt('9.8')));
 console.log(newNum); 

 //JavaScript statement which provide truthy value.
let isLightOn = true;
let isHigh = true;
let truVal = 4 < 3;

let zero = '';
let longTrip = false;
let nul = null;

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log( 4 <= 3);
console.log( 4 == 4);
console.log(4 === 4);
console.log( 4 != 4);
console.log(4 !== 4);
console.log( 4 != '4');
console.log( 4 == '4');
console.log( 4 === '4');

//determine the length and make a falsy comparison
let pyLen = 'python';
let jarlen = 'jargon'

console.log(pyLen && jarlen.length);

console.log(pyLen && jarlen.startsWith('p') ? true : false);


console.log(4 > 3 && 10 < 12);
console.log( 4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log( 4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
//console.log( 'on'dragon && python);
console.log();
console.log();
console.log();


//date 
let today = new Date();
console.log(today)
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getTime());

