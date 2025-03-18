
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
      <h5>SHEIKH</h5>
    </Link>
  );
};

export default Logo;
