"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center items-center px-3">
      <p className="w-[70%] text-center text-[20px] px-3">
        Complement your Data Engineering and Analytics efforts with the most
        comprehensive end to end Data Management capabilities made available via
        Dome Platform.
      </p>
      <div className="w-full h-full flex justify-center">
        <div className="relative w-[80vw] h-[70vh] cursor-pointer">
          <Image src="/landingPage/DOME2.svg" alt="brand" fill />
        </div>
      </div>
    </div>
  );
}
