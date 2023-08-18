"use client";

import { Cabin } from "next/font/google";
import React from "react";
import Navbar from "@/components/about/Navbar";
import Hero from "@/components/about/Hero";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Footer from "@/components/about/Footer";

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
        </div>
        <Footer />
      </div>
    </div>
  );
}
