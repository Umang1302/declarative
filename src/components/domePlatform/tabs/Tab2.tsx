"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center roll-out mt-6 px-10">
      <div className="relative w-[50%] h-[400px]">
        <Image src={`/landingPage/domePlatform2.svg`} alt="brand" fill />
      </div>
      <p className="w-[50%] flex justify-start items-center text-[18px]">
        All features and capabilities in Dome are powered with a deep knowledge
        graph that maintains information about Products, Attributes, their
        relationships, as well as all management Intents applied to them. Use
        Dome&apos;s simple yet highly effective knowledge graph Search to
        quickly discover data products of interest.
      </p>
    </div>
  );
}
