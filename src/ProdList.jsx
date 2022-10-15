import React from "react";
import Product from "./Product";

function ProdList({ products }) {
  //destructring object = {}  <== putting value in this bracket

  return (
    <div className="flex flex-wrap justify-center gap-2 ">
      {products.map(function (item) {
        return (
          <div
            key={item.id}
            className="flex flex-col justify-center md:flex-row md:w-3/12"
          >
            <Product
              title={item.title}
              category={item.category}
              imgUrl={item.imgUrl}
              price={item.price}
              {...item}
            />
          </div>
        );
      })}
    </div>
  );
}
export default ProdList;
