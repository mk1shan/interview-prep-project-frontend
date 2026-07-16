const SearchBar = ({ value, onChange }) => (
  <input
    className="search"
    type="search"
    placeholder="Search questions"
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
);

export default SearchBar;
