import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaXmark } from 'react-icons/fa6';
import '../styles/CommentsModal.css';

const Comments = ({ closeModal }) => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');

  return (
    <section className="comments">
      <div className="comments-head">
        <h2 className="comments-heading">Comments (0) </h2>
        <FaXmark onClick={closeModal} />
      </div>
      <form className="add-comment">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write a comment..." />
        <button type="button">Post</button>
      </form>
    </section>
  );
};

Comments.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Comments;
