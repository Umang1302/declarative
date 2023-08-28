"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  const data = [
    {
      heading: `Auto Tiering`,
      content: `Dome tracks usage frequency, volume, impact, and computes a criticality score for each Data Product. It then categorizes Products into criticality tiers allowing you to prioritize management for Products that matter the most.`,
    },
    {
      heading: `Auto Classification`,
      content: (
        <p>
          Dome leverages AI/ML models to classify every attribute automatically.
          The auto classification is avaiable for declarative definition of
          management Intents like &quot;Redact attributes classified as
          sensitive using hash except for Audit purposes&quot;.
        </p>
      ),
    },
    {
      heading: `Auto DQ`,
      content: `Dome comes equipped with standard quality check templates that are applied declaratively on Products. It also combines rich Profile and Metrics information to automate detection of anomalies and trigger exception management workflows.`,
    },
    {
      heading: `Auto Profile`,
      content: `Dome maintains rich Profile information for each Attribute. The Profile is available natively for each Product and is also available within the knowledge graph. Profiles are also available for declarative definition on Rules or Metrics.`,
    },
    {
      heading: `Auto Metric`,
      content: `Dome auto computes basic and generic metrics on data using profiles. The basic metrics are available for declarative definition of advanced and time series metrics. Each metric also becomes part of the knowledge graph.`,
    },
    {
      heading: `Auto Link`,
      content: `Dome maintains information about each Product, Attribute, and Intent in a deep knowledge graph. It then uses the graph to identify relationships between Attributes and Products to enable effective data discovery journeys.`,
    },
  ];

  return (
    <div>
    <div className="w-[1200px] sm:hidden lg:flex justify-center roll-out gap-x-10 mt-6">
      <div className="flex w-full">
        <div className="w-full grid grid-cols-3 gap-x-5 gap-y-6 px-20">
          {data.map((element, index) => (
            <div
              key={`${index}`}
              className="rounded-[10px] h-[650px] landingBox"
            >
              <div className="relative w-[100%] h-[270.02px] cursor-pointer">
                <Image src={`/domePlaform/${index + 1}.svg`} alt="brand" fill />
              </div>
              <div className="h-[50%] mt-8">
                <div className="flex justify-center text-[20px] font-[700] h-[10%]">
                  {element.heading}
                </div>
                <div className="px-10 mt-8 text-[18px] text-[#555] h-[60%]">
                  {element.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="sm:visible lg:hidden w-full flex justify-center roll-out gap-x-10 mt-6">
      <div className="flex w-full">
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-6 px-6">
          {data.map((element, index) => (
            <div
              key={`${index}`}
              className="rounded-[10px] h-[500px] landingBox"
            >
              <div className="relative w-[100%] h-[200.02px] cursor-pointer">
                <Image src={`/domePlaform/${index + 1}.svg`} alt="brand" fill />
              </div>
              <div className="h-[50%] mt-2">
                <div className="flex justify-center text-[16px] font-[700] h-[10%]">
                  {element.heading}
                </div>
                <div className="px-10 mt-5 text-[16px] text-[#555] h-[60%]">
                  {element.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
