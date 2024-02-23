"use client";

import { useState } from "react";
import { TbBrandTelegram, TbBrandX } from "react-icons/tb";

export default function Home() {
  const [inputValue, setInputValue] = useState(
    "0xb9f599ce614Feb2e1BBe58F180F370D05b39344E"
  );
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = inputValue;
    document.body.appendChild(tempInput);

    // Select the input value
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text
    document.execCommand("copy");

    // Remove the temporary input
    document.body.removeChild(tempInput);

    // Set the button text to "Copied" and reset after 3 seconds
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url(/bg.svg)] bg-no-repeat bg-cover"></div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-20 py-2 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg absolute inset-x-0 top-0">
        <img src="/logo.svg" className="h-[50px] w-[50px]" alt="Logo" />
        <button className="bg-white py-2 px-10 rounded-3xl text-black font-medium hover:bg-transparent border hover:border-white hover:text-white">
          Buy Token
        </button>
      </div>

      <div className="relative flex flex-col md:pt-0 pt-20 gap-10 justify-center w-screen items-center h-screen">
        <h2 className="text-white lg:text-[50px] md:text-[40px] text-[30px] font-[700] lg:w-[50%] md:w-[70%] w-[85%] text-center">
          Claim your share in the Reward Token $RWD airdrop!
        </h2>
        <p className="text-white text-opacity-70 md:text-[18px] text-[14px] font-[400] lg:w-[50%] md:w-[70%] w-[85%] text-center">
          The most rewarding reflections token on BSC. Participate in the Reward
          Token airdrop by purchasing with BNB on Pancakeswap.{" "}
        </p>

        <div className="flex md:flex-row flex-col items-center gap-4">
          <input
            type="text"
            disabled
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 bg-white text-white text-opacity-70 bg-opacity-10 rounded-3xl text-center text-[14px] md:w-[500px] w-[300px]"
          />
          <button
            onClick={copyToClipboard}
            className="bg-white py-2 px-10 rounded-3xl text-black font-medium hover:bg-transparent border hover:border-white hover:text-white"
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="flex md:flex-row flex-col  items-center gap-5">
          <div className="py-[1px] px-20 bg-white bg-opacity-40"></div>
          <p className="text-white text-opacity-70 text-[18px] font-[300]">
            Join Our Community
          </p>
          <div className="py-[1px] px-20 bg-white bg-opacity-40"></div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white bg-opacity-10 p-4 rounded-md text-white text-opacity-70 text-[25px]">
            <TbBrandX />
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-md text-white text-opacity-70 text-[25px]">
            <TbBrandTelegram />
          </div>
        </div>
      </div>
    </div>
  );
}
