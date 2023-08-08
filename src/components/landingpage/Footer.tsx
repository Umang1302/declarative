"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Footer() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-[585px] w-full px-20 py-8 bg-[#2D2D2D]">
      <div className="relative w-[500px] h-[514px] cursor-pointer">
        <Image src="/landingPage/FooterLogo.svg" alt="brand" fill />
      </div>
    </div>
  );
}
