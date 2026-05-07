import {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import {useNavigate} from 'react-router';
import {useUser} from '../hooks/apiHooks';
const Checkout = () => {
  const navigate = useNavigate();
  const {getUserByToken} = useUser();

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const res = await getUserByToken(token);
        console.log('ADDRESS RESPONSE:', res);
        setUser(res.user);
        setAddresses(res.addresses);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  const handleOrder = async () => {
    const token = localStorage.getItem('token');

    const order_content = cart
      .map((item) => `${item.meal_name} (${item.description || ''})`)
      .join(', ');

    if (name.length > 3 && address.length > 5 && cart.length > 0) {
      try {
        await fetch(import.meta.env.VITE_API_URL + '/restaurant/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            order_content,
          }),
        });

        sessionStorage.removeItem('cart');

        navigate('/thankyou');
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Nimi/osoite puuttuu tai kori on tyhjä.');
    }
  };

  return (
    <div className="row">
      <div className="banner">
        <h1>테이블</h1> <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>
      <Navigation />
      <div className="column">
        <h2>Tilauksen yhteenveto</h2>

        {cart.length === 0 && <p>Kori on tyhjä</p>}

        {cart.map((item, i) => (
          <div key={i}>
            <h4>{item.meal_name}</h4>
            <p>{item.price} €</p>
            <hr />
          </div>
        ))}

        <h3>Toimitustiedot</h3>

        <input
          placeholder="Nimi"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        {addresses.length > 0 ? (
  <>
    <select className="dropdown"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
    >
      <option value="">Valitse osoite</option>

      {addresses.map((item) => (
        <option key={item.address_id} value={item.address}>
          {item.address}
        </option>
      ))}
    </select>
  </>
) : (
  <>
    <input
      placeholder="Osoite"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
    />
  </>
)}
<br />
<br />

        <textarea
          className="description"
          rows={4}
          placeholder="Lisätiedot kuljettajalle (ovikoodi, mihin voi parkkeerata tms)"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
        <br />
        <button onClick={handleOrder}>Tilaa ({cart.length})</button>
      </div>
    </div>
  );
};

export default Checkout;
