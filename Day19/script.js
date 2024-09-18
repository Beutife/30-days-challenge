function outerFunc() {
   let count = 0;
   function innerFunc() {
    count++;
    return count;
   }
   return innerFunc;
}
const innerFunc = outerFunc();

console.log(innerFunc());
console.log(innerFunc());


function outerFunction() {
    let count = 0;
    function plusOne() {
        count++;
        return count;
    }
    function minusOne() {
        count--;
        return count;
    }
    function addfive() {
        count += 5;
        return count;
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne(),
        addfive: addfive()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.addfive)


function personAccount() {
    let fname = 'Beu';
    let lname = 'Ude';
    
    let incomes = {
        salary: 2000,
        freelance: 3500
    };
    
    let expenses = {
        food: 300,
        Tfare: 800
    };

    function totalIncome() {
        // Use Object.values() to extract the income values 
        const incomeTotal = Object.values(incomes).reduce((total, income) => total + income, 0);
        return incomeTotal;
    }

    
    function totalExpense() {

        const expenseTotal = Object.values(expenses).reduce((total, expense) => total + expense, 0);
        return expenseTotal;
    }

   
    function addIncome(description, amount) {
        incomes[description] = amount;
    }

   
    function addExpense(description, amount) {
        expenses[description] = amount;
    }

    
    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    
    function accountInfo() {
        return `${fname} ${lname} has a balance of ${accountBalance()}`;
    }

    
    return {
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        addIncome: addIncome,
        addExpense: addExpense,
        accountBalance: accountBalance,
        accountInfo: accountInfo
    };
}


const myAccount = personAccount();

console.log(myAccount.totalIncome());    
console.log(myAccount.totalExpense());   
console.log(myAccount.accountBalance()); 
console.log(myAccount.accountInfo());    

myAccount.addIncome('bonus', 1000);
myAccount.addExpense('shopping', 500);

console.log(myAccount.totalIncome());   
console.log(myAccount.totalExpense());   
console.log(myAccount.accountBalance()); 
console.log(myAccount.accountInfo());    
