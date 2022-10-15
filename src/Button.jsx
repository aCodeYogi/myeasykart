import React from "react";

function Button(props) {
  return (
    <button
      {...props}
      className="px-2 py-1 text-2xl border-2 border-orange-500 rounded bg-rose-400 hover:bg-red-600 "
    ></button>
  );
}

export default Button;
