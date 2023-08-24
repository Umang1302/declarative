"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center gap-x-10 mt-[3rem]">
     <div className="max-w-[1450px] flex">
      <div className="relative w-[720px] h-[520px]">
        <Image src={`/about/1.svg`} alt="brand" fill />
      </div>
      <div className="w-[40%] flex flex-col px-3 py-12 justify-start items-center">
        <div>
          <p className="text-[36px] font-[700]">Our Belief</p>
          <p className="text-[18px] text-[#555]">
            Effective Data Management extends beyond Data Engineering,
            Analytics, and Operations. It includes proactive application of
            Security, Privacy, Access, Quality, Lifecycle & other framework
            controls combined with active use of Profile, Metrics and Meta data
            to achieve maximum Observability, Auditability, and Compliance.
            Organizations in the digital era will require effective Data
            Management tools complementing their investments in Data
            Engineering, ML & AI in order to be truly and responsibly data
            driven.
          </p>
        </div>
        <div className="mt-9">
          <p className="text-[36px] font-[700]">Our Mission</p>
          <p className="text-[18px] text-[#555]">
            We are on a mission to automate end to end Data Management and help
            organizations to be truly and responsibly data driven.
          </p>
        </div>
      </div>
     </div>
    </div>
  );
}
