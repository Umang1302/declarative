import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import OverviewTable from "../product/OverviewTab";
import { Cabin } from "next/font/google";
import Intents from "../product/Intents";
import DataTab from "../data/DataTab";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ProductHeading from "../product/ProductHeading";
import JSONDATA from "../../../data.json";
const cabin = Cabin({ subsets: ["latin"] });

export default function TransparentTabs({
  dataSetVal,
  setDataSetVal,
  setSelected,
}: any) {
  const pathname = usePathname();
  const [tableRowData, setTableRowData] = React.useState<any>([]);
  const [sort, setSort] = React.useState<boolean>(false);
  const [tableHead, setTableHead] = React.useState<any>([
    "Attributes",
    "Is Record Key",
    "Is Series Key",
    "Classification",
    "Description",
    "CreatedAt",
    "UpdatedAt",
    "AccountId",
    "ProductId",
    "NamespaceId",
    "SourceAttribute",
    "Transformation",
    "ClassificationCategory",
    "Length",
    "Type",
    "Precision",
    "Scale",
    "Status",
    "CreatedBy",
    "UpdatedBy",
  ]);

  const [val, setVal] = useState("");

  useEffect(() => {
    const arr = pathname.split("/");
    setVal(`Data Source ${arr[arr.length - 1]}`);
  }, [pathname]);

  const labelRef = useRef<any>(null);

  useEffect(() => {
    // let obj2: any = JSONDATA.data[0].attributes[0];
    let tableData: any = JSONDATA.data[0].attributes;
    setTableRowData(tableData);
    // let tableHeaders = Object.keys(obj2);
    // console.log("HEADERS", tableHeaders);
    // setTableHead(tableHeaders);
    console.log("DDDD", JSONDATA.data[1]);
  }, []);
  const scroll = (scrollOffset: any) => {
    console.group(labelRef.current.pageYOffset);
    // if (labelRef.current && labelRef.current.scrollLeft)
    labelRef.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <Card className="relative mt-5">
        <CardBody>
          <ProductHeading data={JSONDATA.data[0]} editable />

          <div className="w-[100%] bg-gray-300 h-[1px] mt-2" />

          <div className="w-full h-full">
            <div className="flex gap-x-3">
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
                className="md:w-[76vw] lg:w-[81vw] xl:w-[63vw] 2xl:w-[65vw] 3xl:w-[69.5vw] max-w-[1460px] overflow-x-auto flex justify-between"
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
                        const isLast = index === tableHead.length - 1;
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
                                      contentEditable
                                      color="blue-gray"
                                      className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
                                  >
                                    {transformation}
                                  </p>
                                </div>
                              </td>
                            )}
                            {tableHead.indexOf("ClassificationCategory") !==
                              -1 && (
                              <td className={classes}>
                                <div className="flex">
                                  <p
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
                                    contentEditable
                                    color="blue-gray"
                                    className={` ${cabin.className} font-normal text-[12px]`}
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
        </CardBody>
      </Card>
    </>
  );
}
