import React from "react";
import Logo from "../public/logo.png";
import { RxTriangleUp } from "react-icons/rx";
function BrandItem({ image, title }) {
  return (
    <div className="flex-1  bg-white shadow-xl  rounded-3xl justify-center items-center flex flex-col p-6 hover:scale-105">
      <img
        src={image}
        className="w-[40px] h-[40px] object-cover rounded-full "
        alt=""
      />
      <div className="flex flex-col justify-start text-center w-full gap-2 items-center">
        <h3 className="font-semibold">{title}</h3>
        <h4 className="flex">
          <p className="font-semibold">KSH</p> : 100
        </h4>
        <p className="text-green-500 flex gap-1 font-bold  ">
          <p>
            <RxTriangleUp className="w-8 h-8" />
          </p>
          <p>8.01%</p>
        </p>
      </div>
      <div className=" text-center flex flex-col items-center justify-center w-full">
        <p>Daily: Return</p>
        <h2 className=" w-full py-2 rounded-2xl mt-2 text-center border-2 border-green-500 ">
          250.0
        </h2>
      </div>
    </div>
  );
}

export default BrandItem;
