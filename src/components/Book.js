import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { REMOVEBOOK } from '../redux/books/bookSlice';

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
          <button
            type="button"
            className="book-actions-btn"
            onClick={async () => {
              await dispatch(REMOVEBOOK(book));
              await window.location.reload();
            }}
          >
            Remove
          </button>
          <button type="button" className="book-actions-btn">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="book-progress-percentage-circle">
          <CircleLoader color="#0290ff" loading={book.completed} size={75} />
        </div>
        <div className="book-progress-percentage-text">
          <span className="percentage">
            {book.progress}
            64%
          </span>
          <span className="completion">Completed</span>
        </div>
      </div>
      <div className="book-chapter">
        <div className="book-chapter-title">CURRENT CHAPTER</div>
        <div className="book-chapter-name">Chapter 17</div>
        <button type="button" className="book-chapter-update">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.prototypes = {
  book: PropTypes.string.isRequired,
};

export default Book;
