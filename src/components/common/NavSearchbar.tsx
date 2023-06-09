"use client";

import React from "react";
import { Card, CardBody, Input, Typography } from "@material-tailwind/react";

import NavUserArea from "./NavUserArea";

export default function Navsearchbar() {
  return (
    <>
      <Card className="w-[42vw] 4xl:h-[11vh] rounded-md mr-2 4xl:px-5">
        <CardBody className="mt-3">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full 4xl:mt-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 4xl:w-10 4xl:h-10 text-gray-500 dark:text-gray-400"
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
              className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 4xl:pl-16 4xl:pt-[30px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 4xl:h-[70px] 4xl:placeholder:text-[40px] 4xl:text-[40px] 4xl:py-10"
              placeholder="Search"
            />
          </div>
        </CardBody>
      </Card>
      <NavUserArea />
    </>
  );
}
