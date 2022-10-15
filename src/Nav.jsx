import React from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { withCart } from "./withProvider";

function Nav({ cartCount }) {
  return (
    <div className="flex items-center justify-between w-full py-2 md:w-auto bg-orange-200/75">
      <div>
        <Link to="/">
          <img src="/imgs/weshop.png" className="w-32 md:w-40 " />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="log-in">
          {" "}
          <VscAccount className="text-4xl text-red-400" />{" "}
        </Link>
        <Link to="/cart" className="relative flex items-center justify-center">
          <div className="m-2 text-5xl text-red-400">
            {" "}
            <FaOpencart />{" "}
          </div>
          <span className="absolute p-2 text-lg text-red-400 rounded-full">
            {cartCount}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default withCart(Nav);
