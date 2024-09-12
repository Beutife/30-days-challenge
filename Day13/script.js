const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

console.table(countries);

for(const useer of users){
    const useerCountry = useer.country;
    console.table(useerCountry); 
}

console.assert(10 > 2* 10, '10 is not greater than 20');

console.warn('This is a warning, beware!');

const code =9;
console.error('error-', code);

let i =0;
console.time('using while loop');
while(i<5){
    console.log([i])
    i++;
};
console.timeEnd('using while loop');

console.time('for loop')
for(let j= 0; j<=5; j++){
    console.log([j]);
}
console.timeEnd('for loop');

console.time('for of loop')
for (const count of names){
    console.log(count)
};
console.timeEnd('for of loop');

console.time('forEach loop');
countries.forEach(([name1,city]) => {
    console.log(name1, city);
});
console.timeEnd('forEach loop')