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
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { Cabin } from "next/font/google";
import Select from "react-select";
const cabin = Cabin({ subsets: ["latin"] });

export default function ProductHeading({ data }: any) {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [dropDownValue, setDropDownValue] = useState<any>([
    {
      label: "Weekly",
      value: "weekly",
    },
    {
      label: "Daily",
      value: "daily",
    },
  ]);

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

  const TABS = [
    {
      label: "Static",
      value: "static",
    },
    {
      label: "Incremental",
      value: "incremental",
    },
  ];

  const TABS1 = [
    {
      label: "Active",
      value: "active",
    },
    {
      label: "Draft",
      value: "draft",
    },
    {
      label: "Inactive",
      value: "inactive",
    },
  ];

  return (
    <div className={`flex justify-between`}>
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

          {/* <Dialog open={open} handler={handleOpen}>
            <DialogHeader className={`${cabin.className}`}>
              QR Code
            </DialogHeader>
            <DialogBody divider>
              
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
          </Dialog> */}
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

          {/* <button
            onClick={handleOpen}
            className="px-5 border-black bg-[#F65A27] text-white shadow-lg rounded-lg "
          >
            <p className="text-[1rem] font-[600]">QR Code</p>
          </button> */}
          <div className="flex">
            <Image
              alt=""
              src="/qrCode1.svg"
              width={70}
              height={70}
              className="ml-2"
            />
          </div>
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

        <div className="gap-x-7 h-[5.5rem] 3xl:h-24 flex justify-between px-3 py-2">
          <div className="flex">
            <div className="flex w-[200px]">
              <Avatar src="/yahoo.svg" className="" alt="avatar" size="lg" />
              <div className="mt-[6px] ml-3  text-black">
                <p className="font-bold">{data.ownerName}</p>
                <p className="text-xs">LA, California</p>
              </div>
            </div>
          </div>
          <div className={`${more && "overflow-y-auto"} gap-x-6`}>
            <div className={`flex `}>
              <p
                className={`w-[98%] max-w-[15.1rem] max-h-[8rem] ${
                  !more && "truncate"
                } mr-3 text-sm`}
              >
                <p className="font-semibold max-w-[100%]">
                  Description about the product:{" "}
                </p>
                {data.description} Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quasi, impedit. Consequatur praesentium
                nostrum quam quaerat ipsa dolor impedit pariatur reprehenderit
                animi ex laudantium quidem, tempora perspiciatis facilis ratione
                beatae fuga.
              </p>

              <span
                className={`mt-4 px-2 py-1`}
                onClick={() => {
                  setMore(!more);
                }}
              >
                {!more ? "more" : "less"}
              </span>
            </div>

            <div className={`${more && "mt-16"} flex gap-x-3`}>
              {label.map((element, i) => (
                <button
                  key={i}
                  className={`w-[6vw] rounded-full h-[3vh] max-h-[40px] border-[2px] border-black text-[12px] text-black px-2`}
                >
                  {element.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-none flex justify-around gap-x-2">
              <div className="mb-8 items-center justify-between gap-8 gap-y-6">
                <p className={`${cabin.className} mb-2 text-[0.7rem]`}>
                  Frequency
                </p>
                <div className="min-w-[80px] ">
                  <Select
                    defaultValue={dropDownValue[0]}
                    options={dropDownValue}
                    className={`max-w-[300px] text-[0.6rem] ${cabin.className}`}
                  />
                </div>
              </div>

              <div
                className={`items-center gap-4 md:flex-row ${cabin.className}`}
              >
                <p className={`${cabin.className} mb-2 text-[0.7rem]`}>Type</p>
                <Tabs value="static" className="w-full md:w-max mt-3">
                  <TabsHeader>
                    {TABS.map(({ label, value }) => (
                      <Tab key={value} value={value}>
                        <p className={`${cabin.className} text-[0.7rem]`}>
                          &nbsp;&nbsp;{label}&nbsp;&nbsp;
                        </p>
                      </Tab>
                    ))}
                  </TabsHeader>
                </Tabs>
              </div>

              <div className="items-center gap-4 md:flex-row">
                <p className={`${cabin.className} mb-2 text-[0.7rem]`}>
                  Status
                </p>
                <Tabs value="active" className="w-full md:w-max mt-3">
                  <TabsHeader>
                    {TABS1.map(({ label, value }) => (
                      <Tab key={value} value={value}>
                        <p className={`${cabin.className} text-[0.7rem]`}>
                          &nbsp;&nbsp;{label}&nbsp;&nbsp;
                        </p>
                      </Tab>
                    ))}
                  </TabsHeader>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
