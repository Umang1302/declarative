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
        <div className="flex">
          <div className="flex h-[96vh]">
            <Sidebar active={active} setActive={setActive} />
          </div>
          <div className="w-full pl-6 h-full max-w-[2018px] 4xl:px-[10%] 5xl:mx-[5%]">
            <Navsearchbar />
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
