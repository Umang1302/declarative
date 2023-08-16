"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Footer() {
  const router = useRouter();

  return (
    <div className="flex text-white items-center justify-center h-[505px] w-full px-12 py-1 bg-[#2D2D2D]">
      <div className="w-[98%] h-[400px]">
        <div className="relative w-[230px] h-[70px] cursor-pointer">
          <Image src="/landingPage/FooterLogo.svg" alt="brand" fill />
        </div>
        <div className="flex text-[16px] font-[700] w-full justify-between mt-14 px-4">
          <div className="w-[30%]">
            <p className="px-1 py-2">Site Map</p>
            <div className="h-[2px] w-[83px] bg-white ml-1" />
            <div className="flex justify-between font-[400] mt-4 gap-x-20">
              <p>Home</p>
              <p>About</p>
              <p>Try Out!</p>
            </div>
            <div className="flex mt-3 font-[400] justify-start gap-x-16">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <p className="px-1 py-2">Contact</p>
              <div className="h-[2px] w-[75px] bg-white ml-1" />
              <div className="flex justify-start items-center font-[400] mt-4 gap-x-2">
                <div className="relative w-[18px] h-[18px]">
                  <Image src="/landingPage/mailWhite.svg" alt="brand" fill />
                </div>
                <p>info@declarativedata.com</p>
              </div>
              <div className="flex mt-3 font-[400] items-center justify-start gap-x-2">
                <div className="relative w-[18px] h-[18px]">
                  <Image src="/landingPage/location.svg" alt="brand" fill />
                </div>
                <p>New Jersey, USA</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <p className="px-1 py-2">Follow Us</p>
              <div className="h-[2px] w-[70px] bg-white ml-1" />
              <div className="flex justify-between font-[400] mt-4 gap-x-5">
                <div className="relative w-[28px] h-[28px]">
                  <Image src="/landingPage/linkedIn.svg" alt="brand" fill />
                </div>
                <div className="relative w-[28px] h-[28px]">
                  <Image src="/landingPage/Twitter.svg" alt="brand" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-white mt-16" />
        <div className="w-full flex justify-between px-8 mt-7">
          <p>Copyright © 2023. All Rights Reserved</p>
          <p>Powered By TechAutoCode</p>
        </div>
      </div>
    </div>
  );
}
