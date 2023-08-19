"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col mt-[-6rem] justify-center items-center px-3">
      <p className="w-[75%] text-center text-[28px] px-3">
        Complement your Data Engineering and Analytics efforts with the most
        comprehensive end to end Data Management capabilities made available via
        Dome Platform.
      </p>
      <div className="w-full mt-5 h-full flex justify-center">
        <video autoPlay loop muted className="w-[1250px]">
          <source src="/landingPage/DomeEngine2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
