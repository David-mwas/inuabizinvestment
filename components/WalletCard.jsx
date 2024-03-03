import React from "react";

function WalletCard() {
  return (
    <div className="bg-white shadow-xl w-full h-[250px] rounded-3xl md:w-[65%] flex items-center justify-between md:px-6 py-4 flex-col relative px-2 ">
      
      <div className="flex-1  w-full flex items-center justify-between">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold">Balance</h2>
          <p>
            <span className="font-semibold">KSH</span>{" "}
            <span className="text-lg font-mono"> 0.0</span>
          </p>
        </div>
        <div className="flex items-start justify-start bg-blue-500 px-6 py-2 rounded-2xl shadow shadow-black">
          <button className="text-white font-semibold gap-2">
            <span className="text-xl">+</span>
            <span> Deposit</span>
          </button>
        </div>
      </div>
      <div className="w-full h-[.1px] bg-[rgba(0,0,123,.8)]" />
      <div className="flex-1  w-full items-center justify-between mt-6 flex">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold">Invest</h2>
          <p>
            <span className="font-semibold">KSH</span>{" "}
            <span className="text-lg font-mono"> 15000.0</span>
          </p>
        </div>
        <div className="flex flex-col gap-6 text-green-500">
          <h2 className="font-semibold">Bonus</h2>
          <p>
            <span className="font-semibold">KSH</span>{" "}
            <span className="text-lg font-mono"> 500.0</span>
          </p>
        </div>
        <div className="flex flex-col gap-6 text-red-500">
          <h2 className="font-semibold">Withdraw</h2>
          <p>
            <span className="font-semibold">KSH</span>{" "}
            <span className="text-lg font-mono"> 8750.0</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WalletCard;
