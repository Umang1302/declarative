"use client";

import "./globals.css";
import React from "react";

import Sidebar from "../components/common/Sidebar";
import Navsearchbar from "../components/common/NavSearchbar";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = React.useState(0);
  return (
    <html lang="en">
      <body
        className={
          cabin.className +
          " bg-[#F2F2F2]" +
          " p-4 overflow-y-hidden overflow-x-hidden"
        }
      >
        <div className="flex w-[100%] h-[100vh] pr-5">
          <div className="flex h-[96vh]">
            <Sidebar active={active} setActive={setActive} />
          </div>
          <div className="h-full w-[90%] pl-6 4xl:px-[10%] max-w-[2018px] 5xl:mx-[5%]">
            <div className="flex w-full mx-3 mb-3">
              <Navsearchbar />
            </div>
            <div className="h-[80vh] lg:w-[82%] xl:w-[88%] 2xl:w-[90%] 3xl:w-full w-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
