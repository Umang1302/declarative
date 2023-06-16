"use client";

import React from "react";
import { Card, CardBody, Input, Typography } from "@material-tailwind/react";

import NavUserArea from "./NavUserArea";
import LabelSection from "../dashboard/LabelSection";

export default function Navsearchbar() {
  return (
    <>
      <Card
        // className="md:w-[42vw] w-[50vw] max-w-[2000px] 3xl:w-[1000px] h-full min-h-[6.5rem] rounded-md mr-3 4xl:px-5">
        className="lg:w-[40%] xl:w-[60%] 3xl:w-[70%] h-full max-w-[1080px] min-h-[6.5rem] rounded-md mr-3 4xl:px-5"
      >
        <CardBody className="w-full h-full flex flex-col justify-center items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="16" height="2" fill="#555555" />
                <rect x="2" y="5" width="12" height="2" fill="#555555" />
                <rect x="5" y="10" width="6" height="2" fill="#555555" />
              </svg>
            </div>
          </div>
          <LabelSection />
        </CardBody>
      </Card>
      <NavUserArea />
    </>
  );
}
