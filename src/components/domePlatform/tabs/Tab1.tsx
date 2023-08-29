"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div>
      <div className="sm:hidden lg:flex w-full roll-out justify-center gap-x-10 mt-6">
        <div className="relative w-[50%] h-[300px] border-2 rounded-lg">
          <Image src={`/landingPage/domePlatform1.png`} alt="brand" fill />
        </div>
        <p className="w-[40%] flex justify-start items-center text-[18px]">
          Leverage comprehensive library of Dome connectors to integrate with
          your on-prem or on-cloud data sources. Dome connects with most
          Databases, Cloud Storage systems, Data Warehouses and Data Lakes.
        </p>
      </div>
      <div className="sm:visible lg:hidden w-full roll-out flex flex-col justify-center gap-x-10">
        <div className="relative w-full h-[250px]">
          <Image src={`/landingPage/domePlatform1.svg`} alt="brand" fill />
        </div>
        <p className="w-full md:mt-7 flex justify-start items-center text-[16px] text-center">
          Leverage comprehensive library of Dome connectors to integrate with
          your on-prem or on-cloud data sources. Dome connects with most
          Databases, Cloud Storage systems, Data Warehouses and Data Lakes.
        </p>
      </div>
    </div>
  );
}
