const { configureStore, createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    isLoading: false,
  },
  reducers: {
    /**
     * Sets the user to the state
     * login() - Sets the isLoggedIn to true
     * logout() - Sets the isLoggedIn to false
     * Sets the isLoading to false
     */
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
