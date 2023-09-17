import React from "react";
import Cart from "./shared/Cart";

function FeedbackItem({ text, rating }) {
  return (
    <Cart reverse={true}>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Cart>
  );
}

export default FeedbackItem;
