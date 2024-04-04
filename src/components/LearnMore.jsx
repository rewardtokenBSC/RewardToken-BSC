import Link from "next/link";
import React from "react";
import {
  TbBrandDiscord,
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
        className="font-bold text-white text-center md:text-5xl text-3xl "
      >
        Learn More About Reward Token
      </h1>
      <div className=" overflow-x-auto overflow-y-hidden py-10">
        <div className="grid md:grid-cols-3 grid-cols-1 md:px-0 px-10 overflow-x-auto overflow-y-hidden py-4 lg:w-full md:w-[1200px] gap-6 ">
          <div
            data-aos="fade-up"
            className="bg-[#FFD60054] bg-opacity-40 hover:text-white lg:w-full  flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg"
          >
            <img
              src="/whitepaper_cleanup-removebg-preview.png"
              className="h-[100px]"
              alt=""
            />
            <h2 className="text-[#FFE500]">White Paper</h2>
            <p className="text-center text-white">
              Explore comprehensive details about the project for a deeper
              understanding.
            </p>
            <a
              href="/whitepaper"
              target="_blank"
              className="py-3 px-6 rounded-lg bg-[#FFE500] text-black"
            >
              Read Whitepaper
            </a>
          </div>
          <div
            data-aos="fade-up"
            className="bg-[#FFD60054] bg-opacity-40 hover:text-white lg:w-full  flex flex-col justify-center items-center gap-4 hover:bg-black border border-[#FFE500] p-8 rounded-lg"
          >
            <img
              src="/roadmap_cleanup-removebg-preview.png"
              className="h-[100px]"
              alt=""
            />
            <h2 className="text-[#FFE500]">Road Map</h2>
            <p className="text-center text-white">
              Check out our detailed plans to learn more about what we have in
              store for the future.
            </p>
            <a
              href="/roadmap"
              target="_blank"
              className="py-3 px-6 rounded-lg bg-[#FFE500] text-black"
            >
              Read Roadmap
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
              <Link
                target="_blank"
                href={"https://t.me/rewardtokenBSC"}
                className="py-3 px-4 rounded-lg bg-[#FFE500] text-black"
              >
                <TbBrandTelegram />
              </Link>
              <Link
                target="_blank"
                href={"https://x.com/rewardtokenRWD"}
                className="py-3 px-4 rounded-lg bg-[#FFE500] text-black"
              >
                <TbBrandX />
              </Link>
              <Link
                target="_blank"
                href={"https://discord.gg/3U7uku5bF8"}
                className="py-3 px-4 rounded-lg bg-[#FFE500] text-black"
              >
                <TbBrandDiscord />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
