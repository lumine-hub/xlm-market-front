"use client";

import Image from "next/image";
import {LuckyWheelPage} from "@/app/pages/lucky/lucky-wheel-page";
import {LuckyGridPage} from "@/app/pages/lucky/lucky-grid-page";
import React from "react";
import dynamic from "next/dynamic";

const StrategyArmoryButton = dynamic(async()=>(await import("./components/StrategyArmory")).StrategyArmory)

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* 头部文案 */}
        <header className="text-3xl font-bold text-center text-gray-800 my-8">
          大营销平台 - ikun抽奖
        </header>

          {/* 装配抽奖 */}
          <StrategyArmoryButton/>
        {/* 中间的两个div元素 */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
                  <p className="text-gray-700">
                      {/*第一个抽奖*/}
                      <LuckyWheelPage/>
                  </p>
              </div>
              <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
                  <p className="text-gray-700">
                      {/*第二个抽奖*/}
                      <LuckyGridPage/>
                  </p>
              </div>
              {/*<div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">*/}
              {/*    <p className="text-gray-700">*/}
              {/*        /!*第二个抽奖*!/*/}
              {/*        <LuckySlotMachine/>*/}
              {/*    </p>*/}
              {/*</div>*/}

          </div>

          {/* 底部文案 */}
          <footer className="text-gray-600 text-center my-8">
              本项目为 专门仿照稀土倔金坑爹抽奖模式打造的ikun抽奖 【ikun】
          </footer>
      </div>
  );
}