/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import postBook from '../redux/books/booksAPI/postBook';

const Form = () => {
  const [inputData, setInputData] = useState({
    item_id: '', title: '', author: '', category: '',
  });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInputData({
      ...inputData,
      item_id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    const {
      item_id, title, author, category,
    } = inputData;
    if (title && author && category) {
      dispatch(postBook({
        item_id, title, author, category,
      }));
      setInputData({
        item_id: '', title: '', author: '', category: '',
      });
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" value={inputData.title} placeholder="Title" onChange={changeHandler} required />
        <input type="text" name="author" value={inputData.author} placeholder="Author" onChange={changeHandler} required />
        <select type="text" name="category" id="category" value={inputData.category} placeholder="Category" onChange={changeHandler}>
          <option value="" disabled>Categories</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="biography">Biography</option>
        </select>
        <button type="button" onClick={addBookHandler}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
