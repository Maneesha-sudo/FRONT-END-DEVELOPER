const username = "Maneesha";
const course = "JavaScript";

const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

const getFullName = (first, last) => `${first} ${last}`;


console.log(`Hello ${username}, welcome to the ${course} course!`);
