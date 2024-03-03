import React from "react";
import {
  FaSignOutAlt,
  FaMoneyCheck,
  FaPhone,
  FaShopify,
  FaUser,
} from "react-icons/fa";

function FullScreenSidebar() {
  return (
    <>
      <div className=" h-screen md:flex text-center hidden  w-[250px] mt-[71px] fixed">
        <ul
          className={`bg-[rgba(0,0,123,.95)] text-white h-[100%] w-[100%]  flex-col flex items-center pt-20 gap-12 shadow shadow-black left-0`}
        >
          <li className="text-white font-bold flex gap-2 items-center justify-center">
            <FaShopify />
            <a href="/market">market</a>
          </li>
          <li className="text-white font-bold flex gap-2 items-center justify-center">
            <FaMoneyCheck />
            <a href="/account">account</a>
          </li>

          <li className="text-white font-bold flex gap-2 items-center justify-center">
            <FaPhone />
            <a href="#contact">Contact</a>
          </li>
          <li className="text-white font-bold flex gap-2 items-center justify-center">
            <FaUser />
            <a href="/profile">profile</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FullScreenSidebar;
