"use client";

import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Dialog,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Switch,
} from "@material-tailwind/react";
import { Cabin } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const cabin = Cabin({ subsets: ["latin"] });

export default function Rules({ data }: any) {
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
  const [date, setDate] = useState("2023-07-12");
  const [time, setTime] = useState("17:23");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

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

  const [tab1, setTab1] = useState(data.rulesContent.rules[0].scope);
  const [tab2, setTab2] = useState(data.rulesContent.rules[0].type);

  const [rules, setRules] = useState<any>([]);

  const [addRule, setAddRule] = useState<boolean>(false);
  const [searchAttr, setSearchArray] = useState([]);
  const [newRule, setNewRule] = useState("");
  const [variable, setVariable] = useState("");
  const [selectRule, setSelectRule] = useState("0");

  React.useEffect(() => {
    let tt = data.rulesContent.rules.map((item: any) => item.content);
    setRules(tt);
    setVariable(data.rulesContent.rules[+selectRule].results.template);
  }, [addRule, searchAttr, tab1, selectRule]);

  const addRuleFun = (val: string) => {
    const addedRule = [...rules];
    addedRule.splice(0, 0, val);
    setRules(addedRule);
    setAddRule(false);
  };

  useEffect(() => {
    let attributess = data.rulesContent.rules[+selectRule].attributes.map(
      (item: any) => {
        return {
          name: item,
          check: true,
        };
      }
    );
    let tempArr = data.attributes.map((item: any) => {
      return {
        name: item.name,
        check: false,
      };
    });
    attributess = [...attributess, ...tempArr];
    let finalArray = attributess.reduce((acc: any, element: any) => {
      if (element.check) {
        return [element, ...acc];
      } else {
        return [...acc, element];
      }
    }, []);

    let uniqueNames = new Set();
    let uniqueObjects: any = [];

    for (let obj of finalArray) {
      if (!uniqueNames.has(obj.name)) {
        uniqueNames.add(obj.name);
        uniqueObjects.push(obj);
      }
    }

    console.log("finalArray", uniqueObjects);
    setSearchArray(uniqueObjects);
    setInput2("High > Low");
  }, []);

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
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <div className={`w-full h-full overflow-x-auto px-2 ${cabin.className}`}>
      {/* Rule */}

      <div className="bg-[#FFBC35] flex items-center px-6 py-3 justify-between">
        <p className="text-[18px] font-[600] text-black">Rules</p>
        <div
          onClick={() => {
            setAddRule(!addRule);
          }}
          className="relative w-[20px] h-[20px]"
        >
          <Image src={`/blackPlus.svg`} alt="brand" fill />
        </div>
      </div>
      <div className="border-[1px] border-gray-300">
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
            className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 w-[95%] outline-none pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
        <div className="w-[97%] px-3 mb-3 max-h-[160px] overflow-y-auto">
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
              className={`h-[50px] rounded-none shadow-none border-[1px] ${
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
                    className="w-[90%] outline-none text-black"
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
      </div>
      {/* Rule info */}
      <div
        className={`bg-[#CCE0FF] mt-3 flex items-center text-black px-6 py-3 justify-between  ${
          selectRule == "0" ? "bg-[#CCE0FF]" : "bg-[#FFECC6] "
        }`}
      >
        <p className="text-[18px] font-[600]">{rules[+selectRule]}</p>
      </div>
      <div className="border-[1px] border-gray-300 h-[52rem]">
        <div className="mb-6 w-full py-3 px-3">
          <div className="px-3">
            <div className="flex items-center justify-start gap-x-40">
              <div>
                <p className="">Scope</p>
                <div className="bg-[#EAEAEA] w-[280px] mt-3  min-w-[300px]  h-[40px] flex items-center justify-around rounded-[10px]">
                  <div
                    onClick={() => {
                      setTab1("series");
                    }}
                    className={`px-5 h-[85%] py-1 flex items-center rounded-[10px] ${
                      tab1 === "series" && "bg-white text-black"
                    } `}
                  >
                    Series
                  </div>
                  <div
                    onClick={() => {
                      setTab1("group");
                    }}
                    className={`px-6 h-[85%] py-1 flex items-center rounded-[10px] ${
                      tab1 === "group" && "bg-white text-black"
                    } `}
                  >
                    Group
                  </div>
                  <div
                    onClick={() => {
                      setTab1("product");
                    }}
                    className={`px-6 h-[85%] py-1 flex items-center rounded-[10px] ${
                      tab1 === "product" && "bg-white text-black"
                    } `}
                  >
                    Product
                  </div>
                </div>
              </div>
              <div className="">
                <p>Template</p>
                <div className="relative pt-4">
                  <Menu
                    dismiss={{
                      itemPress: false,
                    }}
                  >
                    <MenuHandler>
                      <div>
                        <input
                          type="text"
                          value={variable}
                          className={`${cabin.className} border-gray-300 border-[2px] text-[16px] w-[200px] rounded-[10px] h-[40px] px-2 outline-none bg-[#EAEAEA] text-black`}
                        />

                        <div className="absolute top-6 h-[24px] border-l-[1px] border-[#b4b4b4] w-[30px] py-1 flex justify-end right-2">
                          {/* $
                    {
                       true ? "rotate-180" : ""
                    } */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`
                    
                       h-5 w-5 transition-transform`}
                            fill="none"
                            viewBox="0 0 28 28"
                            stroke="#b4b4b4"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </MenuHandler>
                    <MenuList className={`p-0 text-black ${cabin.className}`}>
                      <Menu
                        dismiss={{
                          itemPress: false,
                        }}
                        placement="right-start"
                        offset={15}
                        open={openMenu}
                        handler={setOpenMenu}
                      >
                        <MenuHandler>
                          <MenuItem className="border-b-[1px] rounded-none border-gray-300 py-4 text-[16px]">
                            <div
                              onClick={() => {
                                console.log("RRR");
                                setVariable("Value Range");
                                setOpenMenu(false);
                              }}
                            >
                              Value Range
                            </div>
                          </MenuItem>
                        </MenuHandler>
                        <MenuList className="relative w-[250px] h-[190px] text-black">
                          {/* <div className={`outline-none ${cabin.className}`}> */}
                          <p className="border-b-[1px] border-gray-300 outline-none font-[600] text-[#656565]">
                            Value Range
                          </p>
                          <div className="mt-2 outline-none">
                            <div className="flex  w-full justify-between ">
                              <p className="text-[#656565] font-[600]">
                                Lower Bound
                              </p>
                              <p>Strict</p>
                            </div>
                            <div className="flex w-full mt-2 justify-end">
                              <Switch
                                id={"rr"}
                                onChange={() => {
                                  setCheck1(!check1);
                                }}
                                checked={check1}
                              />
                            </div>
                            {/* <div className="flex w-full mt-3 justify-between">
                            <p className="text-[#656565] font-[600] ">
                              Upper Bound
                            </p>
                            <p>Strict</p>
                          </div>
                          <div className="flex w-full mt-2 justify-between">
                            <p>Text Input</p>
                            <Switch
                              id={"ss"}
                              checked={check2}
                              onChange={() => {
                                setCheck2(!check2);
                              }}
                            />
                          </div> */}
                          </div>
                          <input
                            type="text"
                            className="absolute left-4 top-[4rem] outline-none py-1 text-black"
                            value={input1 ? input1 : "Text Input"}
                            onChange={(e) => {
                              setInput1(e.target.value);
                            }}
                          />
                          {/* </div> */}
                        </MenuList>
                      </Menu>
                      <MenuItem
                        onClick={() => {
                          setVariable("Not Null");
                        }}
                        className="border-b-[1px] border-gray-300 hover:bg-[#4D91FF] py-4 text-[16px]"
                      >
                        Not Null
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setVariable("Pattern");
                        }}
                        className="border-b-[1px] border-gray-300 hover:bg-[#4D91FF] py-4 text-[16px]"
                      >
                        Pattern
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setVariable("Enumeration");
                        }}
                        className="border-b-[1px] border-gray-300 hover:bg-[#4D91FF] py-4 text-[16px]"
                      >
                        Enumeration
                      </MenuItem>
                      <MenuItem
                        className=" py-4 text-[16px] hover:bg-[#4D91FF] border-b-[1px] border-gray-300"
                        onClick={() => {
                          setVariable("Unique");
                        }}
                      >
                        Unique
                      </MenuItem>
                      {/*                     
                    <MenuItem
                      onClick={() => {
                        console.log("RRR");
                        setVariable("Compare");
                      }}
                    > */}
                      <Menu
                        dismiss={{
                          itemPress: false,
                        }}
                        placement="right-start"
                        offset={15}
                      >
                        <MenuHandler>
                          <MenuItem className="border-b-[1px] rounded-none border-gray-300 py-4 text-[16px]">
                            <div
                              onClick={() => {
                                console.log("RRR");
                                setVariable("Compare");
                                setOpenMenu(false);
                              }}
                            >
                              Compare
                            </div>
                          </MenuItem>
                        </MenuHandler>
                        <MenuList>
                          <p
                            className={`w-full px-1 py-2 border-b-[1px] text-gray-700 border-gray-300 text-[14px] font-[600] outline-none ${cabin.className}`}
                          >
                            Compare
                          </p>
                          <input
                            type="text"
                            className="outline-none py-2 border-b-[1px] border-gray-300 text-black"
                            value={input2}
                            onChange={(e) => {
                              setInput2(e.target.value);
                            }}
                          />
                          {/* <div >
                          <p className="border-b-[1px] border-gray-300 font-[600] text-[#656565]">
                            Compare
                          </p>
                          <div className="mt-2">
                            <div className="flex  w-full justify-between ">
                              <p className="text-[#656565]">Expression</p>
                            </div>
                            <div className="flex w-full mt-2 justify-between">
                              <input type="text" />
                            </div>
                          </div>
                        </div> */}
                        </MenuList>
                      </Menu>
                      {/* </MenuItem> */}
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </div>

            <div className="flex mt-6 items-center">
              <div className="flex w-full gap-x-64 items-center justify-start">
                <div>
                  <p>Type</p>
                  <div className="bg-[#EAEAEA] px-1 h-[40px] flex items-center mt-3 justify-around rounded-[10px]">
                    <div
                      onClick={() => {
                        setTab2("record");
                      }}
                      className={`px-5 h-[85%] py-1 flex items-center rounded-[10px] ${
                        tab2 === "record" && "bg-white text-black"
                      } `}
                    >
                      Record
                    </div>
                    <div
                      onClick={() => {
                        setTab2("aggregate");
                      }}
                      className={`px-5 h-[85%] py-1 flex items-center rounded-[10px] ${
                        tab2 === "aggregate" && "bg-white text-black"
                      } `}
                    >
                      Aggregate
                    </div>
                  </div>
                </div>
                {tab2 === "aggregate" && (
                  <div className="">
                    <p>Aggregate Function</p>
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
                      className={`rounded-[10px] min-w-[200px] text-[18px] mt-3 text-black ${cabin.className}`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[450px] pl-6 pr-8 gap-x-2 gap-y-1 relative grid grid-cols-3">
          <div className="justify-center h-[500px]">
            <div className="flex justify-evenly h-[10%] items-center bg-[#CCE0FF]">
              <p
                className={`${cabin.className} font-[900] text-[18px] text-black`}
              >
                Attributes
              </p>
            </div>
            <div className="bg-[#EEEEEE] w-full overflow-y-auto h-[488px]">
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

              {searchAttr.map((item: any, index: number) => (
                <Card
                  key={index}
                  className="h-[50px] rounded-none border-[1px] flex justify-start px-2 py-1"
                >
                  <div className="flex items-center">
                    <Checkbox
                      color="blue"
                      defaultChecked={item.check}
                      // className="rounded-none"
                      // onChange={() => {}}
                    />
                    <p className="text-black">{item.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="justify-center h-[500px]">
            <div className="flex justify-center h-[10%] items-center bg-[#CCE0FF]">
              <p
                className={`${cabin.className} font-[900] text-[18px] text-black`}
              >
                Schedule
              </p>
            </div>
            <div className="bg-[#EEEEEE] h-[480px] w-full">
              <div
                className={`items-center flex justify-center w-full border-b-[1px] border-white py-4  ${cabin.className}`}
              >
                <div className="mt-2 h-[40px] items-center px-1 py-1 bg-gray-300 flex justify-between rounded-[10px]">
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

              <div className="w-full min-h-[19%] max-h-[25%] overflow-y-auto py-2 px-2 justify-start gap-x-6 border-b-[1px] border-white">
                <div
                  onClick={handleOpen}
                  className="flex justify-start item-center gap-x-2"
                >
                  <div className="relative w-[20px] h-[20px] mt-1 px-4">
                    <Image src={`/clock.svg`} alt="brand" fill />
                  </div>
                  <p
                    className={`${cabin.className} text-black text-[18px] hover:text-[#f65a27] cursor-pointer`}
                  >
                    Calender event schedule
                  </p>
                </div>
                {schedule.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-start items-center w-full gap-x-2"
                  >
                    <p className="text-[11px] w-full mt-1">
                      <div className="flex justify-between px-2 w-full">
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
                      <p className="ml-2">
                        Repeats every {item.weekNumber} {item.interval} on{" "}
                        {item.day[0]} at {item.time}
                      </p>
                    </p>
                  </div>
                ))}
              </div>

              <div
                className={`mt-8 h-[284px] bg-[#EEEEEE] flex flex-col gap-y-5 text-[18px] ${cabin.className}`}
              >
                <p className="w-full h-[30px]  border-b-[1px] border-white px-2">
                  Event
                </p>
                <div className="px-2">
                  <input
                    type="text"
                    placeholder="Enter Event Type"
                    className="bg-transparent border-b-[1px] outline-none border-gray-400 w-[95%] text-black"
                  />
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
                                updateWeek[i].selected =
                                  !updateWeek[i].selected;
                              }
                            }
                            setWeek(updateWeek);
                          }}
                          className={`w-[30px] items-center flex justify-center h-[30px] rounded-full  ${
                            element.selected
                              ? `${element.color}`
                              : "bg-[#EAEAEA]"
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
              <p
                className={`${cabin.className} font-[900] text-[18px] text-black`}
              >
                Results
              </p>
            </div>
            <div className="bg-[#EEEEEE] pb-3 w-full">
              <div
                className={`items-center flex justify-start py-3 w-full md:flex-row ${cabin.className}`}
              >
                <div className="mt-4 h-[40px] w-[100%] flex justify-between px-4 py-1">
                  <p className={`${cabin.className}  text-[18px] text-black`}>
                    Retain
                  </p>
                  <Switch id="1" defaultChecked />
                </div>
              </div>
              <div className="w-full items-center flex px-4 h-[92px] justify-between gap-x-6 border-y-[1px] border-white">
                <p className={`${cabin.className} text-[18px] text-black`}>
                  Detect Anomaly (Auto DQ)
                </p>
                <Switch id="2" defaultChecked />
              </div>
              <div
                className={`mt-8 flex flex-col gap-y-5 text-[18px] ${cabin.className}`}
              >
                <p className="w-full h-[30px] border-b-[1px] border-white px-4">
                  Notification
                </p>
                <div className="w-full flex justify-between h-[40px] items-center border-b-[1px] px-4 border-white pb-4">
                  <p className="text-black">Owners</p>
                  <Switch id="3" defaultChecked />
                </div>
                <div className="w-full flex justify-between h-[40px] items-center border-b-[1px] px-4 border-white pb-4">
                  <p className="text-black">Consumers</p>
                  <Switch id="4" />
                </div>
              </div>
              <div className="flex mt-5 justify-between items-center border-b-[1px] px-4 border-white pb-4">
                <div className="text-black">Alerts Threshold</div>
                <div>
                  <input
                    type="text"
                    value={data.rulesContent.rules[+selectRule].results.alerts}
                    className="outline-none border-b-[2px] bg-transparent text-black border-gray-400 w-8 h-8 "
                  />
                </div>
              </div>
              <div className="flex mt-5 justify-between items-center px-4">
                <div className="text-black">Variance Threshold</div>
                <div>
                  <input
                    type="text"
                    value={"0"}
                    className="outline-none border-b-[2px] text-black border-gray-400 w-8 h-8 px-2 bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
