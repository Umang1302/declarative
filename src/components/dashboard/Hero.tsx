"use client";

import React from "react";
import { Cabin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import LabelSection from "@/components/dashboard/LabelSection";
import { Breadcrumbs, Button, IconButton } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import jsonData from "../../../data.json";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero({
  active,
  setActive,
  jsonData,
  dataLength,
  setProdData,
}: any) {
  const [sort, setSort] = React.useState<boolean>(false);

  const getItemProps = (index: any) =>
    ({
      // variant: active === index ? "filled" : "text",
      // color: active === index ? "blue" : "blue-gray",
      onClick: () => setActive(index),
      className: `rounded-full shadow-none bg-transparent hover:bg-transparent hover:shadow-none ${
        active === index ? "text-[#F65A27]" : "text-gray-500"
      }`,
    } as any);

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const sortFunctionality = () => {
    if (!sort) {
      setSort(true);
    } else {
      setSort(false);
    }

    const start = (active - 1) * 10;
    const end = active * 10;
    const currentData = jsonData.data.slice(start, end);
    if (!sort) {
      let sortedData = currentData.sort((a: any, b: any) =>
        a.name > b.name
          ? 1
          : a.name === b.name
          ? a.name > b.name
            ? 1
            : -1
          : -1
      );
      setProdData(sortedData);
    } else {
      setProdData(currentData);
    }
  };

  return (
    <div
      className={`mt-5 relative flex w-full h-[80px] max-w-[1560px]  ${cabin.className}`}
    >
      <div className="flex justify-between w-full">
        <div className="w-[70%] h-full flex items-center">
          <h1 className="font-bold text-4xl">Products</h1>
        </div>
        <div>
          <Breadcrumbs className=" bg-transparent w-full ">
            <Link href="/" className="flex text-[#8E8E8E]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mt-[2px]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="ml-1 ">Home</span>
            </Link>

            <Link href="/product/0" className="flex  text-[#F65A27]">
              Products
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <div className="flex absolute w-full h-[80px] right-5 justify-end items-end">
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-2 rounded-full"
          onClick={prev}
          disabled={active === 1}
        >
          <ChevronLeftIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
        <div className="items-center gap-2">
          {[...Array(Math.ceil(dataLength / 10))].map((v, i) => {
            return (
              <IconButton key={i + 1} {...getItemProps(i + 1)}>
                <p className="">{i + 1}</p>
              </IconButton>
            );
          })}
        </div>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-2 rounded-full"
          onClick={next}
          disabled={active === Math.ceil(dataLength / 6)}
        >
          <ChevronRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
        <div className="h-full pt-[2.8rem]">
          <div
            className="relative w-6 h-6"
            onClick={() => {
              console.log("clicked");
              sortFunctionality();
            }}
          >
            <Image alt="" src="/sort.svg" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
