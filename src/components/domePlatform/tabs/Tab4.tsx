"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div>
      <div className="sm:hidden lg:flex w-full roll-out justify-center gap-x-10 mt-6">
        <div className="relative w-[50%] h-[400px]">
          <Image src={`/domePlaform/7.svg`} alt="brand" fill />
        </div>
        <p className="w-[40%] flex justify-start items-center text-[18px]">
          Dome Products are higher order business aligned data products that
          include raw data with all management intents applied and rich profile
          as well as meta data. Products are discoverable, shareable, and
          independently observable as well as auditable.
        </p>
      </div>
      <div className="sm:visible lg:hidden w-full roll-out flex flex-col justify-center gap-x-10">
        <div className="relative w-full h-[250px]">
          <Image src={`/domePlaform/7.svg`} alt="brand" fill />
        </div>
        <p className="w-full mt-5 flex justify-start items-center text-[16px] text-center">
          Dome Products are higher order business aligned data products that
          include raw data with all management intents applied and rich profile
          as well as meta data. Products are discoverable, shareable, and
          independently observable as well as auditable.
        </p>
      </div>
    </div>
  );
}
