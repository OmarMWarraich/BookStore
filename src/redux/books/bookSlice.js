import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetched, added, deleted } from './api';

const initialState = [];

export const GETBOOKS = createAsyncThunk(
  'books/getBooks',
  async (books) => {
    const response = await fetched(books);
    return response;
  },
);

export const ADDBOOK = createAsyncThunk(
  'books/addBook',
  async (books) => {
    await added(books);
  },
);

export const REMOVEBOOK = createAsyncThunk(
  'books/removeBook',
  async (books) => {
    await deleted(books);
  },
);

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    display: (state) => state,
    increment: (state, action) => {
      /* eslint-disable-next-line no-param-reassign */
      state += action.payload;
    },
    decrement: (state, action) => {
      /* eslint-disable-next-line no-param-reassign */
      state -= action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GETBOOKS.fulfilled, (s, action) => {
        let state = [...s];
        state = action.payload;
        return state;
      })
      .addCase(ADDBOOK.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(REMOVEBOOK.fulfilled, (state, action) => {
        state.filter((book) => book.id !== action.payload.id);
      });
  },
});

export const { display, increment, decrement } = bookSlice.actions;

export default bookSlice.reducer;
