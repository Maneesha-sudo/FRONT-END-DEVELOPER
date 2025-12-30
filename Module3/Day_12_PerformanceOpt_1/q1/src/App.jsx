import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 200 },
];

export default function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  // ✅ useMemo: total price recalculates ONLY when products change
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // ✅ useCallback: same function reference across renders
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}
