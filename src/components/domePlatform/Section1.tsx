"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col mt-[-9rem] px-28">
      <p className="text-[48px] font-[700]">
        Getting started with <span className="text-[#4D91FF]">DOME</span>
      </p>
      <p className="text-[18px] px-3">
        It only takes four easy steps to convert your data to a fully managed
        data product.
      </p>
      <div>
        <div className="mt-8 flex justify-center w-full">
          <div className="relative w-[1200px] h-[400px]">
            <Image src={`/domePlaform/dome.svg`} alt="brand" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
