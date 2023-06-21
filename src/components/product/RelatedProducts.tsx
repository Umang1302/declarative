"use client";

import React, { useState, useRef } from "react";
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

  const labelRef = useRef<any>(null);

  const scroll = (scrollOffset: any) => {
    console.group(labelRef.current.pageYOffset);
    // if (labelRef.current && labelRef.current.scrollLeft)
    labelRef.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-2xl">Related Products</h1>
        <div className="flex mr-7">
          <button
            onClick={() => {
              scroll(-40);
            }}
          >
            <div className="relative w-[20px] h-[20px]">
              <Image src={`/labelLeft.svg`} alt="brand" fill />
            </div>
          </button>
          <button
            onClick={() => {
              scroll(40);
            }}
          >
            <div className="relative w-[20px] h-[20px]">
              <Image src={`/labelRight.svg`} alt="brand" fill />
            </div>
          </button>
        </div>
      </div>

      <div
        ref={labelRef}
        className="flex overflow-x-auto gap-x-6 py-3 md:w-[85vw] xl:w-[75vw] 2xl:w-[75vw] 3xl:w-[80vw] 4xl:w-[78vw] min-[1500px]:w-[80%] max-w-[1480px] flex-grow"
      >
        {jsonData.data.map((element, i) => (
          <Card key={i} className="mt-3 min-w-[400px] relative">
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
                  <Avatar
                    src="/yahoo.svg"
                    className=""
                    alt="avatar"
                    size="sm"
                  />
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
    </>
  );
}
