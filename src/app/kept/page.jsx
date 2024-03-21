"use client"


import React, { useState } from "react";

export default function Page() {
    const [contractAddress, setContractAddress] = useState("0x048ab6dbfa7444de1d77a4970b6ed19d7495db36");
    const [isCopied, setIsCopied] = useState(false);
  
    const copyContractAddress = () => {
      navigator.clipboard.writeText(contractAddress)
        .then(() => {
          console.log("Contract address copied to clipboard:", contractAddress);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 3000); // Reset copied state after 3 seconds
        })
        .catch((error) => {
          console.error("Unable to copy contract address to clipboard:", error);
        });
    };

  return (
    <div className="bg-black h-screen overflow-y-hidden overflow-x-hidden">
      <div className="flex items-center justify-between lg:px-40 md:px-20 px-10 py-5 border-b border-white border-opacity-10">
        <h1 className="text-white text-2xl">Reward Token</h1>
        <button className="py-2 px-10 bg-yellow-400 rounded-md text-black">
          Buy
        </button>
      </div>

      <div className="flex flex-col mb-28 justify-center items-center h-full w-full">
        <h1 className="text-transparent bg-gradient-to-r lg:text-[80px] md:text-[50px] text-[30px]  py-10 from-[#FFF3B3] to-[#FFE500] bg-clip-text">
          Reward Token
        </h1>
        <div className="flex md:flex-row flex-col md:items-end items-start gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-white" htmlFor="">
              Contract Address:
            </label>
            <div className="bg-white py-2 px-6 rounded-lg">
              {contractAddress}
            </div>
          </div>
          <button onClick={copyContractAddress} className="py-2 px-10 bg-yellow-400 rounded-md text-black">
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
