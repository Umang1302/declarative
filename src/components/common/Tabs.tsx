import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import OverviewTable from "../product/OverviewTab";

export default function TransparentTabs({ data }: any) {
  const [activeTab, setActiveTab] = React.useState("overview");

  const tabData = [
    {
      label: "Overview",
      value: "overview",
      desc: <OverviewTable data={data} />,
    },
    {
      label: "Intends",
      value: "intends",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Data",
      value: "data",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  useEffect(() => {}, []);

  return (
    <Tabs value={activeTab} className="p-0">
      <TabsHeader
        className="bg-transparent max-w-[40rem]"
        indicatorProps={{
          className: "shadow-none",
        }}
      >
        {tabData.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-black" : "text-gray-500"}
          >
            <p className={`text-xl`}>{label}</p>
          </Tab>
        ))}
      </TabsHeader>

      <div className="absolute w-[73vw] bg-gray-300 h-[1px]" />

      <TabsBody>
        {tabData.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
