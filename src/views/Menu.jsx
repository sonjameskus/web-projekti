import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useMenu } from "../hooks/apiHooks";

const Menu = () => {
  const { getMenu } = useMenu();
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

  return (
    <div className="row">
      <div className="banner">
        <h1>테이블</h1>
        <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>

      <Navigation />

      <div className="column">
        {data.map((list) => (
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
