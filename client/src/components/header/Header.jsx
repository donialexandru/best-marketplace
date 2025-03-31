import CartLogo from "../common/CartLogo.jsx";
import FavouriteLogo from "../common/FavouriteLogo.jsx";
import UserLogo from "../common/UserLogo.jsx";
import SubHeaderLinks from "./SubHeaderLinks.jsx";
import HeaderLinks from "./HeaderLinks.jsx";
import Search from "./Search.jsx";
import Logo from "./Logo.jsx";
import { useCart } from "../../context/CartContext.jsx";

const Header = () => {
  const { cart } = useCart();

  const subHeaderLinksData = [
    { label: "All products", path: "/products" },
    { label: "On Sale", path: "/products" },
    { label: "Favourite", path: "/favourites" },
    { label: "New Arrivals", path: "/products" },
  ];
  const headerLinksData = [
    {
      path: "/cart",
      icon: <CartLogo />,
      badge: cart.length,
      className: "cart-link",
    },
    { path: "/favourites", icon: <FavouriteLogo /> },
    { path: "/user", icon: <UserLogo /> },
  ];

  return (
    <>
      <div className="header">
        <Logo />
        <Search />
        <HeaderLinks links={headerLinksData} />
      </div>
      <div className="sub-header">
        <SubHeaderLinks links={subHeaderLinksData} />
      </div>
    </>
  );
};

export default Header;
