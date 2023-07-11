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
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Select from "react-select";

const cabin = Cabin({ subsets: ["latin"] });

export default function ProfileTab({ data }: any) {
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
  const [week, setWeek] = useState<any>([
    {
      name: "S",
      val: "Sunday",
      color: "bg-red-600",
      selected: false,
    },
    {
      name: "M",
      val: "Monday",
      color: "bg-red-600",
      selected: false,
    },

    {
      name: "T",
      val: "Tuesday",
      color: "bg-red-600",
      selected: false,
    },
    {
      name: "W",
      val: "Wednesday",
      color: "bg-[#4D91FF]",
      selected: true,
    },
    {
      name: "T",
      val: "Thursday",
      color: "bg-[#FFBC35]",
      selected: true,
    },
    {
      name: "F",
      val: "Friday",

      color: "bg-red-600",
      selected: false,
    },
    {
      name: "S",
      val: "Saturday",
      color: "bg-red-600",
      selected: false,
    },
  ]);

  const [dropDownValue, setDropDownValue] = useState<any>([
    {
      label: "Week",
      value: "week",
    },
    {
      label: "Month",
      value: "month",
    },
  ]);

  // Schedule has been added | Repeats every 1 week on Friday at 8pm
  const [weekNumber, setWeekNumber] = useState<string>("1");
  const [interval, setInterval] = useState<string>("Week");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [schedule, setSchedule] = useState<any>([
    {
      weekNumber: "1",
      interval: "Week",
      day: ["Friday", "Monday"],
      time: "8pm",
    },
  ]);

  useEffect(() => {
    console.log("week");
  }, [week, schedule]);

  const deleteSchedule = (i: number) => {
    let afterDeleteArray = [...schedule];

    afterDeleteArray.splice(i, 1);
    console.log(afterDeleteArray);
    setSchedule(afterDeleteArray);
  };

  const addSchedule = () => {
    console.log(weekNumber, interval, time, week, date, time);
    const scheduleArray = [...schedule];
    const dayArray = [];
    for (let i = 0; i < week.length; i++) {
      if (week[i].selected) {
        dayArray.push(week[i].val);
      }
    }
    scheduleArray.push({
      weekNumber,
      interval,
      day: dayArray,
      time,
    });
    console.log(scheduleArray);
    setSchedule(scheduleArray);
    handleOpen();
  };

  return (
    <div className="h-full ml-3">
      {/* Header */}
      <div className="w-full mb-2 h-[12%] border-b-[1px] border-gray-300 lg:px-[2.3rem] justify-center md:py-0 md:px-[2rem] lg:py-4">
        <div
          className={`w-full text-black h-full  flex  justify-start gap-x-36 ${cabin.className}`}
        >
          <div className="flex flex-col">
            <p className="text-[#656565]">Name</p>
            <span>{data.name}</span>
          </div>
          <div className="flex flex-col">
            <p className="text-[#656565]">Label</p>
            <span>{data.name}</span>
          </div>
        </div>
      </div>

      {/* Main */}
      {/* <div className="h-[400px] lg:h-full px-3 relative flex justify-start overflow-x-auto overflow-y-hidden md:w-[50vw] lg:w-[58vw] xl:w-[45vw] 2xl:w-[54vw] 3xl:w-[60vw] 4xl:w-[60vw] max-w-[1115px] flex-grow"> */}
      <div className="h-[400px] gap-x-2 gap-y-1 relative grid grid-cols-3">
        <div className="justify-center h-[400px]">
          <div className="flex justify-center h-[10%] items-center bg-[#CCE0FF]">
            <p
              className={`${cabin.className} font-[900] text-[18px] text-black`}
            >
              Scope
            </p>
          </div>
          <div className="bg-[#EEEEEE] w-full h-[90%]">
            <div
              className={`items-center border-b-[1px] border-white flex justify-center py-3 w-full md:flex-row ${cabin.className}`}
            >
              <div className="h-[40px] items-center px-1 py-1 bg-gray-300 flex justify-between rounded-[10px]">
                <p
                  onClick={() => {
                    setScopeTab(true);
                  }}
                  className={`${cabin.className} rounded-[10px] text-[18px] ${
                    scopeTab && "bg-white text-black"
                  }`}
                >
                  &nbsp;&nbsp;{"Product"}&nbsp;&nbsp;
                </p>
                <p
                  onClick={() => {
                    setScopeTab(false);
                  }}
                  className={`${cabin.className} rounded-[10px] text-[18px] ${
                    !scopeTab && "bg-white text-black"
                  }`}
                >
                  &nbsp;&nbsp;{"Series"}&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div className="w-full items-center flex border-b-[1px] border-white h-[20%] justify-between px-5 mt-3">
              <p className={`${cabin.className} text-[18px] text-black`}>
                Incremental
              </p>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <div className="justify-center h-[400px]">
          <div className="flex justify-center h-[10%] items-center bg-[#CCE0FF]">
            <p
              className={`${cabin.className} font-[900] text-[18px] text-black`}
            >
              Schedule
            </p>
          </div>
          <div className="bg-[#EEEEEE] h-[90%] w-full">
            <div
              className={`items-center flex border-b-[1px] border-white justify-center py-3 w-full md:flex-row ${cabin.className}`}
            >
              <div className="h-[40px] items-center px-1 py-1 bg-gray-300 flex justify-between rounded-[10px]">
                <p
                  onClick={() => {
                    setScheduleTab(true);
                  }}
                  className={`${cabin.className} rounded-[10px] text-[18px] ${
                    scheduleTab && "bg-white text-black"
                  }`}
                >
                  &nbsp;&nbsp;{"Event"}&nbsp;&nbsp;
                </p>
                <p
                  onClick={() => {
                    setScheduleTab(false);
                  }}
                  className={`${cabin.className} rounded-[10px] text-[18px] ${
                    !scheduleTab && "bg-white text-black"
                  }`}
                >
                  &nbsp;&nbsp;{"Time"}&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div className="w-full min-h-[20%] border-b-[1px] border-white max-h-[25%] overflow-y-auto px-4 justify-start gap-x-6 mt-3">
              <div
                onClick={handleOpen}
                className="flex justify-start item-center gap-x-2"
              >
                <div className="relative w-[20px] h-[20px] mt-1">
                  <Image src={`/clock.svg`} alt="brand" fill />
                </div>
                <p
                  className={`${cabin.className} text-[18px] text-black hover:text-[#f65a27] cursor-pointer`}
                >
                  Calender event schedule
                </p>
              </div>
              {schedule.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex ml-1 justify-start items-center w-full gap-x-2"
                >
                  <p className="text-[11px] w-full mt-1">
                    <div className="flex justify-between w-full">
                      <div>
                        <p>Schedule has been added</p>
                      </div>
                      <div
                        onClick={() => {
                          deleteSchedule(index);
                        }}
                        className="relative w-[9.43px] h-[12px]"
                      >
                        <Image src={`/bin.svg`} alt="brand" fill />
                      </div>
                    </div>
                    <p>
                      Repeats every {item.weekNumber} {item.interval} on
                      {item.day[0]}
                      {/* {item.day.length > 1 && `${"+" + (item.day.length - 1)}`}{" "} */}
                      at {item.time}
                    </p>
                  </p>
                </div>
              ))}
            </div>
            <div
              className={`mt-8 ml-2 flex flex-col gap-y-5 text-[18px] ${cabin.className}`}
            >
              <p className="w-full h-[30px] border-b-[1px] border-white">
                Event
              </p>
              <input
                type="text"
                placeholder="Enter Event Type"
                className="bg-transparent border-b-[1px] border-gray-400 w-[95%] outline-none text-black"
              />
            </div>
          </div>
        </div>

        <div className="justify-center h-[400px]">
          <div className="flex justify-center h-[10%] items-center bg-[#CCE0FF]">
            <p
              className={`${cabin.className} font-[900] text-black text-[18px]`}
            >
              Results
            </p>
          </div>
          <div className="bg-[#EEEEEE] h-[90%] w-full">
            <div
              className={`items-center border-b-[1px] border-white flex justify-start py-3 w-full md:flex-row ${cabin.className}`}
            >
              <div className="h-[40px] w-full  flex justify-between px-4 py-1">
                <p className={`${cabin.className} text-[18px] text-black`}>
                  Retain
                </p>
                <Switch defaultChecked />
              </div>
            </div>
            <div className="w-full items-center flex px-4 h-[20%] border-b-[1px] border-white justify-between gap-x-6 mt-3">
              <p className={`${cabin.className} text-[18px] text-black`}>
                Detect Anomaly (Auto DQ)
              </p>
              <Switch defaultChecked />
            </div>
            <div
              className={`mt-8 flex flex-col gap-y-5 text-[18px] ${cabin.className}`}
            >
              <p className="w-full  px-4 h-[30px] border-b-[1px] border-white">
                Notification
              </p>
              <div className="w-full text-black  -mt-3 px-4 flex justify-between h-[40px] items-center border-b-[1px] border-white">
                <p>Owners</p>
                <Switch defaultChecked />
              </div>
              <div className="w-full text-black -mt-3 px-4 flex justify-between h-[40px] items-center">
                <p>Consumers</p>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="justify-center h-[500px] mx-2 min-w-[100px]"></div> */}
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
              <p className="font-[700] text-[16px]">Calender Event Schedule</p>

              <div className="flex items-center gap-x-5">
                {/* <div className="relative w-[20px] h-[20px]">
                      <Image src={`/watch.svg`} alt="brand" fill />
                    </div> */}
                <input
                  onChange={(e) => {
                    console.log(e.target.value);
                    setDate(e.target.value);
                  }}
                  type="date"
                  className="border-[#c4c4c4] outline-none bg-[#EAEAEA] border-[1px] rounded-[10px] px-2"
                />
                <div>
                  <input
                    type="time"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setTime(e.target.value);
                    }}
                    value={time}
                    className="bg-[#EAEAEA] border-[#c4c4c4] border-[1px] outline-none px-2 rounded-[10px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-x-5">
                <p className="text-[18px]">Repeat every</p>
                <input
                  type="number"
                  defaultValue={"1"}
                  value={weekNumber}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setWeekNumber(e.target.value);
                  }}
                  className="w-[50px] -mt-1 outline-none h-[44px] border-[1px] p-5 bg-[#eaeaea] text-[18px] font-[500] border-[#c4c4c4] rounded-[10px]"
                />
                <div>
                  <Select
                    styles={{
                      control: (styles) => ({
                        ...styles,
                        backgroundColor: "#EAEAEA",
                        borderRadius: "10px",
                      }),
                    }}
                    defaultValue={dropDownValue[0]}
                    options={dropDownValue}
                    onChange={(val) => {
                      console.log(val, "DD");
                      setInterval(val.value);
                    }}
                    className={`h-[48px] w-[117px] rounded-[10px] text-[18px] ${cabin.className}`}
                  />
                </div>
              </div>
              <div>
                <p>Repeat on</p>
                <div className="flex mt-2 gap-x-2">
                  {week.map((element: any, index: number) => (
                    <div
                      onClick={() => {
                        const updateWeek = [...week];
                        for (let i = 0; i < week.length; i++) {
                          if (updateWeek[i].val === element.val) {
                            updateWeek[i].selected = !updateWeek[i].selected;
                          }
                        }
                        setWeek(updateWeek);
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
                <span className={`text-[14px] ${cabin.className}`}>Cancel</span>
              </Button>
              <Button
                variant="text"
                color="red"
                onClick={() => {
                  addSchedule();
                }}
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
    </div>
  );
}
