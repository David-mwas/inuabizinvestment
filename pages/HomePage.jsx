import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WalletCard from "../components/WalletCard";
import Progress from "../components/Progress";
import FullScreenSidebar from "../components/FullScreenSidebar";
import BrandInvest from "../components/BrandInvest";
import useAuthToken from "../hooks/useAuth";
import Login from "../components/Login";
const apiKey = import.meta.env.VITE_API_URL;
import toast, { Toaster } from "react-hot-toast";

function HomePage() {
  const [userData, setUserData] = useState();
  const { getItem } = useAuthToken();
  const { token } = getItem();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  if (!token) {
    window.location.replace("/login");
  }
  useEffect(() => {
    handleLogin();
  }, []);
  const handleLogin = async () => {
    try {
      const response = await fetch(`${apiKey}/user/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response?.status == 200) {
        setUserData(data);
        console.log(data);
        toast.success(`Hello, ${data?.firstname}`);
        console.log("logged in successfully");
      }
      console.log(response);
      console.log(data);
    } catch (error) {
      toast.error(error);
      console.error(error);
    }
  };
  console.log(userData);
  return (
    <>
      <Toaster />
      {token ? (
        <div className="overflow-x-hidden">
          <Header
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
            userName={userData?.firstname}
          />
          <Sidebar
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            userName={userData?.firstname}
          />
          <div className="w-ful flex flex-col md:flex-row">
            <FullScreenSidebar />
            <div className="w-full flex flex-col justify-center md:ml-[200px]">
              <div className="w-full md:p-6 flex items-center justify-center p-2 mt-2 flex-col gap-2 ">
                <Progress />
              </div>
              <div className="w-full md:p-6 flex items-center justify-center p-2">
                <WalletCard />
              </div>
              <div className="flex w-full items-center justify-center flex-col mt-2 mb-2 ">
                <h2 className="font-bold text-xl">Your Invested Brands</h2>
                <BrandInvest />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default HomePage;
