import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from './phones/phones';

const store = configureStore({
  reducer: {
    phones: phonesReducer,
  },
});

export default store;