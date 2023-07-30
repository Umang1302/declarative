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

  const [activeLink, setActiveLink] = useState(false);

  React.useEffect(() => {
    console.log(jsonData.data[0].name);
  }, []);

  // const data = jsonData.data;
  // const dataLength = jsonData.data.length;

  React.useEffect(() => {
    setProductList(prodData);
  }, [page, prodData]);

  React.useEffect(() => {}, [activeLink]);

  return (
    <div
      className={`${cabin.className} overflow-y-auto w-full max-w-[1560px] pr-1 max-h-[63vh]`}
    >
      {productList.map((element: any, index: number) => (
        <div key={index} className="my-3 w-full">
          <Accordion
            open={open === index}
            icon={<Icon id={index} open={open} />}
          >
            <div className="relative">
              {/* {(index === 0 || index % 3 === 0) && (
                <div
                  className={`absolute w-[2.5px] ${
                    open === index ? " h-48" : "h-10"
                  }  top-3 z-50 left-[-3px] bg-red-500 rounded-r-3xl`}
                />
              )}
              {(index === 1 || index % 3 === 1) && (
                <div
                  className={`absolute w-[2.5px] ${
                    open === index ? " h-48" : "h-10"
                  } top-3 z-50 left-[-3px] bg-blue-500 rounded-r-3xl`}
                />
              )}
              {(index === 2 || index % 3 === 2) && (
                <div
                  className={`absolute w-[2.5px] ${
                    open === index ? " h-48" : "h-10"
                  } top-3 z-50 left-[-3px] bg-green-500 rounded-r-3xl`}
                />
              )} */}
              <Card className="max-w-[1680px] relative">
                <AccordionHeader
                  className={`${cabin.className} border-none px-4 h-[4rem]`}
                  onClick={() => {
                    handleOpen(index);
                  }}
                >
                  <div className="flex w-full justify-between">
                    <div className="flex items-center">
                      <p
                        onClick={() => {
                          if (activeLink) {
                            router.push(`/dome/product/${index}`);
                          }
                        }}
                        onMouseEnter={() => {
                          setActiveLink(true);
                        }}
                        onMouseOut={() => {
                          setActiveLink(true);
                        }}
                        className={`text-[20px] text-black font-[700] hover:text-[#F65A27]`}
                      >
                        {element.name}
                      </p>
                    </div>

                    <div className="flex gap-x-4">
                      <div className="w-[100px] h-[36px] px-2 rounded-lg bg-[#E3E1E1] flex justify-between">
                        {element.tier[element.tier.length - 1] === "1" ? (
                          <Image
                            alt=""
                            src="/t1.svg"
                            width={18}
                            height={18}
                            className="ml-1"
                          />
                        ) : element.tier[element.tier.length - 1] === "2" ? (
                          <Image
                            alt=""
                            src="/t2.svg"
                            width={18}
                            height={18}
                            className="ml-1"
                          />
                        ) : (
                          <Image
                            alt=""
                            src="/tier.svg"
                            width={18}
                            height={18}
                            className="ml-1"
                          />
                        )}
                        <div className="w-[46px] rounded-lg flex -mt-[2px] justify-center">
                          <p className="font-bold mt-[10px] text-[16px] ">
                            {`${element.tier[0]}${element.tier
                              .substr(1, 5)
                              .toLowerCase()}`}
                          </p>
                        </div>
                      </div>

                      <div className="w-[100px] h-[36px] px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                        <Image
                          alt=""
                          src="/greenEditChip.svg"
                          width={20}
                          height={20}
                          className="ml-1"
                        />
                        <div className="w-[46px] mr-[-8px]   rounded-lg bg-[#E3E1E1] flex justify-center">
                          <p className="font-bold text-[0.9rem] mt-[10px]">
                            {element.reviews}
                          </p>
                        </div>
                      </div>

                      <div className="w-[100px] h-[36px] px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
                        <Image
                          alt=""
                          src="/starChip.svg"
                          width={22}
                          height={22}
                          className="ml-1"
                        />
                        <div className="w-[46px] mr-[-8px]  rounded-lg bg-[#E3E1E1] flex justify-center">
                          <p className="font-bold text-[0.9rem] mt-[10px]">
                            {element.rating}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionHeader>

                {open === index && (
                  <div className="w-full bg-gray-300 h-[1px]" />
                )}

                <AccordionBody className="w-full h-full ">
                  <div className={`${cabin.className} w-full pl-5`}>
                    <div className="flex">
                      <div className="w-[70%]">
                        <p className="text-[18px] text-black font-[400]">
                          {element.description}
                        </p>
                        <div className="mt-2 w-[98%] h-20 flex py-2">
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
                          <div className="flex gap-x-3 ml-10 mt-4">
                            {element.label.map((element: any, i: number) => (
                              <button
                                key={i}
                                className={`rounded-[5px] h-[25px] px-4 border-gray-400 border-[2px] text-sm
         text-gray-600 font-[600] ${cabin.className} hover:bg-[#EAEAEA] hover:border-0`}
                              >
                                {element}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-[40%] max-w-[430px] text-[14px] h-full grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-1 2xl:grid-cols-3 3xl:pl-8 gap-y-4 text-black font-[600]">
                        <button className="w-[100px] items-center rounded-lg h-[30px] hover:scale-110 pl-3 bg-[#A0EDA7] flex justify-between">
                          Security
                          <div className="w-[30px] h-full rounded-lg bg-[#6AC673] flex justify-center">
                            <p className="font-bold flex items-center text-[0.9rem]">
                              02
                            </p>
                          </div>
                        </button>
                        <button className="w-[100px] items-center rounded-lg h-[30px] hover:scale-110 pl-4 bg-[#A0EDA7] flex justify-between">
                          Profile
                          <div className="w-[30px] h-full rounded-lg bg-[#6AC673] flex justify-center">
                            <p className="font-bold flex items-center text-[0.9rem]">
                              02
                            </p>
                          </div>
                        </button>
                        <button className="w-[100px] items-center rounded-lg h-[30px] hover:scale-110 pl-2 bg-[#A0EDA7] flex justify-between">
                          Attributes
                          <div className="w-[30px] h-full rounded-lg bg-[#6AC673] flex justify-center">
                            <p className="font-bold flex items-center text-[0.9rem]">
                              29
                            </p>
                          </div>
                        </button>
                        <button className="w-[100px] items-center rounded-lg h-[30px] hover:scale-110 pl-4 bg-[#A0EDA7] flex justify-between">
                          Privacy
                          <div className="w-[30px] h-full rounded-lg bg-[#6AC673] flex justify-center">
                            <p className="font-bold flex items-center text-[0.9rem]">
                              02
                            </p>
                          </div>
                        </button>
                        <button className="w-[100px] items-center rounded-lg h-[30px] hover:scale-110 pl-4 bg-[#A0EDA7] flex justify-between">
                          Metrics
                          <div className="w-[30px] h-full rounded-lg bg-[#6AC673] flex justify-center">
                            <p className="font-bold flex items-center text-[0.9rem]">
                              02
                            </p>
                          </div>
                        </button>
                        <button className="w-[100px] items-center rounded-lg h-[30px] hover:scale-110 pl-4 bg-[#A0EDA7] flex justify-between">
                          Access
                          <div className="w-[30px] h-full rounded-lg bg-[#6AC673] flex justify-center">
                            <p className="font-bold flex items-center text-[0.9rem]">
                              02
                            </p>
                          </div>
                        </button>
                        <button className="w-[100px] items-center rounded-lg h-[30px] hover:scale-110 pl-3 bg-[#A0EDA7] flex justify-between">
                          Lifecycle
                          <div className="w-[30px] h-full rounded-lg bg-[#6AC673] flex justify-center">
                            <p className="font-bold flex items-center text-[0.9rem]">
                              01
                            </p>
                          </div>
                        </button>
                        <button className="w-[100px] items-center rounded-lg h-[30px] hover:scale-110 pl-6 bg-[#A0EDA7] flex justify-between">
                          Rules
                          <div className="w-[30px] h-full rounded-lg bg-[#6AC673] flex justify-center">
                            <p className="font-bold flex items-center text-[0.9rem]">
                              05
                            </p>
                          </div>
                        </button>
                        <button className="w-[100px] items-center rounded-lg h-[30px] hover:scale-110 pl-4 bg-[#A0EDA7] flex justify-between">
                          Sharing
                          <div className="w-[30px] h-full rounded-lg bg-[#6AC673] flex justify-center">
                            <p className="font-bold flex items-center text-[0.9rem]">
                              0
                            </p>
                          </div>
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
