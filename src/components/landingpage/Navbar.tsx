"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div
      className={`w-full z-50 shadow-lg sticky top-0 px-10 py-2 ${cabin.className} h-[100px] bg-white flex justify-around items-center`}
    >
      <div
        onClick={() => {
          router.push("/");
        }}
        className="relative w-[180px] h-[60px] cursor-pointer"
      >
        <Image src="/Logo3.svg" alt="brand" fill />
      </div>
      <div className="flex text-[18px] justify-around items-center gap-x-16">
        <p className={`text-[#F65A27] font-[700]`}>Home</p>
        <p>Dome Platform</p>
        <p>About Declarative</p>
        <p>Try it Now!</p>
      </div>
      <div className="flex text-[18px] gap-x-1 justify-center items-center">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="relative w-6 h-6 cursor-pointer "
        >
          <Image src="/Mail.svg" alt="brand" fill />
        </div>
        <a href="mailto:info@declarativedata.com">
          <p>info@declarativedata.com</p>
        </a>
      </div>
    </div>
  );
}
