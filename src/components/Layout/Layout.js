import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Products from '../Products/Products';
import CartItems from '../Cart/CartItems';
import './Layout.css';
const Layout = () => {
  const { cartTotal, showCart } = useSelector((state) => state.cart);

  return (
    <div className="layout">
      <Header />
      <Products />
      <CartItems />
      {cartTotal > 0 && !showCart && (
        <div className="cart-total">
          <div className="total-price">
            <h3>Total: ${cartTotal}</h3>
            <button className="orderBtn">Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
