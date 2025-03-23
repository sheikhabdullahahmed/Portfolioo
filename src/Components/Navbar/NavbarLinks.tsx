import { navLinks } from '../../Data/utiles'
import { useAppContext } from '../../Context';

const NavLinks = () => {
  
  const { smoothScroll } = useAppContext();

  // jsx
  return (
    <>
      {navLinks.map(({ id, url, text }) => {
        return (
          <li key={id}>
            <a href={url} className="link" onClick={(e) => smoothScroll(e)}>
              {text}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
