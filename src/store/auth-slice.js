const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: false
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.user = null;
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice;
