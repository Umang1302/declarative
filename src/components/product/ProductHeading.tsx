"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Cabin } from "next/font/google";
import Select from "react-select";
const cabin = Cabin({ subsets: ["latin"] });

export default function ProductHeading({ data, editable }: any) {
  const [open, setOpen] = useState(true);
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
  const [dropDownValue1, setDropDownValue1] = useState<any>([
    {
      label: "Static",
      value: "static",
    },
    {
      label: "Incremental",
      value: "incremental",
    },
  ]);
  const [dropDownValue2, setDropDownValue2] = useState<any>([
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
  ]);

  useEffect(() => {
    console.log("EDITABLE", editable);
  }, []);

  const label = [
    {
      id: 1,
      label: "Mutual Funds",
    },
    {
      id: 2,
      label: "Securities",
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

  if (!editable) {
    return (
      <div className={`flex justify-between`}>
        <div className={`${cabin.className} text-black w-full`}>
          <p className="text-[32px] font-bold">{data.name}</p>
          <div className="flex mt-1 gap-x-[6%] text-[#656565]">
            <p className="text-[16px] flex gap-x-1">
              <span className="font-[800]">Product Id:</span>
              {"   "} <p className="text-black">{data.productId}</p>
              <div className="relative w-3 mt-[4px] h-3">
                <Image alt="" src="/copy.svg" fill />
              </div>
            </p>
            {/* <p className="text-[2rem] flex">
            <div className="w-1 h-1 mt-[6px] mr-1 bg-blue-800 rounded-full"></div>
            {data.tier}
          </p> */}
            <p className="text-[16px] text-black">
              <span className="font-[800] text-[#656565]">Source: </span>{" "}
              Dataset
            </p>
            <p className="text-[16px] flex gap-x-1">
              <span className="font-[800]">Source Id: </span>
              <p className="text-black">{data.sourceDatasetId}</p>
              <div className="relative w-3 mt-[4px] h-3">
                <Image alt="" src="/copy.svg" fill />
              </div>
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

          <div className="flex absolute gap-x-6 top-6 right-6 mt-1">
            <div className="w-[90px] h-7 px-2 rounded-lg bg-[#E3E1E1] flex justify-between">
              {data.tier[data.tier.length - 1] === "1" ? (
                <Image
                  alt=""
                  src="/t1.svg"
                  width={18}
                  height={18}
                  className="ml-1"
                />
              ) : data.tier[data.tier.length - 1] === "2" ? (
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
                <p className="font-bold mt-[5px] text-[16px] ">
                  {`${data.tier[0]}${data.tier.substr(1, 5).toLowerCase()}`}
                </p>
              </div>
            </div>

            <div className="w-[90px] h-7 px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
              <Image
                alt=""
                src="/greenEditChip.svg"
                width={18}
                height={18}
                className="ml-2"
              />
              <div className="w-[40px] mr-[-6px] rounded-lg bg-[#E3E1E1] flex justify-center">
                <p className="font-bold mt-[2px]">{data.reviews}</p>
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
                <p className="font-bold mt-1">{data.rating}</p>
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

          <div className="flex justify-between w-full">
            <div className="flex py-2 justify-between w-[50%] border-r-2 border-gray-300 pr-3">
              <div className="flex w-full justify-between gap-x-3">
                <div className="flex items-center">
                  <div className="w-[45px] h-[45px] relative">
                    <Image src="/yahoo.svg" alt="brand" fill />
                  </div>
                  {/* <Avatar src="/yahoo.svg" className="" alt="avatar" size="md" /> */}
                  <div className="mt-[6px] ml-3 text-black">
                    <p className="font-bold text-[16px]">{data.ownerName}</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold max-w-[100%] text-[16px] text-[#656565]">
                    Description about the product:{" "}
                  </p>
                  <p
                    className={`max-w-[18rem] text-[16px] text-black ${
                      !open ? "truncate" : ""
                    } `}
                  >
                    {data.description}
                  </p>
                  <div
                    className={`${more ? "mt-[4.3rem]" : "mt-2"} flex gap-x-3`}
                  >
                    {data.label.map((element: any, i: number) => (
                      <button
                        key={i}
                        className={`hover:bg-[#EAEAEA] rounded-[5px] h-[25px] px-4 border-gray-400 border-[2px] text-sm 
         text-gray-600 font-[600] ${cabin.className} hover:border-0`}
                      >
                        {element}
                      </button>
                    ))}
                  </div>
                </div>
                <div
                  onClick={() => {
                    handleOpen();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      open ? "rotate-180" : ""
                    } h-5 w-5 transition-transform`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
            </div>

            <div className="flex justify-end px-4 lg:gap-x-3 3xl:gap-x-20 w-[50%] items-start mt-3">
              <div>
                <p
                  className={`${cabin.className} mb-2 text-[16px] font-[600] text-[#656565]`}
                >
                  Frequency
                </p>
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
                    defaultValue={dropDownValue[0]}
                    options={dropDownValue}
                    className={`max-w-[300px] rounded-[10px] min-w-[140px] text-[16px] ${cabin.className}`}
                  />
                </div>
              </div>
              <div>
                <p
                  className={`${cabin.className} mb-2 text-[16px] font-[600] text-[#656565]`}
                >
                  Status
                </p>
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
                    defaultValue={dropDownValue2[0]}
                    options={dropDownValue2}
                    className={`max-w-[300px] rounded-[10px] min-w-[140px] text-[16px] ${cabin.className}`}
                  />
                </div>
              </div>
              <div>
                <p
                  className={`${cabin.className} mb-2 text-[16px] font-[600] text-[#656565]`}
                >
                  Type
                </p>
                <div className="min-w-[80px]">
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
                    defaultValue={dropDownValue1[0]}
                    options={dropDownValue1}
                    className={`max-w-[300px] rounded-[10px] min-w-[140px] text-[16px] text-[#2D2D2D] ${cabin.className}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`flex justify-between`}>
        <div className={`${cabin.className} text-black w-full`}>
          <p contentEditable className="text-[32px] w-[40%] font-bold">
            {data.name}
          </p>
          <div className="flex mt-1 gap-x-[6%] text-[#656565]">
            <p className="text-[16px] flex gap-x-1">
              <span className="font-[800]">Product Id:</span>
              {"   "}{" "}
              <p contentEditable className="text-black">
                {data.productId}
              </p>
              <div className="relative w-3 mt-[4px] h-3">
                <Image alt="" src="/copy.svg" fill />
              </div>
            </p>
            {/* <p className="text-[2rem] flex">
            <div className="w-1 h-1 mt-[6px] mr-1 bg-blue-800 rounded-full"></div>
            {data.tier}
          </p> */}
            <p className="text-[16px] text-black">
              <span className="font-[800] text-[#656565]">Source: </span>{" "}
              Dataset
            </p>
            <p className="text-[16px] flex gap-x-1">
              <span className="font-[800]">Source Id: </span>
              <p contentEditable className="text-black">
                {data.sourceDatasetId}
              </p>
              <div className="relative w-3 mt-[4px] h-3">
                <Image alt="" src="/copy.svg" fill />
              </div>
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

          <div className="flex absolute gap-x-6 top-6 right-6 mt-1">
            <div className="w-[90px] h-7 px-2 rounded-lg bg-[#E3E1E1] flex justify-between">
              {data.tier[data.tier.length - 1] === "1" ? (
                <Image
                  alt=""
                  src="/t1.svg"
                  width={18}
                  height={18}
                  className="ml-1"
                />
              ) : data.tier[data.tier.length - 1] === "2" ? (
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
                <p contentEditable className="font-bold mt-[5px] text-[16px] ">
                  {`${data.tier[0]}${data.tier.substr(1, 5).toLowerCase()}`}
                </p>
              </div>
            </div>

            <div className="w-[90px] h-7 px-2 rounded-lg bg-[#F2F2F2] flex justify-between">
              <Image
                alt=""
                src="/greenEditChip.svg"
                width={18}
                height={18}
                className="ml-2"
              />
              <div className="w-[40px] mr-[-6px] rounded-lg bg-[#E3E1E1] flex justify-center">
                <p contentEditable className="font-bold mt-[2px]">
                  {data.reviews}
                </p>
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
                <p contentEditable className="font-bold mt-1">
                  {data.rating}
                </p>
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

          <div className="flex justify-between w-full">
            <div className="flex py-2 justify-between w-[50%] border-r-2 border-gray-300 pr-3">
              <div className="flex w-full justify-between gap-x-3">
                <div className="flex items-center">
                  <div className="w-[45px] h-[45px] relative">
                    <Image src="/yahoo.svg" alt="brand" fill />
                  </div>
                  {/* <Avatar src="/yahoo.svg" className="" alt="avatar" size="md" /> */}
                  <div className="mt-[6px] ml-3 text-black">
                    <p contentEditable className="font-bold text-[16px]">
                      {data.ownerName}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold max-w-[100%] text-[16px] text-[#656565]">
                    Description about the product:{" "}
                  </p>
                  <p
                    contentEditable
                    className={`max-w-[18rem] text-[16px] text-black ${
                      !open ? "truncate" : ""
                    } `}
                  >
                    {data.description}
                  </p>
                  <div
                    className={`${more ? "mt-[4.3rem]" : "mt-2"} flex gap-x-3`}
                  >
                    {data.label.map((element: any, i: number) => (
                      <button
                        key={i}
                        className={`hover:bg-[#EAEAEA] rounded-[5px] h-[25px] px-4 border-gray-400 border-[2px] text-sm 
         text-gray-600 font-[600] ${cabin.className} hover:border-0`}
                      >
                        <p contentEditable>{element}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <div
                  onClick={() => {
                    handleOpen();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      open ? "rotate-180" : ""
                    } h-5 w-5 transition-transform`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
            </div>

            <div className="flex justify-end px-4 lg:gap-x-3 3xl:gap-x-20 w-[50%] items-start mt-3">
              <div>
                <p
                  className={`${cabin.className} mb-2 text-[16px] font-[600] text-[#656565]`}
                >
                  Frequency
                </p>
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
                    defaultValue={dropDownValue[0]}
                    options={dropDownValue}
                    className={`max-w-[300px] rounded-[10px] min-w-[140px] text-[16px] ${cabin.className}`}
                  />
                </div>
              </div>
              <div>
                <p
                  className={`${cabin.className} mb-2 text-[16px] font-[600] text-[#656565]`}
                >
                  Status
                </p>
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
                    defaultValue={dropDownValue2[0]}
                    options={dropDownValue2}
                    className={`max-w-[300px] rounded-[10px] min-w-[140px] text-[16px] ${cabin.className}`}
                  />
                </div>
              </div>
              <div>
                <p
                  className={`${cabin.className} mb-2 text-[16px] font-[600] text-[#656565]`}
                >
                  Type
                </p>
                <div className="min-w-[80px]">
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
                    defaultValue={dropDownValue1[0]}
                    options={dropDownValue1}
                    className={`max-w-[300px] rounded-[10px] min-w-[140px] text-[16px] text-[#2D2D2D] ${cabin.className}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
