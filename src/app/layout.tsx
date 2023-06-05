"use client";

import "./globals.css";
import React from "react";

import Sidebar from "../components/common/Sidebar";
import Navsearchbar from "../components/common/NavSearchbar";
import Image from "next/image";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cabin.className + " bg-gray-300" + " p-4 overflow-y-hidden"}
      >
        <div className="flex">
          <div className="flex h-[calc(96vh)] w-full max-w-[20rem]">
            <Image
              className="absolute z-10 top-[134px] left-[268px]"
              src="/highlight.svg"
              alt="brand"
              width={10}
              height={10}
            />
            <Sidebar />
          </div>
          <div className="w-[85%] h-[100vh] ml-[-2rem] ">
            <div className="flex w-full h-[12vh] mb-3">
              <Navsearchbar />
            </div>
            <div className="h-[83vh] pr-3 w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
