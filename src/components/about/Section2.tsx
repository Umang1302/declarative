"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  return (
    <div>
      <div
        className={`sm:hidden lg:flex mb-[5rem] mt-[5rem] pr-1 w-full justify-center ${cabin.className}`}
      >
        <div className="max-w-[1450px] min-w-[1400px]">
          <div className="landingBox px-10 py-5">
            <p className="border-[#8E8E8E] border-b-[1px] py-3 text-[36px] font-[700]">
              Meet the Leadership team
            </p>
            <div className="mt-6">
              <div className="w-full flex gap-x-3 h-[220px]">
                <div className="relative w-[200px] h-[200px]">
                  <Image src={`/about/bhavin.svg`} alt="brand" fill />
                </div>
                <div className="">
                  <div className="flex gap-x-10  items-center">
                    <p className="text-[36px] font-[700]">Bhavin Dave</p>
                    <a
                      href="https://www.linkedin.com/in/davebhavinp"
                      target="_blank"
                      className="relative w-[25px] h-[25px]"
                    >
                      <Image src={`/about/linkedIn.svg`} alt="brand" fill />
                    </a>
                  </div>
                  <div className="lg:w-[300px] text-[18px] flex flex-col gap-y-4 mt-5">
                    <p className="font-[700]">Founder and CEO</p>
                    <p className="text-[#555]">
                      25+ years experience in Enterprise Data Strategy,
                      Governance, Platforms & Architectures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:visible md:hidden mb-[5rem] mt-[6rem] pr-1 w-full flex justify-center ${cabin.className}`}
      >
        <div className="w-full px-6">
          <div className="landingBox px-4 py-5">
            <p className="border-[#8E8E8E] border-b-[2px] py-3 text-[26px] font-[700]">
              Meet the Leadership team
            </p>
            <div className="mt-6">
              <div className="w-full flex flex-col gap-x-8">
                <div className="relative w-full h-[240px]">
                  <Image src={`/about/bhavin.svg`} alt="brand" fill />
                </div>
                <div className="mt-3 px-10 w-full">
                  <div className="w-full flex justify-between gap-x-10 items-center">
                    <p className="text-[24px] font-[700]">Bhavin Dave</p>
                    <a
                      href="https://www.linkedin.com/in/davebhavinp"
                      target="_blank"
                      className="relative w-[25px] h-[25px]"
                    >
                      <Image src={`/about/linkedIn.svg`} alt="brand" fill />
                    </a>
                  </div>
                  <div className="w-[200px] text-[12px] flex flex-col gap-y-2 mt-3">
                    <p className="font-[700]">Founder and CEO</p>
                    <p className="text-[#555]">
                      25+ years experience in Enterprise Data Strategy,
                      Governance, Platforms & Architectures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden md:visible lg:hidden mb-[5rem] mt-[5rem] pr-1 w-full justify-center ${cabin.className}`}
      >
        <div className="max-w-[1450px] w-[800px] flex justify-center">
          <div className="landingBox px-10 py-5">
            <p className="border-[#8E8E8E] border-b-[2px] py-3 text-[36px] font-[700]">
              Meet the Leadership team
            </p>
            <div className="mt-6">
              <div className="w-full flex gap-x-8 h-[220px]">
                <div className="relative w-[200px] h-[200px]">
                  <Image src={`/about/chess.svg`} alt="brand" fill />
                </div>
                <div className="mt-3">
                  <div className="flex gap-x-10  items-center">
                    <p className="text-[36px] font-[700]">Bhavin Dave</p>
                    <a
                      href="https://www.linkedin.com/in/davebhavinp"
                      target="_blank"
                      className="relative w-[25px] h-[25px]"
                    >
                      <Image src={`/about/linkedIn.svg`} alt="brand" fill />
                    </a>
                  </div>
                  <div className="w-[250px] text-[16px] flex flex-col gap-y-4 mt-5">
                    <p className="font-[700]">Founder and CEO</p>
                    <p className="text-[#555]">
                      25+ years experience in Enterprise Data Strategy,
                      Governance, Platforms & Architectures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
