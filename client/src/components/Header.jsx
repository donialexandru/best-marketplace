import "./Header.css";
import { useContext } from "react";
import { CartContext } from "../contexts";

const Header = () => {
  const [cart] = useContext(CartContext);

  return (
    <header className="header">
      <a href="/" className="logo">
        <h4>BEST MARKETPLACE</h4>
      </a>
      <div className="header-center">
        <div className="search-bar">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.096 5.90401C14.4945 5.29132 13.7775 4.80388 12.9865 4.46984C12.1956 4.1358 11.3462 3.96179 10.4876 3.95784C9.62902 3.9539 8.77813 4.1201 7.98412 4.44686C7.19011 4.77361 6.4687 5.25444 5.86157 5.86158C5.25443 6.46871 4.7736 7.19012 4.44684 7.98413C4.12009 8.77815 3.95388 9.62903 3.95783 10.4876C3.96177 11.3462 4.13579 12.1956 4.46983 12.9865C4.80387 13.7775 5.29131 14.4945 5.904 15.096C7.12675 16.2965 8.77409 16.9656 10.4876 16.9577C12.2012 16.9498 13.8423 16.2656 15.054 15.054C16.2656 13.8423 16.9498 12.2012 16.9577 10.4876C16.9656 8.7741 16.2965 7.12676 15.096 5.90401ZM4.49 4.49001C6.02282 2.95757 8.08315 2.06858 10.2497 2.00484C12.4162 1.9411 14.5252 2.70741 16.1455 4.14708C17.7658 5.58675 18.7749 7.591 18.9664 9.74998C19.1579 11.909 18.5175 14.0596 17.176 15.762L22.521 21.107L21.107 22.521L15.762 17.176C14.059 18.5126 11.9102 19.149 9.75406 18.9556C7.59787 18.7622 5.5967 17.7534 4.15878 16.1351C2.72085 14.5168 1.95449 12.4109 2.01604 10.2469C2.07759 8.08294 2.96241 6.02397 4.49 4.49001Z"
              fill="black"
            />
          </svg>
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
              <a href="#" className="cart-link">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.71 5.4H18.924C20.302 5.4 21.297 6.67 20.919 7.948L19.265 13.548C19.01 14.408 18.196 15 17.27 15H8.112C7.185 15 6.37 14.407 6.116 13.548L3.71 5.4ZM3.71 5.4L3 3M16.5 21C16.8978 21 17.2794 20.842 17.5607 20.5607C17.842 20.2794 18 19.8978 18 19.5C18 19.1022 17.842 18.7206 17.5607 18.4393C17.2794 18.158 16.8978 18 16.5 18C16.1022 18 15.7206 18.158 15.4393 18.4393C15.158 18.7206 15 19.1022 15 19.5C15 19.8978 15.158 20.2794 15.4393 20.5607C15.7206 20.842 16.1022 21 16.5 21ZM8.5 21C8.89782 21 9.27936 20.842 9.56066 20.5607C9.84196 20.2794 10 19.8978 10 19.5C10 19.1022 9.84196 18.7206 9.56066 18.4393C9.27936 18.158 8.89782 18 8.5 18C8.10218 18 7.72064 18.158 7.43934 18.4393C7.15804 18.7206 7 19.1022 7 19.5C7 19.8978 7.15804 20.2794 7.43934 20.5607C7.72064 20.842 8.10218 21 8.5 21Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="cart-number">{cart.length}</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.463 3.99401C16.781 2.34901 14.44 3.01201 13.034 4.06801C12.458 4.50101 12.17 4.71801 12 4.71801C11.83 4.71801 11.542 4.50101 10.966 4.06801C9.56001 3.01201 7.21901 2.34901 4.53701 3.99401C1.01801 6.15301 0.222012 13.274 8.34001 19.284C9.88601 20.427 10.659 21 12 21C13.341 21 14.114 20.428 15.66 19.283C23.778 13.275 22.982 6.15301 19.463 3.99401Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.97 20C17.81 17.108 16.925 15 12 15C7.075 15 6.19 17.108 6.03 20"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
