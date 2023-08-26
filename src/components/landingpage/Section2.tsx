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
        principles in a single platform. It comes equipped with Industry&apos;s
        best Data Management Frameworks & Controls that are applied to data
        using simple declarative Intents.
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
        <p className="sm:text-[30px] lg:text-[40px] font-[700]">
          Key <span className="text-[#4D91FF]">Features</span>
        </p>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[1500px] grid sm:grid-col-1 md:grid-col-1 lg:grid-cols-3 gap-x-5 gap-y-6 sm:px-10 lg:px-20">
          {data.map((element, index) => (
            <div
              key={`${index}`}
              className={`rounded-[10px]  landingBox ${
                index > 2 ? "sm:h-[500px] lg:h-[620px]" : "sm:h-[600px] lg:h-[660px]"
              }`}
            >
              <div className="relative w-full flex justify-center sm:h-[250px] lg:h-[309.02px] cursor-pointer">
                <Image src={`/landingPage/${index + 1}.svg`} alt="brand" fill />
              </div>
              <div className="h-[50%] mt-8">
                <div className="px-10 text:text-[16px] lg:text-[20px] font-[700] h-[30%]">
                  {element.heading}
                </div>
                <div className="px-10 text-[16px] lg:text-[18px] text-[#555] h-[60%]">
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
