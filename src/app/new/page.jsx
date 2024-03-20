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
    <div className="bg-[#020202] overflow-x-hidden">
      <div className="bg-black w-full flex items-center justify-between sticky top-0 shadow border-b py-3 lg:px-40 md:px-20 px-10 border-white border-opacity-10">
        <div>
          <h2 className="text-white font-semibold text-xl">Reward Token</h2>
        </div>
        <div>
          <button className="bg-[#FFE500] py-2 px-6 rounded-lg text-black font-medium">Buy</button>
        </div>
      </div>
      <Hero />
      <div>
        <img src="/Ellipse.svg" className="z-[1000] -translate-y-10" alt="" />
      </div>
      <About />
      <GetStarted />
      <Roadmap />
      <LearnMore />

      <div className="pb-10 flex items-center justify-center"><p className="text-[#FFE500]">Reward token   © 2024 All Rights Reserved.</p></div>
    </div>
  );
}
