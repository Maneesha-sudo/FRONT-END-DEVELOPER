export default function ProductList({ dresses, addToCart, wishlist, toggleWishlist }) {
  return (
    <div className="product-grid">
      {dresses.map(dress => {
        const liked = wishlist.some(w => w.id === dress.id);

        return (
          <div key={dress.id} className="product-card">
            <div className="wishlist-icon" onClick={() => toggleWishlist(dress)}>
              {liked ? "❤️" : "🤍"}
            </div>

            <img src={dress.image} alt={dress.name} />

            <div className="product-info">
              <h3>{dress.name}</h3>
              <p className="price">${dress.price}</p>
              <button onClick={() => addToCart(dress)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
