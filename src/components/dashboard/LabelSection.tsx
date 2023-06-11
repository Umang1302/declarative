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
    <div className="mt-5">
      <div className="flex w-full gap-x-3">
        {label.map((element, i) => (
          <button
            key={i}
            className={`w-[12vw] rounded-lg h-[3.5vh] 4xl:h-[2vh] text-sm 
               bg-[#C4C4C4] font-[800] text-[20px] ${cabin.className}`}
          >
            {element.label}
          </button>
        ))}
      </div>
    </div>
  );
}
