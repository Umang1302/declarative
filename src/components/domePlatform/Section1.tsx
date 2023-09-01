"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  return (
    <div>
      <div className="w-full sm:hidden lg:flex justify-center">
        <div className="max-w-[1200px]">
          <p className="text-[40px] font-[700]">
            Getting started with <span className="text-[#4D91FF]">DOME</span>
          </p>
          <p className="text-[24px] px-1">
            It only takes four easy steps to convert your data to a fully
            managed data product.
          </p>
          <div>
            <div className="w-full mt-5 h-full flex justify-center">
              <video autoPlay loop muted className="w-[1250px]">
                <source src="/domePlaform/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:flex lg:hidden justify-center mt-[-28rem]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[30px] font-[700]">
            Getting started with <span className="text-[#4D91FF]">DOME</span>
          </p>
          <p className="text-center text-[16px] px-8">
            It only takes four easy steps to convert your data to a fully
            managed data product.
          </p>
          <div>
            <div className="w-full px-6 mt-5 h-full flex justify-center">
              <video autoPlay loop muted className="w-[1250px]">
                <source src="/domPlaform/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
