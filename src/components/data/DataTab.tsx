"use client";

import React from "react";
import {
  Avatar,
  Badge,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });
import GraphCard from "./GraphCard";
const aa = [1, 2, 4, 5, 6];

export default function DataTab({ data }: any) {
  return (
    <div className="w-full grid grid-cols-2">
      {/* {aa.map((item, index) => ( */}
      {/* // <div></div>
        // <div className="w-1/2" key={index}> */}
      <GraphCard data={data} />
      {/* // </div> */}
      {/* // ))} */}
    </div>
  );
}
