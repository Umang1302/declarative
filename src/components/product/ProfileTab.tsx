"use client";

import {
  Button,
  Card,
  CardBody,
  Dialog,
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";
import { Cabin } from "next/font/google";
import { Switch } from "@material-tailwind/react";
import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";

const cabin = Cabin({ subsets: ["latin"] });

export default function OverviewTable({ data }: any) {
  const [scopeTab, setScopeTab] = useState<boolean>(false);
  const [scheduleTab, setScheduleTab] = useState<boolean>(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const TABS = [
    {
      label: "Product",
      value: "product",
    },
    {
      label: "Series",
      value: "series",
    },
  ];
  const week = [
    {
      name: "S",
      color: "bg-red-600",
      selected: false,
    },
    {
      name: "M",
      color: "bg-red-600",
      selected: false,
    },

    {
      name: "T",
      color: "bg-red-600",
      selected: false,
    },
    {
      name: "W",
      color: "bg-[#4D91FF]",
      selected: true,
    },
    {
      name: "T",
      color: "bg-[#FFBC35]",
      selected: true,
    },
    {
      name: "F",
      color: "bg-red-600",
      selected: false,
    },
    {
      name: "S",
      color: "bg-red-600",
      selected: false,
    },
  ];

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

  return (
    <div className="h-full">
      {/* Header */}
      <div className="w-full mb-2 h-[12%] border-b-[1px] border-gray-300 px-[2.3rem] justify-center py-4">
        <div
          className={`w-full text-black h-full  flex  justify-start gap-x-36 ${cabin.className}`}
        >
          <div className="flex flex-col">
            <p className="text-[#656565]">Name</p>
            <span>Sampling Profiling Spec</span>
          </div>
          <div className="flex flex-col">
            <p className="text-[#656565]">Label</p>
            <span>profiling for all valuations product</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="h-[450px] lg:h-full px-3 relative flex justify-start overflow-x-auto max-w-[1115px]">
        <div className="justify-center h-[500px] mx-2 min-w-[340px]">
          <div className="flex justify-center h-[10%] items-center bg-[#CCE0FF]">
            <p className={`${cabin.className} font-[900] text-[18px]`}>Scope</p>
          </div>
          <div className="bg-[#EEEEEE] w-full h-[90%]">
            <div
              className={`items-center flex justify-center py-3 w-full md:flex-row ${cabin.className}`}
            >
              <div className="mt-4 h-[40px] items-center px-1 py-1 bg-gray-300 flex justify-between rounded-[10px]">
                <p
                  onClick={() => {
                    setScopeTab(true);
                  }}
                  className={`${cabin.className} rounded-[10px] text-[18px] ${
                    scopeTab && "bg-white"
                  }`}
                >
                  &nbsp;&nbsp;{"Product"}&nbsp;&nbsp;
                </p>
                <p
                  onClick={() => {
                    setScopeTab(false);
                  }}
                  className={`${cabin.className} rounded-[10px] text-[18px] ${
                    !scopeTab && "bg-white"
                  }`}
                >
                  &nbsp;&nbsp;{"Series"}&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div className="w-full items-center flex h-[20%] justify-around gap-x-6 bg-white mt-10">
              <p className={`${cabin.className} text-[18px]`}>Incremental</p>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <div className="justify-center h-[500px] mx-2 min-w-[390px]">
          <div className="flex justify-center h-[10%] items-center bg-[#CCE0FF]">
            <p className={`${cabin.className} font-[900] text-[18px]`}>
              Schedule
            </p>
          </div>
          <div className="bg-[#EEEEEE] h-[90%] w-full">
            <div
              className={`items-center flex justify-center py-3 w-full md:flex-row ${cabin.className}`}
            >
              <div className="mt-4 h-[40px] items-center px-1 py-1 bg-gray-300 flex justify-between rounded-[10px]">
                <p
                  onClick={() => {
                    setScheduleTab(true);
                  }}
                  className={`${cabin.className} rounded-[10px] text-[18px] ${
                    scheduleTab && "bg-white"
                  }`}
                >
                  &nbsp;&nbsp;{"Event"}&nbsp;&nbsp;
                </p>
                <p
                  onClick={() => {
                    setScheduleTab(false);
                  }}
                  className={`${cabin.className} rounded-[10px] text-[18px] ${
                    !scopeTab && "bg-white"
                  }`}
                >
                  &nbsp;&nbsp;{"Time"}&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div className="w-full py-2 h-[20%] px-2 justify-start gap-x-6 bg-white mt-10">
              <div
                onClick={handleOpen}
                className="flex justify-start item-center gap-x-2"
              >
                <div className="relative w-[20px] h-[20px]">
                  <Image src={`/clock.svg`} alt="brand" fill />
                </div>
                <p className={`${cabin.className} text-[18px]`}>
                  Calender event schedule
                </p>
              </div>
              <div className="flex ml-1 justify-start items-center gap-x-2">
                <div className="relative w-[12px] h-[12px]">
                  <Image src={`/time.svg`} alt="brand" fill />
                </div>
                <p className="text-[11px] mt-1">
                  Schedule has been added | Repeats every Tuesday & Wednesday
                </p>
                <div className="relative w-[9.43px] h-[12px]">
                  <Image src={`/bin.svg`} alt="brand" fill />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className={`${cabin.className}`}>
              <div className="text-black flex flex-col gap-4">
                <p className="font-[700] text-[16px]">
                  Calender Event Schedule
                </p>
                <div className="flex items-center gap-x-5">
                  <p className="text-[18px]">Repeat every</p>
                  <input
                    type="number"
                    defaultValue={"1"}
                    onChange={(e) => {}}
                    className="w-[53px] h-[48px] p-5 text-[18px] font-[500] border-[#EAEAEA] border-[2px] rounded-[10px]"
                  />
                  <div>
                    <Select
                      defaultValue={dropDownValue[0]}
                      options={dropDownValue}
                      className={`h-[48px] w-[117px] rounded-[10px] text-[18px] ${cabin.className}`}
                    />
                  </div>
                </div>
                <div>
                  <p>Repeat on</p>
                  <div className="flex mt-2 gap-x-2">
                    {week.map((element, index) => (
                      <div
                        onClick={() => {
                          element.selected = !element.selected;
                        }}
                        className={`w-[30px] items-center flex justify-center h-[30px] rounded-full  ${
                          element.selected ? `${element.color}` : "bg-[#EAEAEA]"
                        }`}
                        key={index}
                      >
                        {element.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4 w-full ml-[0.5rem]">
                <Button
                  variant="text"
                  className="bg-transparent hover:bg-transparent normal-case shadow-none text-[#656565]"
                  onClick={handleOpen}
                >
                  <span className={`text-[14px] ${cabin.className}`}>
                    Cancel
                  </span>
                </Button>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className=" hover:bg-transparent normal-case"
                >
                  <span className={`text-[14px] before:${cabin.className}`}>
                    Done
                  </span>
                </Button>
              </div>
            </CardBody>
          </Card>
        </Dialog>

        <div className="justify-center h-[500px] mx-2 min-w-[340px]">
          <div className="flex justify-center h-[10%] items-center bg-[#CCE0FF]">
            <p className={`${cabin.className} font-[900] text-[18px]`}>
              Results
            </p>
          </div>
          <div className="bg-[#EEEEEE] h-[90%] w-full">
            <div
              className={`items-center flex justify-start py-3 w-full md:flex-row ${cabin.className}`}
            >
              <div className="mt-4 h-[40px] w-[90%] flex justify-between px-1 py-1">
                <p className={`${cabin.className} ml-3 text-[18px]`}>Retain</p>
                <Switch defaultChecked />
              </div>
            </div>
            <div className="w-full items-center flex px-2 pr-[2.5rem] h-[20%] justify-between gap-x-6 bg-white mt-10">
              <p className={`${cabin.className} text-[18px]`}>Detect Anomaly</p>
              <Switch defaultChecked />
            </div>
            <div
              className={`mt-8 ml-2 flex flex-col gap-y-5 text-[18px] px-2 pr-[2.2rem] ${cabin.className}`}
            >
              <p className="w-full h-[30px] border-b-[1px] border-gray-400">
                Notification
              </p>
              <div className="w-full flex justify-between h-[40px] items-center border-b-[1px] border-gray-400">
                <p>Owners</p>
                <Switch defaultChecked />
              </div>
              <div className="w-full flex justify-between h-[40px] items-center border-b-[1px] border-gray-400">
                <p>Consumers</p>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center h-[500px] mx-2 min-w-[150px]"></div>
      </div>
    </div>
  );
}
