export const ADDBOOK = 'bookstore/books/ADD_BOOK';
export const REMOVEBOOK = 'bookstore/books/REMOVE_BOOK';
export const GETBOOKS = 'bookstore/books/GETBOOKS';

export const ADD_BOOK = (id, title, author, category) => ({
  type: ADDBOOK,
  id,
  title,
  author,
  category,
});

export const REMOVE_BOOK = (book) => ({
  type: REMOVEBOOK,
  payload: book,
});

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case `${ADDBOOK}/fulfilled`:
      return state.concat(action.payload);
    case `${REMOVEBOOK}/fulfilled`:
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
