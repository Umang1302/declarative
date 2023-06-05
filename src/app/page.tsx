"use client";

import Hero from "@/components/dashboard/Hero";
import LabelSection from "@/components/dashboard/LabelSection";
import { Button } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import ShowcaseProduct from "../components/dashboard/ShowcaseProduct";
import { Cabin } from "next/font/google";
import React from "react";
import { RingLoader } from "react-spinners";

const cabin = Cabin({ subsets: ["latin"] });

export default function Dashboard() {
  const [loading, setLoading] = React.useState<boolean>(true);

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
      <div className={`mt-5 ${cabin.className}`}>
        <LabelSection />
        <Hero />
        <div className="mt-2 flex">
          <button className="bg-transparent shadow-none bg-white rounded-xl text-black flex py-3 px-12 h-[50px] w-[250px] hover:shadow-none">
            <div className="flex mt-[-5px]">
              <PlusIcon className="h-8 w-8 text-[#4D91FF] ml-[-2rem]" />{" "}
              <span className="mt-1 ml-2 w-[160px] text-base text-[12px] normal-case tracking-[1px] font-semibold">
                Create Product
              </span>
            </div>
          </button>
          <div className="ml-[600px] mt-2">
            <nav aria-label="Page navigation example">
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <a href="#" className="block px-3 py-2 ml-0 leading-tight">
                    <span className="sr-only">Previous</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="px-3 py-2 leading-tight text-black">
                    1
                  </a>
                </li>
                <li>
                  <a href="#" className="px-3 py-2 leading-tight text-gray-500">
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 px-3 py-2 leading-tight text-gray-500"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a href="#" className="px-3 py-2 leading-tight text-gray-500">
                    4
                  </a>
                </li>
                <li>
                  <a href="#" className="px-3 py-2 leading-tight text-gray-500">
                    5
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 leading-tight">
                    <span className="sr-only">Next</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ShowcaseProduct />
      </div>
    );
  }
}
