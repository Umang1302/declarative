"use client";

import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function Navsearchbar({ data }: any) {
  const label = [
    {
      id: 1,
      label: "Mutual Funds",
    },
    {
      id: 2,
      label: "Securities",
    },
  ];

  return (
    <div className="flex justify-between">
      <div>
        <p className="text-2xl font-bold">{data.name}</p>
        <div className="flex mt-3 gap-x-5">
          <p className="text-[12px]">
            <span className="font-[800]">Product Id:</span> {data.productId}
          </p>
          <p className="text-[12px] flex">
            <div className="w-1 h-1 mt-[6px] mr-1 bg-blue-800 rounded-full"></div>
            {data.tier}
          </p>
          <p className="text-[12px]">
            <span className="font-[800]">Source: </span> Dataset
          </p>
          <p className="text-[12px]">
            <span className="font-[800]">Source Id: </span>{" "}
            {data.sourceDatasetId}
          </p>
        </div>

        <div className="flex absolute gap-x-4 top-6 left-[30vw] mt-1">
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

          <button className="bg-[#FFBC35] flex rounded-full py-[6px] justify-center z-10 w-6 h-6">
            <Image
              className=""
              src="/pen.svg"
              alt="brand"
              width={12}
              height={12}
            />
          </button>
          {/* <button className="bg-[#F65A27] flex rounded-full py-[6px] justify-center z-10 w-6 h-6 ml-8">
                    <Image
                      className=""
                      src="/cross.svg"
                      alt="brand"
                      width={12}
                      height={12}
                    />
                  </button> */}
        </div>
        <div className="w-[60vw] mt-3 bg-gray-300 h-[1px]" />
        <div>
          <div className="mt-2 w-[98%] h-20 flex px-3 py-2">
            <div className="flex">
              <div className="flex">
                <Avatar src="/yahoo.svg" className="" alt="avatar" size="lg" />
                <div className="mt-[6px] ml-3  text-black">
                  <p className="font-bold">{data.ownerName}</p>
                  <p className="text-xs">LA, California</p>
                </div>
              </div>
            </div>
            <div className="ml-[90px] w-[60%] flex gap-x-6">
              <div>
                <p className="w-[98%] mr-3 text-sm">
                  <p className="font-semibold">
                    Description about the product:{" "}
                  </p>{" "}
                  {data.description}
                </p>
                <div>
                  <div className="flex gap-x-3  mt-2">
                    {label.map((element, i) => (
                      <button
                        key={i}
                        className={`w-[10vw] rounded-lg h-[3vh] text-sm
               bg-[#C4C4C4] font-[600] text-[16px] ${cabin.className}`}
                      >
                        {element.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[200px] h-[100px] top-[1.4%] left-[64vw]">
        <Image
          alt=""
          src="/qrCode1.svg"
          width={100}
          height={100}
          className="ml-2"
        />
      </div>
    </div>
  );
}
