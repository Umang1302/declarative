"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

const data = [
  {
    heading: `Intelligent Network of
Managed Micro Data Products`,
    content: `Convert your enterprise data into an intelligent network of totally managed, business aligned, metadata driven, collaborative and inter connected data products.`,
  },
  {
    heading: `Industry's best Data Management frameworks applied to Micro 
    Data Products`,
    content: (
      <p>
        Dome combines the best of Data Management, Data Mesh and Data Fabric
        principles in a single platform. It comes equipped with Industry&apos;s best
        Data Management Frameworks & Controls that are applied to data using
        simple declarative Intents.
      </p>
    ),
  },
  {
    heading: `Intelligent Network of
Managed Micro Data Products`,
    content: `Convert your enterprise data into an intelligent network of totally managed, business aligned, metadata driven, collaborative and inter connected data products.`,
  },
  {
    heading: `Intelligent Network of
Managed Micro Data Products`,
    content: `Convert your enterprise data into an intelligent network of totally managed, business aligned, metadata driven, collaborative and inter connected data products.`,
  },
  {
    heading: `Intelligent Network of
Managed Micro Data Products`,
    content: `Convert your enterprise data into an intelligent network of totally managed, business aligned, metadata driven, collaborative and inter connected data products.`,
  },
  {
    heading: `Intelligent Network of
Managed Micro Data Products`,
    content: `Convert your enterprise data into an intelligent network of totally managed, business aligned, metadata driven, collaborative and inter connected data products.`,
  },
];

export default function Section1() {
  const router = useRouter();

  return (
    <div className={`mb-4 mt-[5rem] pr-1 w-full ${cabin.className}`}>
      <div className="w-full flex justify-center mb-6">
        <p className="text-[60px] font-[700]">
          Key <span className="text-[#4D91FF]">Features</span>
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-full grid grid-cols-3 gap-x-7 gap-y-9 px-10">
          {data.map((element, index) => (
            <div key={`${index}`} className="rounded-[10px] h-[1000px] landingBox">
              <div className="relative w-[100%] h-[409.02px] cursor-pointer">
                <Image src={`/landingPage/${index + 1}.svg`} alt="brand" fill />
              </div>
              <div className="h-[50%] mt-8">
                <div className="px-10 text-[24px] font-[700] h-[30%]">
                  {element.heading}
                </div>
                <div className="px-10 text-[24px] text-[#555] h-[60%]">
                  {element.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
