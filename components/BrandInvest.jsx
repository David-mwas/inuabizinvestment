import React from "react";
import BrandItem from "./BrandItem";
import Google from "../src/assets/logos/google.png";
import Microsoft from "../src/assets/logos/microsoft.png";
import Amazon from "../src/assets/logos/amazon.png";
import Netflix from "../src/assets/logos/netflix.png";
function BrandInvest() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 p-4 md:w-[65%] gap-4 justify-center items-center">
     
      <BrandItem image={Google} title="Google" />
      <BrandItem image={Microsoft} title="Microsoft" />
      <BrandItem image={Amazon} title="Amazon" />
      <BrandItem image={Netflix} title="Netflix" />
    </div>
  );
}

export default BrandInvest;
