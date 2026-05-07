import Navigation from '../components/Navigation';
import {Link} from 'react-router';
import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';
import {useAddresses} from '../hooks/apiHooks';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();
  const [address, setAddress] = useState([]);
  const [addressInput, setAddressInput] = useState('');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const {getAddress, addAddress} = useAddresses();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      const userResponse = await getUserByToken(token);
      setUser(userResponse);
    };

    getUser();
  }, []);

  useEffect(() => {
    const getUserAddress = async () => {
      const token = localStorage.getItem('token');
      const addressResponse = await getAddress(token);
      setAddress(addressResponse);
    };

    getUserAddress();
  }, []);

  const handleAddAddress = async (evt) => {
    evt.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await addAddress(addressInput, token);

      const updatedAddresses = await getAddress(token);
      setAddress(updatedAddresses);
      setAddressInput('');
      setShowAddressForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {user && (
        <>
          <div className="row">
            <div className="banner">
              <h1>테이블</h1> <p>Teibeul</p>
              <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
            </div>
            <Navigation />
            <div className="column">
              <p>Käyttäjätunnus: {user.username}</p>
              <hr />
              <p>Sähköpostiosoite: {user.email}</p>
              <hr />
              <p>Osoitteet: </p>
              {address &&
                address.map((item) => (
                  <div key={item.address_id}>
                    <p>{item.address}</p>
                  </div>
                ))}


              <button onClick={() => setShowAddressForm(!showAddressForm)}>
                Lisää osoite
              </button>

              {showAddressForm && (
                <form onSubmit={handleAddAddress}>
                  <input
                    type="text"
                    placeholder="Kirjoita osoite"
                    value={addressInput}
                    onChange={(e) => setAddressInput(e.target.value)}
                  />
                  <button type="submit">Tallenna</button>
                </form>
              )}


              <hr />
              <Link to="/history">Tilaushistoria</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserPage;
