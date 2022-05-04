import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: [],
  devTools: true,
  enhancers: [],
});

export default function ContextProvider ({ children }) {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
