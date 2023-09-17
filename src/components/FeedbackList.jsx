import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbackData }) {
  return feedbackData.map((item) => (
    <div className="container">
      <FeedbackItem text={item.text} rating={item.rating} />
    </div>
  ));
}

export default FeedbackList;
