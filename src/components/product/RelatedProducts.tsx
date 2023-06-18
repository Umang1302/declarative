"use client";

import React, { useState } from "react";
import jsonData from "../../../data.json";

import {
  Typography,
  Card,
  CardBody,
  CardFooter,
  Button,
  Avatar,
} from "@material-tailwind/react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function RelatedProducts() {
  const router = useRouter();

  return (
    <div className="flex overflow-x-auto gap-x-14 px-1 py-3 max-w-[1440px]">
      {jsonData.data.map((element, i) => (
        <Card key={i} className="mt-3 min-w-[25rem] relative">
          <div
            className={`absolute h-12 z-50 top-3 w-[2.5px] bg-red-500 rounded-r-3xl`}
          />
          <CardBody>
            <Typography
              color="blue-gray"
              className={`${cabin.className} mb-2 font-[700]`}
            >
              <button
                onClick={() => {
                  router.push(`/product/${i}`);
                }}
              >
                {element.name}
              </button>
            </Typography>
            <Typography className={`2xl:text-sm ${cabin.className}`}>
              {element.description}
            </Typography>
            <div className="flex">
              <div className="flex mt-2">
                <Avatar src="/yahoo.svg" className="" alt="avatar" size="sm" />
                <div className="mt-[10px] ml-3  text-black">
                  <p className={`font-[600] text-[18px] ${cabin.className}`}>
                    {element.ownerName}
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex justify-between">
              <div className="w-[90px] h-7 px-2 rounded-lg bg-[#E3E1E1] flex justify-between">
                <Image
                  alt=""
                  src="/tier.svg"
                  width={18}
                  height={18}
                  className="ml-1"
                />
                <div className="w-[46px] rounded-lg bg-[#E3E1E1] flex justify-center">
                  <p className="font-bold flex items-center text-[0.8rem]">
                    {element.tier}
                  </p>
                </div>
              </div>

              <div className="w-[90px] h-7 px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                <Image
                  alt=""
                  src="/greenEditChip.svg"
                  width={18}
                  height={18}
                  className="ml-2"
                />
                <div className="w-[40px] mr-[-6px] rounded-lg bg-[#E3E1E1] flex justify-center">
                  <p className="font-bold mt-[2px]">39+</p>
                </div>
              </div>

              <div className="w-[90px] h-7 px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                <Image
                  alt=""
                  src="/starChip.svg"
                  width={18}
                  height={18}
                  className="ml-2"
                />
                <div className="w-[40px] mr-[-6px] rounded-lg bg-[#E3E1E1] flex justify-center">
                  <p className="font-bold mt-1">4.9</p>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
