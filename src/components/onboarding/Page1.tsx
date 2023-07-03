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
const cabin = Cabin({ subsets: ["latin"] });

export default function TransparentTabs({ data }: any) {
  const [dataSetVal, setDataSetVal] = useState("Data Source 1");

  return (
    <div
      className={`w-full flex flex-col gap-y-3 items-center justify-center h-[80vh] py-3`}
    >
      <div className="text-[#656565] text-[18px]">Name your Data Source</div>
      <div className="w-full flex justify-center">
        <input
          value={dataSetVal}
          type="text"
          onChange={(e) => {
            setDataSetVal(e.target.value);
          }}
          className="rounded-[10px] text-[24px] text-center py-1 w-[30%] bg-[] flex justify-center items-center outline-none"
        />
      </div>
      <div className="w-full flex justify-center mt-4">
        <button className="bg-[#F65A27] w-[14%] rounded-[10px] text-[18px] text-white">
          Continue
        </button>
      </div>
    </div>
  );
}
