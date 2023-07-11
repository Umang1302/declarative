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
import { usePathname } from "next/navigation";
import JSONDATA from "../../../data.json";
const cabin = Cabin({ subsets: ["latin"] });

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

export default function Example({ data, editable }: any) {
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
  const [tableHead, setTableHead] = useState<any>([
    "Attributes",
    "Is Record Key",
    "Is Series Key",
    "Classification",
    "Description",
    "CreatedAt",
    "UpdatedAt",
    // "AccountId",
    // "ProductId",
    // "NamespaceId",
    // "SourceAttribute",
    // "Transformation",
    // "ClassificationCategory",
    // "Length",
    // "Type",
    // "Precision",
    // "Scale",
    // "Status",
    // "CreatedBy",
    // "UpdatedBy",
  ]);
  const [selected, setSelected] = useState<any>([
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
  ]);
  const [tableRowData, setTableRowData] = useState<any>([]);
  const [originalData, setOriginalData] = useState<any>([]);
  const [sort, setSort] = React.useState<boolean>(false);
  const [showCol, setShowCol] = React.useState<boolean>(false);
  const [selectCol, setSelectCol] = React.useState<any>();
  const [selectAttribute, setSelectAttribute] = React.useState<any>();
  const [checkboxData, setCheckboxData] = useState<any>();
  const [open, setOpen] = useState(false);
  const [uniqueArray, setUniqueArray] = useState<any>();
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    setTableRowData(data.attributes);
    const arr = pathname.split("/");
    const id: any = arr[arr.length - 1];
    setOriginalData(JSONDATA.data[+id].attributes);
  }, []);

  useEffect(() => {
    const modifiedHead = selected.map(
      (element: any, i: number) => element.label
    );
    console.log("data Table", modifiedHead);
    setTableHead(modifiedHead);
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
      <div className={`${cabin.className} max:w-[1462px]`}>
        <div className="flex justify-between max:w-[1462px] mb-2">
          {showCol ? (
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
            <MultiSelect
              className="w-[1000px] text-black"
              labelledBy=""
              options={dropDownMenu}
              onChange={(val: any) => {
                console.log(val);
                setSelected(val);
              }}
              value={selected}
            />
          ) : (
            <div></div>
          )}
          <button
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
          </button>
        </div>
        {/***/}
        <div className="md:w-[76vw] lg:w-[81vw] xl:w-[70vw] 2xl:w-[74vw] 3xl:w-[76.8vw] max-w-[1460px] overflow-x-auto ">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="space-x-3">
                {tableHead.map((head: any, index: number) => (
                  <th
                    key={head.label}
                    className={`cursor-pointer relative border-y border-blue-gray-100 p-4 min-w-[60px] bg-[#A0EDA7] transition-colors ${cabin.className}`}
                  >
                    <p
                      className={` ${cabin.className}  flex items-center justify-between gap-2 leading-none text-black font-[600]`}
                    >
                      {head}{" "}
                      <div
                        // onClick={() => {
                        //   console.log("clicked", sort);
                        //   if (!sort) {
                        //     setSort(true);
                        //   } else {
                        //     setSort(false);
                        //   }

                        //   if (!sort) {
                        //     let sortedData = data.attributes.sort(
                        //       (a: any, b: any) =>
                        //         a.name > b.name
                        //           ? 1
                        //           : a.name === b.name
                        //           ? a.name > b.name
                        //             ? 1
                        //             : -1
                        //           : -1
                        //     );
                        //     console.log(sortedData);
                        //     setTableRowData(sortedData);
                        //   } else {
                        //     let unSortedData = data.attributes.sort(
                        //       (a: any, b: any) =>
                        //         a.name < b.name
                        //           ? 1
                        //           : a.name === b.name
                        //           ? a.name < b.name
                        //             ? 1
                        //             : -1
                        //           : -1
                        //     );
                        //     setTableRowData(unSortedData);
                        //   }
                        // }}
                        onClick={() => {
                          setSelectCol(index);
                          let hh: any;
                          switch (head) {
                            case "Attributes":
                              hh = "name";
                              break;
                            case "Is Record Key":
                              hh = "isRecordKey";
                              break;
                            case "Is Series Key":
                              hh = "isSeriesKey";
                              break;
                            case "Classification":
                              hh = "classification";
                              break;
                            case "Description":
                              hh = "description";
                              break;
                            case "CreatedAt":
                              hh = "createdAt";
                              break;
                            case "UpdatedAt":
                              hh = "updatedAt";

                              break;
                            case "AccountId":
                              hh = "accountId";
                              break;
                            case "ProductId":
                              hh = "productId";
                              break;
                            case "NamespaceId":
                              hh = "NamespaceId";
                              break;
                            case "SourceAttribute":
                              hh = "sourceAttribute";
                              break;
                          }
                          setSelectAttribute(hh);
                          handleOpen();
                          const dat = tableRowData.map((item: any) => {
                            if (item) {
                              return true;
                            }
                          });
                          setCheckboxData(dat);
                          let resArr: any = [];
                          tableRowData.filter(function (item: any) {
                            var i = resArr.findIndex(
                              (x: any) => x[hh] == item[hh]
                            );
                            if (i <= -1) {
                              resArr.push(item);
                            }
                            return null;
                          });
                          console.log("RESARR", resArr);
                          setUniqueArray(resArr);
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
                      <div className="bg-white  absolute gap-y-4 rounded-[10px] shadow-md py-3 px-2 z-[50] w-[250px] max-h-[300px]">
                        <div className="w-full flex justify-between border-b-[1px] border-[#c4c4c4]">
                          <p className="">Filters</p>
                          <div
                            onClick={() => {
                              console.log(
                                originalData,
                                tableRowData,
                                data.attributes
                              );
                              let unSortedData = data.attributes.sort(
                                (a: any, b: any) =>
                                  a[`createdAt`] > b[`createdAt`]
                                    ? 1
                                    : a[`createdAt`] === b[`createdAt`]
                                    ? a[`createdAt`] > b[`createdAt`]
                                      ? 1
                                      : -1
                                    : -1
                              );
                              setTableRowData(unSortedData);
                              handleOpen();
                            }}
                            className="relative w-3 h-3"
                          >
                            <Image alt="" src="/reset.svg" fill />
                          </div>
                        </div>
                        <p
                          className="px-2 py-1 hover:bg-[#ededed]"
                          onClick={() => {
                            let hh: any;
                            switch (head) {
                              case "Attributes":
                                hh = "name";
                                break;
                              case "Is Record Key":
                                hh = "isRecordKey";
                                break;
                              case "Is Series Key":
                                hh = "isSeriesKey";
                                break;
                              case "Classification":
                                hh = "classification";
                                break;
                              case "Description":
                                hh = "description";
                                break;
                              case "CreatedAt":
                                hh = "createdAt";
                                break;
                              case "UpdatedAt":
                                hh = "updatedAt";

                                break;
                              case "AccountId":
                                hh = "accountId";
                                break;
                              case "ProductId":
                                hh = "productId";
                                break;
                              case "NamespaceId":
                                hh = "NamespaceId";
                                break;
                              case "SourceAttribute":
                                hh = "sourceAttribute";
                                break;
                            }
                            console.log(hh);

                            let sortedData = data.attributes.sort(
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
                          className="px-2 py-1 hover:bg-[#ededed] border-b-[1px] border-[#c4c4c4]"
                          onClick={() => {
                            console.log(head);
                            let hh: any;
                            switch (head) {
                              case "Attributes":
                                hh = "name";
                                break;
                              case "Is Record Key":
                                hh = "isRecordKey";
                                break;
                              case "Is Series Key":
                                hh = "isSeriesKey";
                                break;
                              case "Classification":
                                hh = "classification";
                                break;
                              case "Description":
                                hh = "description";
                                break;
                              case "CreatedAt":
                                hh = "createdAt";
                                break;
                              case "UpdatedAt":
                                hh = "updatedAt";

                                break;
                              case "AccountId":
                                hh = "accountId";
                                break;
                              case "ProductId":
                                hh = "productId";
                                break;
                              case "NamespaceId":
                                hh = "NamespaceId";
                                break;
                              case "SourceAttribute":
                                hh = "sourceAttribute";
                                break;
                            }
                            console.log(hh);

                            let unSortedData = data.attributes.sort(
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
                              {uniqueArray.map((item: any, index: number) => {
                                if (item[`${selectAttribute}`] !== "") {
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
                              })}
                            </div>
                          )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRowData.map(
                (
                  {
                    isRecordKey,
                    isSeriesKey,
                    createdAt,
                    updatedAt,
                    accountId,
                    attributeId,
                    productId,
                    namespaceId,
                    sourceAttribute,
                    transformation,
                    classificationCategory,
                    type,
                    length,
                    precision,
                    scale,
                    status,
                    createdBy,
                    updatedBy,
                    name,
                    classification,
                    description,
                  }: any,
                  index: any
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-2"
                    : "py-1 px-2 min-w-[200px] border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      {tableHead.indexOf("Attributes") !== -1 && (
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <p
                                contentEditable={editable}
                                className={` ${cabin.className} font-normal text-black text-[16px]`}
                              >
                                {name}
                              </p>
                            </div>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Is Record Key") !== -1 && (
                        <td className={classes}>
                          <div className="flex justify-center">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {isRecordKey && (
                                <Image
                                  alt=""
                                  src="/key.svg"
                                  width={10}
                                  height={10}
                                />
                              )}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Is Series Key") !== -1 && (
                        <td className={classes}>
                          <div className="flex justify-center">
                            {isSeriesKey && (
                              <Image
                                alt=""
                                src="/seriesKey.svg"
                                width={20}
                                height={20}
                              />
                            )}
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Classification") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {classification}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Description") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {description}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("CreatedAt") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {createdAt}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("UpdatedAt") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {updatedAt}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("AccountId") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {accountId}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("ProductId") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {productId}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("NamespaceId") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {namespaceId}
                            </p>
                          </div>
                        </td>
                      )}

                      {tableHead.indexOf("SourceAttribute") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {sourceAttribute}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Transformation") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {transformation}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("ClassificationCategory") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {classificationCategory}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Length") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {length}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Type") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {type}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Precision") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {precision}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Scale") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {scale}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Status") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {status}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("CreatedBy") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {updatedBy}
                            </p>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("UpdatedBy") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <p
                              contentEditable={editable}
                              className={` ${cabin.className} font-normal text-black text-[16px]`}
                            >
                              {createdBy}
                            </p>
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
