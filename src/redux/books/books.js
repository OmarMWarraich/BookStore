const ADDBOOK = 'ADD_BOOK';
const REMOVEBOOK = 'REMOVE_BOOK';

export const ADD_BOOK = (book) => ({
  type: ADDBOOK,
  payload: book,
});

export const REMOVE_BOOK = (book) => ({
  type: REMOVEBOOK,
  payload: book,
});

// Language: javascript
// Path: src/redux/books/books.js
const books = [];

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADDBOOK:
      return state.concat(action.payload);
    case REMOVEBOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default booksReducer;
