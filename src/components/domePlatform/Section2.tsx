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

  const handleSlideRight = (active: any) => {
    let index: any;
    if (active === tab.length - 1) {
      index = 0;
    } else {
      index = active + 1;
    }

    setActive(index);
  };

  const handleSlideLeft = (active: any) => {
    let index: any;
    if (active === 0) {
      index = tab.length - 1;
    } else {
      index = active - 1;
    }

    setActive(index);
  };

  return (
    <div>
      <div
        className={`mb-4 sm:hidden lg:flex justify-center mt-[5rem] w-full ${cabin.className}`}
      >
        <div className="max-w-[1200px]">
          <div className="w-full mb-6">
            <p className="text-[40px] font-[700]">
              DOME <span className="text-[#4D91FF]">Capabilities</span>
            </p>
          </div>
          <div className="flex w-[1200px] max-w-[1200px]">
            <div className="flex gap-x-20 border-b-[1px] border-[#8E8E8E]">
              {tab.map((item, index) => (
                <div
                  onClick={() => {
                    setActive(index);
                  }}
                  className={`cursor-pointer flex justify-center text-[16px] py-3 ${
                    active === index
                      ? "border-b-[4px] rounded-[2px] border-[#F65A27] font-[700]"
                      : ""
                  } `}
                  key={index}
                >
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full px-6 py-4">{tab[active].component}</div>
        </div>
      </div>

      <div
        className={`mb-4 sm:visible lg:hidden justify-center mt-[5rem] w-full ${cabin.className}`}
      >
        <div className="max-w-[1200px]">
          <div className="w-full flex justify-center items-center mb-6">
            <p className="text-[40px] font-[700]">
              DOME <span className="text-[#4D91FF]">Capabilities</span>
            </p>
          </div>
          <div className="flex w-full justify-center max-w-[1200px]">
            <div className="w-full flex justify-between px-5 border-b-[1px] border-[#8E8E8E] overflow-x-auto">
              <button
                onClick={() => {
                  handleSlideLeft(active);
                }}
              >
                <div className="relative w-[20px] h-[20px]">
                  <Image src={`/domePlaform/left.svg`} alt="brand" fill />
                </div>
              </button>
              <div
                onClick={() => {
                  setActive(active);
                }}
                className={`cursor-pointer flex justify-center text-[16px] py-3 ${
                  active === active
                    ? "border-b-[4px] rounded-[2px] border-[#F65A27] font-[700]"
                    : ""
                } `}
                key={active}
              >
                <p>{tab[active].label}</p>
              </div>
              <button
                onClick={() => {
                  handleSlideRight(active);
                }}
              >
                <div className="relative w-[20px] h-[20px]">
                  <Image src={`/domePlaform/right.svg`} alt="brand" fill />
                </div>
              </button>
            </div>
          </div>
          <div className="w-full px-6 py-4">{tab[active].component}</div>
        </div>
      </div>
    </div>
  );
}
