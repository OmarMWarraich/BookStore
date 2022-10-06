import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksAPI';

const Form = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');

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
      <select
        id="book-category"
        value={bookCategory}
        onChange={(e) => {
          setBookCategory(e.target.value);
        }}
      >
        <option value="DEFAULT">--select an option--</option>
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>

      <button
        id="add-book"
        type="button"
        onClick={() => {
          dispatch(addBook({
            id: uuidv4(),
            title: bookTitle,
            author: bookAuthor,
            category: bookCategory,
          }));
          setBookTitle('');
          setBookAuthor('');
          setBookCategory('');
        }}
      >
        Add Book
      </button>
    </form>
  );
};

export default Form;
