import { Link } from "@tanstack/react-router";

function HeaderLinks({ links }) {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link className={link.className || ""} to={link.path}>
            {link.icon}
            {link.badge !== undefined && (
              <span className="cart-number">{link.badge}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HeaderLinks;
