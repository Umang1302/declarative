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

export default function Navsearchbar({ data }: any) {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-2xl font-bold">{data.name}</p>
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
        <div className="w-[60vw] mt-6 bg-gray-300 h-[1px]" />
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
              <p className="w-[98%] mr-3 text-sm">
                <span className="font-semibold">
                  Description about the product:{" "}
                </span>{" "}
                {data.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[200px] h-[100px] top-7 left-[68vw]">
        <Image
          alt=""
          src="/qrcode.svg"
          width={80}
          height={80}
          className="ml-2"
        />
      </div>
    </div>
  );
}
