import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { FaXmark } from 'react-icons/fa6';
import deleteBook from '../redux/books/booksAPI/deleteBook';
import Book from './Book';
import '../styles/Books.css';

const commentModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '40%',
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
            <h2>Custom Modal</h2>
            <p>this is a custom modal</p>
            <FaXmark onClick={closeModal} />
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
