import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
  Drawer,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Image from "next/image";

import { Option } from "@material-tailwind/react";
import React, { useMemo, useEffect, useRef } from "react";
import Select from "react-select";
import useState from "react-usestateref";
import { Cabin } from "next/font/google";
import { MultiSelect } from "react-multi-select-component";
const cabin = Cabin({ subsets: ["latin"] });
import { useRouter, usePathname } from "next/navigation";
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

export default function Example({ data }: any) {
  const labelRef = useRef<any>(null);
  const [checkboxData, setCheckboxData] = useState<any>();

  const scroll = (scrollOffset: any) => {
    console.group(labelRef.current.pageYOffset);
    // if (labelRef.current && labelRef.current.scrollLeft)
    labelRef.current.scrollLeft += scrollOffset;
  };

  const pathname = usePathname();

  const TABLE_ROWS = data.attributes;
  const [tableHead, setTableHead] = React.useState<any>([]);
  const [selected, setSelected, selectedRef] = useState<any>({
    label: "20230131",
    value: "20230131",
  });
  const [tableRowData, setTableRowData] = React.useState<any>([]);
  const [sort, setSort] = React.useState<boolean>(false);
  const [showCol, setShowCol] = React.useState<boolean>(false);
  const [selectAttribute, setSelectAttribute] = React.useState<any>();

  const [open, setOpen] = useState(false);

  const [dropDown, setDropDown] = useState<any>([]);
  const [selectCol, setSelectCol] = React.useState<any>();

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    console.log("data Table", pathname);

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
            //ts-ignore
            console.log("WWWWWWWWW", MutualFundsESG1[0]);
            //ts-ignore
            obj3 = MutualFundsESG1[0];
            tableData = MutualFundsESG1;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj3);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "20230228":
            console.log("WWWWWWWWW");
            obj3 = MutualFundsESG2[0];
            tableData = MutualFundsESG2;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj3);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "20230331":
            console.log("WWWWWWWWW");
            obj3 = MutualFundsESG1[0];
            tableData = MutualFundsESG2;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj3);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "20230430":
            console.log("WWWWWWWWW");
            obj3 = MutualFundsESG2[0];
            tableData = MutualFundsESG2;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj3);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
        }
        break;
      case "3":
        //ts-ignore
        obj = USMutualFunds[0];
        tableData = USMutualFunds;
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
    console.log(tableRowData, "tableRowData");
    //ts-ignore
  }, [tableRowData]);

  {
    /* <Checkbox
                    defaultValue={dropDownMenu[element]}
                    id="vertical-list-react"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  /> */
  }

  return (
    <div className="shadow-none mt-2 flex flex-col">
      <div className={`${cabin.className} w-full`}>
        <div className="flex justify-between max:w-[1462px] mb-2">
          {!showCol ? (
            // <Select
            //   styles={{
            //     control: (styles) => ({
            //       ...styles,
            //       marginTop: "10px",
            //       borderRadius: "10px",
            //     }),
            //   }}
            //   defaultValue={selected}
            //   isMulti={true}
            //   options={dropDownMenu}
            //   onChange={(val) => {
            //     console.log(val);
            //     setSelected(val);
            //   }}
            //   className="basic-multi-select max-w-[80%]"
            //   classNamePrefix="select"
            // />
            <div className="flex relative w-full justify-between">
              <Select
                options={dropDown}
                value={selected}
                className="w-[300px] absolute top-[-3.5rem] text-black"
                onChange={(val: any) => {
                  console.log(val);
                  setSelected(val);
                }}
              />
            </div>
          ) : (
            <div></div>
          )}
          {/* <button
            onClick={() => {
              setShowCol(!showCol);
            }}
            className={`border px-4 py-2 rounded-[10px] ${
              showCol && "mb-2 "
            } text-[14px] normal-case mt-2 bg-[#EAEAEA] text-black font-[600] hover:text-white hover:bg-[#F65A27] ${
              cabin.className
            }`}
          >
            Select Columns
          </button> */}
        </div>
        {/***/}
        <div className="w-[102%] -mt-[3rem] flex gap-x-3">
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
            className="md:w-[76vw] lg:w-[81vw] xl:w-[70vw] 2xl:w-[65vw] 3xl:w-[76.5vw] max-w-[1460px] overflow-x-auto flex justify-between"
          >
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="space-x-3">
                  {tableHead.map((head: any, index: number) => (
                    <th
                      key={head.label}
                      className={`cursor-pointer relative border-y border-blue-gray-100 p-4 min-w-[60px] bg-[#FFF0D3] transition-colors ${cabin.className}`}
                    >
                      <p
                        className={` ${cabin.className} flex items-center justify-between gap-2 font-[600] leading-none  text-black`}
                      >
                        {head}{" "}
                        <div
                          onClick={() => {
                            handleOpen();
                            setSelectAttribute(head);
                            setSelectCol(index);
                            const dat = tableRowData.map((item: any) => {
                              console.log("ITEMS", item[head]);
                              if (item[head] && item[head] !== "") {
                                return true;
                              }
                            });
                            setCheckboxData(dat);
                            // console.log("clicked", sort);
                            // if (!sort) {
                            //   setSort(true);
                            // } else {
                            //   setSort(false);
                            // }

                            // if (!sort) {
                            //   let sortedData = tableRowData.sort(
                            //     (a: any, b: any) =>
                            //       a.name > b.name
                            //         ? 1
                            //         : a.name === b.name
                            //         ? a.name > b.name
                            //           ? 1
                            //           : -1
                            //         : -1
                            //   );
                            //   console.log("sortedData", sortedData);
                            //   setTableRowData(sortedData);
                            // } else {
                            //   let unSortedData = tableRowData.sort(
                            //     (a: any, b: any) =>
                            //       a.name < b.name
                            //         ? 1
                            //         : a.name === b.name
                            //         ? a.name < b.name
                            //           ? 1
                            //           : -1
                            //         : -1
                            //   );
                            //   console.log("un SortedData", unSortedData);

                            //   setTableRowData(unSortedData);
                            // }
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
                      {open && selectCol === index && (
                        <div className="bg-white absolute gap-y-4 rounded-[10px] shadow-md py-3 px-2 z-[50] w-[250px] h-[300px]">
                          <p className="border-b-[1px] border-[#c4c4c4]">
                            Filters
                          </p>
                          <p
                            className="px-2 py-1 hover:bg-[#ededed]"
                            onClick={() => {
                              let hh: any;
                              let sortedData = tableRowData.sort(
                                (a: any, b: any) =>
                                  a[`${hh}`] > b[`${hh}`]
                                    ? 1
                                    : a[`${hh}`] === b[`${hh}`]
                                    ? a[`${hh}`] > b[`${hh}`]
                                      ? 1
                                      : -1
                                    : -1
                              );
                              console.log(sortedData);
                              setTableRowData(sortedData);
                              handleOpen();
                            }}
                          >
                            Ascending Order
                          </p>
                          <p
                            className="px-2 py-1 hover:bg-[#ededed]"
                            onClick={() => {
                              console.log(head);
                              let hh: any;

                              console.log(hh);

                              let unSortedData = tableRowData.sort(
                                (a: any, b: any) =>
                                  a[`${hh}`] < b[`${hh}`]
                                    ? 1
                                    : a[`${hh}`] === b[`${hh}`]
                                    ? a[`${hh}`] < b[`${hh}`]
                                      ? 1
                                      : -1
                                    : -1
                              );
                              setTableRowData(unSortedData);
                              handleOpen();
                            }}
                          >
                            Descending Order
                          </p>
                          {head !== "Is Record Key" &&
                            head !== "Is Series Key" && (
                              <div className="mt-2 h-[180px] overflow-y-auto">
                                <p>Select Value</p>
                                {tableRowData.map(
                                  (item: any, index: number) => {
                                    if (item[head] !== "") {
                                      return (
                                        <div
                                          key={index}
                                          className="gap-x-2 flex items-center"
                                        >
                                          <Checkbox
                                            id={`${index}`}
                                            color="blue"
                                            // defaultChecked={item.check}
                                            defaultChecked={checkboxData[index]}
                                            // className="rounded-none"
                                            onChange={(e) => {
                                              const aa = [...checkboxData];
                                              if (e.currentTarget.checked) {
                                                aa[index] = true;
                                              } else {
                                                aa[index] = false;
                                              }
                                              setCheckboxData(aa);
                                            }}
                                          />
                                          <p>{item[`${selectAttribute}`]}</p>
                                        </div>
                                      );
                                    } else {
                                      return null;
                                    }
                                  }
                                )}
                              </div>
                            )}
                        </div>
                      )}
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
      </div>
    </div>
  );
}
