import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import OverviewTable from "../product/OverviewTab";
import { Cabin } from "next/font/google";
import Intents from "../product/Intents";
const cabin = Cabin({ subsets: ["latin"] });

export default function TransparentTabs({ data }: any) {
  const [activeTab, setActiveTab] = React.useState("overview");

  const tabData = [
    {
      label: "Overview",
      value: "overview",
      desc: <OverviewTable data={data} />,
    },
    {
      label: "Intents",
      value: "intents",
      desc: <Intents data={data} />,
    },
    {
      label: "Data",
      value: "data",
    },
  ];

  return (
    <Tabs value={activeTab} className="p-0">
      <TabsHeader
        className="bg-transparent max-w-[40rem]"
        indicatorProps={{
          className:
            "bg-transparent w-[20px] items-center mt-1 shadow-none rounded-none",
        }}
      >
        {tabData.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={` ${
              activeTab === value ? "text-black" : "text-gray-500"
            }`}
          >
            <div className="w-full relative">
              {activeTab === value && (
                <div
                  className={`absolute w-full h-[5px] bottom-[-10px] bg-[#F65A27]`}
                ></div>
              )}
              <p className={`text-[24px] ${cabin.className}`}>{label}</p>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="z-0">
        <div className="absolute w-full bg-gray-300 h-[1px]" />

        <div className="p-0">
          {tabData.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </div>
      </TabsBody>
    </Tabs>
  );
}
