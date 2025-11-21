arr1 = [1, 2, 3];
arr2 = [4, 5];
console.log(...arr1,...arr2)



const sum = (...nums) => nums.reduce((total, n) => total + n, 0);
console.log(sum(1,2,3))


const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const { name, address: { city, pin } } = user;

console.log(name); 
console.log(city); 
console.log(pin);  

