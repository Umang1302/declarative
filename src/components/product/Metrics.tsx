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
import React, { useEffect } from "react";
import Select from "react-select";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { MultiSelect } from "react-multi-select-component";
import useState from "react-usestateref";
Chart.register(ArcElement);

const cabin = Cabin({ subsets: ["latin"] });

export default function Metrics({ data }: any) {
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

  const [week, setWeek] = React.useState<any>([
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

  const [dropDownValue, setDropDownValue] = React.useState<any>([
    {
      label: "Week",
      value: "week",
    },
    {
      label: "Month",
      value: "month",
    },
  ]);

  const [dropDownValue1, setDropDownValue1] = React.useState<any>([
    {
      label: "Sum",
      value: "sum",
    },
    {
      label: "Average",
      value: "average",
    },
  ]);

  const [weekNumber, setWeekNumber] = React.useState<string>("1");
  const [interval, setInterval] = React.useState<string>("Week");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const [schedule, setSchedule] = React.useState<any>([
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

  const [tab1, setTab1] = React.useState("group");
  const [tab2, setTab2] = React.useState("");

  const [rules, setRules] = React.useState<any>([]);

  useEffect(() => {
    setRules(data.metrics.map((item: any) => item.name));
  }, []);

  const [addRule, setAddRule] = React.useState<boolean>(false);
  const [searchAttr, setSearchArray] = React.useState([]);
  const [newRule, setNewRule] = React.useState("");
  const [profileArray, setProfileArray] = React.useState([
    "Count",
    "Count Distinct",
    "Min",
    "Max",
    "Mean",
    "Median",
    "Std. Deviation",
    "Category Values (Enumerations)",
    "Null",
    "Not Null",
  ]);

  const [aggregateArray, setAggregateArray] = React.useState([
    "Sum",
    "Min",
    "Max",
    "Mean",
    "Std. Deviation",
  ]);

  const [periodArray, setPeriodArray] = React.useState([
    "Year",
    "Quarter",
    "Month",
    "Week",
    "YTD",
    "MTD",
    "QRD",
    "WTD",
    "52 Week",
    "12 Month",
    "3 Month",
    "1 Month",
    "Series",
    "Custom",
  ]);

  const [metric, setMetric] = React.useState([
    "Growth-Absolute",
    "Growth-Percentage",
    "High",
    "Low",
    "Mean",
    "Median",
    "Range",
  ]);
  useEffect(() => {
    let temp = data.attributes.map((item: any) => item.name);
    setSearchArray(temp);
  }, []);

  React.useEffect(() => {
    console.log("SSSSS");
  }, [addRule, searchAttr, tab1]);

  const [metricsTab, setMetricsTab, metricsTabRef] = useState("");
  const [selectRule, setSelectRule] = React.useState("0");
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);

  useEffect(() => {
    console.log(
      data.metrics[+selectRule].type,
      "data.metrics[+selectRule].type",
      selectRule
    );
    setMetricsTab(data.metrics[+selectRule].type);
    setTab1(data.metrics[+selectRule].scope);
    setTab2(data.metrics[+selectRule].order);
  }, [metricsTabRef.current, selectRule, rules]);

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

  React.useEffect(() => {
    console.log(selectRule);
  }, []);

  return (
    <div className={`w-full h-full overflow-x-auto px-2 ${cabin.className}`}>
      {/* Rule */}
      <div className="bg-[#CCE0FF] flex items-center w-[97%] px-6 py-3 justify-between">
        <p className="text-[18px] font-[600]">Metrics Information</p>
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
            className={`h-[50px] shadow-none rounded-none border-[1px] ${
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
        className={`bg-[#CCE0FF] flex items-center w-[97%] text-black h-[20%] px-6 py-2 justify-between ${
          selectRule == "0" ? "bg-[#CCE0FF]" : "bg-[#FFECC6]"
        }`}
      >
        <p className="text-[18px] font-[600]">{rules[+selectRule]}</p>
        <div
          className={`mt-2 h-[40px] w-[380px] items-center px-1 py-1  flex justify-between rounded-[10px] bg-white`}
        >
          <p
            // onClick={() => {
            //   setMetricsTab("0");
            // }}
            className={`${
              cabin.className
            } rounded-[10px] cursor-pointer text-[18px] ${
              metricsTabRef.current === "0"
                ? "bg-[#CCE0FF] px-4"
                : "text-gray-500"
            }`}
          >
            &nbsp;&nbsp;{"Function"}&nbsp;&nbsp;
          </p>
          <p
            // onClick={() => {
            //   setMetricsTab("1");
            // }}
            className={`${
              cabin.className
            } rounded-[10px] cursor-pointer text-[18px] ${
              metricsTabRef.current === "1"
                ? "bg-[#CCE0FF] px-4"
                : "text-gray-500"
            }`}
          >
            &nbsp;&nbsp;{"Auto-Period"}&nbsp;&nbsp;
          </p>
          <p
            // onClick={() => {
            //   setMetricsTab("2");
            // }}
            className={`${
              cabin.className
            } rounded-[10px] cursor-pointer text-[18px] ${
              metricsTabRef.current === "2"
                ? "bg-[#CCE0FF] px-4"
                : "text-gray-500"
            }`}
          >
            &nbsp;&nbsp;{"Expression"}&nbsp;&nbsp;
          </p>
          <p
            // onClick={() => {
            //   setMetricsTab("3");
            // }}
            className={`${
              cabin.className
            } rounded-[10px] cursor-pointer text-[18px] ${
              metricsTabRef.current === "3"
                ? "bg-[#CCE0FF] px-4"
                : "text-gray-500"
            }`}
          >
            &nbsp;&nbsp;{"Job"}&nbsp;&nbsp;
          </p>
        </div>
      </div>
      <div className="py-2 h-[400px] px-3">
        {/*  */}
        {metricsTabRef.current === "0" ? (
          <div className="py-10 w-full">
            <div className="flex justify-between">
              <div className="">
                <p className="font-[600]">Scope</p>
                <div className="bg-[#EAEAEA] w-[280px] mt-3 min-w-[300px] h-[40px] flex items-center justify-around rounded-[10px]">
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
                      setTab1("record");
                    }}
                    className={`px-6 h-[85%] py-1 flex items-center rounded-[10px] ${
                      tab1 === "record" && "bg-white text-black"
                    } `}
                  >
                    Record
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
              <div className="relative">
                <p className="mb-3">Attribute</p>
                <input
                  type="text"
                  readOnly
                  value={data.metrics[+selectRule].attributes[0]}
                  className={`${cabin.className} border-gray-300 border-[2px] text-[18px] rounded-[10px] h-[40px] px-2 outline-none bg-[#EAEAEA] text-black`}
                />
              </div>
              <div className="relative">
                <p className="mb-3">Function</p>
                <input
                  type="text"
                  readOnly
                  value={data.metrics[+selectRule].function}
                  className={`${cabin.className} border-gray-300 border-[2px] text-[18px] rounded-[10px] h-[40px] px-2 outline-none bg-[#EAEAEA] text-black`}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="relative">
                <p className="mb-3">Window</p>
                <input
                  type="text"
                  readOnly
                  value={data.metrics[+selectRule].window}
                  className={`${cabin.className} border-gray-300 border-[2px] text-[18px] rounded-[10px] h-[40px] px-2 outline-none bg-[#EAEAEA] text-black`}
                />
              </div>
              <div className="bg-[#EAEAEA] w-[250px] px-1 mt-8 -ml-[5.5rem] h-[40px] flex items-center justify-between rounded-[10px]">
                <div
                  onClick={() => {
                    setTab2("ascending");
                  }}
                  className={`px-5 h-[85%] py-1 flex items-center rounded-[10px] ${
                    tab2 === "ascending" && "bg-white text-black"
                  } `}
                >
                  Ascending
                </div>
                <div
                  onClick={() => {
                    setTab2("desending");
                  }}
                  className={`px-6 h-[85%] py-1 flex items-center rounded-[10px] ${
                    tab2 === "desending" && "bg-white text-black"
                  } `}
                >
                  Desending
                </div>
              </div>
              <div></div>
            </div>
            {/* <div className="grid grid-cols-2 gap-y-5 gap-x-72">
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
            </div> */}
          </div>
        ) : metricsTabRef.current === "1" ? (
          <div className="py-10 w-full">
            <div className="flex justify-between">
              <div className="">
                <p className="font-[600]">Scope</p>
                <div className="bg-[#EAEAEA] w-[280px] mt-3 min-w-[300px] h-[40px] flex items-center justify-around rounded-[10px]">
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
                      setTab1("record");
                    }}
                    className={`px-6 h-[85%] py-1 flex items-center rounded-[10px] ${
                      tab1 === "record" && "bg-white text-black"
                    } `}
                  >
                    Record
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
              <div className="relative">
                <p className="mb-3">Attribute</p>
                <input
                  type="text"
                  readOnly
                  value={
                    data.metrics[+selectRule] &&
                    data.metrics[+selectRule].attributes &&
                    data.metrics[+selectRule].attributes[0]
                  }
                  className={`${cabin.className} border-gray-300 border-[2px] text-[18px] rounded-[10px] h-[40px] px-2 outline-none bg-[#EAEAEA] text-black`}
                />
                <div
                  onClick={() => {
                    setVisible(!visible);
                  }}
                  className="absolute top-11 left-44 h-[24px] border-l-[1px] border-[#b4b4b4] w-[30px] py-1 flex justify-end "
                >
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
                {visible && (
                  <div className="absolute z-50 max-h-[200px] overflow-y-auto">
                    {searchAttr.map((item: any, index: number) => (
                      <Card
                        key={index}
                        className="h-[50px] rounded-none border-[1px] flex justify-start px-2 py-1"
                      >
                        <div className="flex items-center">
                          <Checkbox
                            color="blue"
                            // defaultChecked={item.check}
                            defaultChecked={
                              data.metrics[+selectRule].attributes.indexOf(
                                item
                              ) !== -1
                            }
                            // className="rounded-none"
                            // onChange={() => {}}
                          />
                          <p className="text-black">{item}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <p className="mb-3">Profile</p>
                <input
                  type="text"
                  readOnly
                  value={
                    data.metrics[+selectRule] &&
                    data.metrics[+selectRule].profile &&
                    data.metrics[+selectRule].profile[0] &&
                    data.metrics[+selectRule].profile[0]
                  }
                  className={`${cabin.className} border-gray-300 border-[2px] text-[18px] rounded-[10px] h-[40px] px-2 outline-none bg-[#EAEAEA] text-black`}
                />
                <div
                  onClick={() => {
                    setVisible1(!visible1);
                  }}
                  className="absolute top-11 left-44 h-[24px] border-l-[1px] border-[#b4b4b4] w-[30px] py-1 flex justify-end "
                >
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
                {visible1 && (
                  <div className="absolute z-50 max-h-[200px] overflow-y-auto">
                    {profileArray.map((item: any, index: number) => (
                      <Card
                        key={index}
                        className="h-[50px] rounded-none border-[1px] flex justify-start px-2 py-1"
                      >
                        <div className="flex items-center">
                          <Checkbox
                            color="blue"
                            // defaultChecked={item.check}
                            defaultChecked={
                              data.metrics[+selectRule].profile.indexOf(
                                item
                              ) !== -1
                            }
                            // className="rounded-none"
                            // onChange={() => {}}
                          />
                          <p className="text-black">{item}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="relative">
                <p className="mb-3">Aggregate</p>
                <input
                  type="text"
                  readOnly
                  value={
                    data.metrics[+selectRule] &&
                    data.metrics[+selectRule].aggregate &&
                    data.metrics[+selectRule].aggregate[0]
                      ? data.metrics[+selectRule].aggregate[0]
                      : ""
                  }
                  className={`${cabin.className} border-gray-300 border-[2px] text-[18px] rounded-[10px] h-[40px] px-2 outline-none bg-[#EAEAEA] text-black`}
                />
                <div
                  onClick={() => {
                    setVisible2(!visible2);
                  }}
                  className="absolute top-11 left-44 h-[24px] border-l-[1px] border-[#b4b4b4] w-[30px] py-1 flex justify-end "
                >
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
                {visible2 && (
                  <div className="absolute z-50 max-h-[200px] overflow-y-auto">
                    {aggregateArray.map((item: any, index: number) => (
                      <Card
                        key={index}
                        className="h-[50px] rounded-none border-[1px] flex justify-start px-2 py-1"
                      >
                        <div className="flex items-center">
                          <Checkbox
                            color="blue"
                            // defaultChecked={item.check}
                            defaultChecked={
                              data.metrics[+selectRule].aggregate.indexOf(
                                item
                              ) !== -1
                            }
                            // className="rounded-none"
                            // onChange={() => {}}
                          />
                          <p className="text-black">{item}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative ml-20">
                <p className="mb-3">Period</p>
                <input
                  type="text"
                  readOnly
                  value={
                    data.metrics[+selectRule] &&
                    data.metrics[+selectRule].period &&
                    data.metrics[+selectRule].period[0]
                      ? data.metrics[+selectRule].period[0]
                      : ""
                  }
                  className={`${cabin.className} border-gray-300 border-[2px] text-[18px] rounded-[10px] h-[40px] px-2 outline-none bg-[#EAEAEA] text-black`}
                />
                <div
                  onClick={() => {
                    setVisible3(!visible3);
                  }}
                  className="absolute top-11 left-44 h-[24px] border-l-[1px] border-[#b4b4b4] w-[30px] py-1 flex justify-end "
                >
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
                {visible3 && (
                  <div className="absolute z-50 max-h-[200px] overflow-y-auto">
                    {periodArray.map((item: any, index: number) => (
                      <Card
                        key={index}
                        className="h-[50px] rounded-none border-[1px] flex justify-start px-2 py-1"
                      >
                        <div className="flex items-center">
                          <Checkbox
                            color="blue"
                            // defaultChecked={item.check}
                            defaultChecked={
                              data.metrics[+selectRule].period.indexOf(item) !==
                              -1
                            }
                            // className="rounded-none"
                            // onChange={() => {}}
                          />
                          <p className="text-black">{item}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <p className="mb-3">Metric</p>
                <input
                  type="text"
                  readOnly
                  value={
                    data.metrics[+selectRule] &&
                    data.metrics[+selectRule].metric &&
                    data.metrics[+selectRule].metric[0]
                      ? data.metrics[+selectRule].metric[0]
                      : ""
                  }
                  className={`${cabin.className} border-gray-300 border-[2px] text-[18px] rounded-[10px] h-[40px] px-2 outline-none bg-[#EAEAEA] text-black`}
                />
                <div
                  onClick={() => {
                    setVisible4(!visible4);
                  }}
                  className="absolute top-11 left-44 h-[24px] border-l-[1px] border-[#b4b4b4] w-[30px] py-1 flex justify-end "
                >
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
                {visible4 && (
                  <div className="absolute z-50 max-h-[200px] overflow-y-auto">
                    {metric.map((item: any, index: number) => (
                      <Card
                        key={index}
                        className="h-[50px] rounded-none border-[1px] flex justify-start px-2 py-1"
                      >
                        <div className="flex items-center">
                          <Checkbox
                            color="blue"
                            // defaultChecked={item.check}
                            defaultChecked={
                              data.metrics[+selectRule].metric.indexOf(item) !==
                              -1
                            }
                            // className="rounded-none"
                            // onChange={() => {}}
                          />
                          <p className="text-black">{item}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <h5>Hello3</h5>
        )}
      </div>
    </div>
  );
}
