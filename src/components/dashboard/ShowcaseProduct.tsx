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

export default function Example() {
  const router = useRouter();

  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  React.useEffect(() => {
    console.log(jsonData.data[0].name);
  }, []);

  const data = [
    {
      id: 0,
      heading: jsonData.data[0].name,
      content: jsonData.data[0].description,
      logoSrc: "/yahoo.svg",
      owner: "Yahoo finance",
      location: "LA, California",
    },
    {
      id: 1,
      heading: jsonData.data[1].name,
      content: jsonData.data[1].content,
      logoSrc: "/yahoo.svg",
      owner: "Yahoo finance",
      location: "LA, California",
    },
    {
      id: 2,
      heading: jsonData.data[2].name,
      content: jsonData.data[2].content,
      logoSrc: "/yahoo.svg",
      owner: "Yahoo finance",
      location: "LA, California",
    },
    {
      id: 3,
      heading: jsonData.data[3].name,
      content: jsonData.data[3].content,
      logoSrc: "/yahoo.svg",
      owner: "Yahoo finance",
      location: "LA, California",
    },
    {
      id: 4,
      heading: jsonData.data[4].name,
      content: jsonData.data[4].content,
      logoSrc: "/yahoo.svg",
      owner: "Yahoo finance",
      location: "LA, California",
    },
  ];

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
  ];

  return (
    <div
      className={`mt-3 ${cabin.className} px-2 py-1 overflow-y-auto overflow-x-hidden max-h-[58vh]`}
    >
      {data.map((element, index) => (
        <div key={index} className=" my-3">
          <Accordion
            open={open === index}
            icon={<Icon id={index} open={open} />}
          >
            <div className="relative">
              {(index === 0 || index % 3 === 0) && (
                <div
                  className={`absolute w-[2.5px] ${
                    open === index ? " h-52" : "h-12"
                  }  top-3 z-50 left-[-3px] bg-red-500 rounded-r-3xl`}
                />
              )}
              {(index === 1 || index % 3 === 1) && (
                <div
                  className={`absolute w-[2.5px] ${
                    open === index ? " h-52" : "h-12"
                  } top-3 z-50 left-[-3px] bg-blue-500 rounded-r-3xl`}
                />
              )}
              {(index === 2 || index % 3 === 2) && (
                <div
                  className={`absolute w-[2.5px] ${
                    open === index ? " h-52" : "h-12"
                  } top-3 z-50 left-[-3px] bg-green-500 rounded-r-3xl`}
                />
              )}
              <Card className="p-2 relative">
                <AccordionHeader
                  className={`${cabin.className} border-none px-4`}
                  onClick={() => {
                    handleOpen(index);
                    if (open === index) {
                      router.push(`/product/${element.id}`);
                    }
                  }}
                >
                  <p>{element.heading}</p>
                </AccordionHeader>
                {open === index && (
                  <div className="w-[73vw] mt-2 bg-gray-300 h-[1px]" />
                )}

                <div className="flex absolute gap-x-4 top-5 left-[50vw]">
                  <div className="w-[80px] h-[28px] px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                    <Image alt="" src="/userChip.svg" width={14} height={14} />
                    <div className="w-[46px] mr-[-6px]  rounded-lg bg-[#E3E1E1] flex justify-center">
                      <p className="font-bold mt-[3px]">5</p>
                    </div>
                  </div>

                  {/* <div className="w-[90px] h-9 px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                    <Image
                      alt=""
                      src="/messageChip.svg"
                      width={20}
                      height={20}
                    />
                    <div className="w-[50px] mr-[-6px] rounded-lg bg-[#E3E1E1] flex justify-center">
                      <p className="font-bold mt-2">10</p>
                    </div>
                  </div> */}

                  <div className="w-[80px] h-[28px] px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                    <Image
                      alt=""
                      src="/greenEditChip.svg"
                      width={14}
                      height={14}
                    />
                    <div className="w-[46px] mr-[-6px] rounded-lg bg-[#E3E1E1] flex justify-center">
                      <p className="font-bold mt-[3px]">35+</p>
                    </div>
                  </div>

                  <div className="w-[80px] h-[28px] px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                    <Image alt="" src="/starChip.svg" width={14} height={14} />
                    <div className="w-[46px] mr-[-6px] rounded-lg bg-[#E3E1E1] flex justify-center">
                      <p className="font-bold mt-[3px]">4.9</p>
                    </div>
                  </div>

                  {/* <button className="bg-[#FFBC35] flex rounded-full py-[6px] justify-center z-10 w-6 h-6 mt-1">
                    <Image
                      className=""
                      src="/pen.svg"
                      alt="brand"
                      width={12}
                      height={12}
                    />
                  </button> */}
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
                <AccordionBody>
                  <div className={`${cabin.className} px-5`}>
                    <div className="flex w-full">
                      <div className="w-full">
                        <p className="w-[98%] mr-3 text-sm">
                          {/* <p className="font-semibold">
                            Description about the product:{" "}
                          </p>{" "} */}
                          {element.content}
                        </p>
                        <div className="mt-2 w-[98%] h-20 flex px-3 py-2">
                          <div className="flex">
                            <div className="flex">
                              <Avatar
                                src="/yahoo.svg"
                                className=""
                                alt="avatar"
                                size="lg"
                              />
                              <div className="mt-[6px] ml-3  text-black">
                                <p className="font-bold">{element.owner}</p>
                                <p className="text-xs">{element.location}</p>
                              </div>
                            </div>
                          </div>
                          <div className="ml-[100px] w-[60%] flex gap-x-6">
                            <div className="bg-gray-300 w-[2px] h-14"></div>
                            {label.map((element, i) => (
                              <button
                                key={i}
                                className={`w-[10vw] mt-4 rounded-lg h-[3.5vh] border text-white text-[12px] bg-[#656565]`}
                              >
                                {element.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-[40%] grid grid-cols-3 gap-x-3 text-black text-[12px] font-semibold">
                        <button className="w-[6vw] rounded-lg h-[3.5vh] bg-[#A0EDA7]">
                          Security (2)
                        </button>
                        <button className="w-[6vw] rounded-lg h-[3.5vh] bg-[#4D91FF]">
                          Profile
                        </button>
                        <button className="w-[6vw] rounded-lg h-[3.5vh] bg-[#A0EDA7]">
                          Attributes (29)
                        </button>
                        <button className="w-[6vw] rounded-lg h-[3.5vh] bg-[#A0EDA7]">
                          Privacy (2)
                        </button>
                        <button className="w-[6vw] rounded-lg h-[3.5vh] bg-[#FFBC35]">
                          Metrics (2)
                        </button>
                        <button className="w-[6vw] rounded-lg h-[3.5vh] bg-[#FFBC35]">
                          Access (2)
                        </button>
                        <button className="w-[6vw] rounded-lg h-[3.5vh] bg-[#4D91FF]">
                          Lifecycle (1)
                        </button>
                        <button className="w-[6vw] rounded-lg h-[3.5vh] bg-[#A0EDA7]">
                          Rules (5) (98%)
                        </button>
                        <button className="w-[6vw] rounded-lg h-[3.5vh] bg-[#A0EDA7]">
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
