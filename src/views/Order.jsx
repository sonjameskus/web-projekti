import {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import {useMenu} from '../hooks/apiHooks';

const Order = () => {
  const {getMenu} = useMenu();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await getMenu();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMenu();
  }, []);

  const [openListId, setOpenListId] = useState(null);
  const [inputs, setInputs] = useState({
    description: '',
  });

  const handleInputChange = (evt) => {
    setInputs({...inputs, [evt.target.name]: evt.target.value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setOpenListId(false);
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

        {data.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.price} €</p>
            <button
              onClick={() =>
                setOpenListId(openListId === list.meal_id ? null : list.meal_id)
              }
            >
              Lisää koriin
            </button>
            {openListId === list.meal_id && (
              <div className="inline-modal">
                <h4>{list.meal_name} {list.price} €</h4>
                <p>{list.meal_content}</p>
                <p>{list.allergens}</p>
                <form onSubmit={handleSubmit}>
                  <label>Lisätiedot (esim. allergiat yms):</label>
                  <br />
                  <textarea
                    className="description"
                    rows={4}
                    onChange={handleInputChange}
                  />
                  <br />

                  <button type="submit" onClick={() => setOpenListId(false)}>
                    Tilaa
                  </button>
                </form>
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
