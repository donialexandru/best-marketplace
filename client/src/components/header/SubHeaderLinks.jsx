import { Link } from "@tanstack/react-router";

function SubHeaderLinks({ links }) {
  return (
    <ul className="sub-header">
      {links.map((link, index) => (
        <li key={index}>
          <Link className="router-link" to={link.path}>
            <p className="secondary-text">{link.label}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SubHeaderLinks;
