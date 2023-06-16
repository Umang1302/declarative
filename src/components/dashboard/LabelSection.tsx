"use client";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function LabelSection() {
  const label = [
    {
      id: 1,
      label: "Mutual Funds",
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

  return (
    <div className="mt-5 w-[98%] overflow-x-auto overflow-y-hidden h-full">
      <div className="flex h-full gap-x-3 w-full px-4">
        {label.map((element, i) => (
          <button
            key={i}
            className={`rounded-[10px] h-[25px] px-4 border-gray-400 border-[2px] text-sm 
         text-gray-600 font-[600] ${cabin.className}`}
          >
            {element.label}
          </button>
        ))}
      </div>
    </div>
  );
}
