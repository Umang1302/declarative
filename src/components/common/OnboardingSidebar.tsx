"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  ListItemSuffix,
} from "@material-tailwind/react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Cabin } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const cabin = Cabin({ subsets: ["latin"] });

export default function OnboardingSidebar({
  active,
  setActive,
  setDataSetVal,
}: any) {
  const [open, setOpen] = React.useState(0);

  const router = useRouter();
  const pathName = usePathname();

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    console.log(window.location.href, pathName, "____________________");
    if (window.location.href.includes("/product")) {
      setActive(1);
    } else {
      setActive(0);
    }
  }, [pathName]);

  return (
    <Sidebar active={active} setActive={setActive} />

    // <>
    //   <Card className="shadow-xl shadow-blue-gray-900/5 rounded-lg w-[20vw] md:hidden xl:block max-w-[369px] min-w-[269px] py-2">
    //     <div className={`w-full h-full ${cabin.className}`}>
    //       {/* logo */}
    //       <div
    //         onClick={() => {
    //           router.push("/");
    //         }}
    //         className="relative cursor-pointer w-full mt-[34px] h-[8%] max-h-[70px]"
    //       >
    //         <Image src="/declarativeLogoBlack.svg" alt="brand" fill />
    //       </div>

    //       <hr className="border-[#C4C4C4] mt-[33px]" />
    //       <div className="h-full px-3 py-6">
    //         <p className="mt-6 text-black font-[800] text-[24px]">
    //           List of Data Sources
    //         </p>
    //         <div className="h-[70%] text-black text-[18px] py-5 gap-y-6 flex flex-col">
    //           {dataSource.map((item, index) => (
    //             <p
    //               className="cursor-pointer"
    //               onClick={() => {
    //                 setDataSetVal(`Data Source ${index}`);
    //                 router.push(`/onboarding/${index + 1}`);
    //               }}
    //               key={index}
    //             >
    //               {item}
    //             </p>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </Card>
    //   <Card className="shadow-xl shadow-blue-gray-900/5 rounded-lg w-[80px] xl:hidden py-2">
    //     <div
    //       className={`w-full flex flex-col gap-y-6 pt-6 items-center ${cabin.className}`}
    //     >
    //       <div
    //         onClick={() => {
    //           router.push("/");
    //         }}
    //         className="relative  cursor-pointer w-[36.6px] h-[36.6px]"
    //       >
    //         <Image src="/minLogo.svg" alt="brand" fill />
    //       </div>
    //       <div className="w-full h-[1px] bg-[#C4C4C4]" />

    //       <div className="flex w-full items-center flex-col gap-y-16">
    //         <div className="flex items-center p-2 rounded-[10px] border-[1px] shadow-xl">
    //           <div className="relative w-[18px] h-[18px]">
    //             <Image src="/plusIcon.svg" alt="brand" fill />
    //           </div>
    //         </div>
    //         <div
    //           className={`w-full ${
    //             active === 0 && "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
    //           } flex items-center justify-center py-4`}
    //         >
    //           <div className={`relative   w-[18px] h-[18px]`}>
    //             <Image src="/home.svg" alt="brand" fill />
    //           </div>
    //         </div>
    //         <div
    //           className={`w-full ${
    //             active === 1 && "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
    //           } flex items-center justify-center py-4`}
    //         >
    //           <div className="relative  w-[18px] h-[18px]">
    //             <Image src="/products.svg" alt="brand" fill />
    //           </div>
    //         </div>
    //         <div
    //           className={`w-full ${
    //             active === 2 && "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
    //           } flex items-center justify-center py-4`}
    //         >
    //           <div className="relative  w-[18px] h-[18px]">
    //             <Image src="/intends.svg" alt="brand" fill />
    //           </div>
    //         </div>
    //         <div
    //           className={`w-full ${
    //             active === 3 && "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
    //           } flex items-center justify-center py-4`}
    //         >
    //           <div className="relative  w-[18px] h-[18px]">
    //             <Image src="/logOut.svg" alt="brand" fill />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </Card>
    // </>
  );
}
