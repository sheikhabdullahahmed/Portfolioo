import ToggleTheme from '../ToggleTheme/Toggle';
import { useAppContext } from '../../Context';
import Logo from '../Logo/Logo';

export const NavForPages = () => {
  const { scrolled} = useAppContext();

  // jsx
  return (
    <nav className={`${scrolled ? 'nav-fixed nav-2' : 'nav-2'}`}>
      <div className="nav-center">
        <Logo />
        <div></div>
        <ToggleTheme />
      </div>
    </nav>
  );
};
