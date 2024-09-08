//Create an object called dog
const dog = {
    name : 'Rex',
    legs : 4,
    color: 'Brown',
    age : 4,
    bark: true,
    getDogInfo: function(){
        console.log(`it\'s ${this.name} a ${this.breed} with a ${this.color}`)
    }
}
console.log(dog.name);
console.log(dog.legs);
console.log(dog['color']);
console.log(dog['age']);
console.log(dog.bark);

dog.breed='German Sheepherd';

dog.getDogInfo();

//the person with the most skills
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let mostSkilledUser = '';
  let maxSkills = 0;
  
  for (const user in users) {
    let userSkills = users[user].skills;  
    let skillLength = userSkills.length;  
    
    if (skillLength > maxSkills) {  
      maxSkills = skillLength;
      mostSkilledUser = user;
    }
  }
  
  console.log(`The person with the most skills is ${mostSkilledUser} with ${maxSkills} skills.`);
 
 // Adding Beulah without modifying the rest of the users object
users.Beulah = {
  email: 'udebeulah@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
  age: 21,
  isLoggedIn: false,
  points: 50
};

// Find MERN stack developers (MongoDB, Express, React, Node)
let mernStack = [];  

for (const user in users) {  
  let userSkills = users[user].skills;  
  
  // Check if the user has all MERN stack skills
  if (
    userSkills.includes('MongoDB') &&
    userSkills.includes('Express') &&
    userSkills.includes('React') &&
    userSkills.includes('Node')
  ) {
    mernStack.push(user);  
  }
}

console.log('MERN stack developers:', mernStack);


//an object with specified properties and method
const personAccount = {
  firstName: 'Beulah',
  lastName: 'Ude',
  incomes: [],  
  expenses: [], 
  
  
  totalIncome: function() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },

  
  totalExpense: function() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },

  
  accountInfo: function() {
    return `Account Holder: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
  },

  
  addIncome: function(description, amount) {
    this.incomes.push({ description, amount });
  },

  
  addExpense: function(description, amount) {
    this.expenses.push({ description, amount });
  },

  
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};


personAccount.addIncome('Salary', 5000);
personAccount.addIncome('Freelance Project', 1200);


personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Groceries', 300);


console.log(personAccount.accountInfo());


console.log('Account Balance:', personAccount.accountBalance());

