import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { BsCart, BsCartFill } from 'react-icons/bs';
import './Cart.css';
import CartItems from './CartItems';
const Cart = () => {
  const {
    cartQuantity: quantity,
    showCart,
    cartTotal,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartIconRef = useRef();

  useEffect(() => {
    const handler = ({ target }) => {
      if (target.closest('.cartIcon') === cartIconRef.current) {
        // toggle slider
        dispatch(cartActions.showCart());
      } else if (showCart && target.closest('.cartItem')) {
        dispatch(cartActions.showCart(true));
      } else dispatch(cartActions.showCart(false));
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [dispatch, showCart]);

  /* onKeyup Escape Dropdown */
  useEffect(() => {
    if (showCart) {
      const handler = ({ key }) => {
        if (key === 'Escape') dispatch(cartActions.showCart(false)); //Alternative: keyCode === 27 is same as key === 'Escape'
      };
      document.addEventListener('keyup', handler);
      return () => document.removeEventListener('keyup', handler);
    }
    return;
  }, [dispatch, showCart]);

  return (
    <div className="cartIcon-container">
      <div className="cartIcon" ref={cartIconRef}>
        {quantity ? <BsCartFill size="1.4em" /> : <BsCart size="1.4em" />}
        <div className={`cartCounter ${!quantity && 'hidden'}`}>{quantity}</div>
      </div>
      {showCart && (
        <div className="cartSlider">
          <CartItems className="cartSliderItems" />
          {cartTotal > 0 && (
            <div
              className="cartSliderTotal"
              style={{ borderTop: '0.01em dotted black' }}
            >
              <h3 style={{ textAlign: 'right' }}>
                Total:
                <span style={{ paddingLeft: '1.5em', paddingRight: '1.5em' }}>
                  ${cartTotal.toFixed(2)}
                </span>
              </h3>
              <button className="orderBtn" style={{ width: '100%' }}>
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
