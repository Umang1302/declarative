"use client";

import { Checkbox } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function Page({ params }: any) {
  return (
    <>
      <div
        className={`w-full h-full flex justify-center mt-[5rem] ${cabin.className}`}
      >
        <div className="text-[64px] text-black font-[900]">COMING SOON</div>
      </div>
      <div className="w-full h-full flex justify-center">
        <div className="w-[439px] h-[313px] relative ml-[6rem]">
          <Image src="/comingSoon.svg" alt="brand" fill />
        </div>
      </div>
      <div className="w-full mt-4 h-full flex justify-center">
        <Checkbox
          label={
            <p className="text-[20px] text-black">
              Notify me! When this feature is launched
            </p>
          }
        />
      </div>
    </>
  );
}
