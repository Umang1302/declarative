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
        <div className="relative w-[50%] h-[400px]">
          <Image src={`/domePlaform/9.svg`} alt="brand" fill />
        </div>
        <p className="w-[40%] flex justify-start items-center text-[#555] text-[18px]">
          Search, observe, review, and manage fully featured Products through
          Dome&apos;s Data Product Marketplace. Collaborate efficiently with
          users and evolve your Products with agility
        </p>
      </div>
      <div className="sm:visible lg:hidden w-full roll-out flex flex-col justify-center gap-x-10">
        <div className="relative w-full h-[250px]">
          <Image src={`/domePlaform/9.svg`} alt="brand" fill />
        </div>
        <p className="w-full flex justify-start items-center text-[#555] text-[16px] text-center">
          Search, observe, review, and manage fully featured Products through
          Dome&apos;s Data Product Marketplace. Collaborate efficiently with
          users and evolve your Products with agility
        </p>
      </div>
    </div>
  );
}
