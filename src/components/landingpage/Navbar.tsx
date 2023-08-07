"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Dashboard() {

  const router = useRouter();

  return <div className={`w-full shadow-lg sticky top-0 px-10 py-2 ${cabin.className} h-[80px] bg-white flex justify-around`}>
              <div
            onClick={() => {
              router.push("/");
            }}
            className="relative w-[180px] h-[60px] cursor-pointer"
          >
            <Image src="/Logo1.svg" alt="brand" fill />
          </div>

  </div>
}
