import Navigation from "../components/Navigation";
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [mode, setMode] = useState('login');
  
  return (
     <div className="row">
      <div className="banner">
        <h1>테이블</h1>
        <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>
      <Navigation />
      <div className="column">
        <section className="auth-view">
      <div className="auth-backdrop" aria-hidden="true" />
      <div className="auth-wrapper">
        <div className="auth-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={mode === 'login'}
            className={`auth-tab${mode === 'login' ? ' auth-tab--active' : ''}`}
            onClick={() => setMode('login')}
          >
            Kirjaudu sisään
          </button>
          <button
            role="tab"
            aria-selected={mode === 'register'}
            className={`auth-tab${mode === 'register' ? ' auth-tab--active' : ''}`}
            onClick={() => setMode('register')}
          >
            Luo käyttäjätunnus
          </button>
        </div>
        {mode === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </section>
      </div>
    </div>
  )
}

export default Login;

