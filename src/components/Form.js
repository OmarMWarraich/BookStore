import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ADDBOOK } from '../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  return (
    <div className="form-container">
      <hr />
      <form>
        <h2>ADD NEW BOOK</h2>
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
          <option value="DEFAULT">Category</option>
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
          onClick={async () => {
            await dispatch(ADDBOOK({
              id: uuidv4(),
              title: bookTitle,
              author: bookAuthor,
              category: bookCategory,
            }));
            setBookTitle('');
            setBookAuthor('');
            setBookCategory('');
            await window.location.reload();
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
