

function createCounter(){
let count=0
return{ 
  increment:function()
  {
    count++
    console.log(count);
  },
   decrement:function()
  {
    count--
    console.log(count);
  }
  
};
  
}
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement();

//-------------q:2---------
function createBankAccount() {
  let balance = 0;  
  let transactionHistory = []; 

  return {
    deposit: function (amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },

    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        transactionHistory.push(`Failed withdrawal: ${amount}`);
      } else {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      }
    },

    checkBalance: function () {
      console.log(`Current balance: ${balance}`);
      return balance;
    },

    getHistory: function () {
      console.log("Transaction History:", transactionHistory);
      return transactionHistory;
    }
  };
}
const account = createBankAccount();
account.deposit(500); 
account.withdraw(200);
account.withdraw(400);

console.log(account.balance); 
account.getHistory(); 
