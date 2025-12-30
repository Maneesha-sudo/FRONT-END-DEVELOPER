import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

const dressesData = [
  { id: 1, name: "Red Party Dress", price: 129, image: "https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 2, name: "Black Evening Gown", price: 259, image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 3, name: "White Casual Dress", price: 99, image: "https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 4, name: "Blue Summer Dress", price: 109, image: "https://images.pexels.com/photos/6311611/pexels-photo-6311611.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 5, name: "Floral Maxi Dress", price: 179, image: "https://images.pexels.com/photos/6311658/pexels-photo-6311658.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 6, name: "Maroon Cocktail Dress", price: 199, image: "https://images.pexels.com/photos/6311665/pexels-photo-6311665.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 7, name: "Black Mini Dress", price: 149, image: "https://images.pexels.com/photos/6311648/pexels-photo-6311648.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 8, name: "Elegant Red Gown", price: 299, image: "https://images.pexels.com/photos/6311662/pexels-photo-6311662.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState("");

  const addToCart = (product) => {
    const exist = cart.find(item => item.id === product.id);
    exist
      ? setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item))
      : setCart([...cart, { ...product, qty: 1 }]);
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  const toggleWishlist = (product) => {
    wishlist.some(item => item.id === product.id)
      ? setWishlist(wishlist.filter(item => item.id !== product.id))
      : setWishlist([...wishlist, product]);
  };

  const filteredDresses = dressesData
    .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
    .filter(d => d.price <= maxPrice)
    .sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0);

  return (
    <>
      <Navbar cartCount={cart.length} wishlistCount={wishlist.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              dresses={filteredDresses}
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              setSearch={setSearch}
              setMaxPrice={setMaxPrice}
              setSort={setSort}
            />
          }
        />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </>
  );
}
