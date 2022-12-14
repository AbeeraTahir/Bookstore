import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <Book
              item_id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
            <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
