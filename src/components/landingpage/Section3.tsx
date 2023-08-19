"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef } from "react";
import { Checkbox, Textarea } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();
  const pathName = usePathname();
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    // emailjs.sendForm('service_uwqinqk', 'template_dxleovb', form.current, 'K0oNsfyBvmdFKi_eT')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  return (
    <div className={`w-full ${pathName.includes("tryitout") ? "mt-[1rem]" : "mt-[8rem]"}  pt-[0.6rem] bg-[#F5FAFF] `}>
      <div className="h-[500px] mt-20 pt-10 w-full">
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex flex-col justify-center">
            <div className="w-full flex gap-x-3 justify-center items-center">
              {/* <div className="relative w-[50px] h-[50px] cursor-pointer">
                <Image src={`/landingPage/hand.svg`} alt="brand" fill />
              </div> */}
              <p className="text-[50px] text-[#4D91FF]">
                Let’s Connect To Learn More!
              </p>
            </div>
            <div className="mt-8">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex justify-center gap-x-5">
                  <input
                    className="w-[480px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                    placeholder="Name"
                    type="text"
                    name="name"
                  />
                  <input
                    className="w-[480px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                    placeholder="name@company.com"
                    type="text"
                    name="email"
                  />
                </div>
                <div className="flex mt-5 justify-center gap-x-5">
                  <input
                    className="w-[480px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                    placeholder="Phone"
                    type="text"
                    name="mobile_no"
                  />
                  <input
                    className="w-[480px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                    placeholder="Company"
                    type="text"
                    name="company"
                  />
                </div>
                <div className="mt-5 flex justify-center">
                  <textarea
                    placeholder="Message"
                    className="w-[986px] h-[150px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                    name="message"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-[67%] mt-4 h-full flex justify-between gap-x-5">
                    <Checkbox
                      label={
                        <p className="text-[20px] text-black">
                          I agree to the Privacy Policy and Terms of Service
                        </p>
                      }
                    />
                    <button
                      type="submit"
                      className="w-[200px] hover:scale-105 h-[50px] px-3 font-[700] rounded-[5px] text-white text-[18px] bg-[#F65A27]"
                    >
                      Schedule a Demo!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative w-full h-[250px]">
          <Image src={`/landingPage/design1.svg`} alt="brand" fill />
        </div>
      </div>
    </div>
  );
}
