import { combineReducers, configureStore } from '@reduxjs/toolkit';

import bookReducer from './books/bookSlice';

// import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  // categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
