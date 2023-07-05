"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Select from "react-select";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });
import GraphCard from "./GraphCard";
import DataTable from "./DataTable";
import useStateRef from "react-usestateref";
import { usePathname } from "next/navigation";

Chart.register(ArcElement);
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function DataRules({ data }: any) {
  const [selected, setSelected, selectedRef] = useStateRef<any>({
    label: "20230131",
    value: "20230131",
  });
  const pathname = usePathname();

  const labels = ["January", "March", "May", "July", "September", "November"];

  const [dropDown, setDropDown] = useState<any>([]);
  useEffect(() => {
    console.log("data Table", pathname, data);

    const tt = pathname.split("/");
    const id = tt[tt.length - 1];
    switch (id) {
      case "5":
      case "1":
      case "3":
        setSelected({
          label: "Default",
          value: "default",
        });
        break;
    }
  }, []);

  useEffect(() => {
    const tt = pathname.split("/");
    const id = tt[tt.length - 1];
    switch (id) {
      case "2":
      case "4":
      case "0":
        setDropDown([
          {
            label: "20230131",
            value: "20230131",
          },
          {
            label: "20230228",
            value: "20230228",
          },
          {
            label: "20230331",
            value: "20230331",
          },
          {
            label: "20230430",
            value: "20230430",
          },
        ]);
        break;
      default:
        setDropDown([
          {
            label: "Default",
            value: "default",
          },
        ]);
        break;
    }
  }, []);

  function getRandomArbitrary(min: any, max: any) {
    return Math.random() * (max - min) + min;
  }

  return (
    <div>
      <div>
        {" "}
        <div className="flex relative w-full justify-between">
          <Select
            options={dropDown}
            value={selected}
            className="w-[300px] absolute top-[-3.2rem] text-black"
            onChange={(val: any) => {
              console.log(val);
              setSelected(val);
            }}
          />
        </div>
      </div>
      {/**Main Content */}
      <div
        className={`w-full flex gap-x-6 gap-y-2 -mt-[2.6rem] ${cabin.className}`}
      >
        <div className=" md:w-[50%] 3xl:w-[40%] shadow-xl p-5 border-[1px] rounded-[10px] border-black">
          <p className="text-[18px] w-full border-b-[1px] border-black">
            Health
          </p>
          <div className="mt-5 w-full h-[90%] relative flex justify-center">
            <Doughnut
              data={{
                datasets: [
                  {
                    data: [data.graphData.health, 100 - data.graphData.health],
                    backgroundColor: ["#4D91FF", "#F65A27"],
                    borderColor: "white",
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                  tooltip: {
                    enabled: false,
                  },
                },
                //   rotation: -90,
                circumference: 360,
                cutout: "90%",
                // maintainAspectRatio: true,
                responsive: true,
              }}
            />
            <div className="absolute top-[40%] items-center flex justify-center text-[55px] font-[900]">
              <p>{data.graphData.health}%</p>
              <div className="relative w-16 h-16">
                <Image src="/healthUp.svg" alt="brand" fill />
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-[50%] 3xl:w-[60%] shadow-xl border-[1px] rounded-[10px] border-black p-5">
          <p className="text-[18px] w-full border-b-[1px] border-black">
            Trend
          </p>
          <Line
            data={{
              //
              labels,
              datasets: [
                {
                  label: "",
                  data: labels.map(() =>
                    getRandomArbitrary(data.graphData.min, data.graphData.max)
                  ),
                  borderColor: "#4D91FF",
                  backgroundColor: "#4D91FF",
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top" as const,
                },
                title: {
                  display: true,
                  text: "",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="w-full mt-5 rounded-[5px] border-[1px] border-black py-2 px-3">
        <p className="border-b-[1px] border-black text-[18px] font-[600]">
          Rule Summary
        </p>
        <div className="flex gap-x-2 mt-2 text-black font-[600]">
          <div className="w-[60%] bg-[#FFF0D3] px-3 py-2">Rules</div>
          <div className="w-[20%] bg-[#FFF0D3] px-3 py-2">Score</div>
          <div className="w-[20%] bg-[#FFF0D3] px-3 py-2">Trend</div>
        </div>
        {data.graphData.rules.map((i: any, index: any) => (
          <div
            className={`flex gap-x-2 items-center  text-black font-[600] ${
              index % 2 === 0 ? "bg-[#ECECEC]" : "bg-white"
            }`}
            key={index}
          >
            <div className="w-[60%]  px-3 py-2">{i.name}</div>
            <div className="w-[20%] px-3 py-2">{i.score}</div>
            <div className="w-[20%] px-3 py-2">
              <div className="relative w-8 h-8">
                <Image src={`/trend${i.trend}.svg`} alt="brand" fill />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
