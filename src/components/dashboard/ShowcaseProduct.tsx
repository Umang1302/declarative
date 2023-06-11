"use client";

import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  Avatar,
} from "@material-tailwind/react";
import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import jsonData from "../../../data.json";
const cabin = Cabin({ subsets: ["latin"] });

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function ShowcaseProduct({ page, prodData }: any) {
  const router = useRouter();
  const [open, setOpen] = useState(-1);
  const [productList, setProductList] = useState<any>([]);

  const handleOpen = (value: any) => {
    setOpen(open === value ? -1 : value);
  };

  React.useEffect(() => {
    console.log(jsonData.data[0].name);
  }, []);

  // const data = jsonData.data;
  // const dataLength = jsonData.data.length;

  React.useEffect(() => {
    setProductList(prodData);
  }, [page, prodData]);

  const label = [
    {
      id: 1,
      label: "Mutual",
    },
    {
      id: 2,
      label: "Securities",
    },
  ];

  return (
    <div
      className={`${cabin.className} overflow-y-auto px-2 py-1 max-h-[65vh] w-[78vw]`}
    >
      {productList.map((element: any, index: number) => (
        <div key={index} className=" my-3">
          <Accordion
            open={open === index}
            icon={<Icon id={index} open={open} />}
          >
            <div className="relative">
              {(index === 0 || index % 3 === 0) && (
                <div
                  className={`absolute w-[2.5px] ${
                    open === index ? " h-48" : "h-12"
                  }  top-3 z-50 left-[-3px] bg-red-500 rounded-r-3xl`}
                />
              )}
              {(index === 1 || index % 3 === 1) && (
                <div
                  className={`absolute w-[2.5px] ${
                    open === index ? " h-48" : "h-12"
                  } top-3 z-50 left-[-3px] bg-blue-500 rounded-r-3xl`}
                />
              )}
              {(index === 2 || index % 3 === 2) && (
                <div
                  className={`absolute w-[2.5px] ${
                    open === index ? " h-48" : "h-12"
                  } top-3 z-50 left-[-3px] bg-green-500 rounded-r-3xl`}
                />
              )}
              <Card className="p-2 max-w-[1560px] relative">
                <AccordionHeader
                  className={`${cabin.className} border-none px-4`}
                  onClick={() => {
                    handleOpen(index);
                  }}
                >
                  <div className="flex w-full justify-between">
                    <div
                      onClick={() => {
                        if (open === index) {
                          router.push(`/product/${index}`);
                        }
                      }}
                    >
                      <p className="text-[24px] font-[700]">{element.name}</p>
                    </div>

                    <div className="flex gap-x-4">
                      <div className="w-[100px] h-[36px] px-2 rounded-lg bg-[#E3E1E1] flex justify-between">
                        <Image
                          alt=""
                          src="/tier.svg"
                          width={18}
                          height={18}
                          className="ml-1"
                        />
                        <div className="w-[46px] rounded-lg bg-[#E3E1E1] flex justify-center">
                          <p className="font-bold mt-[8px] text-[0.8rem]">
                            {element.tier}
                          </p>
                        </div>
                      </div>

                      <div className="w-[100px] h-[36px] px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                        <Image
                          alt=""
                          src="/greenEditChip.svg"
                          width={18}
                          height={18}
                          className="ml-1"
                        />
                        <div className="w-[46px] mr-[-6px]  rounded-lg bg-[#E3E1E1] flex justify-center">
                          <p className="font-bold mt-[6px]">35+</p>
                        </div>
                      </div>

                      <div className="w-[100px] h-[36px] px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                        <Image
                          alt=""
                          src="/starChip.svg"
                          width={18}
                          height={18}
                          className="ml-1"
                        />
                        <div className="w-[46px] mr-[-6px]  rounded-lg bg-[#E3E1E1] flex justify-center">
                          <p className="font-bold mt-[6px]">5+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionHeader>

                {open === index && (
                  <div className="w-[73vw] mt-2 bg-gray-300 h-[1px]" />
                )}

                <AccordionBody>
                  <div className={`${cabin.className} px-5`}>
                    <div className="flex w-full 3xl:h-[10rem] 4xl:h-[10rem] justify-between">
                      <div className="w-full">
                        <p className="w-[40vw] mr-3 text-[18px] text-black font-[400]">
                          {element.description}
                        </p>
                        <div className="mt-2 w-[98%] h-20 flex px-3 py-2">
                          <div className="flex">
                            <div className="flex mt-2">
                              <Avatar
                                src="/yahoo.svg"
                                className=""
                                alt="avatar"
                                size="md"
                              />
                              <div className="mt-[10px] ml-3  text-black">
                                <p className="font-[600] text-[18px]">
                                  {element.ownerName}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-x-3 ml-10">
                            {label.map((element, i) => (
                              <button
                                key={i}
                                className={`w-[8vw] mt-4 rounded-lg h-[3vh] border text-[16px] text-black bg-[#C4C4C4] font-[600] px-2`}
                              >
                                {element.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-[40vw] 3xl:w-[40vw] 4xl:w-[70vw] grid grid-cols-3 gap-x-3 text-black font-[600]">
                        <button className="w-[8vw] rounded-lg h-[3.5vh] 4xl:w-[6vw] 4xl:h-[2vh] bg-[#A0EDA7]">
                          Security (2)
                        </button>
                        <button className="w-[8vw] rounded-lg h-[3.5vh] 4xl:h-[2vh] 4xl:w-[6vw] bg-[#4D91FF]">
                          Profile
                        </button>
                        <button className="w-[8vw] rounded-lg h-[3.5vh] 4xl:h-[2vh] 4xl:w-[6vw] bg-[#A0EDA7]">
                          Attributes (29)
                        </button>
                        <button className="w-[8vw] rounded-lg h-[3.5vh] 4xl:h-[2vh] 4xl:w-[6vw] bg-[#A0EDA7]">
                          Privacy (2)
                        </button>
                        <button className="w-[8vw] rounded-lg h-[3.5vh] 4xl:h-[2vh] 4xl:w-[6vw] bg-[#FFBC35]">
                          Metrics (2)
                        </button>
                        <button className="w-[8vw] rounded-lg h-[3.5vh] 4xl:h-[2vh] 4xl:w-[6vw] bg-[#FFBC35]">
                          Access (2)
                        </button>
                        <button className="w-[8vw] rounded-lg h-[3.5vh] 4xl:h-[2vh] 4xl:w-[6vw] bg-[#4D91FF]">
                          Lifecycle (1)
                        </button>
                        <button className="w-[8vw] rounded-lg h-[3.5vh] 4xl:h-[2vh] 4xl:w-[6vw] bg-[#A0EDA7]">
                          Rules (5) (98%)
                        </button>
                        <button className="w-[8vw] rounded-lg h-[3.5vh] 4xl:h-[2vh] 4xl:w-[6vw] bg-[#A0EDA7]">
                          Sharing (0)
                        </button>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Card>
            </div>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
