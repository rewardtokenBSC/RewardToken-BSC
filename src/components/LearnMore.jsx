import Link from "next/link";
import React from "react";
import {
  TbBrandFacebook,
  TbBrandTelegram,
  TbBrandTwitter,
  TbBrandX,
} from "react-icons/tb";

export default function LearnMore() {
  return (
    <section className="lg:px-40 px-5">
      <h1
        data-aos="fade-up"
        className="font-bold text-white text-center md:text-5xl text-3xl pb-10"
      >
        Learn More About Reward Token
      </h1>
      <div className=" overflow-x-auto py-10">
        <div className="grid grid-cols-3 overflow-x-auto py-6 lg:w-full w-[800px] gap-6 ">
          <div
            data-aos="fade-up"
            className="bg-[#FFD60054] bg-opacity-40 hover:text-white lg:w-full  flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg"
          >
            <img src="/whitepaper_cleanup-removebg-preview.png" className="h-[100px]" alt="" />
            <h2 className="text-[#FFE500]">White Paper</h2>
            <p className="text-center text-white">
              Explore comprehensive details about the project for a deeper
              understanding.
            </p>
            <a
              href="/whitepaper.pdf" // Replace this with the actual path to your white paper PDF
              download="whitepaper.pdf"
               className="py-3 px-6 rounded-lg bg-[#FFE500] text-black"
            >
              Download
            </a>
          </div>
          <div
            data-aos="fade-up"
            className="bg-[#FFD60054] bg-opacity-40 hover:text-white lg:w-full  flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg"
          >
            <img src="/roadmap_cleanup-removebg-preview.png" className="h-[100px]" alt="" />
            <h2 className="text-[#FFE500]">Road Map</h2>
            <p className="text-center text-white">
              Check out our detailed plans to learn more about what we have in
              store for the future. 
            </p>
            <a
              href="/road_map.jpg" // Replace this with the actual path to your white paper PDF
              download="road_map.jpg"
              className="py-3 px-6 rounded-lg bg-[#FFE500] text-black"
            >
              Download
            </a>
          </div>
          <div
            data-aos="fade-up"
            className="bg-[#FFD60054] bg-opacity-40 hover:text-white lg:w-full  flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg"
          >
            <img src="/community.jpg" alt="" />
            <p className="text-center text-white">
              Connect for updates within our community.
            </p>
            <p className="text-center text-[#FFE500]">Join us on all socials</p>
            <div className="flex items-center gap-4">
              <Link target="_blank" href={"https://t.me/rewardtokenBSC"} className="py-3 px-4 rounded-lg bg-[#FFE500] text-black">
                <TbBrandTelegram />
              </Link>
              <div className="py-3 px-4 rounded-lg bg-[#FFE500] text-black">
                <TbBrandX />
              </div>
              <Link target="_blank" href={"https://www.facebook.com/share/p/iqoujkuXpoV2aFoZ/"} className="py-3 px-4 rounded-lg bg-[#FFE500] text-black">
                <TbBrandFacebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
