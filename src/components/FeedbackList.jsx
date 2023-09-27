import React from 'react';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback, deleteFeedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return 'No feedback';
  }
  return (
    <>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default FeedbackList;
