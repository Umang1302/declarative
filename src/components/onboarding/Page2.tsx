import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
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

  return (
    <>
      <div className={`w-full relative flex justify-center  py-3`}>
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
              setSelected(1);
            }}
            className="bg-[#F65A27] w-[14%] rounded-[10px] text-[18px] text-white"
          >
            Continue
          </button>
        </div>
        <div className="text-[#656565] absolute flex justify-center bottom-0 text-[18px] font-[600] mt-[8rem]">
          <p>More data sources will be added soon!</p>
        </div>
      </div>
    </>
  );
}
