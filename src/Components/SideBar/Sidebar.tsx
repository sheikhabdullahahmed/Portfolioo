import React from "react";
import { FaTimes } from "react-icons/fa";
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
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <hr />

      <ul id="sidebar-links">
        <NavLinks closeSidebar={closeSidebar} />
      </ul>
    </aside>
  );
};
