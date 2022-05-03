import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';
const CartItems = ({ className }) => {
  const { cartItems, cartQuantity } = useSelector((state) => state.cart);
  return (
    <div className={`cart-container ${className || ''}`}>
      <div className="cart-titleBar">
        <h2>Your Cart</h2>
        {cartItems.length > 0 && (
          <h3>
            ({cartItems.length} {`${cartItems.length === 1 ? 'Item' : 'Items'}`}
            )
          </h3>
        )}
      </div>
      <div className={`cart-empty${cartQuantity > 0 ? ' hidden' : ''}`}>
        Cart is Empty
      </div>

      <ul>
        {cartItems.map(({ id, name, image, quantity, price, total }) => {
          return (
            <li key={id}>
              <CartItem
                id={id}
                name={name}
                image={image}
                quantity={quantity}
                price={price}
                total={total}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
