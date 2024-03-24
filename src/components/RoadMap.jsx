// Roadmap component

import React from "react";
// import styles from "./Roadmap.module.css";

const Roadmap = () => {
  return (
    <div className="lg:px-40 md:px-20 px-6 py-20">
      <h1
        data-aos="fade-up"
        className="font-bold text-white text-center md:text-5xl text-3xl pb-10"
      >
        Reward Token Road Map
      </h1>
      <ol
        data-aos="fade-up"
        class="relative md:flex hidden text-gray-200  flex-col gap-10  border-s h-fit border-gray-200 dark:border-gray-700 dark:text-gray-200"
      >
        <li class="mb-10 ms-6">
          <span class="absolute flex gap-2 items-center justify-center -start-0 ">
            <div className="flex items-start pr-5">
              <img src="/phase1.svg" alt="" />
            </div>
          </span>
          <div className="pl-28 pt-3">
            <h3 class="font-medium leading-tight text-[#FFE500]">Deployment</h3>
            <p class="text-sm">
              <ul className="flex flex-col pt-5 gap-5">
                <li>
                  - Deployment of the Reward Token smart contract on the Binance
                  Smart Chain.
                </li>
                <li>- Initial liquidity deployment with $2,000 USD in BNB.</li>
                <li>- Burned liquidity renounced contract.</li>
                <li>
                  - Creation of the Reward Token website: rewardtokenbBSC.com
                </li>
              </ul>
            </p>
          </div>
        </li>
        <li class="mb-10 ms-6">
          <span class="absolute flex gap-2 items-center justify-center -start-0 ">
            <div className="flex items-start pr-5">
              <img src="/phase2.svg" alt="" />
            </div>
          </span>
          <div className="pl-28 pt-3">
            <h3 class="font-medium leading-tight text-[#FFE500]">
              Building the Foundation
            </h3>
            <p class="text-sm">
              <ul className="flex flex-col pt-5 gap-5">
                <li>- Community outreach and awareness campaigns.</li>
                <li>
                  - Introduction of additional utility features for the Reward
                  Token ecosystem.
                </li>
                <li>
                  - Independent smart contract audit for security and
                  transparency.
                </li>
              </ul>
            </p>
          </div>
        </li>
        <li class="mb-10 ms-6">
          <span class="absolute flex gap-2 items-center justify-center -start-0 ">
            <div className="flex items-start pr-5">
              <img src="/phase4.svg" alt="" />
            </div>
          </span>
          <div className="pl-28 pt-3">
            <h3 class="font-medium leading-tight text-[#FFE500]">
              Advanced Marketing Strategies and Partnerships
            </h3>
            <p class="text-sm">
              <ul className="flex flex-col pt-5 gap-5">
                <li>- Expansion of airdrop reward programs and contests.</li>
                <li>
                  - Establishment of partnerships with influencers and key
                  players.
                </li>
                <li>
                  - Listing on decentralized exchanges (DEX) for accessibility.
                </li>
              </ul>
            </p>
          </div>
        </li>
        <li class="ms-6">
          <span class="absolute flex gap-2 items-center justify-center -start-0 ">
            <div className="flex items-start pr-5">
              <img src="/phase3.svg" alt="" />
            </div>
          </span>
          <div className="pl-28 pt-3">
            <h3 class="font-medium leading-tight text-[#FFE500]">
              Continued Innovation and Global Expansion
            </h3>
            <p class="text-sm">
              <ul className="flex flex-col pt-5 gap-5">
                <li>- Explore launching Reward Coin Blockchain. </li>
                <li>
                  - Global expansion efforts to introduce Reward Token to new
                  markets and communities.
                </li>
                <li>
                  - Continued community engagement through regular updates,
                  events, and partnerships.
                </li>
                <li>
                  - Initiation of the development phase for a Reward Token
                  mobile app.
                </li>
                <li>
                  - Introduction of governance proposals and voting mechanisms.
                </li>
              </ul>
            </p>
          </div>
        </li>
      </ol>
      <ol
        data-aos="fade-up"
        class="relative flex md:hidden text-gray-200  flex-col gap-10 border-s border-e h-fit border-gray-200 dark:border-gray-700 dark:text-gray-200"
      >
        <li class="mb-10">
          <div className="flex items-start pr-5">
            <img src="/phase1.svg" alt="" />
          </div>
          <div className="mx-4 pt-3">
            <h3 class="font-medium leading-tight text-[#FFE500]">Deployment</h3>
            <p class="text-sm">
              <ul className="flex flex-col pt-5 gap-5">
                <li>
                  - Deployment of the Reward Token smart contract on the Binance
                  Smart Chain.
                </li>
                <li>- Initial liquidity deployment with $2,000 USD in BNB.</li>
                <li>- Burned liquidity renounced contract.</li>
                <li>
                  - Creation of the Reward Token website: rewardtokenbBSC.com
                </li>
              </ul>
            </p>
          </div>
        </li>
        <li class="mb-10 ">
          <div className="flex items-start pr-5">
            <img src="/phase2.svg" alt="" />
          </div>
          <div className="mx-4 pt-3">
            <h3 class="font-medium leading-tight text-[#FFE500]">
              Building the Foundation
            </h3>
            <p class="text-sm">
              <ul className="flex flex-col pt-5 gap-5">
                <li>- Community outreach and awareness campaigns.</li>
                <li>
                  - Introduction of additional utility features for the Reward
                  Token ecosystem.
                </li>
                <li>
                  - Independent smart contract audit for security and
                  transparency.
                </li>
              </ul>
            </p>
          </div>
        </li>
        <li class="mb-10">
          <div className="flex items-start pr-5">
            <img src="/phase4.svg" alt="" />
          </div>
          <div className="mx-4 pt-3">
            <h3 class="font-medium leading-tight text-[#FFE500]">
              Advanced Marketing Strategies and Partnerships
            </h3>
            <p class="text-sm">
              <ul className="flex flex-col pt-5 gap-5">
                <li>- Expansion of airdrop reward programs and contests.</li>
                <li>
                  - Establishment of partnerships with influencers and key
                  players.
                </li>
                <li>
                  - Listing on decentralized exchanges (DEX) for accessibility.
                </li>
              </ul>
            </p>
          </div>
        </li>
        <li class="">
          <div className="flex items-start pr-5">
            <img src="/phase3.svg" alt="" />
          </div>
          <div className="mx-4 pt-3">
            <h3 class="font-medium leading-tight text-[#FFE500]">
              Continued Innovation and Global Expansion
            </h3>
            <p class="text-sm">
              <ul className="flex flex-col pt-5 gap-5">
                <li>- Explore launching Reward Coin Blockchain. </li>
                <li>
                  - Global expansion efforts to introduce Reward Token to new
                  markets and communities.
                </li>
                <li>
                  - Continued community engagement through regular updates,
                  events, and partnerships.
                </li>
                <li>
                  - Initiation of the development phase for a Reward Token
                  mobile app.
                </li>
                <li>
                  - Introduction of governance proposals and voting mechanisms.
                </li>
              </ul>
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Roadmap;
