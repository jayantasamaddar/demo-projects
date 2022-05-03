import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartTotal: 0,
    cartQuantity: 0,
    showCart: false,
  },
  reducers: {
    /**
     * Adds an item to the cart
     * Removes an item from the cart
     * Clears cart completely
     */

    addToCart(state, action) {
      const { id, name, image, quantity, price } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity += quantity || 1;
        item.price = price;
        item.total = item.quantity * item.price;
      } else {
        state.cartItems.push({
          id,
          name,
          image,
          quantity: quantity || 1,
          price,
          total: price,
        });
      }
      state.cartQuantity++;
      state.cartTotal += price * (quantity || 1);
    },
    removeFromCart(state, { payload: id }) {
      const item = state.cartItems.find((cartItem) => cartItem.id === id);
      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== id
        );
      } else {
        item.quantity--;
        item.total -= item.price;
      }
      state.cartQuantity--;
      state.cartTotal -= item.price;
    },
    removeItemFromCart(state, { payload: id }) {
      const item = state.cartItems.find((cartItem) => cartItem.id === id);
      if (item) state.cartQuantity -= item.quantity;
      state.cartTotal -= item.total;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== id
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
    showCart(state, { payload }) {
      if (typeof payload === 'boolean') state.showCart = payload;
      else state.showCart = state.cartItems.length > 0 && !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
