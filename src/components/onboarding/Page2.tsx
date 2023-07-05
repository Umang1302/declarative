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
  const categoryData = [
    {
      title: "Amazon Aurora MySQL",
      icon: "https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/6376b04c7e468449da371dba_amazon%20aurora.svg",
      description:
        "Amazon Aurora is a MySQL and PostgreSQL compatible relational database built for the cloud, that combines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open source databases.",
      labels: ["Label 1", "label 2"],
    },
    {
      title: "BigQuery",
      labels: ["Label 1", "label 2"],
      icon: "https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/63f4eb0ae7eeb0527efa85a2_bigquery.svg",
      description:
        "Fivetran has recently partnered with BigQuery Data Transfer Service; allowing users to manage Fivetran data connectors within the Google Cloud Platform.",
    },
    {
      title: "Cosmos DB",
      labels: ["Label 1", "label 2"],
      icon: "	https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/6446892493b55c2da0048d12_azure.svg",
      description:
        "Fivetran’s Cosmos DB connector is a fully managed data integration. Our ELT connector extracts a deep level of data from the source, replicates and loads that data in your centralized data warehouse or data lake, represented in an easy-to-navigate schema, where analysts can easily access and query it alongside the rest of your organization’s critical information.",
    },
    {
      title: "Db2 for i",
      labels: ["Label 1", "label 2"],
      icon: "https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/638e6257d0b8def9e6ffc6d6_db2.svg",
      description:
        "Db2 for i is a Relational Database Management System integrated with IBM i. Fivetran's integration platform replicates data from your Db2 for i source database and loads it into your destination.",
    },
    {
      title: "FireBase",
      labels: ["Label 1", "label 2"],
      icon: "https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/64468900abf5d66a3613de28_Firebase.svg",
      description:
        "Fivetran’s Firebase connector is a fully managed data integration. Our ELT connector extracts a deep level of data from the source, replicates and loads that data in your centralized data warehouse or data lake, represented in an easy-to-navigate schema, where analysts can easily access and query it alongside the rest of your organization’s critical information.",
    },
    {
      title: "Elasticsearch",
      labels: ["Label 1", "label 2"],
      icon: "	https://uploads-ssl.webflow.com/6130fa1501794e37c21867cf/644688f682774adccda1d7cb_Elasticsearch.svg",
      description:
        "Fivetran’s Elasticsearch connector is a fully managed data integration. Our ELT connector extracts a deep level of data from the source, replicates and loads that data in your centralized data warehouse or data lake, represented in an easy-to-navigate schema, where analysts can easily access and query it alongside the rest of your organization’s critical information.",
    },
  ];

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [input8, setInput8] = useState("");

  const [showNext, setShowNext] = useState(false);

  return (
    <div className="mt-4">
      {!showNext ? (
        <>
          <div className="grid grid-cols-3 mt-[4rem] gap-x-10 gap-y-10 overflow-y-auto h-[600px]">
            {categoryData.map((item, index) => (
              <div
                onClick={() => {
                  setShowNext(true);
                }}
                key={index}
                className="bg-white cursor-pointer rounded-[10px] shadow-xl h-[250px] p-5"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-2 items-center">
                    <div className="relative w-8 h-8">
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

                <div className="mt-3 text-black flex gap-x-4">
                  {item.labels.map((i, index) => (
                    <button
                      key={i}
                      className={`rounded-[5px] hover:bg-[#EAEAEA] px-2 h-[25px]  border-gray-400 border-[2px] text-sm 
         text-gray-600 font-[600] ${cabin.className} hover:border-0`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="w-full px-20 flex justify-end">
            <div
              onClick={() => {
                setShowNext(false);
              }}
              className="bg-[#F65A27] p-2 rounded-full"
            >
              <div className="relative rounded-full w-3 h-3">
                <Image src={`/close.svg`} alt="brand" fill />
              </div>
            </div>
          </div>
          <div className="px-20 mt-12 flex flex-col gap-y-6">
            <div className="flex justify-between items-center">
              <p>Conn Id*</p>
              <input
                value={input1}
                onChange={(e) => {
                  setInput1(e.target.value);
                }}
                type="text"
                className="w-[90%] bg-[#EAEAEA] h-[40px] outline-none px-3"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>Conn Type</p>
              <input
                value={input2}
                onChange={(e) => {
                  setInput2(e.target.value);
                }}
                type="text"
                className="w-[90%] bg-[#EAEAEA] h-[40px] outline-none px-3"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>Host</p>
              <input
                onChange={(e) => {
                  setInput3(e.target.value);
                }}
                value={input3}
                type="text"
                className="w-[90%] bg-[#EAEAEA] h-[40px] outline-none px-3"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>Schema</p>
              <input
                onChange={(e) => {
                  setInput4(e.target.value);
                }}
                value={input4}
                type="text"
                className="w-[90%] bg-[#EAEAEA] h-[40px] outline-none px-3"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>Login</p>
              <input
                onChange={(e) => {
                  setInput5(e.target.value);
                }}
                value={input5}
                type="text"
                className="w-[90%] bg-[#EAEAEA] h-[40px] outline-none px-3"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>Password</p>
              <input
                onChange={(e) => {
                  setInput6(e.target.value);
                }}
                value={input6}
                type="text"
                className="w-[90%] bg-[#EAEAEA] h-[40px] outline-none px-3"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>Port</p>
              <input
                onChange={(e) => {
                  setInput7(e.target.value);
                }}
                value={input7}
                type="text"
                className="w-[90%] bg-[#EAEAEA] h-[40px] outline-none px-3"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>Extra</p>
              <input
                onChange={(e) => {
                  setInput8(e.target.value);
                }}
                value={input8}
                type="text"
                className="w-[90%] bg-[#EAEAEA] h-[40px] outline-none px-3"
              />
            </div>
            <div className="w-full flex gap-x-8 justify-end">
              <button
                onClick={() => {
                  setSelected(2);
                }}
                className="px-3 py-1 bg-[#7FE588] text-white rounded-[10px]"
              >
                Save
              </button>
              <button className="px-3 py-1 bg-[#F65A27] text-white rounded-[10px]">
                Clear
              </button>
            </div>
          </div>
        </>
      )}

      <div className="text-[#656565] flex justify-center text-[18px] mt-[3rem] font-[600]">
        <p>More data sources will be added soon!</p>
      </div>
    </div>
  );
}
