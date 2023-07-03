"use client";

import React, { useEffect } from "react";
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

const cabin = Cabin({ subsets: ["latin"] });

export default function OnboardingSidebar({ active, setActive }: any) {
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
    <>
      <Card className="shadow-xl shadow-blue-gray-900/5 rounded-lg w-[15vw] md:hidden xl:block max-w-[269px] min-w-[269px] py-2">
        <div className={`w-full h-full ${cabin.className}`}>
          {/* logo */}
          <div className="relative w-full mt-[34px] h-[8%] max-h-[70px]">
            <Image src="/declarativeLogoBlack.svg" alt="brand" fill />
          </div>

          <hr className="border-[#C4C4C4] mt-[33px]" />
        </div>
      </Card>
      <Card className="shadow-xl shadow-blue-gray-900/5 rounded-lg w-[80px] xl:hidden py-2">
        <div
          className={`w-full flex flex-col gap-y-6 pt-6 items-center ${cabin.className}`}
        >
          <div className="relative  w-[36.6px] h-[36.6px]">
            <Image src="/minLogo.svg" alt="brand" fill />
          </div>
          <div className="w-full h-[1px] bg-[#C4C4C4]" />

          <div className="flex w-full items-center flex-col gap-y-16">
            <div className="flex items-center p-2 rounded-[10px] border-[1px] shadow-xl">
              <div className="relative w-[18px] h-[18px]">
                <Image src="/plusIcon.svg" alt="brand" fill />
              </div>
            </div>
            <div
              className={`w-full ${
                active === 0 && "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
              } flex items-center justify-center py-4`}
            >
              <div className={`relative   w-[18px] h-[18px]`}>
                <Image src="/home.svg" alt="brand" fill />
              </div>
            </div>
            <div
              className={`w-full ${
                active === 1 && "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
              } flex items-center justify-center py-4`}
            >
              <div className="relative  w-[18px] h-[18px]">
                <Image src="/products.svg" alt="brand" fill />
              </div>
            </div>
            <div
              className={`w-full ${
                active === 2 && "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
              } flex items-center justify-center py-4`}
            >
              <div className="relative  w-[18px] h-[18px]">
                <Image src="/intends.svg" alt="brand" fill />
              </div>
            </div>
            <div
              className={`w-full ${
                active === 3 && "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
              } flex items-center justify-center py-4`}
            >
              <div className="relative  w-[18px] h-[18px]">
                <Image src="/logOut.svg" alt="brand" fill />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
