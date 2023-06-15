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
        <div className="flex w-[100vw] h-[100vh] overflow-x-hidden overflow-y-hidden">
          <div className="flex h-[96vh]">
            <Sidebar active={active} setActive={setActive} />
          </div>
          <div className="w-[80%] h-[100vh] px-6 4xl:px-[10%] max-w-[2018px] 5xl:mx-[5%]">
            <div className="flex w-full h-[14vh] max-h-[140px] mx-3 mb-3">
              <Navsearchbar />
            </div>
            <div className="h-[83vh] w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
