import React from "react";
import {
  FaSignOutAlt,
  FaMoneyCheck,
  FaPhone,
  FaShopify,
  FaUser,
} from "react-icons/fa";
import useAuthToken from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

function Sidebar({ isMenuOpen, toggleMenu, userName }) {
  const { clearAuthToken } = useAuthToken();
  const handleLogout = () => {
    clearAuthToken();
    toast.success("logged out successfully");
    window.location.replace("/login");
    console.log("logged out successfully");
  };
  return (
    <>
      <Toaster />
      {isMenuOpen && (
        <div className="w-screen h-screen flex justify-center text-center fixed z-[999] top-[71px]">
          <ul
            className={`bg-[rgba(0,0,123,.95)] text-white h-[50%] w-[100%] pt-2 flex-col flex items-center justify-center gap-6 rounded-b-3xl md:hidden shadow shadow-black`}
          >
            <div className="px-4 py-2  flex gap-2">
              <h1 className="font-semibold text-xl">{userName}</h1>
              <p className="flex items-center gap-1 text-sm">
                <p>active</p>{" "}
                <p className="w-[10px] h-[10px] bg-green-400 rounded-full"></p>
              </p>
            </div>
            <li className="text-white font-bold flex gap-2 items-center justify-center">
              <FaShopify />
              <a href="/market" onClick={toggleMenu}>
                market
              </a>
            </li>
            <li className="text-white font-bold flex gap-2 items-center justify-center">
              <FaMoneyCheck />
              <a href="/account" onClick={toggleMenu}>
                account
              </a>
            </li>

            <li className="text-white font-bold flex gap-2 items-center justify-center">
              <FaPhone />
              <a href="" onClick={toggleMenu}>
                Tell 0789624130
              </a>
            </li>
            <li className="text-white font-bold flex gap-2 items-center justify-center">
              <FaUser />
              <a href="/profile" onClick={toggleMenu}>
                profile
              </a>
            </li>
            <div className="float-end ">
              <button
                onClick={handleLogout}
                className="bg-blue-500 px-10 py-[7px] rounded-2xl flex gap-2 font-semibold shadow shadow-black"
              >
                <span> Logout</span> <FaSignOutAlt className="h-6 w-4" />
              </button>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
