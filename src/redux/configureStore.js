import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
