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

export default function Sidebar({ active, setActive }: any) {
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
    } else if (window.location.href.includes("/intents")) {
      setActive(3);
    } else if (window.location.href.includes("/policy")) {
      setActive(2);
    } else if (window.location.href.includes("/settings")) {
      setActive(4);
    } else {
      setActive(0);
    }
  }, [pathName]);

  return (
    <>
      <Card className="shadow-xl shadow-blue-gray-900/5 rounded-lg w-[15vw] sm:hidden xl:block max-w-[269px] min-w-[269px] py-2">
        <div className={`w-full h-full ${cabin.className}`}>
          {/* logo */}
          <div
            onClick={() => {
              router.push("/");
            }}
            className="relative w-full mt-[34px] h-[8.1%] max-h-[70px] cursor-pointer"
          >
            <Image src="/Logo3.svg" alt="brand" fill />
          </div>

          <hr className="border-[#C4C4C4] mt-[33px]" />

          {/* Create Botton */}
          <div className="w-full h-[8%] max-h-[60px] py-1 my-[38px] flex justify-start px-2">
            <button
              onClick={() => {
                router.push(`/dome/onboarding`);
              }}
              className="w-[50%] h-[90%] gap-x-2 px-2 border-[1px] items-center rounded-[10px] hover:w-[50%] hover:z-50 hover:h-[98%] shadow-xl flex"
            >
              <div className="relative w-[18px] h-[18px]">
                <Image src="/plusIcon.svg" alt="brand" fill />
              </div>
              <p className="text-[20px] text-black font-[600]">Create</p>
            </button>
          </div>

          {/* start Menu */}
          <div className="w-full">
            <div
              className={`w-full gap-y-[3vh] flex flex-col ${cabin.className}`}
            >
              <div
                className={`hover:bg-[#F2F2F2] pl-4 ${
                  active === 0 ? "bg-[#F2F2F2] border-l-4 border-[#F65A27]" : ""
                } cursor-pointer w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3`}
                onClick={() => {
                  router.push("/dome");
                }}
              >
                <div className="relative w-[18px] h-[18px]">
                  <Image src="/home.svg" alt="brand" fill />
                </div>

                <p className="text-[18px] font-[500] text-black">Home</p>
              </div>

              <div
                className={`cursor-pointer hover:bg-[#F2F2F2] pl-4 w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3 ${
                  active === 1
                    ? "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
                    : ""
                }`}
                onClick={() => {
                  router.push("/dome");
                }}
              >
                <div className="relative w-[18px] h-[18px]">
                  <Image src="/products.svg" alt="brand" fill />
                </div>

                <p className="text-[18px] font-[500] text-black">Products</p>
              </div>

              <div
                className={`cursor-pointer hover:bg-[#F2F2F2] pl-4 w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3 ${
                  active === 2
                    ? "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
                    : ""
                }`}
                onClick={() => {
                  router.push("/dome/policy");
                }}
              >
                <div className="relative w-[18px] h-[18px]">
                  <Image src="/policies.svg" alt="brand" fill />
                </div>

                <p className="text-[18px] font-[500] text-black">Frameworks</p>
              </div>

              <div
                className={`cursor-pointer hover:bg-[#F2F2F2] pl-4 w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3 ${
                  active === 3
                    ? "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
                    : ""
                }`}
                onClick={() => {
                  router.push("/dome/intents/0");
                }}
              >
                <div className="relative w-[18px] h-[18px]">
                  <Image src="/intents.svg" alt="brand" fill />
                </div>

                <p className="text-[18px] font-[500] text-black">Intents</p>
              </div>

              <div
                className={`hover:bg-[#F2F2F2] pl-4 ${
                  active === 4 ? "bg-[#F2F2F2] border-l-4 border-[#F65A27]" : ""
                } cursor-pointer w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3`}
                onClick={() => {
                  router.push("/dome/settings");
                }}
              >
                <div className="relative w-[18px] h-[18px]">
                  <Image src="/settings.svg" alt="brand" fill />
                </div>

                <p className="text-[18px] font-[500] text-black">Settings</p>
              </div>

              <div
                className="hover:bg-[#F2F2F2] cursor-pointer pl-4 w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3"
                onClick={() => {
                  router.push("/dome");
                }}
              >
                <div className="relative w-[18px] h-[18px]">
                  <Image src="/logOut.svg" alt="brand" fill />
                </div>

                <p className="text-[18px] font-[500] text-black">Log Out</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className="shadow-xl shadow-blue-gray-900/5 rounded-lg w-[80px] xl:hidden py-2">
        <div
          className={`w-full flex flex-col gap-y-6 pt-6 items-center ${cabin.className}`}
        >
          <div className="relative  w-[36.6px] h-[36.6px]">
            <Image src="/minLogo1.svg" alt="brand" fill />
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

{
  /* <div className="w-[100%] h-[12%] relative">
        <Image src="/declarativeLogo1.svg" alt="brand" fill />
      </div>
      <div className="w-full">
        <hr className="4xl:mt-8 2xl:mt-3 border-[#C4C4C4]" />
        <List
          className={`4xl:mt-8 4xl:px-3 2xl:mt-3 xl:mt-1 w-full ${cabin.className}`}
        >
          <Button
            variant="text"
            className={`text-black hover:bg-[#ffe7df] flex justify-center active:outline-none border-black border-[1px] w-full 4xl:h-[5rem] 4xl:rounded-3xl 2xl:w-[100%] 2xl:px-2  2xl:h-[3rem] lg:h-[2rem] lg:w-[60%] ${cabin.className}`}
          >
            <div className="flex 4xl:gap-x-3 lg:gap-x-2 2xl:w-[50%] justify-between">
              <PlusIcon className="text-[#F65A27] 4xl:w-[60px] 4xl:h-[60px] 2xl:w-[40px] 2xl:h-[40px] 2xl:ml-[-10px] lg:w-[25px] lg:h-[25px] lg:mt-[-7px]" />
              <p
                className={`4xl:text-[40px] 4xl:mt-[20px]  2xl:text-[23px] 2xl:tracking-wider lg:text-[10px] lg:mt-[-5px] normal-case 2xl:mt-[5px] 2xl:ml-[-83px] ${cabin.className}`}
              >
                Create
              </p>
            </div>
          </Button>
          <div className="w-full">
            <hr className="4xl:mt-8 w-[100%] 2xl:mt-3 border-[#C4C4C4]" />
          </div>
          <ListItem
            className="hover:bg-[#ffe7df] 4xl:mt-8 2xl:mt-2 2xl:mb-2"
            onClick={() => {
              router.push("/");
            }}
          >
            <ListItemPrefix>
              <div className="relative 4xl:w-[30px] 4xl:h-[30px] 2xl:w-[20px] 2xl:h-[20px]">
                <Image src="/home.svg" alt="brand" fill />
              </div>
            </ListItemPrefix>
            <p className="4xl:text-[40px] 2xl:text-[23px] font-[600]">Home</p>
          </ListItem>
          <hr className="border-[#C4C4C4] w-[100%]  4xl:mt-8 " />
          <ListItem className="hover:bg-[#ffe7df] 4xl:mt-8 2xl:mt-2 2xl:mb-2">
            <ListItemPrefix>
              <div className="relative 4xl:w-[30px] 4xl:h-[30px] 2xl:w-[20px] 2xl:h-[20px]">
                <Image src="/products.svg" alt="brand" fill />
              </div>
            </ListItemPrefix>
            <p className="4xl:text-[40px] 2xl:text-[23px] font-[600]">
              Products
            </p>
          </ListItem>
          <hr className="border-[#C4C4C4] w-[100%]  4xl:mt-8" />
          <ListItem className="hover:bg-[#ffe7df] 4xl:mt-8 2xl:mt-2 2xl:mb-2">
            <ListItemPrefix>
              <div className="relative 4xl:w-[30px] 4xl:h-[30px] 2xl:w-[20px] 2xl:h-[20px]">
                <Image src="/settings.svg" alt="brand" fill />
              </div>
            </ListItemPrefix>
            <p className="4xl:text-[40px] 2xl:text-[23px] font-[600]">
              Settings
            </p>
          </ListItem>
          <hr className="border-[#C4C4C4] w-[100%]  4xl:mt-8" />
          <ListItem className="hover:bg-[#ffe7df] 4xl:mt-8 2xl:mt-2 2xl:mb-2">
            <ListItemPrefix>
              <div className="relative 4xl:w-[30px] 4xl:h-[30px] 2xl:w-[20px] 2xl:h-[20px]">
                <Image src="/logOut.svg" alt="brand" fill />
              </div>
            </ListItemPrefix>
            <p className="4xl:text-[40px] 2xl:text-[23px] font-[600]">
              Log Out
            </p>
          </ListItem>
          <hr className="border-[#C4C4C4] w-[100%]  4xl:mt-8" />
        </List>
      </div> */
}
{
  /* <hr className="border-[#C4C4C4] w-[100%]  4xl:mt-8" /> */
}
{
  /* <ListItem className="hover:bg-[#ffe7df] 4xl:mt-8 2xl:mt-2 2xl:mb-2">
            <ListItemPrefix>
              <div className="relative 4xl:w-[30px] 4xl:h-[30px] 2xl:w-[20px] 2xl:h-[20px]">
                <Image src="/intends.svg" alt="brand" fill />
              </div>
            </ListItemPrefix>
            <p className="4xl:text-[40px] 2xl:text-[23px] font-[600]">
              Intents
            </p>
            <ListItemSuffix>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-6 w-6 transition-transform text-[#F65A27] ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            </ListItemSuffix>
          </ListItem> */
}
