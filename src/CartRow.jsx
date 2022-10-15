import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";

function CartRow({ product, quantity, onQuantityChange, onRemove }) {
  function handleChange(event) {
    onQuantityChange(product.id, +event.target.value);
  }

  function handleCrossClick() {
    onRemove(product.id);
  }

  function handleMouseEnter() {
    console.log("handleMouseEnter called");
  }

  return (
    <div className="flex flex-row items-center px-4 py-2 space-x-4 border border-gray-300">
      <span className="flex items-center w-10 h-10">
        <ImCross onClick={handleCrossClick} onMouseEnter={handleMouseEnter} />
      </span>
      <div className="w-10 h-10">
        <img className="object-cover w-full h-full" src={product.thumbnail} />
      </div>
      <h3 className="grow">{product.title}</h3>
      <span className="w-20">${product.price}</span>
      <div className="w-32">
        <input
          type="number"
          className="w-12 p-1 mx-2 border border-gray-300 rounded-md"
          value={quantity}
          onChange={handleChange}
        />
      </div>
      <span className="w-20">${product.price * quantity}</span>
    </div>
  );
}

export default CartRow;
