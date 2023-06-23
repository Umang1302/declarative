"use client";

import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Collapse,
  Dialog,
  Switch,
} from "@material-tailwind/react";
import { Cabin } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const cabin = Cabin({ subsets: ["latin"] });

export default function OverviewTable({ data }: any) {
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

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  const [open1, setOpen1] = useState(false);
  const toggleOpen1 = () => setOpen1((cur) => !cur);

  const [open2, setOpen2] = useState(false);
  const toggleOpen2 = () => setOpen2((cur) => !cur);

  const [open3, setOpen3] = useState(false);
  const toggleOpen3 = () => setOpen3((cur) => !cur);

  const [open4, setOpen4] = useState(false);
  const toggleOpen4 = () => setOpen4((cur) => !cur);
  const [open5, setOpen5] = useState(false);
  const toggleOpen5 = () => setOpen5((cur) => !cur);
  const [open6, setOpen6] = useState(false);
  const toggleOpen6 = () => setOpen6((cur) => !cur);
  const [open7, setOpen7] = useState(false);
  const toggleOpen7 = () => setOpen7((cur) => !cur);
  const [open8, setOpen8] = useState(false);
  const toggleOpen8 = () => setOpen8((cur) => !cur);

  const [arg1, setArg1] = useState("Records");
  const [arg2, setArg2] = useState("named");
  const [arg3, setArg3] = useState("MNPI");
  const [arg4, setArg4] = useState("Pperation");
  const [arg5, setArg5] = useState("Reporting");
  const [arg6, setArg6] = useState("=");
  //   const [arg7, setArg7] = useState("North America");
  //   const [arg8, setArg8] = useState("region");
  //   const [arg9, setArg9] = useState("US");

  const [rules, setRules] = useState<any>([
    "Only US employees can access US Mutual Funds",
    "Limit access for US Registered Funds to US users only",
  ]);

  const [multiValueArray, setMultivalueArray] = useState([
    "Reporting",
    "Fraud Detection",
    "Sales",
    "Marketing",
    "Audit",
    "MIS",
  ]);

  const [addRule, setAddRule] = useState<boolean>(false);

  const [newRule, setNewRule] = useState("");

  React.useEffect(() => {
    console.log("SSSSS");
  }, [addRule]);

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
  const [region, setRegion] = useState("US");

  React.useEffect(() => {
    console.log(selectRule);
  }, [selectRule, rules]);

  return (
    <div className={`w-full h-full px-2 ${cabin.className}`}>
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
        className={`flex items-center w-[97%] h-[20%] px-6 py-3 justify-between  ${
          selectRule == "0" ? "bg-[#CCE0FF]" : "bg-[#F65A27] text-white"
        }`}
      >
        <p className="text-[18px] font-[600]">{rules[+selectRule]}</p>
      </div>
      <div className="mb-6 w-full py-3">
        <div className="bg-[#EEEEEE] px-10 py-4 w-[93%]">
          <p className="font-[600]">Description:</p>
          <p>Limit access for US Registered Funds to US users only</p>
        </div>
        <div className="flex relative py-3 px-10">
          <p className="gap-x-1 w-full flex">
            Only show
            <span onClick={toggleOpen}>
              <p className="font-[800] flex">
                {arg1}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    open ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#F65A27"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </p>
              <Collapse
                className="absolute z-50 bg-white  w-[70px]"
                open={open}
              >
                <div className="border-[1px] flex flex-col items-center py-1">
                  <p
                    onClick={() => {
                      setArg1("Records");
                    }}
                    className="text-gray-700  flex justify-center px-3 py-2 text-sm border-b-[1px] w-full "
                  >
                    Records
                  </p>

                  <p
                    onClick={() => {
                      setArg1("Series");
                    }}
                    className="text-gray-700 py-2 flex justify-center text-sm"
                  >
                    Series
                  </p>
                </div>
              </Collapse>
            </span>
            where user attribute
            <span onClick={toggleOpen1}>
              {" "}
              <p className="font-[800] flex">
                region
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    open1 ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#F65A27"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </p>
              <Collapse
                className="absolute z-50 w-[100px] bg-white"
                open={open1}
              >
                <div className="border-[1px] flex flex-col items-center py-1">
                  <p className="text-gray-700 px-3 py-2 text-sm border-b-[1px] w-full ">
                    Reporting
                  </p>
                  <p className="text-gray-700 px-3 py-2 text-sm border-b-[1px] w-full ">
                    Sales
                  </p>

                  <p className="text-gray-700 py-2 text-sm"> Marketing</p>
                </div>
              </Collapse>
            </span>
            matches product attribute
            <span onClick={toggleOpen2}>
              {" "}
              <p className="font-[800] flex">
                region
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    open2 ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#F65A27"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </p>
              <Collapse
                className="absolute z-50 w-[100px] bg-white"
                open={open2}
              >
                <div className="border-[1px] flex flex-col items-center py-1">
                  <p className="text-gray-700 px-3 py-2 text-sm border-b-[1px] w-full ">
                    Reporting
                  </p>
                  <p className="text-gray-700 px-3 py-2 text-sm border-b-[1px] w-full ">
                    Sales
                  </p>

                  <p className="text-gray-700 py-2 text-sm"> Marketing</p>
                </div>
              </Collapse>
            </span>
          </p>
        </div>
        <div className="flex relative py-3 px-10">
          <p className="gap-x-1 w-full flex">
            Except For Usage intent
            <span onClick={toggleOpen4}>
              <p className="font-[800] flex">
                <div>{multiValueArray.map((item) => `${item}, `)}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    open4 ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#F65A27"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </p>
              <Collapse
                className="absolute z-50 w-[120px] bg-white"
                open={open4}
              >
                <div className="border-[1px] flex flex-col items-center py-1 ">
                  <p
                    onClick={() => {
                      setArg5("Reporting");
                    }}
                    className="text-gray-700 flex justify-start  py-2 text-sm border-b-[1px] w-full items-center "
                  >
                    <Checkbox
                      onChange={(e) => {
                        if (e.currentTarget.checked) {
                          console.log("add");
                          const aa = [...multiValueArray];
                          aa.push("Reporting");
                          setMultivalueArray(aa);
                        } else {
                          console.log("remove");
                          const index = multiValueArray.indexOf("Reporting");
                          const aa = [...multiValueArray];
                          aa.splice(index, 1);
                          setMultivalueArray(aa);
                        }
                      }}
                      checked={multiValueArray.indexOf("Reporting") !== -1}
                      type="checkbox"
                    />
                    Reporting
                  </p>
                  <p
                    onClick={() => {
                      setArg5("Sales");
                    }}
                    className="text-gray-700 flex items-center justify-start  py-2 text-sm border-b-[1px] w-full "
                  >
                    <Checkbox
                      onChange={(e) => {
                        if (e.currentTarget.checked) {
                          console.log("add");
                          const aa = [...multiValueArray];
                          aa.push("Sales");
                          setMultivalueArray(aa);
                        } else {
                          console.log("remove");
                          const index = multiValueArray.indexOf("Sales");
                          const aa = [...multiValueArray];
                          aa.splice(index, 1);
                          setMultivalueArray(aa);
                        }
                      }}
                      checked={multiValueArray.indexOf("Sales") !== -1}
                      type="checkbox"
                    />
                    Sales
                  </p>

                  <p
                    onClick={() => {
                      setArg5("Marketing");
                    }}
                    className="text-gray-700 py-2 flex items-center justify-start text-sm w-full"
                  >
                    <Checkbox
                      onChange={(e) => {
                        if (e.currentTarget.checked) {
                          console.log("add");
                          const aa = [...multiValueArray];
                          aa.push("Marketing");
                          setMultivalueArray(aa);
                        } else {
                          console.log("remove");
                          const index = multiValueArray.indexOf("Marketing");
                          const aa = [...multiValueArray];
                          aa.splice(index, 1);
                          setMultivalueArray(aa);
                        }
                      }}
                      checked={multiValueArray.indexOf("Marketing") !== -1}
                      type="checkbox"
                    />
                    Marketing
                  </p>
                  <p
                    onClick={() => {
                      setArg5("Marketing");
                    }}
                    className="text-gray-700 py-2 flex items-center justify-start text-sm w-full"
                  >
                    <Checkbox
                      onChange={(e) => {
                        if (e.currentTarget.checked) {
                          console.log("add");
                          const aa = [...multiValueArray];
                          aa.push("Fraud Detection");
                          setMultivalueArray(aa);
                        } else {
                          console.log("remove");
                          const index =
                            multiValueArray.indexOf("Fraud Detection");
                          const aa = [...multiValueArray];
                          aa.splice(index, 1);
                          setMultivalueArray(aa);
                        }
                      }}
                      checked={
                        multiValueArray.indexOf("Fraud Detection") !== -1
                      }
                      type="checkbox"
                    />
                    Fraud Detection
                  </p>
                  <p
                    onClick={() => {
                      setArg5("Marketing");
                    }}
                    className="text-gray-700 py-2 flex items-center justify-start text-sm w-full"
                  >
                    <Checkbox
                      onChange={(e) => {
                        if (e.currentTarget.checked) {
                          console.log("add");
                          const aa = [...multiValueArray];
                          aa.push("Audit");
                          setMultivalueArray(aa);
                        } else {
                          console.log("remove");
                          const index = multiValueArray.indexOf("Audit");
                          const aa = [...multiValueArray];
                          aa.splice(index, 1);
                          setMultivalueArray(aa);
                        }
                      }}
                      checked={multiValueArray.indexOf("Audit") !== -1}
                      type="checkbox"
                    />
                    Audit
                  </p>
                  <p
                    onClick={() => {
                      setArg5("Marketing");
                    }}
                    className="text-gray-700 py-2 flex items-center justify-start text-sm w-full"
                  >
                    <Checkbox
                      onChange={(e) => {
                        if (e.currentTarget.checked) {
                          console.log("add");
                          const aa = [...multiValueArray];
                          aa.push("MIS");
                          setMultivalueArray(aa);
                        } else {
                          console.log("remove");
                          const index = multiValueArray.indexOf("MIS");
                          const aa = [...multiValueArray];
                          aa.splice(index, 1);
                          setMultivalueArray(aa);
                        }
                      }}
                      checked={multiValueArray.indexOf("MIS") !== -1}
                      type="checkbox"
                    />
                    MIS
                  </p>
                </div>
              </Collapse>
            </span>
            By user having
            <span onClick={toggleOpen5}>
              {" "}
              <p className="font-[800] flex">
                department
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    open5 ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#F65A27"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </p>
              <Collapse
                className="absolute z-50 bg-white w-[100px]"
                open={open5}
              >
                <div className="border-[1px] flex flex-col items-center py-1 ">
                  <p className="text-gray-700 flex justify-center px-3 py-2 text-sm border-b-[1px] w-full ">
                    Reporting
                  </p>
                  <p className="text-gray-700 flex justify-center px-3 py-2 text-sm border-b-[1px] w-full ">
                    Sales
                  </p>

                  <p className="text-gray-700 flex justify-center py-2 text-sm">
                    {" "}
                    Marketing
                  </p>
                </div>
              </Collapse>
            </span>
            <span onClick={toggleOpen6}>
              {" "}
              <p className="font-[800] flex">
                {arg6}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    open6 ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#F65A27"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </p>
              <Collapse
                className="absolute z-50 bg-white w-[100px]"
                open={open6}
              >
                <div className="border-[1px] flex flex-col items-center py-1 ">
                  <p
                    onClick={() => {
                      setArg6("=");
                    }}
                    className="text-gray-700 flex justify-center px-3 py-2 text-sm border-b-[1px] w-full "
                  >
                    =
                  </p>
                  <p
                    onClick={() => {
                      setArg6("!=");
                    }}
                    className="text-gray-700 flex justify-center px-3 py-2 text-sm border-b-[1px] w-full "
                  >
                    !=
                  </p>

                  <p
                    onClick={() => {
                      setArg6(">");
                    }}
                    className="text-gray-700 flex justify-center py-2 text-sm"
                  >
                    {">"}
                  </p>
                  <p
                    onClick={() => {
                      setArg6("<");
                    }}
                    className="text-gray-700 flex justify-center py-2 text-sm"
                  >
                    {"<"}
                  </p>
                  <p
                    onClick={() => {
                      setArg6(">=");
                    }}
                    className="text-gray-700 flex justify-center py-2 text-sm"
                  >
                    {">="}
                  </p>
                  <p
                    onClick={() => {
                      setArg6("<=");
                    }}
                    className="text-gray-700 flex justify-center py-2 text-sm"
                  >
                    {"<="}
                  </p>
                </div>
              </Collapse>
            </span>
            <span onClick={toggleOpen8}>
              {" "}
              <input
                className="font-[800] w-[30px]"
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value);
                }}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
