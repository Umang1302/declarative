"use client";

import { Breadcrumbs } from "@material-tailwind/react";
import { Cabin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div
      className={`mt-5 p-1 flex 2xl:w-[75vw] 4xl:w-[75vw] justify-between w-full ${cabin.className}`}
    >
      <div className="w-[70%]">
        <h1 className="font-bold text-4xl 4xl:text-7xl">Products</h1>
      </div>
      <div className="4xl:mb-[60px]">
        <Breadcrumbs className="bg-transparent 4xl:text-[25px]" separator="->">
          <Link href="/" className="opacity-60 flex active:text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mt-[2px] 4xl:w-10 4xl:h-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="ml-1 4xl:text-[30px]">Home</span>
          </Link>

          <Link href="/product/0" className="4xl:text-[30px]">
            Products
          </Link>
        </Breadcrumbs>
      </div>
      {/* <div className="flex mt-6 gap-x-2">
        <a href="#" className="opacity-60">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mt-[1px]"
              viewBox="0 0 20 20"
              fill="#4D91FF"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <p className="text-sm mt-[-3px] text-[#4D91FF]">Home</p>
          </div>
        </a>
        <p className="opacity-60 mt-[-4px]">-&gt;</p>
        <a href="#" className="opacity-60 mt-[-5px]">
          <span className="text-sm">Products</span>
        </a>
      </div> */}
    </div>
  );
}
