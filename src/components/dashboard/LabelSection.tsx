"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
const cabin = Cabin({ subsets: ["latin"] });
import { useRef } from "react";
export default function LabelSection() {
  const label = [
    {
      id: 1,
      label: "Mutual",
    },
    {
      id: 2,
      label: "Securities",
    },
    {
      id: 3,
      label: "Benchmarks",
    },
    {
      id: 4,
      label: "ESG",
    },
    {
      id: 5,
      label: "Economy",
    },
    {
      id: 6,
      label: "Census",
    },
    {
      id: 5,
      label: "Economy",
    },
    {
      id: 6,
      label: "Census",
    },
    {
      id: 6,
      label: "Economy",
    },
    {
      id: 1,
      label: "Mutual",
    },
    {
      id: 2,
      label: "Securities",
    },
    {
      id: 3,
      label: "Benchmarks",
    },
    {
      id: 4,
      label: "ESG",
    },
    {
      id: 5,
      label: "Economy",
    },
    {
      id: 6,
      label: "Census",
    },
    {
      id: 2,
      label: "Securities",
    },
    {
      id: 3,
      label: "Benchmarks",
    },
    {
      id: 4,
      label: "ESG",
    },
    {
      id: 5,
      label: "Economy",
    },
    {
      id: 6,
      label: "Census",
    },
  ];

  //  ${
  //   i === 0
  //     ? "border-[#A0EDA7]"
  //     : i === 1
  //     ? "border-[#4D91FF]"
  //     : i === 2
  //     ? "border-[#FFBC35]"
  //     : i === 3
  //     ? "border-[#F65A27]"
  //     : i === 4
  //     ? "border-[#03214C]"
  //     : i === 5
  //     ? "border-[#000000]"
  //     : ""
  // }

  const labelRef = useRef<any>(null);

  const scroll = (scrollOffset: any) => {
    console.group(labelRef.current.pageYOffset);
    // if (labelRef.current && labelRef.current.scrollLeft)
    labelRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="flex w-full h-full">
      <button
        onClick={() => {
          scroll(-40);
        }}
      >
        <div className="relative w-[20px] mt-5 h-[20px]">
          <Image src={`/labelLeft.svg`} alt="brand" fill />
        </div>
      </button>
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(251, 251, 251, 1) 0%, rgba(251, 251, 251, 0) 100%)",
        }}
        ref={labelRef}
        className="mt-5 h-full md:w-[5vw] xl:w-[15vw] 2xl:w-[10vw] 3xl:w-[10vw] 4xl:w-[10vw] min-[1500px]:w-[80%] flex-grow flex gap-x-3 overflow-x-auto"
      >
        {/* <div className="flex h-full gap-x-3"> */}
        {label.map((element, i) => (
          <button
            key={i}
            className={`rounded-[10px] px-4 border-gray-400 border-[2px] text-sm 
         text-gray-600 font-[600] ${cabin.className}`}
          >
            {element.label}
          </button>
        ))}
        {/* </div> */}
      </div>
      <button
        onClick={() => {
          scroll(40);
        }}
      >
        <div className="relative w-[20px] mt-5 h-[20px]">
          <Image src={`/labelRight.svg`} alt="brand" fill />
        </div>
      </button>
    </div>
  );
}
