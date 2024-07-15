// Level 1

// Create a closure which has one inner function

// Level 2

// Create a closure which has three inner functions

// Level 3

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and
// accountBalance inner functions. Incomes is a set of incomes and its description and
// expenses is also a set of expenses and its description.

function personAccount() {
  let firstname = "Ragnar";
  let lastname = "lothbrok";
  let incomes = 0;
  let expenses = 0;
  function totalIncome() {
    return incomes;
  }
  function totalExpense() {
    return expenses;

  }
  function accountInfo() {
    return `first name: ${firstname}\nlast name: ${lastname}\nIncomes: ${incomes}\nExpenses: ${expenses}\n`
  }
  function addIncome(number) {
    incomes+=number;
  }
  function addExpense(number) {
    expenses+=number;
  }
  function accountBalance() {
    return `your Balance is ${incomes-expenses}`;

  }

  return {
         totalIncome,
        totalExpense,
         accountInfo,
         addIncome,
        addExpense,
        accountBalance,
  };
}

const innerFunc=personAccount();

innerFunc.addIncome(50000);
innerFunc.addExpense(20000);
console.log(innerFunc.accountInfo());
console.log( innerFunc.accountBalance());

