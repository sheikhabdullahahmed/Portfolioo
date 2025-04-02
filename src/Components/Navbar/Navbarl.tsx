import React, { useState } from "react";
import NavLinks from "../Navbar/NavbarLinks";
import ToggleTheme from "../ToggleTheme/Toggle";
import Logo from "../Logo/Logo";
import { useAppContext } from "../../Context";
import { Pivot as Hamburger } from "hamburger-react";

export const Navbar: React.FC = () => {
  const { scrolled, openSidebar } = useAppContext();
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={`${scrolled ? "nav-fixed" : ""}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          {/* Mobile Sidebar Toggle Button */}
          <Hamburger
            size={20}
            direction="right"
            duration={0.8}
            toggled={isOpen}
            toggle={setOpen}
          />
          {/* <button className="nav-btn" onClick={openSidebar} aria-label="menu">
            <FaBars />
          </button> */}
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
