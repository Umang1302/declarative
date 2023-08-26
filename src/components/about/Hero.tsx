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

    <div className="sm:hidden lg:flex w-full justify-center">
      <div className="max-w-[1450px]">
      <div className="relative w-[1450px] h-[390px]">
        <Image src={`/about/bg.svg`} alt="brand" fill />
      </div>
      </div>
    </div>

    <div className="sm:visible lg:hidden w-full flex justify-center">
      <div className="w-full">
      <div className="relative w-full h-[85px]">
        <Image src={`/about/bg.svg`} alt="brand" fill />
      </div>
      </div>
    </div>
    </div>
  );
}
