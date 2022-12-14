export const ADD_BOOK = 'Bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'Bookstore/books/REMOVE_BOOK';

const initialState = [];

// Actions

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

// Reducer

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.bookId);
    default:
      return state;
  }
};

export default bookReducer;
