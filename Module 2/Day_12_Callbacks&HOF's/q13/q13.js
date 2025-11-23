function countCategories(categories) {
  const result = categories.reduce((acc, item) => {
    if (acc[item]) 
    {
      acc[item]++;        
    }
    else
    {
      acc[item] = 1;      
    }
    return acc;
  }, {});

  return result;
}
const data = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(data));
