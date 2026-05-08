import Navigation from '../components/Navigation';
import {useEffect, useState} from 'react';
import {useMenu} from '../hooks/apiHooks';

const AdminPage = () => {
  const {getMenu, addMenuItem, deleteMenuItem, updateMenuItem} = useMenu();
  const [data, setData] = useState([]);
  const [updatingMealId, setUpdatingMealId] = useState(null);

  const [inputs, setInputs] = useState({
    meal_type: '',
    meal_name: '',
    meal_content: '',
    allergens: '',
    price: '',
  });

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

  const handleInputChange = (evt) => {
    setInputs({
      ...inputs,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleAddMenuItem = async (evt) => {
    evt.preventDefault();

    try {
      const token = localStorage.getItem('token');

      await addMenuItem(inputs, token);

      const updatedMenu = await getMenu();
      setData(updatedMenu);

      setInputs({
        meal_type: '',
        meal_name: '',
        meal_content: '',
        allergens: '',
        price: '',
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteMenuItem = async (meal_id) => {
    try {
      const token = localStorage.getItem('token');

      await deleteMenuItem(meal_id, token);

      setData(data.filter((item) => item.meal_id !== meal_id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateMenuItem = async (meal_id) => {
    try {
      const token = localStorage.getItem('token');

      await updateMenuItem(meal_id, inputs, token);

      const updatedMenu = await getMenu();
      setData(updatedMenu);

      setUpdatingMealId(null);
    } catch (err) {
      console.log(err);
    }
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
        <h1>Menun hallintasivu</h1>

        <h2>Lisää Menuun uusi ruoka</h2>

        <form onSubmit={handleAddMenuItem}>
          <input
            name="meal_type"
            placeholder="Tyyppi"
            value={inputs.meal_type}
            onChange={handleInputChange}
          />
          <br />

          <input
            name="meal_name"
            placeholder="Aterian nimi"
            value={inputs.meal_name}
            onChange={handleInputChange}
          />
          <br />

          <input
            name="meal_content"
            placeholder="Aterian sisältö"
            value={inputs.meal_content}
            onChange={handleInputChange}
          />
          <br />

          <input
            name="allergens"
            placeholder="Allergeenit"
            value={inputs.allergens}
            onChange={handleInputChange}
          />
          <br />

          <input
            name="price"
            placeholder="Hinta"
            value={inputs.price}
            onChange={handleInputChange}
          />
          <br />

          <button type="submit">Lisää</button>
        </form>

        <hr />

        {data.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.meal_content}</p>
            <p>{list.allergens}</p>
            <p>{list.price} €</p>

            <button onClick={() => handleDeleteMenuItem(list.meal_id)}>
              Poista
            </button>
            <button
              onClick={() => {
                setUpdatingMealId(list.meal_id);
                setInputs({
                  meal_type: list.meal_type,
                  meal_name: list.meal_name,
                  meal_content: list.meal_content,
                  allergens: list.allergens,
                  price: list.price,
                });
              }}
            >
              Muokkaa
            </button>

            {updatingMealId === list.meal_id && (
              <div>
                <input
                  name="meal_name"
                  value={inputs.meal_name}
                  onChange={handleInputChange}
                />

                <input
                  name="meal_content"
                  value={inputs.meal_content}
                  onChange={handleInputChange}
                />

                <input
                  name="allergens"
                  value={inputs.allergens}
                  onChange={handleInputChange}
                />

                <input
                  name="price"
                  value={inputs.price}
                  onChange={handleInputChange}
                />

                <button onClick={() => handleUpdateMenuItem(list.meal_id)}>
                  Tallenna
                </button>
              </div>
            )}

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
