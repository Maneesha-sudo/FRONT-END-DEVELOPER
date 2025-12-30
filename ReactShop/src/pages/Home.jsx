import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

export default function Home({
  dresses,
  addToCart,
  wishlist,
  toggleWishlist,
  setSearch,
  setMaxPrice,
  setSort
}) {
  return (
    <>
      <section className="hero">
        <h1>👗 <span>React</span>Shop</h1>
        <p>Bold Looks. Seamless Shopping.</p>
      </section>

      <FilterBar
        setSearch={setSearch}
        setMaxPrice={setMaxPrice}
        setSort={setSort}
      />

      <ProductList
        dresses={dresses}
        addToCart={addToCart}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </>
  );
}
