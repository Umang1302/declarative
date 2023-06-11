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
    <Card className="h-full w-full shadow-none">
      <CardBody
        className={`overflow-x-auto px-0 mt-[-2rem] ${cabin.className}`}
      >
        <div className="w-full flex justify-between gap-x-12">
          <div className="max-w-[70%]">
            <p>Show Columns</p>
            <Select
              defaultValue={selected}
              isMulti={true}
              options={dropDownMenu}
              onChange={(val) => {
                console.log(val);
                setSelected(val);
              }}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="flex items-center">
            <div className="mt-6">
              <button
                onClick={handleOpen}
                className="px-5 border-black bg-[#F65A27] text-white shadow-lg rounded-lg "
              >
                <p className="text-[1rem] font-[600] flex justify-around items-center">
                  <FunnelIcon strokeWidth={2} className="h-4 w-4" />
                  More Filters
                </p>
              </button>
            </div>
            <Dialog size="lg" open={open} handler={handleOpen}>
              <DialogHeader className={`${cabin.className}`}>
                More Filters
              </DialogHeader>
              <DialogBody divider className="h-[6rem]">
                <div className="rounded-none flex justify-around 2xl:h-[7vh] 4xl:h-[4vh] 2xl:mt-[-12px]">
                  <div className="mb-8 items-center justify-between gap-8 gap-y-6 ">
                    <p className={`${cabin.className} mb-2`}>Frequency</p>
                    <Select
                      defaultValue={dropDownValue[0]}
                      options={dropDownValue}
                      className={`max-w-[400px] ${cabin.className}`}
                    />
                  </div>
                  <div
                    className={`items-center gap-4 md:flex-row ${cabin.className}`}
                  >
                    <p className={`${cabin.className} mb-2`}>Type</p>
                    <Tabs value="static" className="w-full md:w-max">
                      <TabsHeader>
                        {TABS.map(({ label, value }) => (
                          <Tab key={value} value={value}>
                            <p className={`${cabin.className}`}>
                              &nbsp;&nbsp;{label}&nbsp;&nbsp;
                            </p>
                          </Tab>
                        ))}
                      </TabsHeader>
                    </Tabs>
                  </div>

                  <div className="items-center gap-4 md:flex-row">
                    <p className={`${cabin.className} mb-2`}>Status</p>
                    <Tabs value="active" className="w-full md:w-max">
                      <TabsHeader>
                        {TABS1.map(({ label, value }) => (
                          <Tab key={value} value={value}>
                            <p className={`${cabin.className}`}>
                              &nbsp;&nbsp;{label}&nbsp;&nbsp;
                            </p>
                          </Tab>
                        ))}
                      </TabsHeader>
                    </Tabs>
                  </div>
                </div>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span className={`${cabin.className}`}>Cancel</span>
                </Button>
                <Button
                  variant="gradient"
                  color="deep-orange"
                  onClick={handleOpen}
                >
                  <span className={`${cabin.className}`}>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>

        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHead.map((head: any, index: number) => (
                <th
                  key={head.label}
                  className={`cursor-pointer border-y border-blue-gray-100 p-4 bg-[#A0EDA7] transition-colors hover:bg-blue-gray-50  ${cabin.className}`}
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
                        <div className="flex ml-7">
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
      </CardBody>
    </Card>
  );
}
