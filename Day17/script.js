//storing name in an array
localStorage.setItem('Name','Beulah');
localStorage.setItem('Country','Lagos');
localStorage.setItem('City','lagos');
localStorage.setItem('age',21);

const student = {
    firstname : 'Beulah',
    lastname : 'Ude',
    age :    22,
    skills: ['HTML', 'Css', 'J.S', 'React','Solidity'],
    country: 'Nigeria',
}

const studentJSON = JSON.stringify(student,undefined,5);
localStorage.setItem=('student', studentJSON);

const personAccount ={
    firstName : 'Aliu',
    lastName : 'Sabiu',
    incomes: [
        { amount: 5000, description: 'Salary' },
        { amount: 200, description: 'Freelance Job' }
      ],
      
      expenses: [
        { amount: 300, description: 'Groceries' },
        { amount: 100, description: 'Transport' }
      ],
      
      totalIncome() {
        const total = this.incomes.reduce((total, income)=>total+income.amount,0);
        return`$${total}`
    },

    totalExpense() {
        const total = this.expenses.reduce((total, expense)=>total+expense.amount,0);
        return `$${total}`
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    },

    accountInfo(){
        return (`Acct info: ${this.firstName}, ${this.lastName}, Balance:${this.accountBalance()}`);
    },

    addIncome(){
      return this.incomes.push({amount:200, description: 'Savings'});
    },

    addExpense(){
        return this.expenses.push({amount: 100, description:'Tfare'});
    }

}    
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome());
console.log(personAccount.addExpense());

