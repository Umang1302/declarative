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
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const cabin = Cabin({ subsets: ["latin"] });

export default function OverviewTable({ data }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const chartData = {
    datasets: [
      {
        data: [2, 2, 2],
        backgroundColor: ["#336699", "#99CCFF", "#666666"],
        display: true,
        borderColor: "#D1D6DC",
      },
    ],
  };

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
    "Count of funds in same category",
    "YoY Growth in number of Funds ",
  ]);

  const [addRule, setAddRule] = useState<boolean>(false);
  const [searchAttr, setSearchArray] = useState([
    {
      attribute: "initial_investment",
      check: false,
    },
    {
      attribute: "subsequent_investment",
      check: false,
    },
  ]);
  const [newRule, setNewRule] = useState("");

  React.useEffect(() => {
    console.log("SSSSS");
  }, [addRule, searchAttr, tab1]);

  const [metricsTab, setMetricsTab] = useState("");

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
      <div
        className={`bg-[#CCE0FF] flex items-center w-[97%] h-[20%] px-6 py-2 justify-between ${
          selectRule == "0" ? "bg-[#CCE0FF]" : "bg-[#F65A27] text-white"
        }`}
      >
        <p className="text-[18px] font-[600]">{rules[+selectRule]}</p>
        <div
          className={`mt-2 h-[40px] w-[300px] items-center px-1 py-1  flex justify-between rounded-[10px] ${
            selectRule == "0" ? "bg-white" : "bg-[#ffa283] text-black"
          }`}
        >
          <p
            onClick={() => {
              setMetricsTab("0");
            }}
            className={`${
              cabin.className
            } rounded-[10px] cursor-pointer text-[18px] ${
              metricsTab === "0" && "bg-[#CCE0FF] px-4"
            }`}
          >
            &nbsp;&nbsp;{"Function"}&nbsp;&nbsp;
          </p>
          <p
            onClick={() => {
              setMetricsTab("1");
            }}
            className={`${
              cabin.className
            } rounded-[10px] cursor-pointer text-[18px] ${
              metricsTab === "1" && "bg-[#CCE0FF] px-4"
            }`}
          >
            &nbsp;&nbsp;{"Expression"}&nbsp;&nbsp;
          </p>
          <p
            onClick={() => {
              setMetricsTab("2");
            }}
            className={`${
              cabin.className
            } rounded-[10px] cursor-pointer text-[18px] ${
              metricsTab === "2" && "bg-[#CCE0FF] px-4"
            }`}
          >
            &nbsp;&nbsp;{"Job"}&nbsp;&nbsp;
          </p>
        </div>
      </div>
      <div className="py-2 px-3">
        {/*  */}
        {metricsTab === "0" ? (
          <div className="flex justify-center py-10 w-full">
            <div className="grid grid-cols-2 gap-y-5 gap-x-72">
              <div>
                <p className="w-full h-[30px] text-[18px] font-[600]">
                  Attributes
                </p>
                <input
                  type="text"
                  placeholder="Enter Event Type"
                  className="bg-transparent border-b-[1px] border-gray-400"
                />
              </div>
              <div>
                <p className="w-full h-[30px] text-[18px] font-[600]">
                  Functions
                </p>
                <input
                  type="text"
                  placeholder="Enter Event Type"
                  className="bg-transparent border-b-[1px] border-gray-400"
                />
              </div>
              <div>
                <p className="w-full h-[30px] text-[18px] font-[600]">
                  Windows
                </p>
                <input
                  type="text"
                  placeholder="Enter Event Type"
                  className="bg-transparent border-b-[1px] border-gray-400"
                />
              </div>
              <div></div>
            </div>
          </div>
        ) : metricsTab === "1" ? (
          <Doughnut
            data={chartData}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: false,
                },
              },
              rotation: -90,
              circumference: 180,
              cutout: "90%",
              maintainAspectRatio: true,
              responsive: true,
            }}
          />
        ) : (
          <h5>Hello2</h5>
        )}
      </div>
    </div>
  );
}
