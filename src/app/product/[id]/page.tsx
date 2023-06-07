"use client";

import React, { useState } from "react";
import jsonData from "../../../../data.json";
import { RingLoader } from "react-spinners";
import { Card, CardBody } from "@material-tailwind/react";
import ProductHeading from "../../../components/product/ProductHeading";
import Tabs from "../../../components/common/Tabs";

export default function Page({ params }: any) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<any>(true);

  React.useEffect(() => {
    const id = params.id;
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
      <div className="relative overflow-y-auto overflow-x-hidden max-h-[82.5vh] rounded-lg">
        {/* <div className="relative"> */}
        {/* <div
            className={`absolute w-[2.5px] h-12  top-3 z-50 left-[-3px] bg-red-500 rounded-r-3xl`}
          /> */}
        <div
          className={`absolute h-12 z-50 left-[10px] top-3 4xl:top-12 w-[2.5px] bg-red-500 rounded-r-3xl`}
        />
        <Card className="ml-3 w-[95%] 4xl:mt-9">
          <CardBody>
            <ProductHeading data={data} />
            <div className="4xl:mt-[50px] w-[73vw] mt-6 bg-gray-300 h-[1px]" />
            <div>
              <Tabs data={data} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
