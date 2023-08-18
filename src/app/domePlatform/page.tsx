"use client";

import { Cabin } from "next/font/google";
import React from "react";
import Navbar from "@/components/domePlatform/Navbar";
import Hero from "@/components/domePlatform/Hero";
import Section1 from "@/components/domePlatform/Section1";
import Section2 from "@/components/domePlatform/Section2";
import Section3 from "@/components/landingpage/Section3";
import Footer from "@/components/domePlatform/Footer";

const cabin = Cabin({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <div className={`w-full ${cabin.className} h-full`}>
      <Navbar />
      <div className="">
        <Hero />
        <div className="mt-[-3rem]">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
        <Footer />
      </div>
    </div>
  );
}
