"use client";

import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Dialog,
  Switch,
} from "@material-tailwind/react";
import { Cabin } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const cabin = Cabin({ subsets: ["latin"] });

export default function OverviewTable({ data }: any) {
  const [open, setOpen] = React.useState(false);
  const [scheduleTab, setScheduleTab] = useState<boolean>(false);
  const handleOpen = () => setOpen((cur) => !cur);

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

  const [dropDownValue1, setDropDownValue1] = useState<any>([
    {
      label: "Sum",
      value: "sum",
    },
    {
      label: "Average",
      value: "average",
    },
  ]);

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

  const [tab1, setTab1] = useState("group");
  const [tab2, setTab2] = useState("record");

  const [rules, setRules] = useState<any>([
    "Initial Investment Amount and Subsequent Investment Amount must be greater than 0",
    "Management Name must be not null",
  ]);

  const [addRule, setAddRule] = useState<boolean>(false);
  const [searchAttr, setSearchArray] = useState([
    {
      attribute: "Attribute 1",
      check: false,
    },
    {
      attribute: "Attribute 2",
      check: false,
    },
  ]);
  const [newRule, setNewRule] = useState("");

  React.useEffect(() => {
    console.log("SSSSS");
  }, [addRule, searchAttr, tab1]);

  const addRuleFun = (val: string) => {
    const addedRule = [...rules];
    addedRule.splice(0, 0, val);
    setRules(addedRule);
    setAddRule(false);
  };

  const deleteRule = (index: number) => {
    const deletedArray = [...rules];
    deletedArray.splice(index, 1);
    setRules(deletedArray);
  };

  const updateRule = (index: any, val: any) => {
    console.log(val);
    const updatedRule = [...rules];
    updatedRule.splice(index, 1, val);
    setRules(updatedRule);
    console.log(updatedRule);
  };

  const [selectRule, setSelectRule] = useState("0");

  React.useEffect(() => {
    console.log(selectRule);
  }, [selectRule, rules]);

  return (
    <div className={`w-full h-full overflow-x-auto px-2 ${cabin.className}`}>
      {/* Rule */}
      <div className="bg-[#CCE0FF] flex items-center w-[97%] px-6 py-3 justify-between">
        <p className="text-[18px] font-[600]">Rules</p>
        <div
          onClick={() => {
            setAddRule(!addRule);
          }}
          className="relative w-[20px] h-[20px]"
        >
          <Image src={`/blackPlus.svg`} alt="brand" fill />
        </div>
      </div>
      <div className="relative my-2 w-full">
        <div className="absolute inset-y-0 left-4 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 w-[92%] outline-none pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
      <div className="w-[95%] px-3 h-[160px] overflow-y-auto">
        {addRule && (
          <Card className="h-[60px] w-[100%] rounded-none border-[1px] z-40">
            <div className="px-6 justify-between flex items-center h-full">
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target && newRule) {
                      if (newRule !== "") addRuleFun(newRule);
                    }
                  }
                }}
                onChange={(e) => {
                  setNewRule(e.target.value);
                }}
                type="text"
                className={`h-full min-w-[85%] appearance-none  py-2 focus:outline-none ${cabin.className}`}
              />

              <div
                onClick={() => {
                  console.log("delete");
                  setAddRule(false);
                }}
                className="relative w-[13.5px] h-[18px]"
              >
                <Image src={`/bin.svg`} alt="brand" fill />
              </div>
            </div>
          </Card>
        )}
        {rules?.map((rule: string, index: number) => (
          <Card
            key={index}
            className={`h-[50px] rounded-none border-[1px] ${
              addRule && "blur-sm"
            }`}
          >
            <div className="px-6 justify-between flex items-center h-full">
              <div className="w-full flex gap-x-3 items-center">
                <div>
                  <Checkbox
                    onChange={(e) => {
                      if (e.currentTarget.checked) {
                        setSelectRule(`${index}`);
                      }
                    }}
                    checked={selectRule === String(index)}
                    type="checkbox"
                  />
                </div>
                <input
                  onChange={(e) => {
                    updateRule(+index, e.target.value);
                  }}
                  value={rules[index]}
                  type="text"
                  className="w-[90%] outline-none"
                />
              </div>
              <div
                onClick={() => {
                  console.log("delete");
                  deleteRule(index);
                }}
                className="relative w-[13.5px] h-[18px]"
              >
                <Image src={`/bin.svg`} alt="brand" fill />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Rule info */}
      <div className="bg-[#CCE0FF] flex items-center w-[97%] h-[20%] px-6 py-3 justify-between">
        <p className="text-[18px] font-[600]">{rules[+selectRule]}</p>
      </div>
      <div className="mb-6 w-full py-3 px-3">
        <div className="py-8 px-10">
          <div className="flex justify-between w-[90%]">
            <div>
              <p>Scope</p>
              <div className="bg-[#EAEAEA] w-[280px]  min-w-[300px]  h-[40px] flex items-center justify-around rounded-[10px]">
                <div
                  onClick={() => {
                    setTab1("series");
                  }}
                  className={`px-5 h-[85%] py-1 flex items-center rounded-[10px] ${
                    tab1 === "series" && "bg-white"
                  } `}
                >
                  Series
                </div>
                <div
                  onClick={() => {
                    setTab1("group");
                  }}
                  className={`px-6 h-[85%] py-1 flex items-center rounded-[10px] ${
                    tab1 === "group" && "bg-white"
                  } `}
                >
                  Group
                </div>
                <div
                  onClick={() => {
                    setTab1("product");
                  }}
                  className={`px-6 h-[85%] py-1 flex items-center rounded-[10px] ${
                    tab1 === "product" && "bg-white"
                  } `}
                >
                  Product
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Select
                styles={{
                  control: (styles) => ({
                    ...styles,
                    backgroundColor: "#EAEAEA",
                    borderRadius: "10px",
                  }),
                }}
                defaultValue={dropDownValue1[0]}
                options={dropDownValue1}
                onChange={(val) => {
                  console.log(val, "DD");
                  setInterval(val.value);
                }}
                className={`rounded-[10px]  min-w-[200px] text-[18px] ${cabin.className}`}
              />
            </div>
          </div>

          <div className="flex mt-6">
            <div className="flex w-[90%] justify-between">
              <div>
                <p>Type</p>
                <div className="bg-[#EAEAEA] px-1 h-[40px] flex items-center justify-around rounded-[10px]">
                  <div
                    onClick={() => {
                      setTab2("record");
                    }}
                    className={`px-5 h-[85%] py-1 flex items-center rounded-[10px] ${
                      tab2 === "record" && "bg-white"
                    } `}
                  >
                    Record
                  </div>
                  <div
                    onClick={() => {
                      setTab2("aggregate");
                    }}
                    className={`px-5 h-[85%] py-1 flex items-center rounded-[10px] ${
                      tab2 === "aggregate" && "bg-white"
                    } `}
                  >
                    Aggregate
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Select
                  styles={{
                    control: (styles) => ({
                      ...styles,
                      backgroundColor: "#EAEAEA",
                      borderRadius: "10px",
                    }),
                  }}
                  defaultValue={dropDownValue1[0]}
                  options={dropDownValue1}
                  onChange={(val) => {
                    console.log(val, "DD");
                    setInterval(val.value);
                  }}
                  className={`rounded-[10px] min-w-[200px] text-[18px] ${cabin.className}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[450px] gap-x-2 gap-y-1 relative grid grid-cols-3">
        <div className="justify-center h-[500px]">
          <div className="flex justify-evenly h-[10%] items-center bg-[#CCE0FF]">
            <p className={`${cabin.className} font-[900] text-[18px]`}>
              Attributes
            </p>
          </div>
          <div className="bg-[#EEEEEE] w-full h-[10%]">
            <div className="relative w-full pt-3">
              <div className="absolute inset-y-0 left-0 top-3 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-300 border border-gray-300 text-black text-sm block w-full pl-10 p-2.5 appearance-none focus:outline-none"
                // className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
              />
            </div>
            {searchAttr.map((item, index) => (
              <Card
                key={index}
                className="h-[50px] rounded-none border-[1px] flex justify-start px-2 py-1"
              >
                <div className="flex items-center">
                  <Checkbox
                    color="blue"
                    // checked={item.check}
                    // className="rounded-none"
                    // onChange={() => {}}
                  />
                  <p>{item.attribute}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="justify-center h-[500px]">
          <div className="flex justify-center h-[10%] items-center bg-[#CCE0FF]">
            <p className={`${cabin.className} font-[900] text-[18px]`}>
              Schedule
            </p>
          </div>
          <div className="bg-[#EEEEEE] h-[70%] w-full">
            <div
              className={`items-center flex justify-center w-full  ${cabin.className}`}
            >
              <div className="mt-2 h-[40px] items-center px-1 py-1 bg-gray-300 flex justify-between rounded-[10px]">
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
                    !scheduleTab && "bg-white"
                  }`}
                >
                  &nbsp;&nbsp;{"Time"}&nbsp;&nbsp;
                </p>
              </div>
            </div>

            <div className="w-full min-h-[20%] max-h-[25%] overflow-y-auto py-2 px-2 justify-start gap-x-6 bg-white mt-8">
              <div
                onClick={handleOpen}
                className="flex justify-start item-center gap-x-2"
              >
                <div className="relative w-[20px] h-[20px] mt-1">
                  <Image src={`/clock.svg`} alt="brand" fill />
                </div>
                <p
                  className={`${cabin.className} text-[18px] hover:text-[#f65a27] cursor-pointer`}
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
                      Repeats every {item.weekNumber} {item.interval} on{" "}
                      {item.day[0]}{" "}
                      {item.day.length > 1 && `${"+" + (item.day.length - 1)}`}{" "}
                      at {item.time}
                    </p>
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`mt-8 ml-2 flex flex-col gap-y-5 text-[18px] px-2 pr-[2.2rem] ${cabin.className}`}
            >
              <p className="w-full h-[30px] border-b-[1px] border-gray-400">
                Event
              </p>
              <input
                type="text"
                placeholder="Enter Event Type"
                className="bg-transparent border-b-[1px] border-gray-400 w-[95%]"
              />
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
                  <div className="relative w-[20px] h-[20px]">
                    <Image src={`/watch.svg`} alt="brand" fill />
                  </div>
                  <input
                    onChange={(e) => {
                      console.log(e.target.value);
                      setDate(e.target.value);
                    }}
                    type="date"
                    className="border-[#EAEAEA] border-[2px] rounded-[10px] px-2"
                  />
                  <div>
                    <input
                      type="time"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setTime(e.target.value);
                      }}
                      // className="w-[53px] h-[48px] p-5 text-[18px] font-[500] border-[#EAEAEA] border-[2px] rounded-[10px]"
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
                    className="w-[53px] h-[48px] p-5 text-[18px] font-[500] border-[#EAEAEA] border-[2px] rounded-[10px]"
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
                  <span className={`text-[14px] ${cabin.className}`}>
                    Cancel
                  </span>
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

        <div className="justify-center h-[500px]">
          <div className="flex justify-center h-[10%] items-center bg-[#CCE0FF]">
            <p className={`${cabin.className} font-[900] text-[18px]`}>
              Results
            </p>
          </div>
          <div className="bg-[#EEEEEE] h-[70%] w-full">
            <div
              className={`items-center flex justify-start py-3 w-full md:flex-row ${cabin.className}`}
            >
              <div className="mt-4 h-[40px] w-[90%] flex justify-between px-1 py-1">
                <p className={`${cabin.className} ml-3 text-[18px]`}>Retain</p>
                <Switch defaultChecked />
              </div>
            </div>
            <div className="w-full items-center flex px-2 pr-[2.5rem] h-[23%] justify-between gap-x-6 bg-white">
              <p className={`${cabin.className} text-[18px]`}>
                Detect Anomaly (Auto DQ)
              </p>
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
              <div className="w-full flex justify-between h-[40px] items-center">
                <p>Consumers</p>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
          <div className="flex mt-5 justify-between items-center px-4 w-[95%]">
            <div>Alerts Threshold</div>
            <div>
              <input
                type="text"
                value={"5%"}
                className="outline-none border-b-[2px] border-gray-400 w-8 h-8 "
              />
            </div>
          </div>
          <div className="flex mt-5 justify-between items-center px-4 w-[95%]">
            <div>Variance Threshold</div>
            <div>
              <input
                type="text"
                value={"0"}
                className="outline-none border-b-[2px] border-gray-400 w-8 h-8 px-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
