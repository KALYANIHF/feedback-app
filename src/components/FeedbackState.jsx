import React from "react";
import PropTypes from "prop-types";

function FeedbackState({ feedback }) {
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
FeedbackState.propTypes = {
  feedback: PropTypes.array.isRequired
};
export default FeedbackState;
