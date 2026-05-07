import {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import {useMenu} from '../hooks/apiHooks';

const Menu = () => {
  const {getMenu} = useMenu();
  const [data, setData] = useState([]);
  const meatMeals = data.filter((item) => item.meal_type === 'meat');
  const vegeMeals = data.filter((item) => item.meal_type === 'vegan');
  const sideDish = data.filter((item) => item.meal_type === 'fish');
  const drinks = data.filter((item) => item.meal_type === 'drink');
  const alcoholDrinks = data.filter((item) => item.meal_type === 'alcohol');

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

  return (
    <div className="row">
      <div className="banner">
        <h1>테이블</h1>
        <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>

      <Navigation />

      <div className="column">
        <h1>Liharuoat</h1>
        {meatMeals.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.meal_content}</p>
            <p>{list.allergens}</p>
            <p>{list.price} €</p>
            <hr />
          </div>
        ))}
        <br />
        <h1>Kasvisruoat</h1>
        {vegeMeals.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.meal_content}</p>
            <p>{list.allergens}</p>
            <p>{list.price} €</p>
            <hr />
          </div>
        ))}
        <br />
        <h1>Lisukkeet</h1>
        {sideDish.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.meal_content}</p>
            <p>{list.allergens}</p>
            <p>{list.price} €</p>
            <hr />
          </div>
        ))}
        <br />
        <h1>Juomat</h1>
        {drinks.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.meal_content}</p>
            <p>{list.allergens}</p>
            <p>{list.price} €</p>
            <hr />
          </div>
        ))}
        <br />
        <h1>Alkoholijuomat</h1>
        {alcoholDrinks.map((list) => (
          <div key={list.meal_id}>
            <h2>{list.meal_name}</h2>
            <p>{list.meal_content}</p>
            <p>{list.allergens}</p>
            <p>{list.price} €</p>
            <hr />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Menu;
