"use client";

import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function ProductHeading({ data }: any) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const label = [
    {
      id: 1,
      label: "Label 1",
    },
    {
      id: 2,
      label: "Label 2",
    },
    {
      id: 3,
      label: "Label 3",
    },
  ];

  return (
    <div className="flex justify-between">
      <div className={`${cabin.className} w-full`}>
        <p className="text-2xl font-bold">{data.name}</p>
        <div className="flex mt-3 gap-x-5">
          <p className="text-[1rem]">
            <span className="font-[800]">Product Id:</span> {data.productId}
          </p>
          {/* <p className="text-[2rem] flex">
            <div className="w-1 h-1 mt-[6px] mr-1 bg-blue-800 rounded-full"></div>
            {data.tier}
          </p> */}
          <p className="text-[1rem]">
            <span className="font-[800]">Source: </span> Dataset
          </p>
          <p className="text-[1rem]">
            <span className="font-[800]">Source Id: </span>{" "}
            {data.sourceDatasetId}
          </p>

          <Dialog open={open} handler={handleOpen}>
            <DialogHeader className={`${cabin.className}`}>
              QR Code
            </DialogHeader>
            <DialogBody divider>
              <div className="w-full h-full flex justify-center">
                <Image
                  alt=""
                  src="/qrCode1.svg"
                  width={100}
                  height={100}
                  className="ml-2"
                />
              </div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span className={`${cabin.className} normal-case text-[1rem]`}>
                  Close
                </span>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>

        {/* CHIP SECTION */}

        <div className="flex absolute gap-x-4 top-6 right-5 mt-1">
          <div className="w-[90px] h-7 px-2 rounded-lg bg-[#E3E1E1] flex justify-between">
            <Image
              alt=""
              src="/tier.svg"
              width={18}
              height={18}
              className="ml-1"
            />
            <div className="w-[46px] rounded-lg bg-[#E3E1E1] flex justify-center">
              <p className="font-bold mt-[5px] text-[0.8rem]">{data.tier}</p>
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

          {/* <button className="bg-[#FFBC35] flex rounded-full py-[6px] justify-center z-10 w-6 h-6">
            <Image
              className=""
              src="/pen.svg"
              alt="brand"
              width={12}
              height={12}
            />
          </button> */}

          <button
            onClick={handleOpen}
            className="px-5 border-black bg-[#F65A27] text-white shadow-lg rounded-lg "
          >
            <p className="text-[1rem] font-[600]">QR Code</p>
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

        {/* Description Section */}

        <div className="w-full mt-3 bg-gray-300 h-[1px]" />

        <div className="w-[100%] gap-x-7  h-20 flex px-3 py-2">
          <div className="flex">
            <div className="flex">
              <Avatar src="/yahoo.svg" className="" alt="avatar" size="lg" />
              <div className="mt-[6px] ml-3  text-black">
                <p className="font-bold">{data.ownerName}</p>
                <p className="text-xs">LA, California</p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-6">
            <p className="w-[98%] mr-3 text-sm">
              <p className="font-semibold">Description about the product: </p>{" "}
              {data.description}
            </p>

            <div className="flex gap-x-3  mt-2">
              {label.map((element, i) => (
                <button
                  key={i}
                  className={`w-[12vw] max-w-[160px] rounded-lg h-[3.5vh] 4xl:h-[2vh] text-sm 
               bg-[#C4C4C4] font-[800] text-[20px] ${cabin.className}`}
                >
                  {element.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
