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
import Link from "next/link";
import Image from "next/image";

export default function RelatedProducts() {
  return (
    <div className="flex overflow-x-auto gap-x-14 mb-10 px-6 py-3">
      {jsonData.data.map((element, i) => (
        <Card
          key={i}
          className="mt-6 2xl:min-w-[25vw] 2xl:min-h-[22vh] 4xl:min-w-[15vw] 4xl:min-h-[8vw] relative"
        >
          <div
            className={`absolute h-12 z-50 left-[10px] top-3 4xl:top-24 2xl:top-2 2xl:left-[-2px] w-[2.5px] bg-red-500 rounded-r-3xl`}
          />
          <CardBody>
            <Typography
              color="blue-gray"
              className="mb-2 2xl:text-[16px] font-[600]"
            >
              {element.name}
            </Typography>
            <Typography className="2xl:text-sm">
              {element.description}
            </Typography>
            <div className="flex">
              <div className="flex mt-2">
                <Avatar src="/yahoo.svg" className="" alt="avatar" size="sm" />
                <div className="mt-[10px] ml-3  text-black">
                  <p className="font-[600] text-[18px]">{element.ownerName}</p>
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex justify-between">
              <div className="w-[90px] h-7 px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                <Image
                  alt=""
                  src="/userChip.svg"
                  width={18}
                  height={18}
                  className="ml-2"
                />
                <div className="w-[40px] mr-[-6px] rounded-lg bg-[#E3E1E1] flex justify-center">
                  <p className="font-bold mt-1">5</p>
                </div>
              </div>

              <div className="w-[90px] h-7 px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                <Image
                  alt=""
                  src="/editChip.svg"
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
