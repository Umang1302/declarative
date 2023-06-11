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
  return (
    <html lang="en">
      <body
        className={
          cabin.className +
          " bg-gray-300" +
          " p-4 overflow-y-hidden overflow-x-hidden"
        }
      >
        <div className="flex w-[100vw] h-[100vh] overflow-x-hidden overflow-y-hidden">
          <div className="flex h-[96vh]">
            {/* <div className="absolute z-10 4xl:top-[230px] 4xl:left-[470px] 2xl:top-[140px] 2xl:left-[260px]"> */}
            <Sidebar />
          </div>
          <div className="w-[85vw]  h-[100vh] xl:w-[80vw] 4xl:px-72 2xl:px-8 lg:px-6 xl:px-6">
            <div className="flex w-[90vw] h-[14vh] max-h-[140px] mx-6 mb-3">
              <Navsearchbar />
            </div>
            <div className="h-[83vh] w-full mx-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
