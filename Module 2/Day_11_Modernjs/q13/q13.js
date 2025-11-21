

const people = [ { name: "Alice", 
address: { city: "New York", 
street: { name: "Broadway", number: 123 } } },

{ name: "Bob",
address: { city: "Los Angeles",
street: { name: "Sunset Boulevard", number: 456 } } } ];

people.forEach(person => {
  console.log(
    `${person.name} lives in ${person.address.city} on ${person.address.street.name}`
  );
});
