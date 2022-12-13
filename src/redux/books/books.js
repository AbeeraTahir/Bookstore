const ADD_BOOK = 'Bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookstore/books/REMOVE_BOOK';

const initialState = [{
  id: 1,
  title: 'Clean Code',
  author: 'Robert Martin',
},
{
  id: 2,
  title: 'Refactoring',
  author: 'Kent Beck',
},
];

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
      return [...state, { ...action.book, id: new Date().getTime().toString() }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.bookId);
    default:
      return state;
  }
};

export default bookReducer;
