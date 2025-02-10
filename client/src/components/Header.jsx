import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Best Marketplace</h1>
      <input
        type="search"
        placeholder="Search for products..."
        className="search-bar"
      />
      <nav>
        <ul>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Favourites</a>
          </li>
          <li>
            <a href="#">User</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
