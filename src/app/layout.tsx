"use client";

import "./globals.css";
import React, { useEffect } from "react";

import Sidebar from "../components/common/Sidebar";
import Navsearchbar from "../components/common/NavSearchbar";
import OnboardingSidebar from "../components/common/OnboardingSidebar";
import OnboardingHeading from "../components/common/OnboardingHeading";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [active, setActive] = React.useState(0);
  const [dataSetVal, setDataSetVal] = React.useState("");

  useEffect(() => {
    console.log("PathName", pathname);
    setDataSetVal(pathname.split("/")[pathname.length - 1]);
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={
          cabin.className +
          " bg-[#F2F2F2]" +
          " p-4 overflow-y-hidden overflow-x-hidden"
        }
      >
        <div className="flex">
          <div className="flex h-[96vh]">
            {!pathname.split("/").includes("onboarding") ? (
              <Sidebar active={active} setActive={setActive} />
            ) : (
              <OnboardingSidebar
                setDataSetVal={setDataSetVal}
                active={active}
                setActive={setActive}
              />
            )}
          </div>
          <div className="w-full pl-6 h-full max-w-[2018px] 5xl:px-[10%] 5xl:mx-[5%]">
            {!pathname.split("/").includes("onboarding") ? (
              <Navsearchbar />
            ) : (
              <OnboardingHeading
                dataSetVal={dataSetVal}
                setDataSetVal={setDataSetVal}
              />
            )}
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
