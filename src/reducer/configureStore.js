import { configureStore } from '@reduxjs/toolkit';
import brandsReducer from './brands/brands';
import phonesReducer from './phones/phones';

const store = configureStore({
  reducer: {
    brands: brandsReducer,
    phones: phonesReducer,
  },
});

export default store;