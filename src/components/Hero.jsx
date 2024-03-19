"use client";

import React, { useState, useEffect } from "react";
import { TbCopyleftFilled } from "react-icons/tb";
import Typical from "react-typical";

export default function Hero() {
  // const [typedText, setTypedText] = useState("");
  // const textToType = "";

  // useEffect(() => {
  //   let currentIndex = 0;
  //   const typingSpeed = 100; // Adjust typing speed (in milliseconds)

  //   const typingInterval = setInterval(() => {
  //     if (currentIndex <= textToType.length) {
  //       setTypedText(textToType.substring(0, currentIndex)); // Update typed text
  //       currentIndex++;
  //     } else {
  //       clearInterval(typingInterval); // Stop typing when finished
  //     }
  //   }, typingSpeed);

  //   return () => clearInterval(typingInterval); // Clean up interval on unmount
  // }, []);

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
            {/* <Typical
              steps={[
                "A community-driven token built on the BNB chain to reward loyalty and engagement in the crypto world",
                5000,
                "Tokenized community rewards on the BNB blockchain fostering loyalty and active engagement within the cryptocurrency ecosystem.",
                5000,
                "A BNB-based community token designed to incentivize loyalty and foster active engagement throughout the crypto community.",
                5000,
                "Rewarding loyalty and encouraging engagement in the crypto space through a community-driven token built on the BNB chain.",
                5000,
                "Building a strong crypto community through a BNB-based token that incentivizes loyalty and promotes active engagement.",
                5000,
              ]}
              className="text-[#C8C2C2]"
              wrapper="p"
              loop={Infinity}
            /> */}
          </p>
          <div className="flex md:flex-row flex-col md:items-center items-start gap-6">
            <button className="flex items-center justify-center bg-[#FFE500] py-3 px-8 font-medium rounded-lg">
              <span>
                <TbCopyleftFilled />
              </span>{" "}
              Copy contract address
            </button>
            <button className="flex items-center justify-center bg-[#191919] text-[#FFE500] py-3 px-8 font-medium rounded-lg">
              Join community
              <span>
                <TbCopyleftFilled />
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
