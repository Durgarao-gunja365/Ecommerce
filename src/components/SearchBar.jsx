const SearchBar = ({ value, onChange }) => (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border px-4 py-2 w-full md:w-1/2 rounded"
    />
  );
  
  export default SearchBar;
  