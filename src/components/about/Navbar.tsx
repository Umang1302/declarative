"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const cabin = Cabin({ subsets: ["latin"] });

export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();

  const [navbarOpen, setNavbarOpen] = React.useState(false);


  return (
    <>
      {/* <div className="sm:visible lg:hidden shadow-lg flex flex-wrap z-[100] items-center justify-between px-2 py-3 mb-3 sticky top-0 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div
              onClick={() => {
                router.push("/");
              }}
              className={`relative cursor-pointer sm:w-[100px] sm:h-[30px]`}
            >
              <Image src="/Logo3.svg" alt="brand" fill />
            </div>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Bars3Icon strokeWidth={2} className={`h-4 w-4 ${navbarOpen ? "text-[#F65A27]" : ""} `} />
            </button>
          </div>
          <div
            className={
              "lg:flex z-[99] flex-grow items-center" +
              (navbarOpen ? "flex " : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:mx-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug hover:opacity-75">
                  <p
                    onClick={() => {
                      router.push("/");
                    }}
                    className={`text-[#F65A27] font-[700] cursor-pointer`}
                  >
                    Home
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75">
                  <p
                    onClick={() => {
                      router.push("/domePlatform");
                    }}
                    className="cursor-pointer hover:text-[#F65A27]"
                  >
                    Dome Platform
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug hover:opacity-75">
                  <p
                    onClick={() => {
                      router.push("/about");
                    }}
                    className="cursor-pointer hover:text-[#F65A27]"
                  >
                    About Declarative
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug hover:opacity-75">
                  <p
                    onClick={() => {
                      router.push("/tryitout");
                    }}
                    className="cursor-pointer hover:text-[#F65A27]"
                  >
                    Try it Now!
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <div className="px-3 py-2 flex items-center text-xs  font-bold leading-snug hover:opacity-75">
                  <div className="flex gap-x-1 justify-center hover:text-[#F65A27] items-center">
                    <div
                      onClick={() => {
                        router.push("/");
                      }}
                      className="relative w-3 h-3 cursor-pointer "
                    >
                      <Image src="/Mail.svg" alt="brand" fill />
                    </div>
                    <a href="mailto:info@declarativedata.com">
                      <p>info@declarativedata.com</p>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
  <div
        className={`w-full sm:visible lg:hidden z-50 shadow-lg sticky top-0 px-4 py-2 ${cabin.className} h-[80px] bg-white flex justify-around items-center`}
      >
     <div className="w-full px-4 flex items-center justify-between">
          <div className="w-full flex justify-between">
            <div
              onClick={() => {
                router.push("/");
              }}
              className={`relative cursor-pointer sm:w-[150px] sm:h-[40px]`}
            >
              <Image src="/Logo3.svg" alt="brand" fill />
            </div>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Bars3Icon strokeWidth={2} className={`h-6 w-6 ${navbarOpen ? "text-[#F65A27]" : ""} `} />
            </button>
          </div>
          <div
            className={
              "absolute items-center" +
              (navbarOpen ? "flex flex-col bg-white shadow-lg w-full py-4 px-6 left-0 top-[5rem]" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:mx-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug hover:opacity-75">
                  <p
                    onClick={() => {
                      router.push("/");
                    }}
                    className={`hover:text-[#F65A27] font-[700] cursor-pointer`}
                  >
                    Home
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-[14px] font-bold leading-snug hover:opacity-75">
                  <p
                    onClick={() => {
                      router.push("/domePlatform");
                    }}
                    className="cursor-pointer hover:text-[#F65A27]"
                  >
                    Dome Platform
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug hover:opacity-75">
                  <p
                    onClick={() => {
                      router.push("/about");
                    }}
                    className="cursor-pointer text-[#F65A27]"
                  >
                    About Declarative
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug hover:opacity-75">
                  <p
                    onClick={() => {
                      router.push("/tryitout");
                    }}
                    className="cursor-pointer hover:text-[#F65A27]"
                  >
                    Try it Now!
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <div className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug hover:opacity-75">
                  <div className="flex gap-x-1 justify-center hover:text-[#F65A27] items-center">
                    <div
                      onClick={() => {
                        router.push("/");
                      }}
                      className="relative w-3 h-3 cursor-pointer "
                    >
                      <Image src="/Mail.svg" alt="brand" fill />
                    </div>
                    <a href="mailto:info@declarativedata.com">
                      <p>info@declarativedata.com</p>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`w-full sm:hidden lg:flex z-50 shadow-lg sticky top-0 px-10 py-2 ${cabin.className} h-[100px] bg-white flex justify-around items-center`}
      >
        <div
          onClick={() => {
            router.push("/");
          }}
          className="relative w-[180px] h-[60px] cursor-pointer"
        >
          <Image src="/Logo3.svg" alt="brand" fill />
        </div>
        <div className="flex text-[18px] justify-around items-center gap-x-16">
          <p
            onClick={() => {
              router.push("/");
            }}
            className={`hover:text-[#F65A27] font-[700] cursor-pointer`}
          >
            Home
          </p>
          <p
            onClick={() => {
              router.push("/domePlatform");
            }}
            className="cursor-pointer hover:text-[#F65A27]"
          >
            Dome Platform
          </p>
          <p
            onClick={() => {
              router.push("/about");
            }}
            className="cursor-pointer text-[#F65A27]"
          >
            About Declarative
          </p>
          <p
            onClick={() => {
              router.push("/tryitout");
            }}
            className="cursor-pointer hover:text-[#F65A27]"
          >
            Try it Now!
          </p>
        </div>
        <div className="flex text-[18px] gap-x-1 justify-center items-center">
          <div
            onClick={() => {
              router.push("/");
            }}
            className="relative w-6 h-6 cursor-pointer "
          >
            <Image src="/Mail.svg" alt="brand" fill />
          </div>
          <a href="mailto:info@declarativedata.com">
            <p>info@declarativedata.com</p>
          </a>
        </div>
      </div>
    </>
  );
}
