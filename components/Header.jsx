import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import {
  FaMoneyCheck,
  FaPhone,
  FaShopify,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import Logo from "../public/logo.png";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header
      // initial={{ y: -100, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{
      //   ease: "linear",
      //   duration: 0.6,
      // }}
      className="w-full text-white flex flex-row bg-[rgba(0,0,123,.9)] shadow-lg  justify-between items-center fixed top-0 left-0 mb-10  z-50 gap-4 px-8"
    >
      <div className=" text-blue-[#00043c] flex items-center">
        <a href="/" className="flex items-center">
          <img
            className="w-[70px] h-[70px] object-cover cursor-pointer "
            src={Logo}
            alt=""
          />
          <span className="text-[30px] font-extrabold ml-2 font tracking-widest">
            InuaBiz
          </span>
        </a>
      </div>
      <div className="flex gap-10 text-blue-800 ">
        <div
          className={`min-[768px]:hidden cursor-pointer z-50 transition-all duration-65 ease-in-out`}
          onClick={toggleMenu}
        >
          {!isMenuOpen ? (
            <CiMenuFries color="white" className="w-8 h-8" />
          ) : (
            <RxCross2 color="white" className="w-8 h-8" />
          )}
        </div>
      </div>
      <div className="md:flex gap-2 items-center justify-center hidden">
        <div className="px-4 py-4 ml-8 flex gap-2">
          <h1 className="font-semibold text-xl">Ryan</h1>
          <p className="flex items-center gap-1 text-sm">
            <p>active</p>{" "}
            <p className="w-[10px] h-[10px] bg-green-400 rounded-full"></p>
          </p>
        </div>
        <div className="hidden md:block ">
          <button className="bg-blue-500 px-6 py-[7px] rounded-2xl flex gap-2 shadow shadow-black">
            <span> Logout</span> <FaSignOutAlt className="h-6 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
