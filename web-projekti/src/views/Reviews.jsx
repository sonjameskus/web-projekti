import {useState} from 'react';
import Navigation from '../components/Navigation';
import { useUserContext } from "../hooks/contextHooks";

const Reviews = () => {
  const {user} = useUserContext();
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
  });

  const doUpload = async () => {
    try {
      const token = localStorage.getItem('token');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (inputs.title.length > 0 && inputs.description.length > 0) {
      doUpload();
    }
  };

  const handleInputChange = (evt) => {
    setInputs({...inputs, [evt.target.name]: evt.target.value});
  };

  return (
    <div className="row">
      <div className="banner">
        <h1>테이블</h1>
        <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>

      <Navigation />

      <div className="column">
        <h1>Arvostelut</h1>
        <>
          {user && (
            <>
              <h2>Lisää arvostelu</h2>

              <form onSubmit={handleSubmit}>
                <label htmlFor="title">Otsikko</label>
                <br />
                <input
                  className="title"
                  name="title"
                  type="text"
                  id="title"
                  onChange={handleInputChange}
                />
                <br />

                <label htmlFor="description">Arvostelu</label>
                <br />
                <textarea
                  className="description"
                  name="description"
                  rows={5}
                  id="description"
                  onChange={handleInputChange}
                ></textarea>
                <br />
                <button type="submit">Lähetä</button>
              </form>
            </>
          )}
        </>
        <h2>Otsikko</h2>
        <p>
          {new Date().toLocaleString('fi-FI')}
          <br />
          Nimimerkki
        </p>
        <p>Arvostelu</p>
        <hr />
        <h2>Otsikko</h2>
        <p>
          {new Date().toLocaleString('fi-FI')}
          <br />
          Nimimerkki
        </p>
        <p>Arvostelu</p>
        <hr />
        <h2>Otsikko</h2>
        <p>
          {new Date().toLocaleString('fi-FI')}
          <br />
          Nimimerkki
        </p>
        <p>Arvostelu</p>
      </div>
    </div>
  );
};

export default Reviews;
