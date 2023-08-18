"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative w-full">
      <div className="relative w-[100%] h-[300px]">
        <Image src={`/about/bg.svg`} alt="brand" fill />
      </div>
      <p className="absolute top-6  text-[80px] px-10 text-white font-[900]">On a mission to automate Data Management</p>
    </div>
  );
}
