import Navigation from '../components/Navigation';
import {Link} from 'react-router';
import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      const userResponse = await getUserByToken(token);
      setUser(userResponse);
    };

    getUser();
  }, []);

  return (
    <>
      {user && (
        <>
          <div className="row">
            <div className="banner">
              <h1>테이블</h1> <p>Teibeul</p>
              <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
            </div>
            <Navigation />
            <div className="column">
              <p>Käyttäjätunnus: {user.username}</p>
              <hr />
              <p>Sähköpostiosoite: {user.email}</p>
              <hr />
              <p>Osoitteet: </p>
              <hr />
              <p>Arvostelut: </p>
              <hr />
              <Link to="/history">Tilaushistoria</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserPage;
