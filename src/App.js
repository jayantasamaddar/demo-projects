import { useSelector } from 'react-redux';
import { Auth, Layout } from './components';
import './App.css';

export default function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}
