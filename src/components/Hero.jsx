"use client";

import React, { useState, useEffect } from "react";
import { TbCopyleftFilled, TbUsers } from "react-icons/tb";

export default function Hero() {

  return (
    <div className="relative md:h-screen py-20 md:py-0">
      <div className="flex justify-between container lg:pl-20 md:pl-[6rem] px-6 items-center h-full">
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
            A community-driven token built on the BNB chain to reward loyalty
            and engagement in the crypto world
          </p>
          <div className="flex md:flex-row flex-col md:items-center items-start md:py-3 py-0 gap-6">
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
        <div>
          {/* <iframe src="/rwd-animation.mov" frameborder="0"></iframe>
          <video src="/rwd-animation.mov"></video> */}
        </div>
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
