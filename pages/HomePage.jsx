import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WalletCard from "../components/WalletCard";
import Progress from "../components/Progress";
import FullScreenSidebar from "../components/FullScreenSidebar";
import BrandInvest from "../components/BrandInvest";
function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="overflow-x-hidden">
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
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
  );
}

export default HomePage;
