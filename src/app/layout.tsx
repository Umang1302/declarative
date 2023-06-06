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
        <div className="flex w-[100vw] h-[100vh] overflow-x-hidden overflow-y-hidden">
          <div className="flex h-[96vh] w-full max-w-[10vw]">
            <Image
              className="absolute z-10 top-[134px] left-[268px]"
              src="/highlight.svg"
              alt="brand"
              width={10}
              height={10}
            />
            <Sidebar />
          </div>
          <div className="w-[85vw] h-[100vh]">
            <div className="flex w-[90vw] h-[12vh] mb-3 ml-[10vw]">
              <Navsearchbar />
            </div>
            <div className="h-[83vh] ml-[10vw]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
