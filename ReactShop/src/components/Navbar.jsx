import { Link } from "react-router-dom";

export default function Navbar({ cartCount, wishlistCount }) {
  return (
    <nav className="navbar">
      <h1>👗 <span>React</span>Shop</h1>
      <div>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <span className="wish">❤️ {wishlistCount}</span>
      </div>
    </nav>
  );
}
