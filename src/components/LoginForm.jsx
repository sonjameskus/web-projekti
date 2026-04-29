import { useUserContext } from "../hooks/contextHooks";
import useForm from "../hooks/formHooks";

const LoginForm = () => {
  const initValues = {
    username: "",
    password: "",
  };

  const { handleLogin } = useUserContext();

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues,
  );

  async function doLogin() {
    try {
      await handleLogin(inputs);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <h1>Kirjaudu sisään</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Käyttäjätunnus </label>
          <br />
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Salasana </label>
          <br />
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <br />
        <button type="submit">Kirjaudu</button>
      </form>
    </>
  );
};

export default LoginForm;
