import {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import {useMenu} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const Order = () => {
  const {getMenu} = useMenu();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [openId, setOpenId] = useState(null);

  const [cart, setCart] = useState([]);
  const [inputs, setInputs] = useState({});
  const [confirmOpen, setConfirmOpen] = useState(false);

  const meatMeals = data.filter((item) => item.meal_type === 'meat');
  const vegeMeals = data.filter((item) => item.meal_type === 'vegan');
  const sideDish = data.filter((item) => item.meal_type === 'fish');
  const drinks = data.filter((item) => item.meal_type === 'drink');

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

  const handleInputChange = (mealId, value) => {
    setInputs((prev) => ({
      ...prev,
      [mealId]: value,
    }));
  };

  const addToCart = (item) => {
    setCart((prev) => [
      ...prev,
      {
        ...item,
        description: inputs[item.meal_id] || '',
      },
    ]);

    setOpenId(null);
    setConfirmOpen(true);
  };

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="row">
      <div className="banner">
        <h1>테이블</h1>
        <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>

      <Navigation />

      <div className="column">
        <h1>Tilaa</h1>

        <button onClick={() => navigate('/checkout')}>
          🛒 ({cart.length})
        </button>
        <h1>Liharuoat</h1>
        {meatMeals.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.price} €</p>

            <button onClick={() => setOpenId(list.meal_id)}>&#128722;</button>

            {openId === list.meal_id && (
              <div className="inline-modal">
                <h4>
                  {list.meal_name} {list.price} €
                </h4>
                <p>{list.meal_content}</p>
                <p>{list.allergens}</p>

                <textarea
                  className="description"
                  rows={4}
                  placeholder="Lisätiedot (allergiat yms)"
                  value={inputs[list.meal_id] || ''}
                  onChange={(e) =>
                    handleInputChange(list.meal_id, e.target.value)
                  }
                />
                <br />
                <button onClick={() => addToCart(list)}>Tilaa</button>
              </div>
            )}
            <hr />
          </div>
        ))}
        <br />

        <h1>Kasvisruoat</h1>
        {vegeMeals.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.price} €</p>

            <button onClick={() => setOpenId(list.meal_id)}>&#128722;</button>

            {openId === list.meal_id && (
              <div className="inline-modal">
                <h4>
                  {list.meal_name} {list.price} €
                </h4>
                <p>{list.meal_content}</p>
                <p>{list.allergens}</p>

                <textarea
                  className="description"
                  rows={4}
                  placeholder="Lisätiedot (allergiat yms)"
                  value={inputs[list.meal_id] || ''}
                  onChange={(e) =>
                    handleInputChange(list.meal_id, e.target.value)
                  }
                />
                <br />
                <button onClick={() => addToCart(list)}>Tilaa</button>
              </div>
            )}
            <hr />
          </div>
        ))}
        <br />

        <h1>Lisukkeet</h1>
        {sideDish.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.price} €</p>

            <button onClick={() => setOpenId(list.meal_id)}>&#128722;</button>

            {openId === list.meal_id && (
              <div className="inline-modal">
                <h4>
                  {list.meal_name} {list.price} €
                </h4>
                <p>{list.meal_content}</p>
                <p>{list.allergens}</p>

                <textarea
                  className="description"
                  rows={4}
                  placeholder="Lisätiedot (allergiat yms)"
                  value={inputs[list.meal_id] || ''}
                  onChange={(e) =>
                    handleInputChange(list.meal_id, e.target.value)
                  }
                />
                <br />
                <button onClick={() => addToCart(list)}>Tilaa</button>
              </div>
            )}
            <hr />
          </div>
        ))}
        <br />
         <h1>Juomat</h1>
        {drinks.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.price} €</p>

            <button onClick={() => setOpenId(list.meal_id)}>&#128722;</button>

            {openId === list.meal_id && (
              <div className="inline-modal">
                <h4>
                  {list.meal_name} {list.price} €
                </h4>
                <p>{list.meal_content}</p>
                <p>{list.allergens}</p>

                <textarea
                  className="description"
                  rows={4}
                  placeholder="Lisätiedot (allergiat yms)"
                  value={inputs[list.meal_id] || ''}
                  onChange={(e) =>
                    handleInputChange(list.meal_id, e.target.value)
                  }
                />
                <br />
                <button onClick={() => addToCart(list)}>Tilaa</button>
              </div>
            )}
            <hr />
          </div>
        ))}

        {confirmOpen && (
          <div className="modal">
            <h3>Lisätty koriin</h3>
            <p>Haluatko jatkaa ostoksia vai mennä ostoskoriin?</p>

            <button onClick={() => setConfirmOpen(false)}>
              Jatka ostoksia
            </button>
            <button
              onClick={() => {
                setConfirmOpen(false);
                navigate('/checkout');
              }}
            >
              Mene ostoskoriin
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
