"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col mt-[-9rem] px-6">
      <p className="text-[60px] font-[700]">
        Getting started with <span className="text-[#4D91FF]">DOME</span>
      </p>
      <p className="text-[20px] px-3">
        It only takes four easy steps to convert your data to a fully managed
        data product.
      </p>
      <div className="w-full mt-10 h-full flex justify-center">
        <video autoPlay loop muted className="w-[1200px]">
          <source src="/landingPage/DomeEngine2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
