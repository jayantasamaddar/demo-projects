import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, image: imgURL, price }));
  };

  return (
    <div className="card">
      <img className="product-image" src={imgURL} alt={name} />
      <h2 className="product-title">{name}</h2>
      <p className="product-price">$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
