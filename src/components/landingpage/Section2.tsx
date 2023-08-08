"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  return (
    <div className="mb-4 pr-1">
      <p className="text-[60px] w-full px-40">
        The Key Features of <span className="text-[#4D91FF]">DOME</span>
      </p>
      <div className="grid grid-cols-3 w-full items-center px-32 border-[#8E8E8E] border-t-[1px]">
        <div className="border-[#8E8E8E] border-r-[1px] py-3 px-2">
          <div className="flex flex-col justify-center items-center text-[24px] py-3 px-2">
            <p className="text-black">
              Intelligent Network of Managed Micro Data Products
            </p>
            <p className="text-[#555] mt-3">
              Convert your enterprise data into an intelligent network of
              totally managed, business aligned, metadata driven, collaborative
              and inter connected data products.
            </p>
            <div className="mt-5 relative w-[400px] h-[414px] 2xl:w-[350px] 2xl:h-[364px] cursor-pointer">
              <Image src="/landingPage/3.svg" alt="brand" fill />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center text-[24px] py-3 px-3">
            <p className="text-black">
              Intelligent Network of Managed Micro Data Products
            </p>
            <p className="text-[#555] mt-3">
              Convert your enterprise data into an intelligent network of
              totally managed, business aligned, metadata driven, collaborative
              and inter connected data products.
            </p>
            <div className="mt-5 relative w-[400px] h-[414px] 2xl:w-[350px] 2xl:h-[364px] cursor-pointer">
              <Image src="/landingPage/4.svg" alt="brand" fill />
            </div>
          </div>
        </div>
        <div className="border-[#8E8E8E] border-l-[1px] py-6 px-2 h-full">
          <div className="flex flex-col justify-center items-center text-[24px]">
            <p className="text-black">
              Intelligent Network of Managed Micro Data Products
            </p>
            <p className="text-[#555] mt-3">
              Convert your enterprise data into an intelligent network of
              totally managed, business aligned, metadata driven, collaborative
              and inter connected data products.
            </p>
            <div className="mt-5 relative w-[420px] h-[434px] 2xl:w-[350px] 2xl:h-[364px] cursor-pointer">
              <Image src="/landingPage/5.svg" alt="brand" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full items-center px-32 border-y-[#8E8E8E] border-y-[1px]">
        <div className="border-[#8E8E8E] border-r-[1px] py-3 px-2">
          <div className="flex flex-col justify-center items-center text-[24px] py-3 px-2">
            <p className="text-black">
              Intelligent Network of Managed Micro Data Products
            </p>
            <p className="text-[#555] mt-3">
              Convert your enterprise data into an intelligent network of
              totally managed, business aligned, metadata driven, collaborative
              and inter connected data products.
            </p>
            <div className="mt-5 relative w-[400px] h-[414px] 2xl:w-[350px] 2xl:h-[364px] cursor-pointer">
              <Image src="/landingPage/6.svg" alt="brand" fill />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center text-[24px] py-3 px-3">
            <p className="text-black">
              Intelligent Network of Managed Micro Data Products
            </p>
            <p className="text-[#555] mt-3">
              Convert your enterprise data into an intelligent network of
              totally managed, business aligned, metadata driven, collaborative
              and inter connected data products.
            </p>
            <div className="mt-5 relative w-[400px] h-[414px] 2xl:w-[350px] 2xl:h-[364px] cursor-pointer">
              <Image src="/landingPage/7.svg" alt="brand" fill />
            </div>
          </div>
        </div>
        <div className="border-[#8E8E8E] border-l-[1px] py-6 px-2 h-full">
          <div className="flex flex-col justify-center items-center text-[24px]">
            <p className="text-black">
              Intelligent Network of Managed Micro Data Products
            </p>
            <p className="text-[#555] mt-3">
              Convert your enterprise data into an intelligent network of
              totally managed, business aligned, metadata driven, collaborative
              and inter connected data products.
            </p>
            <div className="mt-5 relative w-[400px] h-[414px] 2xl:w-[350px] 2xl:h-[364px] cursor-pointer">
              <Image src="/landingPage/8.svg" alt="brand" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
