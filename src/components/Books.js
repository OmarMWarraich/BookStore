import React, { useState } from 'react';
// import Book from './Book';
import Form from './Form';

const Books = () => {

  return (
    <div className="books">
      <div className="books-list">
        {/* {booksList.map((book) => (
          <Book key={book.id} book={book} handleBookRemove={handleBookRemove} />
        ))} */}
      </div>
      <Form />
    </div>
  );
};

export default Books;
