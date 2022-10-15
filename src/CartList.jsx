import { template } from "lodash";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import CartRow from "./CartRow";
import Loading from "./Loading";
import { withCart } from "./withProvider";

function CartList({ cart, updateCart }) {
  const [quantityMap, setQuantityMap] = useState();

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

  useEffect(
    function () {
      setQuantityMap(cartToQuantityMap());
    },
    [cart]
  );

  function handleQuanityChange(productId, newValue) {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  }

  function handeUpdateCartClick() {
    updateCart(quantityMap);
  }

  function handleRemove(productId) {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  }

  return (
    <div>
      <div className="flex px-4 py-2 space-x-4 bg-gray-100 border border-gray-300">
        <span className="ml-28 grow">Product</span>
        <span className="w-20">Price</span>
        <span className="w-32">Quantity</span>
        <span className="w-20">Subtotal</span>
      </div>
      {cart.map((cartItem) => (
        <CartRow
          key={cartItem.product.id}
          product={cartItem.product}
          quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
          onQuantityChange={handleQuanityChange}
          onRemove={handleRemove}
        />
      ))}
      <div className="flex justify-end px-4 py-2 border border-gray-300">
        <Button onClick={handeUpdateCartClick}>Update Cart</Button>
      </div>
    </div>
  );
}

export default withCart(CartList);
