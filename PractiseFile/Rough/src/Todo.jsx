import React, { useState } from 'react';

const Todo = () => {
  const [cart, setCart] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // Add item
  function AddtoCart() {
    if (cart === "") {
      alert("Fields cannot be empty");
      return;
    }
    setCartItems([...cartItems, { name: cart, completed: false }]);
    setCart("");
  }

  // Delete item
  function delCartItem(index) {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  }

  // Edit item
  function editCart(index) {
    const newValue = prompt(cartItems[index].name);
    if (newValue !== null && newValue.trim() !== "") {
      const updatedCarts = cartItems.map((item, i) => {
        if (i === index) {
          return { ...item, name: newValue };
        } else {
          return item;
        }
      });
      setCartItems(updatedCarts);
    }
  }

  // Complete/Toggle item
  function CompleteTask(index) {
    const updatedCarts = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, completed: false }; // toggle
      } else {
        return item;
      }
    });
    setCartItems(updatedCarts);
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Enter any item'
        value={cart}
        onChange={(e) => setCart(e.target.value)}
      />
      <button onClick={AddtoCart}>Add</button>

      <ul>
        {cartItems.map((item, index) => (
          <li
            key={index}
            style={{
              textDecoration: item.completed ? "line-through" : "none"
            }}
          >
            {item.name}
            <button onClick={() => delCartItem(index)}>Delete</button>
            <button onClick={() => editCart(index)}>Edit</button>
            <button onClick={() => CompleteTask(index)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
