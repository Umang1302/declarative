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
        <div className="flex pr-5 gap-x-5 bg-green-600">
          {/* SideBar */}

          <div className="flex h-[96vh]">
            <Sidebar active={active} setActive={setActive} />
          </div>

          <div className="flex-grow">
            {/* TopBar */}
            {/* <div className="flex"> */}
            <Navsearchbar />
            {/* </div> */}
            <div className="h-[80vh] lg:w-[82%] xl:w-[88%] 2xl:w-[90%] 3xl:w-full w-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
