import { Link } from "react-router";
import Navigation from "../components/Navigation";

const Login = () => {
  return (
     <div className="row">
      <div className="banner">
        <h1>테이블</h1>
        <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>
      <Navigation />
      <div className="column">
        <form action="userpage.html">
          <label for="login"> Kirjaudu sisään </label>
          <br />
          <br />
          <label for="Username">Käyttäjätunnus:</label><br />
          <input type="text" id="user_name" name="username" required /><br />
          <label for="pw">Salasana:</label><br />
          <input
            type="password"
            id="passwd"
            name="password"
            required/>
            <br /><br />
          <Link to="/userpage">
            <button type="button" class="hakuBtn">Kirjaudu</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Login;
