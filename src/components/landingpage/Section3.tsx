"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Checkbox, Textarea } from "@material-tailwind/react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  return (
    <div className="w-full bg-[#F5FAFF] flex justify-center">
      <div className="px-[20%] py-[10%]">
        <div className="w-full flex flex-col justify-center">
          <div className="w-full flex gap-x-3 justify-center items-center">
            <div className="relative w-[50px] h-[50px] cursor-pointer">
              <Image src={`/landingPage/hand.svg`} alt="brand" fill />
            </div>
            <p className="text-[50px] text-[#4D91FF]">
              Let’s Connect To Learn More!
            </p>
          </div>
          <div>
            <div className="flex justify-center gap-x-5">
              <input
                className="w-[480px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                placeholder="Name"
                type="text"
              />
              <input
                className="w-[480px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                placeholder="name@company.com"
                type="text"
              />
            </div>
            <div className="flex mt-5 justify-center gap-x-5">
              <input
                className="w-[480px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                placeholder="Phone"
                type="text"
              />
              <input
                className="w-[480px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                placeholder="Company"
                type="text"
              />
            </div>
            <div className="mt-5">
              <textarea
                placeholder="Message"
                className="w-[986px] h-[150px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
              />
            </div>
            <div>
              <div className="w-full mt-4 h-full flex justify-between gap-x-5">
                <Checkbox
                  label={
                    <p className="text-[20px] text-black">
                      I agree to the Privacy Policy and Terms of Service
                    </p>
                  }
                />
                <button className="w-[160px] h-[57px] px-3 py-1 font-[700] rounded-[5px] text-white text-[20px] bg-[#F65A27]">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px]">
      <Image src={`/landingPage/design.svg`} alt="brand" fill />
      </div>
    </div>
  );
}
