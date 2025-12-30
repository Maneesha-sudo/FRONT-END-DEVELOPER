export default function CartPage({ cart, removeFromCart }) {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} />
          <span>{item.name} x {item.qty}</span>
          <span>${item.price * item.qty}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
