"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  ListItemSuffix,
  button,
} from "@material-tailwind/react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Cabin } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import OnboardingPage1 from "../onboarding/Page1";

const cabin = Cabin({ subsets: ["latin"] });

export default function OnboardingHeading({ setDataSetVal, dataSetVal }: any) {
  const router = useRouter();

  const [select, setSelected] = useState(0);
  const [tabs, setTabs] = useState([
    {
      header: "Select a Data Source",
      content: (
        <OnboardingPage1
          setSelected={setSelected}
          dataSetVal={dataSetVal}
          setDataSetVal={setDataSetVal}
        />
      ),
    },
    {
      header: "Explore Data Sets",
      content: <></>,
    },
    {
      header: "Onboard Product",
      content: <></>,
    },
  ]);

  useEffect(() => {}, [select]);

  return (
    <>
      <div className={`w-full h-full  py-10 text-black ${cabin.className}`}>
        <div className="w-full flex justify-center">
          <p className="text-[48px] font-[600]">Onboard a New Product</p>
        </div>
        <div className="flex w-full justify-center gap-x-4">
          {tabs.map((item: any, index: any) => (
            <button
              key={index}
              onClick={() => {
                setSelected(index);
              }}
              className={`px-8 py-1 rounded-[10px] ${
                select === index
                  ? "bg-[#4D91FF] text-white"
                  : "border-[1px] border-black"
              }`}
            >
              {item.header}
            </button>
          ))}
        </div>
        <div>
          {tabs.map((item, i) => {
            if (i === select) {
              return <>{item.content && item.content}</>;
            }
          })}
        </div>
      </div>
    </>
  );
}
