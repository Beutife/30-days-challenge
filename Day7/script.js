// Function to generate user IDs
function userIdGenerator() {
    const numChar = parseInt(prompt('Enter number of characters:'));
    const numID = parseInt(prompt('Enter number of IDs:'));

    let userIdGeneratedByUser = [];

    for (let i = 0; i < numID; i++) {
        let userId = '';
        for (let j = 0; j < numChar; j++) {
            const randomChar = Math.random().toString(36).charAt(2); 
            userId += randomChar;
        }
        userIdGeneratedByUser.push(userId);
    }
    return userIdGeneratedByUser;
}

console.log(userIdGenerator());


// Function to generate an RGB color
function rgbColorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

console.log(rgbColorGenerator());


// Function to generate an array of hexadecimal colors
function arrayOfHexaColors(numColors) {
    const chars = 'abcdef0123456789';
    const colors = [];

    for (let i = 0; i < numColors; i++) {
        let hexColor = '#';
        for (let j = 0; j < 6; j++) { 
            const randomIndex = Math.floor(Math.random() * chars.length);
            hexColor += chars[randomIndex];
        }
        colors.push(hexColor);
    }
    return colors;
}

console.log(arrayOfHexaColors(5));


// Function to convert hexadecimal colors to RGB
function convertHexaToRgb(arrayOfHexaColors) {
    const rgbColors = [];

    for (let i = 0; i < arrayOfHexaColors.length; i++) {
        let hex = arrayOfHexaColors[i].substring(1); 
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        const rgbColor = `rgb(${r},${g},${b})`;
        rgbColors.push(rgbColor);
    }

    return rgbColors;
}

console.log(convertHexaToRgb(arrayOfHexaColors(5)));


// Function to return either hex or rgb color
function generateColor(hexColor = '', rgbColor = '') {
    if (hexColor) {
        return hexColor;
    } else if (rgbColor) {
        return rgbColor;
    } else {
        return 'No color provided';
    }
}

console.log(generateColor('#ff5423'));


// Function to shuffle an array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]; 
    }
    return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));


// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));


// Function to sum all numbers using rest parameters
const sumAllNum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sumAllNum(1, 3, 5, 6));


// Function to modify an array and return specific values
function modifyArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let modifiedArr = arr[i];
        if (modifiedArr.length === 5) {
            newArr.push(modifiedArr);
        }
    }
    return newArr.length > 0 ? newArr : 'Item not found';
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));


// Function to generate 7 random unique numbers
function sevenRandomNumber() {
    let newRandNum = [];
    while (newRandNum.length < 7) {
        let randNum = Math.floor(Math.random() * 10);
        if (!newRandNum.includes(randNum)) {
            newRandNum.push(randNum);
        }
    }
    return newRandNum;
}

console.log(sevenRandomNumber());


// Function to reverse an array of countries
function reverseCountries(countryArr) {
    let country = [];
    for (let i = countryArr.length - 1; i >= 0; i--) {
        let reverseCountry = countryArr[i];
        country.push(reverseCountry);
    }
    return country;
}

console.log(reverseCountries(['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']));
