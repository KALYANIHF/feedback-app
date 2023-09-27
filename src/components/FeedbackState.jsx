import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackState() {
  const { feedback } = useContext(FeedbackContext);
  let avg = (
    feedback.reduce((sum, item) => {
      return sum + Number(item.rating);
    }, 0) / feedback.length
  ).toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarage {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}
export default FeedbackState;
