"use client";

import Hero from "@/components/dashboard/Hero";

import ShowcaseProduct from "../../components/dashboard/ShowcaseProduct";
import { Cabin } from "next/font/google";
import React from "react";
import { RingLoader } from "react-spinners";
import jsonData from "../../../data.json";
import Image from "next/image";
import LabelSection from "@/components/dashboard/LabelSection";

const cabin = Cabin({ subsets: ["latin"] });

export default function Dashboard() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [active, setActive] = React.useState(1);
  const dataLength = jsonData.data.length;
  const [prodData, setProdData] = React.useState<any>();

  // const getItemProps = (index: any) =>
  //   ({
  //     // variant: active === index ? "filled" : "text",
  //     // color: active === index ? "blue" : "blue-gray",
  //     onClick: () => setActive(index),
  //     className: `rounded-full shadow-none bg-transparent hover:bg-transparent hover:shadow-none ${
  //       active === index ? "text-[#F65A27]" : "text-gray-500"
  //     }`,
  //   } as any);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log(Math.ceil(dataLength / 6));
  }, []);

  React.useEffect(() => {
    const start = (active - 1) * 10;
    const end = active * 10;
    if (end - 6 > dataLength) {
      return;
    } else {
      const finalData = jsonData.data.slice(start, end);
      console.log("start end", start, end, finalData);
      setProdData(finalData);
    }
  }, [active]);

  // const sortFunctionality = () => {
  //   if (!sort) {
  //     setSort(true);
  //   } else {
  //     setSort(false);
  //   }

  //   const start = (active - 1) * 10;
  //   const end = active * 10;
  //   const currentData = jsonData.data.slice(start, end);
  //   if (!sort) {
  //     let sortedData = currentData.sort((a, b) =>
  //       a.name > b.name
  //         ? 1
  //         : a.name === b.name
  //         ? a.name > b.name
  //           ? 1
  //           : -1
  //         : -1
  //     );
  //     setProdData(sortedData);
  //   } else {
  //     setProdData(currentData);
  //   }
  // };

  if (loading) {
    return (
      <RingLoader color="#F65A27" size={100} className="ml-[45%] mt-[20%]" />
    );
  } else {
    return (
      <div className={`w-full mt-5 ${cabin.className}`}>
        <Hero
          active={active}
          setActive={setActive}
          jsonData={jsonData}
          dataLength={dataLength}
          setProdData={setProdData}
        />

        {/* <div className="flex w-full justify-end items-center max-w-[1560px]">
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-2 rounded-full"
            onClick={prev}
            disabled={active === 1}
          >
            <ChevronLeftIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
          <div className="items-center gap-2">
            {[...Array(Math.ceil(dataLength / 10))].map((v, i) => {
              return (
                <IconButton key={i + 1} {...getItemProps(i + 1)}>
                  <p className="">{i + 1}</p>
                </IconButton>
              );
            })}
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
          <div
            className="relative w-6 h-6"
            onClick={() => {
              console.log("clicked");
              sortFunctionality();
            }}
          >
            <Image alt="" src="/sort.svg" fill />
          </div>
        </div> */}
        <ShowcaseProduct page={active} prodData={prodData} />
      </div>
    );
  }
}

{
  /* <div className="-mt-[5vh] flex ml-[50vw]"> */
}

{
  /* 
  <div className="flex items-center gap-4 4xl:gap-11 mt-7 ml-[5vw] 2xl:mb-[10px]">
    <Button
      variant="text"
      color="blue-gray"
      className="flex items-center gap-2 rounded-full"
      onClick={prev}
      disabled={active === 1}
    >
      <ChevronLeftIcon strokeWidth={2} className="h-4 w-4 4xl:w-10 4xl:h-10" />
    </Button>
    <div className="items-center gap-2">
      {[...Array(Math.ceil(dataLength / 6))].map((v, i) => {
        return (
          <IconButton key={i + 1} {...getItemProps(i + 1)}>
            <p className="4xl:text-[25px]">{i + 1}</p>
          </IconButton>
        );
      })}
      {/* <IconButton {...getItemProps(2)}>2</IconButton>
              <IconButton {...getItemProps(3)}>3</IconButton>
              <IconButton {...getItemProps(4)}>4</IconButton>
              <IconButton {...getItemProps(5)}>5</IconButton> */
}
//   </div>
//   <Button
//     variant="text"
//     color="blue-gray"
//     className="flex items-center gap-2 rounded-full"
//     onClick={next}
//     disabled={active === Math.ceil(dataLength / 6)}
//   >
//     <ChevronRightIcon strokeWidth={2} className="h-4 w-4 4xl:w-10 4xl:h-10" />
//   </Button>
//   <div
//     className="relative 2xl:w-6 2xl:h-6"
//     onClick={() => {
//       console.log("clicked");
//       sortFunctionality();
//     }}
//   >
//     <Image alt="" src="/sort.svg" fill />
//   </div>
// </div>
// </div>;
