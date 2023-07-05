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
import Image from "next/image";
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
      title: "Amazon Aurora MySQL",
      icon: "https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/6376b04c7e468449da371dba_amazon%20aurora.svg",
      description:
        "Amazon Aurora is a MySQL and PostgreSQL compatible relational database built for the cloud, that combines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open source databases.",
    },
    {
      title: "BigQuery",
      icon: "https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/63f4eb0ae7eeb0527efa85a2_bigquery.svg",
      description:
        "Fivetran has recently partnered with BigQuery Data Transfer Service; allowing users to manage Fivetran data connectors within the Google Cloud Platform.",
    },
    {
      title: "Cosmos DB",
      icon: "	https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/6446892493b55c2da0048d12_azure.svg",
      description:
        "Fivetran’s Cosmos DB connector is a fully managed data integration. Our ELT connector extracts a deep level of data from the source, replicates and loads that data in your centralized data warehouse or data lake, represented in an easy-to-navigate schema, where analysts can easily access and query it alongside the rest of your organization’s critical information.",
    },
    {
      title: "Db2 for i",
      icon: "https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/638e6257d0b8def9e6ffc6d6_db2.svg",
      description:
        "Db2 for i is a Relational Database Management System integrated with IBM i. Fivetran's integration platform replicates data from your Db2 for i source database and loads it into your destination.",
    },
    {
      title: "FireBase",
      icon: "https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/64468900abf5d66a3613de28_Firebase.svg",
      description:
        "Fivetran’s Firebase connector is a fully managed data integration. Our ELT connector extracts a deep level of data from the source, replicates and loads that data in your centralized data warehouse or data lake, represented in an easy-to-navigate schema, where analysts can easily access and query it alongside the rest of your organization’s critical information.",
    },
    {
      title: "Elasticsearch",
      icon: "	https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/644688f682774adccda1d7cb_Elasticsearch.svg",
      description:
        "Fivetran’s Elasticsearch connector is a fully managed data integration. Our ELT connector extracts a deep level of data from the source, replicates and loads that data in your centralized data warehouse or data lake, represented in an easy-to-navigate schema, where analysts can easily access and query it alongside the rest of your organization’s critical information.",
    },
  ];

  return (
    <>
      {showNext ? (
        <>
          <div className="grid grid-cols-3 mt-[4rem] gap-x-10 gap-y-10">
            {categoryData.map((item, index) => (
              <div
                onClick={() => {}}
                key={index}
                className="bg-white cursor-pointer rounded-[10px] shadow-xl h-[250px] p-5"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="relative w-10 h-10">
                      <Image src={`${item.icon}`} alt="brand" fill />
                    </div>
                    <p className="mt-3 text-[24px] font-[900]">{item.title}</p>
                  </div>
                  <svg
                    className="mt-1"
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
                  <p className="descriptionOn">{item.description}</p>
                </div>
                {/* <div className="mt-10">{item.label}</div> */}
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
                setSelected(1);
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
