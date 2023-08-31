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
    heading: `Industry's best Data Management frameworks and features applied with simple Intents`,
    content: (
      <p>
       Dome is equipped with a rich library of Industry&apos;s best Data Management Frameworks, Principles, and Controls. Apply these controls to your Data Products using simple declarative Management Intents.
      </p>
    ),
  },
  {
    heading: `Complete Observability, Auditability
    and Compliance`,
    content: `Dome provides the most comprehensive Observability, Auditability, & Compliance for your enterprise data by applying Framework controls to each individual product using declarative Management Intents. Each Dome product is independently Observable and Auditable.`,
  },
  {
    heading: `Data Economy via Dome's Marketplace`,
    content: `Get full transparency into Supply and Demand of your Data Products in order to best manage your ever growing enterprise data. Business value metrics & Impact of data products are calculated using supply and demand indicators to auto categorize products in criticality tiers.`,
  },
  {
    heading: `Lightweight, Agile, and Collaborative`,
    content: `Declarative nature of Intents makes is easy for providers and consumers to collaborate and iteratively evolve to intents that are fit for purpose.`,
  },
  {
    heading: `Get started in minutes. No ETL or ELT mandatory`,
    content: `Contrarty to other platforms, Dome does not require you to move your data as a pre requisite barrier in order to be able to manage it. Apply the best management frameworks, principles, and controls on data wherever it is.`,
  },
];

export default function Section1() {
  const router = useRouter();

  return (
    <div className={`mb-4 mt-[3rem] pr-1 w-full ${cabin.className}`}>
      <div className="w-full flex justify-center mb-6">
        <p className="sm:text-[30px] lg:text-[40px] font-[700]">
          Key <span className="text-[#4D91FF]">Features</span>
        </p>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[1500px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 sm:px-10 lg:px-20">
          {data.map((element, index) => (
            <div
              key={`${index}`}
              className={`rounded-[10px]  landingBox ${
                index > 2 ? "sm:h-[555px] md:h-[560px] lg:h-[640px]" : "sm:h-[600px]  md:h-[560px] lg:h-[660px]"
              }`}
            >
              <div className="w-full">
              <div className="relative w-full flex justify-center sm:h-[250px] lg:h-[309.02px] cursor-pointer">
                <Image src={`/landingPage/${index + 1}.svg`} alt="brand" fill />
              </div>
              </div>
              <div className="h-[50%] mt-8">
                <div className={`px-10 text:text-[16px] lg:text-[20px] font-[700] ${index >2 ? "h-[25%]":"h-[30%]"} `}>
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
