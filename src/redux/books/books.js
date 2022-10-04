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
