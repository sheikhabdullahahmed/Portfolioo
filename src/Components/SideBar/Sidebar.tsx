import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../../Context';
import NavLinks from '../Navbar/NavbarLinks';
import Logo from '../Logo/Logo';

export const Sidebar = () => {
  // function from context
    const { isSidebarOpen, closeSidebar } = useAppContext();

  // jsx
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      {/* sidebar-header */}
      <div className="sidebar-header">
        <div className="sidebar-header-col">
          <Logo />
        </div>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <hr />

      {/* sidebar-links */}
      <ul className="sidebar-links">
        <NavLinks />
      </ul>
    </aside>
  );
};
