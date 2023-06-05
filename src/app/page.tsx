"use client";

import Hero from "@/components/dashboard/Hero";
import LabelSection from "@/components/dashboard/LabelSection";
import { Button, IconButton } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ShowcaseProduct from "../components/dashboard/ShowcaseProduct";
import { Cabin } from "next/font/google";
import React from "react";
import { RingLoader } from "react-spinners";
import jsonData from "../../data.json";

const cabin = Cabin({ subsets: ["latin"] });

export default function Dashboard() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [active, setActive] = React.useState(1);
  const dataLength = jsonData.data.length;
  const getItemProps = (index: any) =>
    ({
      // variant: active === index ? "filled" : "text",
      // color: active === index ? "blue" : "blue-gray",
      onClick: () => setActive(index),
      className: `rounded-full shadow-none bg-transparent hover:bg-transparent hover:shadow-none ${
        active === index ? "text-black" : "text-gray-500"
      }`,
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log(Math.ceil(dataLength / 6));
  }, []);

  if (loading) {
    return (
      <RingLoader color="#F65A27" size={100} className="ml-[45%] mt-[20%]" />
    );
  } else {
    return (
      <div className={`mt-5 ${cabin.className}`}>
        <LabelSection />
        <Hero />
        <div className="-mt-[5vh] flex ml-[65vw]">
          {/* <button className="bg-transparent shadow-none bg-white rounded-xl text-black flex py-3 px-12 h-[50px] w-[250px] hover:shadow-none">
            <div className="flex mt-[-5px]">
              <PlusIcon className="h-8 w-8 text-[#4D91FF] ml-[-2rem]" />{" "}
              <span className="mt-1 ml-2 w-[160px] text-base text-[12px] normal-case tracking-[1px] font-semibold">
                Create Product
              </span>
            </div>
          </button> */}
          <div className="flex items-center gap-4">
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-2 rounded-full"
              onClick={prev}
              disabled={active === 1}
            >
              <ChevronLeftIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {[...Array(Math.ceil(dataLength / 6))].map((v, i) => {
                return (
                  <IconButton key={i + 1} {...getItemProps(i + 1)}>
                    {i + 1}
                  </IconButton>
                );
              })}
              {/* <IconButton {...getItemProps(2)}>2</IconButton>
              <IconButton {...getItemProps(3)}>3</IconButton>
              <IconButton {...getItemProps(4)}>4</IconButton>
              <IconButton {...getItemProps(5)}>5</IconButton> */}
            </div>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-2 rounded-full"
              onClick={next}
              disabled={active === Math.ceil(dataLength / 6)}
            >
              <ChevronRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ShowcaseProduct page={active} />
      </div>
    );
  }
}
