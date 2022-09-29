import React, { useState } from 'react';
import Book from './Book';
import Form from './Form';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    author: 'Suzanne Collins',
    progress: 64,
    chapter: 'Chapter 17',
  },
  {
    id: 2,
    title: 'Dune',
    genres: ['Sci-Fi', 'Fantasy'],
    author: 'Frank Herbert',
    progress: 8,
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    genres: ['Economics', 'Non-Fiction'],
    author: 'Suzanne Collins',
    progress: 0,
    chapter: 'Introduction',
  },
];

const Books = () => {
  const [booksList, setBooksList] = useState(books);

  const handleBookRemove = (book) => {
    setBooksList(booksList.filter((b) => b.id !== book.id));
  };

  const handleBookAdd = (book) => {
    setBooksList([...booksList, book]);
  };

  return (
    <div className="books">
      <div className="books-list">
        {booksList.map((book) => (
          <Book key={book.id} book={book} handleBookRemove={handleBookRemove} />
        ))}
      </div>
      <Form handleBookAdd={handleBookAdd} />
    </div>
  );
};

export default Books;
