import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url(/bg-svg)] bg-no-repeat bg-cover h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <div className="flex items-center bg-white back justify-between">
        <img src="/logo.svg" alt="" />
        <button className="bg-white py-2 px-10 rounded-3xl text-black font-medium">
          Buy token
        </button>
      </div>
    </div>
  )