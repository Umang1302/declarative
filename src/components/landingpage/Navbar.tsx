"use client";

import { Cabin } from "next/font/google";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Dashboard() {
  return <div className={`w-full ${cabin.className} h-full`}>Hello</div>;
}
