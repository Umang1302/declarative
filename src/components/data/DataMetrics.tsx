"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Avatar,
  Badge,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Select from "react-select";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });
import GraphCard from "./GraphCard";
import DataTable from "./DataTable";
import useStateRef from "react-usestateref";
import { usePathname } from "next/navigation";
import USMutualFunds from "../../../US_MUTUAL_FUNDS.json";
import NYSE_SECURITIES from "../../../NYSE_SECURITIES.json";
import USMUTUALRETURNS1 from "../../../MutualFundsReturns1.json";
import USMUTUALRETURNS2 from "../../../MutualFundsReturns2.json";
import USMUTUALRETURNS3 from "../../../MutualFundsReturns3.json";
import nysePrice1 from "../../../nyseprice1.json";
import nysePrice2 from "../../../nyseprice2.json";
import nysePrice3 from "../../../nyseprice3.json";
import MutualFundsESG1 from "../../../MutualFundsESG1.json";
import MutualFundsESG2 from "../../../MutualFundsESG2.json";
import USMUTUALFUNDSDATA from "../../../MutualFundsDataMetrics.json";
import USMUTUALFUNDSESGDATA from "../../../MutualFundsESGDataMetrics.json";

Chart.register(ArcElement);
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function DataRules({ data }: any) {
  const [selected, setSelected, selectedRef] = useStateRef<any>({
    label: "20230131",
    value: "20230131",
  });
  const pathname = usePathname();

  const TABLE_ROWS = data.attributes;
  const [tableHead, setTableHead] = React.useState<any>([]);

  const [tableRowData, setTableRowData] = React.useState<any>([]);
  const [sort, setSort] = React.useState<boolean>(false);
  const [showCol, setShowCol] = React.useState<boolean>(false);

  const [open, setOpen] = useState(false);

  const [dropDown, setDropDown] = useState<any>([]);
  const labelRef = useRef<any>(null);

  const scroll = (scrollOffset: any) => {
    console.group(labelRef.current.pageYOffset);
    // if (labelRef.current && labelRef.current.scrollLeft)
    labelRef.current.scrollLeft += scrollOffset;
  };
  useEffect(() => {
    console.log("data Table", pathname, data);

    const tt = pathname.split("/");
    const id = tt[tt.length - 1];
    switch (id) {
      case "5":
      case "1":
      case "3":
        setSelected({
          label: "Default",
          value: "default",
        });
        break;
    }
  }, []);
  useEffect(() => {
    // const modifiedHead = selected.map(
    //   (element: any, i: number) => element.label
    // );
    console.log("data Table", pathname);

    const tt = pathname.split("/");
    const id = tt[tt.length - 1];
    console.log(id, "__________________((((((((((");
    let obj;
    let tableData;
    let tableHeaders;
    switch (id) {
      //nyse PRice
      case "2":
        setDropDown([
          {
            label: "20230131",
            value: "20230131",
          },
          {
            label: "20230228",
            value: "20230228",
          },
          {
            label: "20230331",
            value: "20230331",
          },
          {
            label: "20230430",
            value: "20230430",
          },
        ]);
        let obj2: any = [];
        console.log(selectedRef.current.value, "NYSEPRICE");
        switch (selectedRef.current.value) {
          case "20230131":
            console.log("WWWWWWWWW", nysePrice1[0]);
            obj2 = nysePrice1[0];
            tableData = nysePrice1;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj2);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "20230228":
            console.log("WWWWWWWWW");
            obj2 = nysePrice2[0];
            tableData = nysePrice2;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj2);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "20230331":
            console.log("WWWWWWWWW");
            obj2 = nysePrice3[0];
            tableData = nysePrice3;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj2);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "20230430":
            console.log("WWWWWWWWW");
            obj2 = nysePrice1[0];
            tableData = nysePrice1;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj2);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
        }
        break;
      case "4":
        setDropDown([
          {
            label: "20230131",
            value: "20230131",
          },
          {
            label: "20230228",
            value: "20230228",
          },
          {
            label: "20230331",
            value: "20230331",
          },
          {
            label: "20230430",
            value: "20230430",
          },
        ]);

        let obj1: any = [];
        console.log(selectedRef.current.value);
        switch (selectedRef.current.value) {
          case "20230131":
            console.log("WWWWWWWWW");
            obj1 = USMUTUALRETURNS1[0];
            tableData = USMUTUALRETURNS1;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj1);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "20230430":
          case "20230331":
            obj1 = USMUTUALRETURNS3[0];
            tableData = USMUTUALRETURNS3;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj1);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "20230228":
            obj1 = USMUTUALRETURNS2[0];
            tableData = USMUTUALRETURNS2;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj1);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
        }

        //ts-ignore

        break;
      case "5":
      case "1":
        obj = NYSE_SECURITIES[0];
        tableData = NYSE_SECURITIES;
        setTableRowData(tableData);
        tableHeaders = Object.keys(obj);
        console.log("HEADERS", tableHeaders);
        setTableHead(tableHeaders);
        setDropDown([
          {
            label: "Default",
            value: "default",
          },
        ]);
        break;
      case "0":
        setDropDown([
          {
            label: "20230131",
            value: "20230131",
          },
          {
            label: "20230228",
            value: "20230228",
          },
          {
            label: "20230331",
            value: "20230331",
          },
          {
            label: "20230430",
            value: "20230430",
          },
        ]);
        let obj3: any = [];

        switch (selectedRef.current.value) {
          case "20230131":
          case "20230228":
          case "20230331":
          case "20230430":
            //ts-ignore
            console.log("WWWWWWWWW", USMUTUALFUNDSESGDATA[0]);
            //ts-ignore
            obj3 = USMUTUALFUNDSESGDATA[0];
            tableData = USMUTUALFUNDSESGDATA;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj3);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          //   case "20230228":
          //     console.log("WWWWWWWWW");
          //     obj3 = MutualFundsESG2[0];
          //     tableData = MutualFundsESG2;
          //     setTableRowData(tableData);
          //     tableHeaders = Object.keys(obj3);
          //     console.log("HEADERS", tableHeaders);
          //     setTableHead(tableHeaders);
          //     break;
          //   case "20230331":
          //     console.log("WWWWWWWWW");
          //     obj3 = MutualFundsESG1[0];
          //     tableData = MutualFundsESG2;
          //     setTableRowData(tableData);
          //     tableHeaders = Object.keys(obj3);
          //     console.log("HEADERS", tableHeaders);
          //     setTableHead(tableHeaders);
          //     break;
          //   case "20230430":
          //     console.log("WWWWWWWWW");
          //     obj3 = MutualFundsESG2[0];
          //     tableData = MutualFundsESG2;
          //     setTableRowData(tableData);
          //     tableHeaders = Object.keys(obj3);
          //     console.log("HEADERS", tableHeaders);
          //     setTableHead(tableHeaders);
          //     break;
        }
        break;
      case "3":
        //ts-ignore
        obj = USMUTUALFUNDSDATA[0];
        tableData = USMUTUALFUNDSDATA;
        setTableRowData(tableData);
        tableHeaders = Object.keys(obj);
        console.log("HEADERS", tableHeaders);
        setTableHead(tableHeaders);
        setDropDown([
          {
            label: "Default",
            value: "default",
          },
        ]);
        break;
      default:
        // setTableHead(modifiedHead);
        break;
    }
  }, [selected]);

  useEffect(() => {
    const tt = pathname.split("/");
    const id = tt[tt.length - 1];
    switch (id) {
      case "2":
      case "4":
      case "0":
        setDropDown([
          {
            label: "20230131",
            value: "20230131",
          },
          {
            label: "20230228",
            value: "20230228",
          },
          {
            label: "20230331",
            value: "20230331",
          },
          {
            label: "20230430",
            value: "20230430",
          },
        ]);
        break;
      default:
        setDropDown([
          {
            label: "Default",
            value: "default",
          },
        ]);
        break;
    }
  }, []);

  if (data.dataMetrics) {
    return (
      <div>
        <div> </div>
        {/**Main Content */}
        <div className="w-full border-[2px] rounded-[10px] border-[#c4c4c4]">
          <p className="bg-[#CCE0FF] px-3 font-[900] rounded-t-[10px] text-[18px] w-full py-2 text-black">
            Rule Summary
          </p>
          {data.dataMetrics.metrics ? (
            <div className="w-full flex justify-around py-2">
              {data.dataMetrics.metrics.map((item: any, index: number) => (
                <div
                  className={`flex ${
                    data.dataMetrics.metrics.length === 2
                      ? "w-1/2"
                      : "w-1/3 px-28"
                  } relative flex-col items-center justify-center ${
                    index === data.dataMetrics.metrics.length - 1
                      ? ""
                      : "border-r-[2px] border-[#c4c4c4]"
                  }`}
                  key={index}
                >
                  <p className="mb-2 text-black text-[18px]">{item.name}</p>
                  <Doughnut
                    data={{
                      datasets: [
                        {
                          data: [item.percentage, 100 - item.percentage],
                          backgroundColor: ["#4D91FF", "#F65A27"],
                          borderColor: "white",
                        },
                      ],
                    }}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                        tooltip: {
                          enabled: false,
                        },
                      },
                      //   rotation: -90,
                      circumference: 360,
                      cutout: "90%",
                      // maintainAspectRatio: true,
                      responsive: true,
                    }}
                  />
                  <div className="absolute top-[40%] items-center flex justify-center text-[55px] font-[900]">
                    <p>{item.percentage}%</p>
                    {/* <div className="relative w-16 h-16">
                  <Image src="/healthUp.svg" alt="brand" fill />
                </div> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="px-3 py-2 text-[18px] text-black">
              No Rule Summary for this Product
            </p>
          )}
        </div>

        <div className="w-full border-[2px] rounded-[10px] mt-3 border-[#c4c4c4]">
          <p className="bg-[#CCE0FF] px-3 font-[900] rounded-t-[10px] text-[18px] w-full py-2 text-black">
            Series & Record Metrics
          </p>
          {data.dataMetrics.series ? (
            <>
              <div className="flex relative w-full mt-2 ml-2 justify-between">
                <Select
                  options={dropDown}
                  value={selected}
                  className="w-[300px] absolute  text-black"
                  onChange={(val: any) => {
                    console.log(val);
                    setSelected(val);
                  }}
                />
              </div>
              <div className="w-full mt-3  flex gap-x-3 px-1">
                {tableHead.length > 7 && (
                  <button
                    onClick={() => {
                      scroll(-40);
                    }}
                    className="h-[30px] mt-3"
                  >
                    <div className="relative w-[20px] h-[20px]">
                      <Image src={`/labelLeft.svg`} alt="brand" fill />
                    </div>
                  </button>
                )}

                <div
                  ref={labelRef}
                  className="w-full overflow-x-auto flex justify-between"
                >
                  <table className="w-full table-auto text-left">
                    <thead>
                      <tr className="space-x-3">
                        {tableHead.map((head: any, index: number) => (
                          <th
                            key={head.label}
                            className={`cursor-pointer border-y border-blue-gray-100 p-4 min-w-[60px] bg-[#FFF0D3] transition-colors ${cabin.className}`}
                          >
                            <p
                              className={` ${cabin.className} flex items-center justify-between gap-2 font-[600] leading-none opacity-70 text-black`}
                            >
                              {head}{" "}
                              <div
                                onClick={() => {
                                  console.log("clicked", sort);
                                  if (!sort) {
                                    setSort(true);
                                  } else {
                                    setSort(false);
                                  }

                                  if (!sort) {
                                    let sortedData = tableRowData.sort(
                                      (a: any, b: any) =>
                                        a.name > b.name
                                          ? 1
                                          : a.name === b.name
                                          ? a.name > b.name
                                            ? 1
                                            : -1
                                          : -1
                                    );
                                    console.log("sortedData", sortedData);
                                    setTableRowData(sortedData);
                                  } else {
                                    let unSortedData = tableRowData.sort(
                                      (a: any, b: any) =>
                                        a.name < b.name
                                          ? 1
                                          : a.name === b.name
                                          ? a.name < b.name
                                            ? 1
                                            : -1
                                          : -1
                                    );
                                    console.log("un SortedData", unSortedData);

                                    setTableRowData(unSortedData);
                                  }
                                }}
                              >
                                <svg
                                  width="22"
                                  height="16"
                                  viewBox="0 0 22 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="21.3333"
                                    height="2.66666"
                                    rx="1.33333"
                                    fill="black"
                                  />
                                  <rect
                                    x="2.66406"
                                    y="6.66699"
                                    width="16"
                                    height="2.66666"
                                    rx="1.33333"
                                    fill="black"
                                  />
                                  <rect
                                    x="6.66406"
                                    y="13.333"
                                    width="7.99999"
                                    height="2.66666"
                                    rx="1.33333"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                            </p>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableRowData.map((item: any, index: any) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                          ? "p-2"
                          : "py-1 px-2 min-w-[200px] border-b border-blue-gray-50";

                        return (
                          <tr key={index}>
                            {tableHead.map((item1: any, index: any) => (
                              <td key={index} className={classes}>
                                <div className="flex items-center gap-3">
                                  <div className="flex flex-col">
                                    <p
                                      className={` ${cabin.className} font-normal w-[100px] text-[14px] truncate text-black`}
                                    >
                                      {item[item1]}
                                    </p>
                                  </div>
                                </div>
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {tableHead.length > 7 && (
                  <button
                    onClick={() => {
                      scroll(40);
                    }}
                    className="h-[30px] mt-3"
                  >
                    <div className="relative w-[20px] h-[20px]">
                      <Image src={`/labelRight.svg`} alt="brand" fill />
                    </div>
                  </button>
                )}
              </div>
            </>
          ) : data.dataMetrics.record ? (
            <>
              <div className="flex relative w-full mt-2 ml-2 justify-between">
                <Select
                  options={dropDown}
                  value={selected}
                  className="w-[300px] absolute  text-black"
                  onChange={(val: any) => {
                    console.log(val);
                    setSelected(val);
                  }}
                />
              </div>
              <div className="w-[20%] text-[18px] rounded-[10px]  flex border-[2px] py-5 ml-6 flex-col items-center my-3 justify-center border-[#c4c4c4]">
                <p>{data.dataMetrics.record.name}</p>
                <p className="text-black">{data.dataMetrics.record.val}</p>
              </div>
            </>
          ) : (
            <>
              <p className="px-3 py-2 text-[18px] text-black">
                No Series and Record for this product
              </p>
            </>
          )}
          <div></div>
        </div>
      </div>
    );
  } else {
    return (
      <p className="px-3 py-2 text-[18px] text-black">
        No Metrics Data for this product
      </p>
    );
  }
}
