import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksAPI';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
