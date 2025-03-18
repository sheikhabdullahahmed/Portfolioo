import React from "react";
import NavLinks from "../Navbar/NavbarLinks";
import ToggleTheme from "../ToggleTheme/Toggle";
import Logo from "../Logo/Logo";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../../Context";

export const Navbar: React.FC = () => {
  const { scrolled, openSidebar } = useAppContext();

  return (
    // <nav className={`navbar ${scrolled ? "nav-fixed" : ""}`}>
    <nav className={`${scrolled ? 'nav-fixed' : ''}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          {/* Mobile Sidebar Toggle Button */}
          <button className="nav-btn" onClick={openSidebar} aria-label="menu">
            <FaBars />
          </button>
        </div>
        {/* Desktop Links */}
        <ul className="nav-links">
          <NavLinks />
        </ul>
        {/* Theme Toggle */}
        <ToggleTheme />
      </div>
    </nav>
  );
};
