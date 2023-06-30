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
import { MultiSelect } from "react-multi-select-component";

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
      label: "Status",
      value: "Status",
    },
    {
      label: "Category",
      value: "Category",
    },
  ]);

  const [dropDownValue1, setDropDownValue1] = useState<any>([
    {
      label: "=",
      value: "=",
    },
    {
      label: "!=",
      value: "!=",
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

  const [tab1, setTab1] = useState(data.rulesContent.rules[0].scope);
  const [tab2, setTab2] = useState(data.rulesContent.rules[0].type);

  const [rules, setRules] = useState<any>([]);

  const [addRule, setAddRule] = useState<boolean>(false);
  const [searchAttr, setSearchArray] = useState([]);
  const [newRule, setNewRule] = useState("");

  const [selectRule, setSelectRule] = useState("0");

  React.useEffect(() => {
    let tt = data.lifeCycle.map((item: any) => item.name);
    setRules(tt);
    setScheduleTab(data.lifeCycle[+selectRule].type);
    setHandling(data.lifeCycle[+selectRule].handling);
    setTab1(data.lifeCycle[+selectRule].after);
    console.log(
      data.lifeCycle[+selectRule].after,
      data.lifeCycle[+selectRule].handling
    );
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
  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  const [handling, setHandling] = useState();

  const [lifeCycleChild, setLifeCycleChild] = useState([
    {
      type: true,
      key: "Category",
      operation: "in",
    },
  ]);

  const [dropDownMenu, setDropDownMenu] = useState<any>([
    {
      label: "Active",
      value: "active",
    },
    {
      label: "Inactive",
      value: "inactive",
    },
  ]);
  const [dropDownMenu1, setDropDownMenu1] = useState<any>([
    {
      label: "option 1",
      value: "option 1",
    },
    {
      label: "option 2",
      value: "option 2",
    },
  ]);

  const addLife = () => {
    const temp = [...lifeCycleChild];
    temp.push({
      type: true,
      key: "Category",
      operation: "in",
    });
    setLifeCycleChild(temp);
  };

  const [selected, setSelected] = useState<any>([
    {
      label: "Inactive",
      value: "inactive",
    },
  ]);

  const [selected1, setSelected1] = useState<any>([
    {
      label: "option 1",
      value: "option 1",
    },
    {
      label: "option 2",
      value: "option 2",
    },
  ]);

  const deleteLife = (i: any) => {
    const updatedLifeArray = [...lifeCycleChild];
    updatedLifeArray.splice(i, 1);
    setLifeCycleChild(updatedLifeArray);
  };

  const parent = () => {
    return (
      <div>
        <div className="flex gap-x-8 items-center">
          <div className="mt-6 h-[40px] items-center w-[150px] px-1 py-1 bg-gray-300 flex justify-between rounded-[10px]">
            <p
              onClick={() => {
                setScheduleTab(true);
              }}
              className={`${
                cabin.className
              } rounded-[6px] w-[75px] flex items-center justify-center text-[18px] ${
                scheduleTab && "bg-white text-black"
              }`}
            >
              &nbsp;&nbsp;{"AND"}&nbsp;&nbsp;
            </p>
            <p
              onClick={() => {
                setScheduleTab(false);
              }}
              className={`${
                cabin.className
              } rounded-[6px] w-[75px] flex items-center justify-center text-[18px] ${
                !scheduleTab && "bg-white text-black"
              }`}
            >
              &nbsp;&nbsp;{"OR"}&nbsp;&nbsp;
            </p>
          </div>
          <div
            onClick={() => {
              addLife();
            }}
            className="relative w-[20px] h-[20px] mt-6 cursor-pointer"
          >
            <Image src={`/blackPlus.svg`} alt="brand" fill />
          </div>
        </div>
        <div className="border-l-[1px] border-gray-400">
          <div className="flex justify-between px-10 py-8">
            <div className="min-w-[80px] ">
              <Select
                styles={{
                  control: (styles) => ({
                    ...styles,
                    fontSize: "16px",
                    backgroundColor: "#EAEAEA",
                    borderRadius: "10px",
                  }),
                  option: (
                    styles,
                    { data, isDisabled, isFocused, isSelected }
                  ) => {
                    return {
                      ...styles,
                      backgroundColor: isSelected ? "#4D91FF" : "white",
                      color: isDisabled ? "#ccc" : isSelected ? "white" : "",
                    };
                  },
                }}
                defaultValue={dropDownValue[0]}
                options={dropDownValue}
                className={`max-w-[300px] rounded-[10px] min-w-[140px] text-[16px] ${cabin.className}`}
              />
            </div>
            <div className="min-w-[80px] ">
              <Select
                styles={{
                  control: (styles) => ({
                    ...styles,
                    fontSize: "16px",
                    backgroundColor: "#EAEAEA",
                    borderRadius: "10px",
                  }),
                  option: (
                    styles,
                    { data, isDisabled, isFocused, isSelected }
                  ) => {
                    return {
                      ...styles,
                      backgroundColor: isSelected ? "#4D91FF" : "white",
                      color: isDisabled ? "#ccc" : isSelected ? "white" : "",
                    };
                  },
                }}
                defaultValue={dropDownValue1[0]}
                options={dropDownValue1}
                className={`max-w-[300px] rounded-[10px] min-w-[140px] text-[16px] ${cabin.className}`}
              />
            </div>
            <MultiSelect
              className="w-[200px]"
              labelledBy=""
              options={dropDownMenu}
              onChange={(val: any) => {
                console.log(val);
                setSelected(val);
              }}
              value={selected}
            />
          </div>
          <div className="px-10">
            {lifeCycleChild.map((item, i) => (
              <>
                <div key={i} className="flex justify-between">
                  <div className="mt-2 h-[40px] items-center w-[150px] px-1 bg-gray-300 flex justify-between rounded-[6px]">
                    <p
                      onClick={() => {
                        setScheduleTab(true);
                      }}
                      className={`${
                        cabin.className
                      } rounded-[6px] w-[75px] flex items-center justify-center text-[18px] ${
                        scheduleTab && "bg-white text-black"
                      }`}
                    >
                      &nbsp;&nbsp;{"AND"}&nbsp;&nbsp;
                    </p>
                    <p
                      onClick={() => {
                        setScheduleTab(false);
                      }}
                      className={`${
                        cabin.className
                      } rounded-[6px]  w-[75px] flex justify-center  text-[18px] ${
                        !scheduleTab && "bg-white text-black"
                      }`}
                    >
                      &nbsp;&nbsp;{"OR"}&nbsp;&nbsp;
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      deleteLife(i);
                    }}
                    className="relative w-[13px] h-[18px] mt-6 cursor-pointer"
                  >
                    <Image src={`/bin.svg`} alt="brand" fill />
                  </div>
                </div>
                <div className="flex justify-between w-[100%] pl-10 py-8">
                  <div className="min-w-[80px] ">
                    <Select
                      styles={{
                        control: (styles) => ({
                          ...styles,
                          fontSize: "16px",
                          backgroundColor: "#EAEAEA",
                          borderRadius: "10px",
                        }),
                        option: (
                          styles,
                          { data, isDisabled, isFocused, isSelected }
                        ) => {
                          return {
                            ...styles,
                            backgroundColor: isSelected ? "#4D91FF" : "white",
                            color: isDisabled
                              ? "#ccc"
                              : isSelected
                              ? "white"
                              : "",
                          };
                        },
                      }}
                      defaultValue={dropDownValue[1]}
                      options={dropDownValue}
                      className={`max-w-[300px] rounded-[10px] min-w-[140px] text-[16px] ${cabin.className}`}
                    />
                  </div>
                  <div className="min-w-[80px] ">
                    <Select
                      styles={{
                        control: (styles) => ({
                          ...styles,
                          fontSize: "16px",
                          backgroundColor: "#EAEAEA",
                          borderRadius: "10px",
                        }),
                        option: (
                          styles,
                          { data, isDisabled, isFocused, isSelected }
                        ) => {
                          return {
                            ...styles,
                            backgroundColor: isSelected ? "#4D91FF" : "white",
                            color: isDisabled
                              ? "#ccc"
                              : isSelected
                              ? "white"
                              : "",
                          };
                        },
                      }}
                      defaultValue={{
                        label: "in",
                        value: "in",
                      }}
                      options={dropDownValue1}
                      className={`max-w-[300px] rounded-[10px] min-w-[140px] text-[16px] ${cabin.className}`}
                    />
                  </div>
                  <MultiSelect
                    className="w-[200px]"
                    labelledBy=""
                    options={dropDownMenu1}
                    onChange={(val: any) => {
                      console.log(val);
                      setSelected1(val);
                    }}
                    value={selected1}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full h-full overflow-x-auto px-2 ${cabin.className}`}>
      {/* Rule */}
      <div className="bg-[#FFBC35] flex items-center w-[97%] px-6 py-3 justify-between">
        <p className="text-[18px] font-[600] text-black">Lifecycle</p>
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
      <div className="w-[95%] px-3 mb-3 max-h-[160px] overflow-y-auto">
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

      {/* Rule info */}
      <div
        className={`bg-[#CCE0FF] flex items-center w-[97%] h-[20%] text-black px-6 py-3 justify-between  ${
          selectRule == "0" ? "bg-[#CCE0FF]" : "bg-[#FFECC6] "
        }`}
      >
        <p className="text-[18px] font-[600]">{rules[+selectRule]}</p>
      </div>
      <div className="px-3 py-3">{parent()}</div>
      <div
        className={`bg-[#CCE0FF] flex items-center w-[97%] h-[20%] text-black px-6 py-3 justify-between  ${
          selectRule == "0" ? "bg-[#CCE0FF]" : "bg-[#FFECC6] "
        }`}
      >
        <p className="text-[18px] font-[600]">Handling</p>
      </div>
      <div className="px-3">
        <div className="flex py-4 items-center gap-x-40">
          <div className="">
            <p>Action</p>
            <div className="mt-2 h-[40px] items-center px-1 py-1 bg-gray-300 flex justify-between rounded-[10px]">
              <p
                onClick={() => {
                  setScheduleTab(true);
                }}
                className={`${cabin.className} rounded-[10px] text-[18px] ${
                  handling === "destroy" && "bg-white text-black"
                }`}
              >
                &nbsp;&nbsp;{"Destroy"}&nbsp;&nbsp;
              </p>
              <p
                onClick={() => {
                  setScheduleTab(false);
                }}
                className={`${cabin.className} rounded-[10px] text-[18px] ${
                  handling === "archive" && "bg-white text-black"
                }`}
              >
                &nbsp;&nbsp;{"Archive"}&nbsp;&nbsp;
              </p>
            </div>
          </div>
          <div>
            <p>After</p>
            <div className="flex gap-x-10">
              <input
                type="number"
                defaultValue={data.lifeCycle[0].afterNumber}
                value={data.lifeCycle[+selectRule].afterNumber}
                onChange={(e) => {
                  console.log(e.target.value);
                  setWeekNumber(e.target.value);
                }}
                className="w-[53px] h-[48px] p-5 text-[18px] font-[500] border-[#EAEAEA] border-[2px] rounded-[10px] outline-none bg-gray-300"
              />
              <div className="bg-[#EAEAEA] w-[280px] mt-1 min-w-[300px]  h-[40px] flex items-center justify-around rounded-[10px]">
                <div
                  onClick={() => {
                    setTab1("days");
                  }}
                  className={`px-5 h-[85%] py-1 flex items-center rounded-[10px] ${
                    tab1 === "days" && "bg-white text-black"
                  } `}
                >
                  Days
                </div>
                <div
                  onClick={() => {
                    setTab1("months");
                  }}
                  className={`px-6 h-[85%] py-1 flex items-center rounded-[10px] ${
                    tab1 === "months" && "bg-white text-black"
                  } `}
                >
                  Months
                </div>
                <div
                  onClick={() => {
                    setTab1("year");
                  }}
                  className={`px-6 h-[85%] py-1 flex items-center rounded-[10px] ${
                    tab1 === "year" && "bg-white text-black"
                  } `}
                >
                  Years
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
