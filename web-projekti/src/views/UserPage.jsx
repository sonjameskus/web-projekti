import Navigation from "../components/Navigation";
import {Link} from 'react-router';

const UserPage = () => {
  return (
    <div className="row">
      <div className="banner"><h1>테이블</h1> <p>Teibeul</p>
      <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
  </div>
      <Navigation />
      <div className="column">
       <p>Käyttäjätunnus:
        <hr />
        Osoitteet:
        <hr />
        Arvostelut:
        <hr />
        <Link to="/history">Tilaushistoria</Link>
       </p>
      </div>
    </div>
  )
}

export default UserPage;
