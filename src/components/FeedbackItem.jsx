import { FaTimes, FaEdit } from 'react-icons/fa';
import React from 'react';
import Cart from './shared/Cart';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Cart reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => {
          deleteFeedback(item.id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <button
        onClick={() => {
          editFeedback(item);
        }}
        className="edit"
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Cart>
  );
}

export default FeedbackItem;
