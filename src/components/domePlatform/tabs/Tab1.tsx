"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div className="w-full roll-out flex justify-center gap-x-10 mt-6">
      <div className="relative w-[50%] h-[400px]">
        <Image src={`/landingPage/domePlatform1.svg`} alt="brand" fill />
      </div>
      <p className="w-[40%] flex justify-start items-center text-[20px]">
        Leverage comprehensive library of Dome connectors to integrate with your
        on-prem or on-cloud data sources. Dome connects with most Databases,
        Cloud Storage systems, Data Warehouses and Data Lakes.
      </p>
    </div>
  );
}
