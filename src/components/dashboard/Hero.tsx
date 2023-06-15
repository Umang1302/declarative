"use client";

import { Breadcrumbs } from "@material-tailwind/react";
import { Cabin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div
      className={`mt-5 mx-3 p-1 flex w-[98%]  justify-between ${cabin.className}`}
    >
      <div className="w-[70%]">
        <h1 className="font-bold text-4xl">Products</h1>
      </div>

      <Breadcrumbs className="bg-transparent ">
        <Link href="/" className="flex text-[#F65A27]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mt-[2px]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span className="ml-1 ">Home</span>
        </Link>

        <Link href="/product/0" className="">
          Products
        </Link>
      </Breadcrumbs>
    </div>
  );
}
