"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center roll-out gap-x-10 mt-6">
      <div className="relative w-[50%] h-[400px]">
        <Image src={`/domePlaform/9.svg`} alt="brand" fill />
      </div>
      <p className="w-[40%] flex justify-start items-center text-[20px]">
        Search, observe, review, and manage fully featured Products through
        Dome&apos;s Data Product Marketplace. Collaborate efficiently with users
        and evolve your Products with agility
      </p>
    </div>
  );
}
