"use client";

import React, { useState, useEffect } from "react";
import { TbCopyleftFilled, TbUsers } from "react-icons/tb";

export default function Hero() {

  return (
    <div className="relative h-screen">
      <div className="flex justify-between lg:pl-40 md:pl-36 px-10 items-center h-full">
        <div
          data-aos="fade-up"
          className="relative flex flex-col gap-6 z-[1000] xl:w-[60%] lg:w-[65%]"
        >
          <h2 className="lg:text-[70px] md:text-[66px] text-[46px] relative font-[700] text-white lg:leading-[88px] md:leading-[40px]">
            Earn continuous rewards by holding{" "}
            <span className="text-transparent bg-gradient-to-r from-[#FFF3B3] to-[#FFE500] bg-clip-text">
              Reward Token.
            </span>
          </h2>
          <p className="text-[24px] h-[100px] font-[700] text-[#C8C2C2]">
            A community-driven token built on the BNB chain to reward loyalty
            and engagement in the crypto world
          </p>
          <div className="flex md:flex-row flex-col md:items-center items-start gap-6">
            <button className="flex items-center justify-center bg-[#FFE500] py-3 px-8 font-medium rounded-lg">
              <span>
                <TbCopyleftFilled />
              </span>{" "}
              Copy contract address
            </button>
            <button className="flex items-center gap-2 justify-center bg-[#191919] text-[#FFE500] py-3 px-8 font-medium rounded-lg">
              Join community
              <span>
                <TbUsers />
              </span>{" "}
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <img
          data-aos="zoom-in"
          className="absolute lg:right-0 lg:top-0 md:-right-48 md:-top-56 bottom-0"
          src="/background.svg"
          alt=""
        />
      </div>
    </div>
  );
}
