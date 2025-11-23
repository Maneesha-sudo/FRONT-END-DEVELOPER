//-----------Q10--------
function createCounter(){
  let count=0;
  return function()
    {
      count++;
      return count;
    };
    
}
const c = createCounter();
console.log(c()); 
console.log(c()); 
console.log(c()); 

//-----------Q10--------
function createWallet(iniAmount=0)
{
  let balance=iniAmount;
  return{
    addMoney:function(amt){
      if(amt>0)
      {
        balance+=amt;
        console.log(`${amt} ${balance}`)
      }
      else
      {
        console.log("Amount mjust be positive");
      }
    },
    
    withdrawMoney: function(amt)
    {
      if(amt>0 && amt <=balance)
      {
        balance-=amt;
        console.log(`${amt} and ${balance}`)
      }
      else{
        console.log("insufficient balance");
      }
    },
    
    checkBalance:function(){
      return balance;
    }
  };
  
  
}
 const myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  

