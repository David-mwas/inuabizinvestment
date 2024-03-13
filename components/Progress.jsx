import React from "react";

function Progress() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-xl  p-2 rounded-3xl md:w-[65%] gap-4 mt-20">
      <h2 className="text-xl font-semibold">Today</h2>
      <div className="flex-1 w-full flex items-center justify-end">
        <div className="flex items-start justify-start bg-blue-500 px-6 py-2 rounded-2xl shadow shadow-black">
          <button className="text-white font-semibold gap-2">
            <span className="text-xl">+</span>
            <span> Activate</span>
          </button>
        </div>
      </div>
      <input type="range" name="range" id="" className="w-full" />
      <div className="flex items-center justify-between w-full p-2">
        <p>Earned:17,000</p>
        <p>expected:20,000</p>
      </div>
    </div>
  );
}

export default Progress;





