"use client";

import React, { useRef, useState } from "react";
import jsonData from "../../../../../data.json";
import { RingLoader } from "react-spinners";
import { Breadcrumbs, Card, CardBody } from "@material-tailwind/react";
import { Cabin } from "next/font/google";
import Intents from "../../../../components/product/Intents";
const cabin = Cabin({ subsets: ["latin"] });

export default function Page({ params }: any) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<any>(true);

  const id = 3;
  React.useEffect(() => {
    setData(jsonData.data[id]);
    console.log("DATA OF ID : ", id, jsonData.data[id]);
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <RingLoader color="#F65A27" size={100} className="ml-[45%] mt-[20%]" />
    );
  } else {
    return (
      <div
        className={`w-full mt-[1rem] ${cabin.className}  max-h-[79vh] max-w-[1560px] overflow-y-auto pr-5`}
      >
        <Card className="relative pl-5 pr-10">
          <CardBody>
            <Intents data={data} />
          </CardBody>
        </Card>
      </div>
    );
  }
}
