"use client";

import React, { useState } from "react";
import jsonData from "../../../../data.json";
import { RingLoader } from "react-spinners";
import { Breadcrumbs, Card, CardBody } from "@material-tailwind/react";
import ProductHeading from "../../../components/product/ProductHeading";
import RelatedProducts from "../../../components/product/RelatedProducts";
import Tabs from "../../../components/common/Tabs";
import Link from "next/link";

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
      <div className="relative overflow-y-auto overflow-x-hidden h-[80vh] rounded-lg">
        {/* <div className="relative"> */}
        {/* <div
            className={`absolute w-[2.5px] h-12  top-3 z-50 left-[-3px] bg-red-500 rounded-r-3xl`}
          /> */}
        <div className=" flex justify-end 2xl:w-[75vw] 4xl:mt-3">
          <Breadcrumbs className="bg-transparent 4xl:text-[20px]">
            <Link href="/" className="opacity-60 flex active:text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mt-[2px] 4xl:w-6 4xl:h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="ml-1 4xl:text-[20px]">Home</span>
            </Link>
            <Link href={`/product/${params.id}`} className="4xl:text-[20px]">
              Products
            </Link>
            <Link href="/product/0" className="4xl:text-[20px] text-[#F65A27]">
              {jsonData.data[params.id].name}
            </Link>
          </Breadcrumbs>
        </div>
        <div
          className={`absolute h-12 z-50 left-[10px] top-3 4xl:top-24 2xl:top-12 w-[2.5px] bg-red-500 rounded-r-3xl`}
        />
        <Card className="ml-3 w-[95%] 4xl:mt-6">
          <CardBody>
            <ProductHeading data={data} />
            <div className="4xl:mt-[50px] w-[73vw] mt-6 bg-gray-300 h-[1px]" />
            <div>
              <Tabs data={data} />
            </div>
          </CardBody>
        </Card>
        <div className="2xl:mt-10">
          <p className="2xl:text-[20px]">Related Products</p>
          <RelatedProducts />
        </div>
      </div>
    );
  }
}
