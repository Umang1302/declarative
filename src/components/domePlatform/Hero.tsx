"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  const array = [
    "Observable",
    "Auditable",
    "Compliant",
    "Secure",
    "Governed",
    "Intelligent",
    "collaborative",
  ];

  const [word, setWord] = useState("Observable");

  useEffect(() => {
    const i = setInterval(() => {
      console.log("HELLO");
    }, 3000);

    return clearInterval(i);
  }, []);

  return (
    <div className="relative h-[800px] overflow-hidden">
      <div className="relative w-[100%] sm:h-[200px] lg:h-[450px] cursor-pointer">
        <Image src={`/landingPage/Hero.svg`} alt="brand" fill />
    </div>
  
      {/* <img width={400} height={100} src={`/public/domePla`} alt="" /> */}
      <div className="w-full mt-8 flex justify-center">
        <p className="sm:w-full sm:px-4 sm:text-[16px] lg:w-[60%] max-w-[1200px] lg:text-[24px] text-center">
          Dome offers the most complete and comprehensive Data Management
          capabilities to drive your organization to be truly and responsibly
          data driven.
        </p>
      </div>
      {/* <div className="bg-[#8E8E8E] mt-10 w-full h-[2px]">
      </div> */}
    </div>
  );
}
