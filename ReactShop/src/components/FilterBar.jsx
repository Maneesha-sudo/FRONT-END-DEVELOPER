export default function FilterBar({ setSearch, setMaxPrice, setSort }) {
  return (
    <div className="filters">
      <input placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>
      <input type="range" min="50" max="300" onChange={(e) => setMaxPrice(e.target.value)} />
    </div>
  );
}
