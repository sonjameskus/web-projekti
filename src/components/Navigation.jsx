import {Link} from 'react-router';
import '../index.css';
import ThemeToggle from '../components/ThemeToggle';
import {useUserContext} from '../hooks/contextHooks';

const Navigation = () => {
  const {user} = useUserContext();
  return (
    <nav className="navipalkki">
      <Link to="/">Menu</Link>
      <Link to="/order">Tilaa ruokaa kotiin</Link>
      <Link to="/reviews">Arvostelut</Link>
      {user && user.username == "restaurant_manager" &&
      <>
      <Link to="/adminpage">Hallintasivu</Link>
      </>}
      {user &&
      <>
      <Link to="/userpage">Omat tiedot</Link>
      <Link to="/logout">Kirjaudu ulos</Link>
      </>}
     
      <ThemeToggle />
      {!user && <Link to="/login">Kirjaudu sisään</Link>}
    </nav>
  );
};

export default Navigation;
