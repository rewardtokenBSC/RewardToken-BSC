import React from "react";

export default function LearnMore() {
  return (
    <div className="lg:px-40 py-20">
      <h1>Learn More About Reward Token</h1>
      <div className="grid grid-cols-3 gap-6 ">
        <div className="bg-[#FFD60054] bg-opacity-40 hover:text-white flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg">
          <img src="/medal-line.svg" alt="" />
          <h2 className="text-[#FFE500]">White Paper</h2>
          <p className="text-center">
            Explore comprehensive details about the project for a deeper
            understanding.
          </p>
          <button className="py-3 px-6 rounded-lg bg-[#FFE500] text-black">
            Download
          </button>
        </div>
        <div className="bg-[#FFD60054] bg-opacity-40 hover:text-white flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg">
          <img src="/medal-line.svg" alt="" />
          <h2 className="text-[#FFE500]">Road Map</h2>
          <p className="text-center">
          Check out our detailed plans to learn more about what we have in store for the future.
          </p>
          <button className="py-3 px-6 rounded-lg bg-[#FFE500] text-black">
            Download
          </button>
        </div>
        <div className="bg-[#FFD60054] bg-opacity-40 hover:text-white flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg">
          <h2 className="text-[#FFE500]">White Paper</h2>
          <p className="text-center">
            Explore comprehensive details about the project for a deeper
            understanding.
          </p>
          <button className="py-3 px-6 rounded-lg bg-[#FFE500] text-black">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
