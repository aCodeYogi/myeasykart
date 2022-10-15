//product detail page

import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import Err404 from "./Err404";
import Button from "./Button";
import { withCart } from "./withProvider";

function ProdDetail({ addToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  //[] empty array => refersh code once only

  useEffect(
    function () {
      const pr = getProductData(id);

      pr.then(function (response) {
        setProduct(response);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleInputInitial() {
    setCount(1);
    setLoading(true);
  }

  function handleValue(event) {
    setCount(+event.target.value);
  }

  function onButtonClick() {
    addToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <Err404 />;
  }

  // product ? : (<Loading />)

  return (
    <div className="grow">
      <Link to="/" onClick={handleInputInitial}>
        {" "}
        <IoArrowBackCircleOutline className="w-8 h-8 m-2" />{" "}
      </Link>

      <div className="flex flex-col items-center p-2 m-2 my-5 text-center rounded-md md:flex-row bg-slate-400/50 md:space-x-6">
        <div className="w-64 h-64 md:w-72 md:h-80">
          <img
            className="object-cover w-full h-full transition-all rounded hover:shadow-2xl hover:shadow-black md:hover:scale-150 md:hover:ml-16"
            src={product.thumbnail}
          />
        </div>
        <div className="flex flex-col md:space-y-4">
          <h2 className="font-mono text-xl font-semibold text-black">
            {product.title}
          </h2>

          <h3 className="font-sans text-lg font-semibold text-black">
            ₹ {product.price}
          </h3>

          <p className="my-2 font-serif text-sm italic md:font-normal">
            {product.description}
          </p>

          <div className="flex justify-center space-x-2 ">
            <div>
              <input
                type="number"
                value={count}
                onChange={handleValue}
                className="w-8 text-center border-2 border-orange-600 rounded"
              />
            </div>
            <Button onClick={onButtonClick}>ADD TO CART</Button>
          </div>

          <div className="flex flex-row justify-between">
            <div>
              {id > 1 && (
                <Link onClick={handleInputInitial} to={"/products/" + (id - 1)}>
                  {" "}
                  <FcPrevious className="w-10 h-10" />{" "}
                </Link>
              )}
            </div>
            <div>
              <Link onClick={handleInputInitial} to={"/products/" + (id + 1)}>
                {" "}
                <FcNext className="w-10 h-10" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withCart(ProdDetail);
