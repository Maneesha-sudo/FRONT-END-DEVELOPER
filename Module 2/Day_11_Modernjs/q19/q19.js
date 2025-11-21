//............1..............

const add = (a, b) => `${a + b}`;
console.log(add(5, 7));  


const msg=`hello eveyone,
this is maneesha
from Hyderabad`;
console.log(msg)


const person={firstName : "John", lastName : "Doe"}
console.log(`${person.firstName} ${person.lastName}`)

//............2..............
const square=n=>n*n 
console.log(square(5))

//Arrow functions do not create their own this.

const obj = {
  value: 50,
  test() {
    console.log(this.value);
  }
};

obj.test();  

//............3..............
const product={
  name:"pen",
  price:10
};
console.log({...product})


const a = { x: 1 };
const b = { y: 2 };
console.log({...a,...b})

const maxValue = (...numbers) => {
  return Math.max(...numbers);
};
console.log(maxValue(1, 2, 3, 4));  

//............4..............
const arr=[10,20,30]
const [a, b] = arr;
console.log(a); 
console.log(b);

const laptop = { brand: "Dell", ram: "8GB" };
const{brand,ram}=laptop;
console.log(brand)

const info = {};
console.log(info?.name?.city);

//............5..............
for (var i = 0; i < 3; i++) {}
console.log(i);   //output:3

for (let i = 0; i < 3; i++) {}
console.log(i); //output:3

//Why is const used for values that should not be reassigned?
//Because const prevents reassigning the variable name to a new value.
const x = 10;
x = 20;   //  Error: cannot reassign

//............6..............
let kmph=78;
let speed = kmph > 60 ? "fast" : "normal";
console.log(speed);

let age = 20;
let person = age >= 18 ? "Adult" : "Minor";
console.log(person); 

const num = 5;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result);

//............7..............

const nums=[1,2,3];
const newnums=[...nums,4,5]
console.log(newnums)

a = ["x","y"];
b = ["z"];
console.log(...a, ...b)


function printNames(...names) {
  return names;
}
const result = printNames("A", "B", "C");
console.log(...result);  

//............8..............
const user={ id:101, status: "active"}
const{id,status}=user;
console.log(id);
console.log(status);

const id = 101;
const role = "admin";
const user = {
  id,
  role
};

const name = "Maneesha";
const age = 22;
const user = {
  name,     
  age,     
greet() { 
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }};
user.greet();

//............9..............
const today = new Date().toDateString();
console.log(`Today's date is: ${today}`);

const name = "Maneesha";
const score = 85;
console.log(`Hello ${name}, your score is ${score}/100`);

//............10..............
function add(a, b) {
  return a + b;
}
const add = (a, b) => a + b;


const isAdult = age => age >= 18;

const double = num => num * 2;

//............11..............
const arr=[1,2,3]
const arr2=[...arr,4,5]
console.log(arr2)

const nums=[3,4,5]
const numbers=[100,...nums]
console.log(numbers)

const x = { a: 100 };
const y = { b: 1000 };
const merged = { ...x, ...y };
console.log(merged);

//............12..............
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user?.address?.city);
console.log(user?.job?.title);

const info = {};
console.log(info.details?.email);











