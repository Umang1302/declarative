"use client";

import React, { useRef, useState } from "react";
import jsonData from "../../../../../data.json";
import { RingLoader } from "react-spinners";
import { Breadcrumbs, Card, CardBody } from "@material-tailwind/react";
import ProductHeading from "../../../../components/product/ProductHeading";
import RelatedProducts from "../../../../components/product/RelatedProducts";
import Tabs from "../../../../components/common/Tabs";
import Link from "next/link";
import { Cabin } from "next/font/google";
import Image from "next/image";
const cabin = Cabin({ subsets: ["latin"] });

export default function Page({ params }: any) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<any>(true);

  const id = 0;

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
        className={`w-full mt-2 ${cabin.className}  max-h-[79vh] max-w-[1560px] overflow-y-auto pr-5`}
      >
        <div className="w-full flex justify-end">
          <Breadcrumbs className="bg-transparent">
            <Link href="/" className="flex text-[#8E8E8E] hover:text-[#F65A27]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mt-[2px]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className={`ml-1 ${cabin.className}`}>Home</span>
            </Link>
            <Link
              href={`/product/${id}`}
              className={`${cabin.className} text-[#8E8E8E] hover:text-[#F65A27]`}
            >
              Products
            </Link>
            <Link
              href={`/product/${id}`}
              className={` text-[#F65A27] ${cabin.className}`}
            >
              {jsonData.data[id].name}
            </Link>
          </Breadcrumbs>
        </div>

        <Card className="relative ">
          <CardBody>
            <ProductHeading data={data} />

            <div className="w-[100%] bg-gray-300 h-[1px] mt-2" />

            <div>
              <Tabs data={data} />
            </div>
          </CardBody>
        </Card>
        <div className="mt-8">
          <RelatedProducts />
        </div>
      </div>
    );
  }
}

//       <Card className="relative ml-3 w-[100%] h-full 4xl:mt-6">
//         <CardBody>
//           <ProductHeading data={data} />
//           <div className="w-[100%] bg-gray-300 h-[1px] mt-2" />
//           <div>
//             <Tabs data={data} />
//           </div>
//         </CardBody>
//       </Card>

//       <div className="w-full mt-8 ml-4">
//         <h1 className="font-bold text-2xl">Related Products</h1>
//         <RelatedProducts />
//       </div>
