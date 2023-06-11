"use client";

import React from "react";
import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

<Menu>
  <MenuHandler>
    <Button>Open Menu</Button>
  </MenuHandler>
  <MenuList>
    <MenuItem>Menu Item 1</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
    <MenuItem>Menu Item 3</MenuItem>
  </MenuList>
</Menu>;

export default function NavSearchbar() {
  return (
    <Card
      className={`w-[35vw] lg:w-[410px] 2xl:w-[500px] 3xl:w-[550px] 4xl:w-[600px] h-full rounded-md px-4 py-2 ${cabin.className}`}
    >
      <div className="flex items-center justify-around mx-2">
        <div className="flex gap-x-7">
          <div className="relative inline-flex w-fit">
            <Menu>
              <div className="flex absolute bottom-auto left-auto items-center justify-center -right-[0.5rem] top-[-0.5rem] z-10 rounded-full bg-[#F65A27] border-2 border-white w-6 h-6">
                <p className="text-[0.8rem] text-white">3</p>
              </div>
              <MenuHandler>
                <div className=" flex items-center justify-center rounded-full bg-[#4D91FF] px-2 py-2 text-center text-white shadow-lg dark:text-gray-200 w-12 h-12">
                  <div className="relative w-6 h-6">
                    <Image alt="" src="/message.svg" fill />
                  </div>
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem>Message 1</MenuItem>
                <MenuItem>Message 2</MenuItem>
                <MenuItem>Message 3</MenuItem>
              </MenuList>
            </Menu>
          </div>

          <div className="relative inline-flex w-fit">
            <Menu>
              <div className="flex absolute bottom-auto left-auto items-center justify-center -right-[0.5rem] top-[-0.5rem] z-10 rounded-full bg-[#F65A27] border-2 border-white w-6 h-6">
                <p className="text-[0.8rem] text-white">3</p>
              </div>
              <MenuHandler>
                <div className=" flex items-center justify-center rounded-full bg-[#4D91FF] px-2 py-2 text-center text-white shadow-lg dark:text-gray-200 w-12 h-12">
                  <div className="relative w-6 h-6">
                    <Image alt="" src="/Alert.svg" fill />
                  </div>
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem>Message 1</MenuItem>
                <MenuItem>Message 2</MenuItem>
                <MenuItem>Message 3</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        {/* </div> */}
        <div className="ml-5 flex">
          <div className=" flex items-center justify-center rounded-full bg-[#FFBC35] px-2 py-2 text-center text-white shadow-lg dark:text-gray-200 w-[5rem] h-[5rem]">
            <div className="relative w-12 h-12">
              <Image alt="" src="/user.svg" fill />
            </div>
          </div>

          <div className={`ml-3 mt-[-8px] text-black ${cabin.className}`}>
            <p className="font-bold text-[20px] 4xl:text-[28px]">Demo User</p>
            <p className="text-[8px] 4xl:text-[14px] 2xl:text-[12px]">
              Account ID: f48cda68-448b-4c67-9828-f48cda68
            </p>
            <p className="text-[8px] 4xl:text-[14px] 2xl:text-[12px]">
              Namespace: Demo (c60c671bf1410535)
            </p>

            <p className="text-[8px] 4xl:text-[14px] 2xl:text-[12px]">
              Usage Intent: Basic Analysis
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
