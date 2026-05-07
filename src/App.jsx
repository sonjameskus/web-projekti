import './index.css';
import Menu from './views/Menu';
import Order from './views/Order';
import Reviews from './views/Reviews';
import UserPage from './views/UserPage';
import History from './views/History';
import Login from './views/Login';
import Logout from './views/Logout';
import Layout from './components/Layout';
import AdminPage from './views/AdminPage.jsx';
import {UserProvider} from './contexts/UserContext.jsx';
import ProtectedRoute from "./components/ProtectedRoute";

import {BrowserRouter, Routes, Route} from 'react-router';

const App = () => {
  return (
    <BrowserRouter>
    <UserProvider>
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/userpage" element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
        <Route path="/adminpage" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
        <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
