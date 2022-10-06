import { createAsyncThunk } from '@reduxjs/toolkit';
import { GETBOOKS, ADDBOOK, REMOVEBOOK } from './books';

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

/* eslint-disable-next-line import/prefer-default-export */
export const addBook = createAsyncThunk(
  ADDBOOK,
  async (book) => {
    const response = await fetch(BaseUrl, {
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
    return data;
  },
);

/* eslint-disable-next-line import/prefer-default-export */
export const removeBook = createAsyncThunk(
  REMOVEBOOK,
  async (book) => {
    const response = await fetch(`${BaseUrl}/${book.id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: book.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  },
);
