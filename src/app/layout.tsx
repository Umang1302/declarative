"use client";

import "./globals.css";

import React, { useEffect } from "react";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });
import { usePathname } from "next/navigation";
import Head from "next/head";

export default function Landingpage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <div>{children}</div>
      </body>
    </html>
  );
}
