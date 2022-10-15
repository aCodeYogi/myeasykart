import React from "react";
import CartList from "./CartList";
import { dummyProducts } from "./dummy";

function Test() {
  return (
    <div className="h-screen max-w-5xl p-5 mx-auto bg-white">
      <CartList products={dummyProducts} cart={{ 1: 3, 2: 9, 3: 5 }} />
    </div>
  );
}

export default Test;
