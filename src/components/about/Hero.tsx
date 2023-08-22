"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center -mt-20">
      <div className="max-w-[1450px]">
      <div className="relative w-[1450px] h-[390px]">
        <Image src={`/about/bg.svg`} alt="brand" fill />
      </div>
      </div>
    </div>
  );
}
