import React from "react";
import NavLinks from "../Navbar/NavbarLinks";
import ToggleTheme from "../ToggleTheme/Toggle";
import Logo from "../Logo/Logo";
import { useAppContext } from "../../Context";
import { Pivot as Hamburger } from "hamburger-react";

export const Navbar: React.FC = () => {
  const { scrolled, openSidebar, isSidebarOpen, closeSidebar } = useAppContext();

  return (
    <nav className={`${scrolled ? "nav-fixed" : ""}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          
          {/* Hamburger Menu - Visible only on mobile */}
          <div className="hamburger-container">
            <Hamburger
              size={20}
              direction="right"
              duration={0.8}
              toggled={isSidebarOpen}
              toggle={isSidebarOpen ? closeSidebar : openSidebar} // Open & Close sidebar correctly
            />
          </div>
        </div>
        
        <ul className="nav-links">
          <NavLinks />
        </ul>
        
        <ToggleTheme />
      </div>
    </nav>
  );
};
