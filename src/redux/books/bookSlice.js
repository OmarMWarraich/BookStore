import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4ztK4CQJwKqjbwn6wCcq/books');
    const data = await response.json();
    const books = Object.keys(data).map((key) => ({
      id: key,
      title: data[key][0].title,
      author: data[key][0].author,
      category: data[key][0].category,
    }));
    return books;
  },
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (book) => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4ztK4CQJwKqjbwn6wCcq/books', {
      method: 'POST',
      body: JSON.stringify({
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: book.category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    const books = Object.keys(data).map((key) => ({
      id: key,
      title: data[key][0].title,
      author: data[key][0].author,
      category: data[key][0].category,
    }));
    return books;
  },
);

export const removeABook = createAsyncThunk(
  'books/removeABook',
  async (book) => {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4ztK4CQJwKqjbwn6wCcq/books/${book.id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: book.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    const books = Object.keys(data).map((key) => ({
      id: key,
      title: data[key][0].title,
      author: data[key][0].author,
      category: data[key][0].category,
    }));
    return books;
  },
);

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      state.filter((book) => book.id !== action.payload.id);
    },
    getBooks: (state, action) => {
      state.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.push(...action.payload);
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeABook.fulfilled, (state, action) => {
        state.filter((book) => book.id !== action.payload.id);
      });
  },
});

export const { addBook, removeBook, getBooks } = bookSlice.actions;

export default bookSlice.reducer;
