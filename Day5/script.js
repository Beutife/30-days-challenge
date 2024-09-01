// Empty array
const arr = Array();

// Number array
const num = [1, 3, 5, 6, 8, 0];
console.log(num.length);
console.log(num[0]);
console.log(num[Math.floor(num.length / 2)]);
console.log(num[num.length - 1]);

// Mixed data types array
const mixedDataTypes = [1, 'orange', 'girl', 4.3, 5, 'learn'];
console.log(mixedDataTypes.length);

// IT Companies array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies[0]);
console.log(Math.floor(itCompanies.length / 2));

itCompanies.forEach(function(company) {
  console.log(company.toUpperCase());
});

console.log(itCompanies.join(', ') + ' are big IT companies');

console.log(itCompanies.includes('IBM') ? "It exists" : 'It doesn\'t exist');

let companiesWithOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
  let company = itCompanies[i];
  let oCount = 0;

  for (let j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === 'o') {
      oCount++;
    }
  }

  if (oCount <= 1) {
    companiesWithOneO.push(company);
  }
}
console.log(companiesWithOneO);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 2));
console.log(itCompanies.shift());
