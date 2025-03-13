import SearchLogo from "../common/SearchLogo.jsx";

function Search() {
  return (
    <div className="header-center">
      <div className="search-bar">
        <SearchLogo />
        <input
          type="search"
          placeholder="Search for products..."
          className="search-input"
        />
      </div>
    </div>
  );
}

export default Search;
