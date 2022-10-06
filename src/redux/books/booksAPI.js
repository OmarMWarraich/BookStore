import { createAsyncThunk } from '@reduxjs/toolkit';
import { GETBOOKS } from './books';

const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4ztK4CQJwKqjbwn6wCcq/books';

/* eslint-disable-next-line import/prefer-default-export */
export const fetchBooks = createAsyncThunk(
  GETBOOKS,
  async () => {
    const response = await fetch(BaseUrl);
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
