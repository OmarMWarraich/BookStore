import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const BooksList = useSelector((state) => state.books);
  return (
    <div className="books">
      <div className="books-list">
        {BooksList.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <Form />
    </div>
  );
};
export default Books;
