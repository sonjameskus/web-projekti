import './index.css';
import Menu from './views/Menu';
import Order from './views/Order';
import Reviews from './views/Reviews';
import UserPage from './views/UserPage';
import History from './views/History';
import Login from './views/Login';

import {BrowserRouter, Routes, Route} from 'react-router';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
