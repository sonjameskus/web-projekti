import {useState} from 'react';
import Navigation from '../components/Navigation';

const Order = () => {
  const [menu, setMenu] = useState([
    {id: 1, name: 'Bibimbap', price: 12, allergens: ['gluten']},
    {id: 2, name: 'Kimchi stew', price: 10, allergens: []},
  ]);
  const [openItemId, setOpenItemId] = useState(null);
;

  const [inputs, setInputs] = useState({
    description: '',
  });

  const handleInputChange = (evt) => {
    setInputs({...inputs, [evt.target.name]: evt.target.value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setOpenItemId(false);
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
        <h2>Menu</h2>

        {menu.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}€</p>

            <button
              onClick={() =>
                setOpenItemId(openItemId === item.id ? null : item.id)
              }
            >
              Lisää koriin
            </button>

            {openItemId === item.id && (
              <div className="inline-modal">
                <h4>{item.name}</h4>

                <form onSubmit={handleSubmit}>
                  <label>Lisätiedot (esim. allergiat yms):</label>
                  <br />
                  <textarea
                    name="description"
                    rows={4}
                    onChange={handleInputChange}
                  />
                  <br />

                  <button type="submit" onClick={() => setOpenItemId(false)}>
                    Lisää koriin
                  </button>
                </form>

                <button onClick={() => setOpenItemId(false)}>Sulje</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
