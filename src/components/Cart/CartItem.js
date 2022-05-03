import React from 'react';
import { useDispatch } from 'react-redux';
import './Cart.css';
import { cartActions } from '../../store/cart-slice';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

const CartItem = ({ id, name, image, quantity, price }) => {
  const dispatch = useDispatch();
  const removeItem = () => dispatch(cartActions.removeItemFromCart(id));
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        image,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <div className="cartItemCard">
        <div className="cartItemImage">
          <img src={image} alt={name} />
        </div>
        <div className="cartItemDetails">
          <h3 className="cartItemName">{name}</h3>
          <p className="cartItemPrice">${price}</p>
          <button className="cartItemRemove" onClick={removeItem}>
            Remove
          </button>
        </div>
      </div>

      <div className="cartItemQuantity">
        <div className="cartItemQuantityButton" onClick={addHandler}>
          <RiArrowUpSFill />
        </div>
        <div className="cartItemQuantityCounter">
          <span>{quantity}</span>
        </div>
        <div className="cartItemQuantityButton" onClick={removeHandler}>
          <RiArrowDownSFill />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
