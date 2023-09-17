import React from "react";

function Cart({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

export default Cart;
