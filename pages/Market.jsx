import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BrandItem from "../components/BrandItem";
import FullScreenSidebar from "../components/FullScreenSidebar";
// top campanies
import Google from "../src/assets/logos/google.png";
import Microsoft from "../src/assets/logos/microsoft.png";
import Amazon from "../src/assets/logos/amazon.png";
import Netflix from "../src/assets/logos/netflix.png";
// socials
import X from "../src/assets/logos/twitter.png";
import IG from "../src/assets/logos/ig.jpg";
import TickTok from "../src/assets/logos/tiktok.png";
import YT from "../src/assets/logos/yt.png";
// fashion
import Dior from "../src/assets/logos/dior.png";
import LV from "../src/assets/logos/louisev.png";
import Adidas from "../src/assets/logos/adidas.png";
import Nike from "../src/assets/logos/nike.jpg";

function Market() {
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
        <div className="w-full flex flex-col justify-center md:ml-[300px] pt-[100px] p-6">
          <h2 className="font-bold text-3xl px-6 text-blue-500">
            Brand Investments
          </h2>
          <h3 className="px-6 pt-4 font-semibold text-xl">
            Top Companies Brand
          </h3>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 p-4 gap-4 justify-center items-center">
            <BrandItem image={Google} title="Google" />
            <BrandItem image={Microsoft} title="Microsoft" />
            <BrandItem image={Amazon} title="Amazon" />
            <BrandItem image={Netflix} title="Netflix" />
          </div>
          <h3 className="px-6 pt-4 font-semibold text-xl">Social brands</h3>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 p-4 gap-4 justify-center items-center">
            <BrandItem image={X} title="Twitter" />
            <BrandItem image={IG} title="Instagram" />
            <BrandItem image={YT} title="Youtube" />
            <BrandItem image={TickTok} title="TickTok" />
          </div>
          <h3 className="px-6 pt-4 font-semibold text-xl">Fashion brands</h3>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 p-4 gap-4 justify-center items-center">
            <BrandItem image={Dior} title="Christian Dior" />
            <BrandItem image={LV} title="Lousevoulton" />
            <BrandItem image={Nike} title="Nike" />
            <BrandItem image={Adidas} title="Adiddas" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
