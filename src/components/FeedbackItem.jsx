import { FaTimes } from "react-icons/fa";
import React from "react";
import Cart from "./shared/Cart";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Cart reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Cart>
  );
}

export default FeedbackItem;
