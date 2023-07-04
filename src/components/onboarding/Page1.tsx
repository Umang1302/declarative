import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import OverviewTable from "../product/OverviewTab";
import { Cabin } from "next/font/google";
import Intents from "../product/Intents";
import DataTab from "../data/DataTab";
import { usePathname } from "next/navigation";
const cabin = Cabin({ subsets: ["latin"] });

export default function TransparentTabs({
  dataSetVal,
  setDataSetVal,
  setSelected,
}: any) {
  const pathname = usePathname();

  const [val, setVal] = useState("");

  useEffect(() => {
    const arr = pathname.split("/");
    setVal(`Data Source ${arr[arr.length - 1]}`);
  }, [pathname]);

  const [showNext, setShowNext] = useState(false);
  const categoryData = [
    {
      title: "Title 1",
      label: "Label 1",
      description: "Description 1",
    },
    {
      title: "Title 2",
      label: "Label 2",
      description: "Description 2",
    },
    {
      title: "Title 3",
      label: "Label 3",
      description: "Description 3",
    },
    {
      title: "Title 4",
      label: "Label 4",
      description: "Description 4",
    },
    {
      title: "Title 5",
      label: "Label 5",
      description: "Description 5",
    },
    {
      title: "Title 6",
      label: "Label 6",
      description: "Description 6",
    },
  ];

  return (
    <>
      {showNext ? (
        <>
          <div className="grid grid-cols-3 mt-[4rem] gap-x-10 gap-y-10">
            {categoryData.map((item, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer rounded-[10px] shadow-xl h-[250px] p-5"
              >
                <div className="flex justify-between">
                  <p className="text-[24px] font-[900]">{item.title}</p>
                  <svg
                    width="14"
                    height="25"
                    viewBox="0 0 14 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L11.7596 11.9346C11.8355 12.0071 11.896 12.0947 11.9373 12.192C11.9787 12.2892 12 12.394 12 12.5C12 12.606 11.9787 12.7108 11.9373 12.808C11.896 12.9053 11.8355 12.9929 11.7596 13.0654L2 23"
                      stroke="#8E8E8E"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="mt-5 text-[16px]">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas assumenda unde iure dolorem dolores autem voluptate.
                  </p>
                </div>
                <div className="mt-10">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="text-[#656565] flex justify-center text-[18px] mt-[5rem] font-[600]">
            <p>More data sources will be added soon!</p>
          </div>
        </>
      ) : (
        <div
          className={`w-full relative flex flex-col gap-y-3 items-center justify-center h-[70vh] py-3`}
        >
          <div className="text-[#656565] font-[600] text-[18px]">
            Name your Data Source
          </div>
          <div className="w-full flex justify-center">
            <input
              value={val}
              type="text"
              onChange={(e) => {
                setVal(e.target.value);
              }}
              className="rounded-[10px] text-[24px] text-center py-1 w-[30%] flex justify-center items-center outline-none"
            />
          </div>
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={() => {
                setShowNext(true);
              }}
              className="bg-[#F65A27] w-[14%] rounded-[10px] text-[18px] text-white"
            >
              Continue
            </button>
          </div>
          <div className="text-[#656565] absolute flex justify-center -bottom-[5rem] text-[18px] font-[600]">
            <p>More data sources will be added soon!</p>
          </div>
        </div>
      )}
    </>
  );
}
