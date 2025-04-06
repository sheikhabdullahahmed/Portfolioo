import React from "react";
import { navLinks } from "../../Data/utiles";

// ✅ Interface to define prop types
interface NavLinksProps {
  closeSidebar?: () => void; // ✅ closeSidebar is optional
}

const NavLinks: React.FC<NavLinksProps> = ({ closeSidebar }) => {
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a className="nav-color"
            href={link.url}
            onClick={(e) => {
              e.preventDefault();
              if (closeSidebar) closeSidebar(); // ✅ Sidebar will close on click
              document.querySelector(link.url)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {link.text}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
