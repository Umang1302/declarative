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

export default function Example({ data }: any) {
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
  const [sort, setSort] = React.useState<boolean>(false);
  const [showCol, setShowCol] = React.useState<boolean>(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    setTableRowData(data.attributes);
  }, []);

  useEffect(() => {
    const modifiedHead = selected.map(
      (element: any, i: number) => element.label
    );
    console.log("data Table", modifiedHead);
    setTableHead(modifiedHead);
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
    <div className="shadow-none -py-[1rem] flex flex-col">
      <div className={`${cabin.className} max:w-[1462px]`}>
        <div className="flex justify-between max:w-[1462px] mb-2">
          {showCol ? (
            <Select
              defaultValue={selected}
              isMulti={true}
              options={dropDownMenu}
              onChange={(val) => {
                console.log(val);
                setSelected(val);
              }}
              className="basic-multi-select max-w-[80%]"
              classNamePrefix="select"
            />
          ) : (
            <div></div>
          )}
          <button
            onClick={() => {
              setShowCol(!showCol);
            }}
            className={`border px-2 py-1 rounded-3xl ${
              showCol && "mb-2 "
            } text-[12px] normal-case mt-2 bg-[#EAEAEA] text-black ${
              cabin.className
            }`}
          >
            Select Columns
          </button>
        </div>
        <div className="md:w-[76vw] lg:w-[77vw] xl:w-[70vw] min-[1550px]:w-full 3xl:w-[75vw] overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                {tableHead.map((head: any, index: number) => (
                  <th
                    key={head.label}
                    className={`cursor-pointer border-y border-blue-gray-100 p-4 min-w-[60px] bg-[#A0EDA7] transition-colors hover:bg-blue-gray-50 ${cabin.className}`}
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={` ${cabin.className} flex items-center justify-between gap-2 font-normal leading-none opacity-70`}
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
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      {tableHead.indexOf("Attributes") !== -1 && (
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className={` ${cabin.className} font-normal`}
                              >
                                {name}
                              </Typography>
                            </div>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Is Record Key") !== -1 && (
                        <td className={classes}>
                          <div className="flex">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className={` ${cabin.className} font-normal`}
                            >
                              {isRecordKey && (
                                <Image
                                  alt=""
                                  src="/key.svg"
                                  width={10}
                                  height={10}
                                />
                              )}
                            </Typography>
                          </div>
                        </td>
                      )}
                      {tableHead.indexOf("Is Series Key") !== -1 && (
                        <td className={classes}>
                          <div className="w-max ml-7">
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
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {classification}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("Description") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {description}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("CreatedAt") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {createdAt}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("UpdatedAt") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {updatedAt}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("AccountId") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {accountId}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("ProductId") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {productId}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("NamespaceId") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {namespaceId}
                          </Typography>
                        </td>
                      )}

                      {tableHead.indexOf("SourceAttribute") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {sourceAttribute}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("Transformation") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {transformation}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("ClassificationCategory") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {classificationCategory}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("Length") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {length}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("Type") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {type}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("Precision") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {precision}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("Scale") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {scale}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("Status") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {status}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("CreatedBy") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {updatedBy}
                          </Typography>
                        </td>
                      )}
                      {tableHead.indexOf("UpdatedBy") !== -1 && (
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` ${cabin.className} font-normal`}
                          >
                            {createdBy}
                          </Typography>
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
