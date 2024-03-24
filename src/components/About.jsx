import React from "react";

export default function About() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 overflow-hidden items-center gap-10 lg:px-20  md:px-20 md:py-20 py-10 px-10 relative">
      {/* <img src="/circle-yellow.svg" className=" absolute left-0  top-0" alt="" />
      <img src="/yellowish.svg" className=" absolute right-0 rounded-full bottom-0" alt="" /> */}
      <div
        data-aos="fade-up"
        className="flex z-[1000] md:pl-20 pl-0 relative flex-col gap-6"
      >
        <h2 className="text-white md:text-[48px] text-[30px] font-[700]">
          What is Reward Token?
        </h2>
        <p className="text-white md:text-[20px] text-[12.78px] font-[500]">
          A decentralized reward system designed to empower investors to
          participate in the DeFi economy without the need for prior liquidity.
          Our token establishes a dynamic ecosystem, motivating holders to
          actively contribute to sustained project growth. The key aspects of
          fair token distribution, accompanied by marketing initiatives creating
          a more inclusive and accessible decentralized financial ecosystem.
        </p>
        <div>
          <a
            href="/whitepaper.pdf" // Replace this with the actual path to your white paper PDF
            download="whitepaper.pdf"
            className="py-3 px-6 rounded-lg bg-[#FFE500] text-black"
          >
            White Paper
          </a>
        </div>
      </div>
      <div className="flex items-center lg:-translate-y-12 justify-center">
        <img
          data-aos="fade-left"
          src="/hand.png"
          className="z-[900] h-[250px] mt-10 hidden lg:block relative"
          alt=""
        />
        <img
          data-aos="fade-left"
          src="/hand.png"
          className="z-[900] h-[120px] absolute right-6 lg:hidden block"
          alt=""
        />
        {/* <img data-aos="fade-left" src="/md-rect.svg" className="z-[1000] lg:hidden block relative" alt="" /> */}
      </div>
    </div>
  );
}
