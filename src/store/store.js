// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import electricalReducer from './electricalSlice';

export const store = configureStore({
  reducer: {
    electrical: electricalReducer,
  },
});

export default store;