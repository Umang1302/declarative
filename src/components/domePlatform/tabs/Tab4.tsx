"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div className="w-full roll-out flex justify-center gap-x-10 mt-6">
      <div className="relative w-[50%] h-[400px]">
        <Image src={`/domePlaform/7.svg`} alt="brand" fill />
      </div>
      <p className="w-[40%] flex justify-start items-center text-[20px]">
        Dome Products are higher order business aligned data products that
        include raw data with all management intents applied and rich profile as
        well as meta data. Products are discoverable, shareable, and
        independently observable as well as auditable.
      </p>
    </div>
  );
}
