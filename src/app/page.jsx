"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import LearnMore from "@/components/LearnMore";
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
      <Hero />
      <div>
        <img src="/Ellipse.svg" className="z-[1000] -translate-y-10" alt="" />
      </div>
      <About />
      <LearnMore />
    </div>
  );
}
