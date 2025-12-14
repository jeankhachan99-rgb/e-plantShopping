import React from "react";

function CartItem({ item, onRemove }) {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
