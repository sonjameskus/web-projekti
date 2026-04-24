import {Link} from 'react-router';
import '../index.css';

const Navigation = () => {
  return (
    <nav className="navipalkki">
      <Link to="/">Menu</Link>
      <Link to="/order">Tilaa ruokaa kotiin</Link>
      <Link to="/reviews">Arvostelut</Link>
      <Link to="/userpage">Omat tiedot</Link>
      <Link to="/login">Kirjaudu sisään</Link>
    </nav>
  );
};

export default Navigation;
