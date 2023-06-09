"use client";

import React from "react";
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
import { useRouter } from "next/navigation";

const cabin = Cabin({ subsets: ["latin"] });

export default function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const router = useRouter();

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="shadow-xl shadow-blue-gray-900/5 rounded-lg w-[15vw] max-w-[290px] min-w-[192px] py-2 px-2">
      <div className={`w-full h-full ${cabin.className}`}>
        {/* logo */}
        <div className="relative w-full h-[8%] max-h-[70px]">
          <Image src="/declarativeLogo1.svg" alt="brand" fill />
        </div>

        <hr className="border-[#C4C4C4]" />

        {/* Create Botton */}
        <div className="w-full h-[8%] max-h-[60px] py-1 my-3 px-2">
          <button className="w-full h-full border-[1px] items-center rounded-lg border-black flex justify-center">
            <PlusIcon className="text-[#F65A27] w-10 h-10" />
            <p className="text-[1.5rem] font-[600]">Create</p>
          </button>
        </div>

        <hr className="border-[#C4C4C4]" />

        {/* start Menu */}
        <div className="w-full">
          <div className={`w-full ${cabin.className}`}>
            <div
              className="hover:bg-[#ffe7df] w-full flex items-center justify-start py-5 px-2 gap-x-3"
              onClick={() => {
                router.push("/");
              }}
            >
              <div className="relative w-5 h-5">
                <Image src="/home.svg" alt="brand" fill />
              </div>

              <p className="text-[1.2rem] font-[600]">Home</p>
            </div>
            <hr className="border-[#C4C4C4]" />

            <div
              className="hover:bg-[#ffe7df] w-full flex items-center justify-start py-5 px-2 gap-x-3"
              onClick={() => {
                router.push("/");
              }}
            >
              <div className="relative w-5 h-5">
                <Image src="/products.svg" alt="brand" fill />
              </div>

              <p className="text-[1.2rem] font-[600]">Products</p>
            </div>
            <hr className="border-[#C4C4C4]" />

            <div
              className="hover:bg-[#ffe7df] w-full flex items-center justify-start py-5 px-2 gap-x-3"
              onClick={() => {
                router.push("/");
              }}
            >
              <div className="relative w-5 h-5">
                <Image src="/settings.svg" alt="brand" fill />
              </div>

              <p className="text-[1.2rem] font-[600]">Settings</p>
            </div>
            <hr className="border-[#C4C4C4]" />

            <div
              className="hover:bg-[#ffe7df] w-full flex items-center justify-start py-5 px-2 gap-x-3"
              onClick={() => {
                router.push("/");
              }}
            >
              <div className="relative w-5 h-5">
                <Image src="/logOut.svg" alt="brand" fill />
              </div>

              <p className="text-[1.2rem] font-[600]">Log Out</p>
            </div>
            <hr className="border-[#C4C4C4]" />
          </div>
        </div>
      </div>
    </Card>
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
