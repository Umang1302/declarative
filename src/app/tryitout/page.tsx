"use client";

import { Cabin } from "next/font/google";
import React from "react";
import Navbar from "@/components/tryitout/Navbar";
import Section3 from "@/components/landingpage/Section3";
import Footer from "@/components/domePlatform/Footer";

const cabin = Cabin({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <div className={`w-full ${cabin.className} h-full`}>
      <Navbar />
      <div className="mt-[-5rem]">
        <Section3 />
        <Footer />
      </div>
    </div>
  );
}
