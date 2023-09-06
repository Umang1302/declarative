"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useStateRef from "react-usestateref";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  const data = [
    {
      heading: "Metric Intent",
      content: `Use the rich library of declarative functions to
    define your business metrics. Each metric is stored along with
    your data product.`,
    },
    {
      heading: "Rule Intent",
      content: `With dome, defining rules to check quality of your data product is no longer a sole responsibility of the owner. Everyone using the product can easily define new rules. You spot an issue, you declare a new rule. It’s that simple
      `,
    },
    {
      heading: "Profile Intent",
      content: `Dome computes a deep profile for each Data Product. The profile itself is stored inline with Data making it possible for you to review profiles on a Daily basis, for a Time series, or for the entire Product 
      `,
    },
    {
      heading: "Security & Privacy Intent",
      content: `Dome auto detects sensitive Product attributes and classifies them accordingly. Protect sensitive attributes by defining Intents to redact or mask them
      `,
    },
    {
      heading: "Access Intent",
      content: `Control which users and applications can access
    Data Products. Coordinated with Security intent allowing you to
    limit access to sensitive data.`,
    },
    {
      heading: "Lifecycle Intent",
      content: `Declare Retention period, action on expiry, &
    Roles to manage ongoing changes & operations.`,
    },
    {
      heading: "Knowledge link",
      content: `Don’t waste months and years to model your data in order to use it. Leverage Dome’s knowledge graph to discover associations between your data products as you use them. Know the full lineage at any point in time
      `,
    },
    {
      heading: "Sharing Intent",
      content: `Get ready to migrate from static Reports and
    Statements delivery to secured sharing of Data Products with
    your clients.`,
    },
  ];

  const [active, setActive, activeRef] = useStateRef(0);

  const handleSlideRight = (active: any) => {
    let index: any;
    if (active === data.length - 1) {
      index = 0;
    } else {
      index = active + 1;
    }

    setActive(index);
  };

  const handleSlideLeft = (active: any) => {
    let index: any;
    if (active === 0) {
      index = data.length - 1;
    } else {
      index = active - 1;
    }

    setActive(index);
  };

  useEffect(() => {
    console.log("HHHHHHHHH");
    const i = setInterval(() => {
      let index = activeRef.current;
      if (index > 6) {
        index = 0;
      } else {
        index = activeRef.current + 1;
      }
      console.log(index);
      setActive(index);
    }, 8000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="sm:hidden lg:flex w-full roll-out justify-center mt-6">
        <div className="w-[50%] px-16 flex gap-x-6 items-center">
          <button
            onClick={() => {
              handleSlideLeft(active);
            }}
          >
            <div className="relative w-[20px] h-[20px]">
              <Image src={`/domePlaform/left.svg`} alt="brand" fill />
            </div>
          </button>
          <div className="px-6">
            <p className="text-[36px] font-[700]">{data[active].heading}</p>
            <p className="text-[18px] mt-5 text-[#555]">{data[active].content}</p>
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
        <div className="flex  w-[50%] justify-center">
          <div className="relative w-full h-[400px]">
            <Image src={`/domePlaform/8.svg`} alt="brand" fill />
          </div>
        </div>
      </div>

      <div className="sm:visible lg:hidden w-full roll-out flex flex-col justify-center mt-6">
        <div className="w-full h-[400px] flex gap-x-6 items-center">
          <button
            onClick={() => {
              handleSlideLeft(activeRef.current);
            }}
          >
            <div className="relative w-[20px] h-[20px]">
              <Image src={`/domePlaform/left.svg`} alt="brand" fill />
            </div>
          </button>
          <div className="px-6">
            <p className="text-center text-[36px] font-[700]">
              {data[active].heading}
            </p>
            <p className="text-center text-[#555] text-[18px] mt-5">
              {data[active].content}
            </p>
          </div>
          <button
            onClick={() => {
              handleSlideRight(activeRef.current);
            }}
          >
            <div className="relative w-[20px] h-[20px]">
              <Image src={`/domePlaform/right.svg`} alt="brand" fill />
            </div>
          </button>
        </div>
        <div className="flex mt-[-2rem] w-full px-3 justify-center">
          <div className="relative w-full h-[400px]">
            <Image src={`/domePlaform/8.svg`} alt="brand" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
