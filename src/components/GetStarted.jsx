import React from "react";

export default function GetStarted() {
  return (
    <div className="lg:px-40 md:px-20 px-6 bg-[#FFE500] py-20">
        <h1 data-aos="fade-up" className="md:text-[48px] text-[30px] md:pb-20 pb-10 text-black font-[700]">Get Started</h1>
      <div className="grid md:grid-cols-2 grid-col gap-10">
        <div data-aos="fade-up" className="bg-[#FFD60054] bg-opacity-40 hover:text-white flex flex-col gap-4 hover:bg-black transition-all duration-500 ease-in-out border border-[#000] p-8 rounded-2xl">
          {/* <img src="/medal-line.svg" alt="" /> */}
          <div className="border-2 py-2 px-4 rounded-lg w-fit text-[12px] border-white border-opacity-40">
            1
          </div>
          <h2>Deposit BNB</h2>
          <p className="">
            Buy BNB smart chain from Trust Wallet, Binance or any CEX
          </p>
          <button className="py-3 w-fit px-6 rounded-lg bg-[#FFE500] border-2 border-black text-black">
            Go to Trust Wallet
          </button>
        </div>
        <div data-aos="fade-up" className="bg-[#FFD60054] bg-opacity-40 hover:text-white flex flex-col gap-4 hover:bg-black transition-all duration-500 ease-in-out border border-[#000] p-8 rounded-2xl">
          {/* <img src="/medal-line.svg" alt="" /> */}
          <div className="border-2 py-2 px-4 rounded-lg w-fit border-white border-opacity-40">
            2
          </div>
          <h2>Import Reward Token Contract Address</h2>
          <p className="">
            Next import the Reward Token contract address into your wallet
          </p>
          <button className="py-3 w-fit px-6 rounded-lg bg-[#FFE500] border-2 border-black text-black">
            Visit BsScan
          </button>
        </div>
        <div data-aos="fade-up" className="bg-[#FFD60054] bg-opacity-40 hover:text-white flex flex-col gap-4 hover:bg-black transition-all duration-500 ease-in-out border border-[#000] p-8 rounded-2xl">
          {/* <img src="/medal-line.svg" alt="" /> */}
          <div className="border-2 py-2 px-4 rounded-lg w-fit border-white border-opacity-40">
            3
          </div>
          <h2>Swap BNB to Reward (RWD)</h2>
          <p className="">
            Input BNB amount and confirm the transaction, swap to RWD
          </p>
          <button className="py-3 w-fit px-6 rounded-lg bg-[#FFE500] border-2 border-black text-black">
            Buy on Pancakeswap
          </button>
        </div>

        <div data-aos="fade-up" className="bg-[#FFD60054] bg-opacity-40 md:h-0 h-[300px] hover:text-white flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#000] rounded-2xl">
          <img src="/pancake.svg" className="w-full md:h-full h-[300px]" alt="" />
        </div>
      </div>
    </div>
  );
}
