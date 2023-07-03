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
import React, { useMemo, useEffect, useState } from "react";
import Select from "react-select";
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
  const pathname = usePathname();

  const TABLE_ROWS = data.attributes;
  const [dropDownMenu, setDropDownMenu] = useState<any>([
    {
      label: "Attributes",
      value: "attributes",
    },
    {
      label: "Is Record Key",
      value: "isRecoredKey",
    },
    {
      label: "Is Series Key",
      value: "isSeriesKey",
    },
    {
      label: "Classification",
      value: "classification",
    },
    {
      label: "Description",
      value: "description",
    },
    {
      label: "CreatedAt",
      value: "createdAt",
    },
    {
      label: "UpdatedAt",
      value: "updatedAt",
    },
    {
      label: "AccountId",
      value: "accountId",
    },
    {
      label: "ProductId",
      value: "productId",
    },
    {
      label: "NamespaceId",
      value: "namespaceId",
    },
    {
      label: "SourceAttribute",
      value: "sourceAttribute",
    },
    {
      label: "ClassificationCategory",
      value: "classificationCategory",
    },
    {
      label: "Length",
      value: "length",
    },
    {
      label: "Type",
      value: "type",
    },
    {
      label: "Precision",
      value: "precision",
    },
    {
      label: "Scale",
      value: "scale",
    },
    {
      label: "Status",
      value: "status",
    },
    {
      label: "CreatedBy",
      value: "createdBy",
    },
    {
      label: "UpdatedBy",
      value: "updatedBy",
    },
  ]);
  const [tableHead, setTableHead] = useState<any>([]);
  const [selected, setSelected] = useState<any>({
    label: "Default",
    value: "default",
  });
  const [tableRowData, setTableRowData] = useState<any>([]);
  const [sort, setSort] = React.useState<boolean>(false);
  const [showCol, setShowCol] = React.useState<boolean>(false);

  const [open, setOpen] = useState(false);

  const [dropDown, setDropDown] = useState<any>([]);

  const handleOpen = () => setOpen(!open);

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
            label: "Default",
            value: "default",
          },
          {
            label: "Series 1",
            value: "series1",
          },
          {
            label: "Series 2",
            value: "series2",
          },
          {
            label: "Series 3",
            value: "series3",
          },
        ]);
        let obj2: any = [];
        console.log(selected.value, "NYSEPRICE");
        switch (selected.value) {
          case "default":
            console.log("WWWWWWWWW", nysePrice1[0]);
            obj2 = nysePrice1[0];
            tableData = nysePrice1;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj2);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "series1":
            console.log("WWWWWWWWW");
            obj2 = nysePrice2[0];
            tableData = nysePrice2;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj2);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "series2":
            console.log("WWWWWWWWW");
            obj2 = nysePrice3[0];
            tableData = nysePrice3;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj2);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "series3":
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
            label: "Default",
            value: "default",
          },
          {
            label: "Series 1",
            value: "series1",
          },
          {
            label: "Series 2",
            value: "series2",
          },
          {
            label: "Series 3",
            value: "series3",
          },
        ]);
        let obj1: any = [];
        console.log(selected.value);
        switch (selected.value) {
          case "default":
            console.log("WWWWWWWWW");
            obj1 = USMUTUALRETURNS1[0];
            tableData = USMUTUALRETURNS1;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj1);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "series1":
          case "series2":
            obj1 = USMUTUALRETURNS3[0];
            tableData = USMUTUALRETURNS3;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj1);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "series3":
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
            label: "Default",
            value: "default",
          },
          {
            label: "Series 1",
            value: "series1",
          },
          {
            label: "Series 2",
            value: "series2",
          },
          {
            label: "Series 3",
            value: "series3",
          },
        ]);
        let obj3: any = [];
        console.log(selected.value, "NYSEPRICE");
        switch (selected.value) {
          case "default":
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
          case "series1":
            console.log("WWWWWWWWW");
            obj3 = MutualFundsESG2[0];
            tableData = MutualFundsESG2;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj3);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "series2":
            console.log("WWWWWWWWW");
            obj3 = MutualFundsESG1[0];
            tableData = MutualFundsESG2;
            setTableRowData(tableData);
            tableHeaders = Object.keys(obj3);
            console.log("HEADERS", tableHeaders);
            setTableHead(tableHeaders);
            break;
          case "series3":
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
      <div className={`${cabin.className} max:w-[1462px]`}>
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
            <Select
              options={dropDown}
              value={selected}
              className="w-[300px] text-black"
              onChange={(val: any) => {
                console.log(val);
                setSelected(val);
              }}
            />
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
        <div className="md:w-[76vw] lg:w-[81vw] xl:w-[70vw] 2xl:w-[74vw] 3xl:w-[76.8vw] max-w-[1460px] overflow-x-auto ">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="space-x-3">
                {tableHead.map((head: any, index: number) => (
                  <th
                    key={head.label}
                    className={`cursor-pointer border-y border-blue-gray-100 p-4 min-w-[60px] bg-[#A0EDA7] transition-colors ${cabin.className}`}
                  >
                    <Typography
                      variant="small"
                      className={` ${cabin.className} flex items-center justify-between gap-2 font-normal leading-none opacity-70 text-black`}
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
                            let sortedData = data.attributes.sort(
                              (a: any, b: any) =>
                                a.name > b.name
                                  ? 1
                                  : a.name === b.name
                                  ? a.name > b.name
                                    ? 1
                                    : -1
                                  : -1
                            );
                            console.log(sortedData);
                            setTableRowData(sortedData);
                          } else {
                            let unSortedData = data.attributes.sort(
                              (a: any, b: any) =>
                                a.name < b.name
                                  ? 1
                                  : a.name === b.name
                                  ? a.name < b.name
                                    ? 1
                                    : -1
                                  : -1
                            );
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
                    </Typography>
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
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className={` ${cabin.className} font-normal w-[100px] truncate`}
                            >
                              {item[item1]}
                            </Typography>
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
      </div>
    </div>
  );
}
