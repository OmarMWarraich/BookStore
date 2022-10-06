import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksAPI';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="book-info">
        <div className="book-category">{book.category}</div>
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
        <div className="book-actions">
          <button type="button" className="book-actions-btn">Comments</button>
          <button type="button" className="book-actions-btn" onClick={() => { dispatch(removeBook(book)); }}>Remove</button>
          <button type="button" className="book-actions-btn">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="book-progress-percentage-circle" />
        <div className="book-progress-percentage-text">
          <span>
            {book.progress}
            %
          </span>
          <span>Completed</span>
        </div>
      </div>
      <div className="book-chapter">
        <div className="book-chapter-title">CURRENT CHAPTER</div>
        <div className="book-chapter-name">{book.chapter}</div>
        <button type="button" className="book-chapter-update">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.prototypes = {
  book: PropTypes.string.isRequired,
};

export default Book;
