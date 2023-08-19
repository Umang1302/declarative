"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Tab1 from "@/components/domePlatform/tabs/Tab1";
import Tab2 from "@/components/domePlatform/tabs/Tab2";
import Tab3 from "@/components/domePlatform/tabs/Tab3";
import Tab4 from "@/components/domePlatform/tabs/Tab4";
import Tab5 from "@/components/domePlatform/tabs/Tab5";
import Tab6 from "@/components/domePlatform/tabs/Tab6";



const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  const [active, setActive] = useState(0);

  const tab = [
    {
      label: "Expansive Integrations",
      component: <Tab1 />,
    },
    {
      label: "Deep Knowledge Graph",
      component: <Tab2 />,
    },
    {
      label: "AI/ML Powered features",
      component: <Tab3 />,
      
    },
    {
      label: "Declarative Products",
      component: <Tab4 />,
      
    },
    {
      label: "Declarative Management Intents",
      component: <Tab5 />,

    },
    {
      label: "Optimal Transparency & Collaboration",
      component: <Tab6 />,

    },
  ];

  return (
    <div className={`mb-4 mt-[5rem] pr-1 w-full ${cabin.className}`}>
      <div className="w-full flex justify-start px-28 mb-6">
        <p className="text-[60px] font-[700]">
          DOME <span className="text-[#4D91FF]">Capabilities</span>
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-full flex justify-around border-b-[1px] border-[#8E8E8E]">
          {tab.map((item, index) => (
            <p
              onClick={() => {
                setActive(index);
              }}
              className={` cursor-pointer text-[18px] py-3 ${
                active === index
                  ? "border-b-[4px] rounded-[2px] border-[#F65A27] font-[700]"
                  : ""
              } `}
              key={index}
            >
              {item.label}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full px-6 py-4">{tab[active].component}</div>
    </div>
  );
}
