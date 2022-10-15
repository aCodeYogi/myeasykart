import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-900 rounded-t-md ">
      <div className="flex flex-col md:flex-row md:justify-center ">
        <div className="m-6">
          <img src="/imgs/weshop.png" className="mx-auto md:w-42 w-36" />
          <h2 className="text-4xl italic text-center text-red-400 font-Caveat">
            weShop Store{" "}
          </h2>
          <div className="flex justify-center mt-4 space-x-4">
            <img
              className="hover:bg-red-400 hover:rounded-lg"
              src="https://img.icons8.com/ios-filled/28/FFFFFF/instagram-new.png"
            />
            <img
              className="hover:bg-red-400 hover:rounded-lg"
              src="https://img.icons8.com/ios-filled/28/FFFFFF/twitter--v1.png"
            />
            <img
              className="hover:bg-red-400 hover:rounded-lg"
              src="https://img.icons8.com/ios-filled/28/FFFFFF/linkedin-2--v1.png"
            />
            <img
              className="hover:bg-red-400 hover:rounded-lg"
              src="https://img.icons8.com/ios-filled/28/FFFFFF/facebook-f.png"
            />
          </div>
        </div>

        <div className="m-6 text-center">
          <h2 className="font-sans text-3xl font-semibold text-gray-50">
            Quick Links
          </h2>
          <div className="flex flex-col my-2 space-y-2 ">
            <Link
              className="font-sans text-xl text-white hover:text-red-400 hover:font-bold hover:italic"
              to="/"
            >
              Visit Store
            </Link>
            <Link
              className="font-sans text-xl text-white hover:text-red-400 hover:font-bold hover:italic"
              to=""
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="m-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-gray-50">
            Important Links
          </h2>
          <div>
            <a
              className="font-serif text-xl text-white hover:italic hover:text-red-400 hover:font-bold"
              href="https://codeyogi.io/"
            >
              CodeYogi
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center border-t-2 border-white md:flex-row "></div>

      <div className="flex flex-col p-2 text-center text-white md:justify-between md:flex-row mx-9 ">
        <p className="font-mono text-lg italic">© COPYRIGHT 2022|weSHOP</p>
        <div className="flex items-center">
          <img
            src="https://app.codeyogi.io/assets/favicon-96.d8dad325.png"
            className="w-10 h-10 mx-1 rounded-md"
          />
          <p className="font-mono text-lg italic">
            Powered by{" "}
            <span className="text-lg italic font-semibold gont-serif">
              CODEYOGI
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
