import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ADD_BOOK } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  return (
    <form>
      <h2>Add new book</h2>
      <input
        id="book-title"
        type="text"
        value={bookTitle}
        placeholder="Title"
        onInput={(e) => {
          setBookTitle(e.target.value);
        }}
      />
      <input
        id="book-author"
        type="text"
        value={bookAuthor}
        placeholder="Author"
        onInput={(e) => {
          setBookAuthor(e.target.value);
        }}
      />
      <button
        id="add-book"
        type="button"
        onClick={() => {
          dispatch(ADD_BOOK({
            id: uuidv4(),
            title: bookTitle,
            author: bookAuthor,
          }));
          setBookTitle('');
          setBookAuthor('');
        }}
      >
        Add Book
      </button>
    </form>
  );
};

export default Form;
