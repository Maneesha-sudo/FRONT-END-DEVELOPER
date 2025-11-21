const isEven = n => n % 2 === 0;

console.log(isEven(3))
console.log(isEven(4))


let marks = [24, 77, 88];

const result = marks.map(m => (m >= 35 ? "Pass" : "Fail"));

console.log(result);




const greet = name => console.log("Hello, " + (name ? name : "Guest"));
greet("Maneesha"); 
greet();          






