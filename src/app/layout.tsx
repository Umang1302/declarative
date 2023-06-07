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
        className={
          cabin.className +
          " bg-gray-300" +
          " p-4 overflow-y-hidden overflow-x-hidden"
        }
      >
        <div className="flex w-[100vw] h-[100vh] overflow-x-hidden overflow-y-hidden">
          <div className="relative flex h-[96vh]">
            <div className="absolute z-10 4xl:top-[230px] 4xl:left-[470px] 2xl:top-[140px] 2xl:left-[260px]">
              <svg
                width="15"
                height="43"
                viewBox="0 0 15 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H5C10.5228 0 15 4.47715 15 10V33C15 38.5228 10.5228 43 5 43H0V0Z"
                  fill="#F65A27"
                />
              </svg>
            </div>
            <Sidebar />
          </div>
          <div className="w-[85vw] h-[100vh] 4xl:px-12 2xl:px-8">
            <div className="flex w-[90vw] mb-3">
              <Navsearchbar />
            </div>
            <div className="h-[83vh]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
