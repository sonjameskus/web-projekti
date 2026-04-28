import { useUser } from "../hooks/apiHooks";
import useForm from "../hooks/formHooks";

const RegisterForm = () => {
  const initValues = {
    username: "",
    password: "",
    email: "",
  };

  const { postUser, checkUser, checkEmail } = useUser();

  const {
    inputs,
    handleInputChange,
    handleSubmit,
    handleError,
    errors,
    clearErrors,
  } = useForm(doRegister, initValues);

  async function doRegister() {
    try {
      const userResult = await postUser(inputs);
      console.log(userResult);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleUserBlur = async () => {
    clearErrors();
    try {
    const checkResult = await checkUser(inputs.username);
    console.log(checkResult);
    if (!checkResult.available) {
      handleError("username", "Username not available");
    }
  } catch {
    // tyhjä
  };
  };

   const handleEmailBlur = async () => {
    clearErrors();
    try {
    const checkResult = await checkEmail(inputs.email);
    console.log(checkResult);
    if (!checkResult.available) {
      handleError("email", "Email not available");
    }
  } catch {
    // tyhjä
  };
  };

  return (
    <>
      <h1>Luo käyttäjätunnus</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeruser">Käyttäjätunnus </label>
          <br />
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            onBlur={handleUserBlur}
            autoComplete="username"
          />
        </div>
        {errors && errors.username && <p>{errors.username}</p>}
        <div>
          <label htmlFor="registerpassword">Salasana </label>
          <br />
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="registeremail">Sähköpostiosoite </label>
          <br />
          <input
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
            onBlur={handleEmailBlur}
            autoComplete="current-email"
          />
        </div>
        {errors && errors.email && <p>{errors.email}</p>}
        <br />
        <button type="submit">Rekisteröidy</button>
      </form>
    </>
  );
};

export default RegisterForm;
