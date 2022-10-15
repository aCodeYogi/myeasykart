import React, { useState } from "react";
import { Link } from "react-router-dom";

// render 4 times and once more
function Err404() {
  const [value, setValue] = useState("");

  console.log("value outside", value);

  function handleChange(event) {
    setValue(event.target.value);
    console.log("value inside", value);
  }

  return (
    <div className="mx-2 text-center md:p-8 grow">
      <input
        value={value}
        onChange={handleChange}
        className="p-2 border broder-gray-300"
      />
      <div className="flex justify-center">
        <img
          src="https://cdn.discordapp.com/attachments/998621481934270566/1016379335105585262/OOPs-removebg-preview.png"
          className="w-fit h-fit"
        />
      </div>
      <h2 className="text-2xl font-black text-center font-Dancing">
        404 Page Not Found
      </h2>
      <p className="text-2xl text-center font-Caveat text-sky-500">
        Think That the Page/Document You Are Looking Is{" "}
        <span className="text-3xl font-medium text-red-400 font-Shadows">
          NO MORE
        </span>{" "}
        or Has{" "}
        <span className="text-3xl font-medium text-red-400 font-Shadows">
          A BROKEN LINK
        </span>
        .{" "}
      </p>
      <div className="my-6">
        <Link
          to="/"
          className="p-2 text-3xl font-black rounded-full bg-sky-500 hover:bg-red-400 font-Qwitcher "
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default Err404;
