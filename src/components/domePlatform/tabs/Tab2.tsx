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
        <div className="relative w-[50%] h-[400px] border-2 rounded-lg">
          <Image src={`/landingPage/domePlatform2.svg`} alt="brand" fill />
        </div>
        <p className="w-[40%] flex justify-start items-center text-[18px]">
          All features and capabilities in Dome are powered with a deep
          knowledge graph that maintains information about Products, Attributes,
          their relationships, as well as all management Intents applied to
          them. Use Dome&apos;s simple yet highly effective knowledge graph
          Search to quickly discover data products of interest.
        </p>
      </div>
      <div className="sm:visible lg:hidden w-full roll-out flex flex-col justify-center gap-x-10">
        <div className="relative w-full h-[250px] border-2 rounded-lg">
          <Image src={`/landingPage/domePlatform2.svg`} alt="brand" fill />
        </div>
        <p className="w-full mt-5 flex justify-start items-center text-[16px] text-center">
          All features and capabilities in Dome are powered with a deep
          knowledge graph that maintains information about Products, Attributes,
          their relationships, as well as all management Intents applied to
          them. Use Dome&apos;s simple yet highly effective knowledge graph
          Search to quickly discover data products of interest.
        </p>
      </div>
    </div>
  );
}
