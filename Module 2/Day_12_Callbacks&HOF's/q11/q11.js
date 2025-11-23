function processProducts(products) {
  const productNames = products.map(item => item.name);

  products.forEach(item => {
    if (item.price > 50) {
      console.log(`${item.name} is above $50`);
    } else {
      console.log(`${item.name} is below $50`);
    }
  });

  return productNames; 
}

const data = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(data);
