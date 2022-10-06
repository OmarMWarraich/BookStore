const ADDBOOK = 'ADD_BOOK';
const REMOVEBOOK = 'REMOVE_BOOK';
export const GETBOOKS = 'bookstore/books/GETBOOKS';

export const ADD_BOOK = (book) => ({
  type: ADDBOOK,
  payload: book,
});

export const REMOVE_BOOK = (book) => ({
  type: REMOVEBOOK,
  payload: book,
});

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADDBOOK:
      return state.concat(action.payload);
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case `${GETBOOKS}/fulfilled`:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default booksReducer;
