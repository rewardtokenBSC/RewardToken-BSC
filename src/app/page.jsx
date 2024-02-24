"use client";
import { useState, useRef } from "react";
import { TbBrandTelegram, TbBrandX } from "react-icons/tb";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopyRef = useRef(null);

  const copyToClipboard = () => {
    const textToCopy = textToCopyRef.current.innerText;

    // Create a temporary textarea element
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select the textarea value
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

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
      <div className="flex items-center z-[1000] justify-between md:px-20 px-8 py-2 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg absolute inset-x-0 top-0">
        <div className="flex items-center gap-3">
          <img src="/logo2.jpg" className="h-[50px] w-[50px]" alt="Logo" />
          <h2 className="text-white font-bold md:text-[25px] text-[14px]">
            Reward Token
          </h2>
        </div>
        <button
          className="bg-white py-2 md:px-10 px-6 rounded-3xl text-black font-bold md:text-[18px] text-[14px] hover:bg-transparent border hover:border-white hover:text-white"
        >
          BUY
        </button>
      </div>

      <div className="relative flex flex-col md:pt-10 pt-20 gap-8 justify-center w-screen items-center h-screen">
        <h2 className="text-white lg:text-[150px] text-[80px] font-[700] lg:w-[45%] md:w-[70%] w-[85%] text-center">
          $RWD
        </h2>
        <p className="text-white text-opacity-70 text-[20px] font-[400] lg:w-[45%] md:w-[70%] w-[85%] text-center">
          The most rewarding token on the Binance Smart Chain.
        </p>

        <div className="flex z-[1000] md:flex-row flex-col items-center gap-4">
          <div
            ref={textToCopyRef}
            className="py-3 bg-black text-white rounded-3xl text-center text-[14px] md:w-[410px] w-[400px]"
          >
            0x048ab6dbfa7444de1d77a4970b6ed19d7495db36
          </div>
          <button
          onClick={copyToClipboard}
          className="bg-white py-2 md:px-10 px-6 rounded-3xl text-black text-[14px] hover:bg-transparent border hover:border-white hover:text-white"
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
        </div>

        <div className="flex md:flex-row flex-col  items-center gap-5">
          <div className="py-[1px] px-20 bg-white bg-opacity-40"></div>
          <p className="text-white  text-[18px] font-[300]">
            Join our community
          </p>
          <div className="py-[1px] px-20 bg-white bg-opacity-40"></div>
        </div>

        <div className="flex items-center gap-4">
          <a target="_blank" href={"http://x.com/rewardtokenBSC_"}>
            <div className="bg-white bg-opacity-10 p-4 rounded-md text-white text-opacity-70 text-[25px]">
              <TbBrandX />
            </div>
          </a>
          <a target="_blank" href={"https://t.me/rewardtokenBSC"}>
            <div className="bg-white bg-opacity-10 p-4 rounded-md text-white text-opacity-70 text-[25px]">
              <TbBrandTelegram />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
