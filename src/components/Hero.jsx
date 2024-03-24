"use client";

import React, { useState, useEffect } from "react";
import { TbCopyleftFilled, TbUsers } from "react-icons/tb";
import { FaCopy } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const contractAddress = "0x048ab6dbfa7444de1d77a4970b6ed19d7495db36";
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  return (
    <div className="relative  overflow-y-hidden py-20 md:py-0">
      <div className="flex lg:flex-row flex-col justify-between container lg:pl-20 md:pl-[6rem] px-6 items-center h-full">
        <div
          data-aos="fade-up"
          className="relative flex flex-col gap-6 z-[1000] lg:w-[60%] w-full"
        >
          <h2 className="lg:text-[70px] md:text-[66px] text-[36px] relative font-[700] text-white lg:leading-[88px] md:leading-[70px] leading-[40px]">
            Earn continuous rewards by holding{" "}
            <span className="text-transparent bg-gradient-to-r from-[#FFF3B3] to-[#FFE500] bg-clip-text">
              Reward Token.
            </span>
          </h2>
          <p className="md:text-[24px] text-[16px] font-[700] text-[#C8C2C2]">
            A community-driven token built on the BNB smart chain to reward loyalty
            and engagement in the crypto world
          </p>
          <div className="flex md:flex-row flex-col md:items-center items-start md:py-3 py-0 gap-6">
            <div className="relative">
              <button
                className="flex items-center gap-2 justify-center bg-[#FFE500] py-3 px-8 font-medium rounded-lg"
                onMouseEnter={() => setCopied(false)}
                onClick={handleCopyClick}
              >
                <span>
                  <FaCopy />
                </span>{" "}
                {copied ? "Copied!" : "Copy contract address"}
              </button>
              <p className="absolute text-white">{copied && contractAddress}</p>
            </div>
            <Link
              href={"https://t.me/rewardtokenBSC"}
              target="_blank"
              className="flex items-center gap-2 justify-center bg-[#191919] shadow shadow-[#FFE500] text-[#FFE500] py-3 px-8 font-medium rounded-lg"
            >
              Join community
              <span>
                <TbUsers />
              </span>{" "}
            </Link>
          </div>
        </div>
        <div className="relative rounded-full mt-4 overflow-hidden">
        <img
          data-aos="zoom-in"
          className="h-[800px]"
          src="/final_small.gif"
          alt=""
        />
        </div>
      </div>
      <div >
      </div>
    </div>
  );
}
