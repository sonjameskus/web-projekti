import Navigation from '../components/Navigation';
import {useOrderHistory} from '../hooks/apiHooks';
import { useEffect, useState } from "react";


const History = () => {
const {getOrderHistory} = useOrderHistory();
const [data, setData] = useState([]);
const token = localStorage.getItem('token');

useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await getOrderHistory(token);
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHistory();
  }, []);


  return (
    <div className="row">
      <div className="banner">
        <h1>테이블</h1> <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>

      <Navigation />

      <div className="column">
        <p>
          Tilaushistoria: </p>
          <hr />
          {data.map((order) => (
          <div key={order.history_id}>
            <h2>{new Date(order.created_at).toLocaleString('fi-FI')}</h2>
            <p>{order.order_content}</p>
            <hr />
            </div>
            ))}

      </div>
    </div>
  );
};

export default History;
