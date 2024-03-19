import React from "react";

export default function LearnMore() {
  return (
    <div className="lg:px-40 md:px-20 px-10 py-20">
      <h1 data-aos="fade-up" className="font-bold text-white text-center text-5xl pb-10">
        Learn More About Reward Token
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
        <div data-aos="fade-up" className="bg-[#FFD60054] bg-opacity-40 hover:text-white flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg">
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
        <div data-aos="fade-up" className="bg-[#FFD60054] bg-opacity-40 hover:text-white flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg">
          <img src="/medal-line.svg" alt="" />
          <h2 className="text-[#FFE500]">Road Map</h2>
          <p className="text-center">
            Check out our detailed plans to learn more about what we have in
            store for the future.
          </p>
          <button className="py-3 px-6 rounded-lg bg-[#FFE500] text-black">
            Download
          </button>
        </div>
        <div data-aos="fade-up" className="bg-[#FFD60054] bg-opacity-40 hover:text-white flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg">
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
