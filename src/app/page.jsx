"use client";
import About from "@/components/About";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import LearnMore from "@/components/LearnMore";
import Roadmap from "@/components/RoadMap";
import Link from "next/link";
import { useState, useRef } from "react";
import { TbBrandTelegram, TbBrandX } from "react-icons/tb";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopyRef = useRef(null);

  const copyToClipboard = () => {
    const textToCopy = textToCopyRef.current.innerText;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <section className="bg-[#020202]">
      <div className="bg-[#020202] overflow-x-hidden">
        <div className="bg-black w-full flex items-center justify-between sticky top-0 shadow border-b py-4 lg:px-20  md:px-20 px-10 border-white border-opacity-10">
          <div>
            <h2 className="text-white font-semibold text-xl">Reward Token</h2>
          </div>
          <div>
            <Link target="_blank" href={"https://pancakeswap.finance/swap?outputCurrency=0x048AB6dBfA7444De1d77A4970b6ED19d7495Db36&inputCurrency=BNB"} className="bg-[#FFE500] py-2 px-6 rounded-lg text-black font-medium">
              Buy
            </Link>
          </div>
        </div>
        <Hero />
        <div>
          <img src="/Ellipse.svg" className="z-[1000] -translate-y-10" alt="" />
        </div>
        <About />
        <div className="flex justify-center items-center py-20">
          <img src="/desktop.svg" className="lg:block hidden" alt="" />
          <img
            src="/tablet.svg"
            className=" lg:hidden md:block hidden"
            alt=""
          />
          <img src="/mobile.svg" className="md:hidden block" alt="" />
        </div>
        <GetStarted />
        <Roadmap />
      </div>
      <LearnMore />

      <div className="pb-10 flex items-center justify-center">
        <p className="text-[#FFE500]">
          Reward token © 2024 All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
