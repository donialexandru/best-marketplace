import "./Header.css";
import { useContext } from "react";
import { CartContext } from "../contexts";
import { Link } from "@tanstack/react-router";
import SearchLogo from "./SearchLogo.jsx";
import CartLogo from "./CartLogo.jsx";
import FavouriteLogo from "./FavouriteLogo.jsx";
import UserLogo from "./UserLogo.jsx";

const Header = () => {
  const [cart] = useContext(CartContext);

  return (
    <header>
      <div className="header">
        <Link className="logo" to="/">
          <h4>BEST MARKETPLACE</h4>
        </Link>
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
        <div>
          <nav>
            <ul>
              <li>
                <Link className="cart-link" to="/cart">
                  <CartLogo />
                  <span className="cart-number">{cart.length}</span>
                </Link>
              </li>
              <li>
                <a href="#">
                  <FavouriteLogo />
                </a>
              </li>
              <li>
                <a href="#">
                  <UserLogo />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="sub-header">
        <Link className="router-link" to="/products">
          <p className="secondary-text">All products</p>
        </Link>
        <Link className="router-link" to="/products">
          <p className="secondary-text">On Sale</p>
        </Link>
        <Link className="router-link" to="/products">
          <p className="secondary-text">Favourite</p>
        </Link>
        <Link className="router-link" to="/products">
          <p className="secondary-text">New Arrivals</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
