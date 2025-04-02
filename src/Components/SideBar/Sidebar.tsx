import React from "react";
import { Pivot as Hamburger } from "hamburger-react";
import { useAppContext } from "../../Context"; 
import NavLinks from "../Navbar/NavbarLinks";
import Logo from "../Logo/Logo";

export const Sidebar: React.FC = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <div className="sidebar-header-col">
          <Logo />
        </div>
        {/* Sidebar Close Button */}
        <div className="hmburger-close">
        <Hamburger
          size={20}
          direction="right"
          duration={0.8}
          toggled={isSidebarOpen}
          toggle={closeSidebar} // This will close the sidebar
        />
        </div>
      </div>
      <hr />
      <ul id="sidebar-links">
        <NavLinks closeSidebar={closeSidebar} />
      </ul>
    </aside>
  );
};
