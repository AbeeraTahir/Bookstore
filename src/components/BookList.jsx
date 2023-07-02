import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import deleteBook from '../redux/books/booksAPI/deleteBook';
import Book from './Book';
import Comments from './Comments';
import '../styles/Books.css';

// style for comments modal
const commentModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '40%',
    height: '80%',
    transform: 'translate(-50%, -50%)',
  },
};

const BookList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book.item_id}>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={commentModal}>
            <Comments closeModal={closeModal} />
          </Modal>
          <div className="book-details">
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
            />
            <div className="action-buttons">
              <button className="btn" type="button" onClick={() => setModalIsOpen(true)}>Comments</button>
              <div className="divider" />
              <button className="btn" type="button" onClick={() => dispatch(deleteBook(book.item_id))}>Remove</button>
              <div className="divider" />
              <button className="btn" type="button">Edit</button>
            </div>
          </div>
          <div className="progress">
            <div className="progress-circle" />
            <div className="percentage">
              <p className="percent">
                75%
              </p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="column-divider" />
          <div className="chapter">
            <div className="chapter-info">
              <p className="cur-chapter">CURRENT CHAPTER</p>
              <p className="chapter-num">
                Chapter
                {' '}
                {Math.floor(Math.random() * 101)}
              </p>
            </div>
            <button type="button" className="progress-btn">UPDATE PROGRESS</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
