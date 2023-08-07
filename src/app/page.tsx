"use client";

import { Cabin } from "next/font/google";
import React from "react";
import Navbar from "../components/landingpage/Navbar";

const cabin = Cabin({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <div className={`w-full ${cabin.className} h-full`}>
      <Navbar />
      <p>lorem*100</p>
    </div>
  );
}
