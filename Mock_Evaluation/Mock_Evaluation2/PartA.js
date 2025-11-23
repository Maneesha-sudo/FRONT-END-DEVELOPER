//------------------Q1----------
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
console.log(...arr1,...arr2)

//------------------Q2----------
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
console.log({...person, ...extra})

//------------------Q3----------
function sumAll(...numbers){
let total=0;
for(let num of numbers)
{
  total+=num
}
return total;
}
console.log(sumAll(1, 2, 3, 4))

//------------------Q4----------
let numbers = [10, 20, 30, 40, 50];
let [first,...rest]=numbers;
 console.log(first);
 console.log(rest)

 //------------------Q5----------
 let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
const {name,address:{city,pin}, geo:{lat, lng}}=user;
console.log(city)
console.log(lat)
console.log(lng

//------------------Q6----------
const multiply=(a,b)=>a*b
console.log(multiply(2,3))

//------------------Q7----------
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
console.log(emp?.details?.profile?.role)





