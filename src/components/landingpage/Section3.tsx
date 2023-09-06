"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef } from "react";
import { Checkbox, Textarea } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import useStateRef from "react-usestateref";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();
  const pathName = usePathname();
  const form: any = useRef();
  const [checkBox,setCheckbox,checkboxRef] = useStateRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    if(checkboxRef.current){

      // emailjs.sendForm('service_uwqinqk', 'template_dxleovb', form.current, 'K0oNsfyBvmdFKi_eT')
      emailjs.sendForm('service_y6qyhn8', 'template_rlwaszn', form.current, 'uRwDSIn_nqwruC9pJ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    }else{
      alert("Please check the terms and condition");
    }
  };

  return (
    <div
      className={`w-full sm:px-3 ${
        pathName.includes("tryitout")
          ? "lg:mt-[1rem] sm:mt-[5rem]"
          : "sm:mt-[2rem] lg:mt-[8rem]"
      }  pt-[0.6rem] bg-[#F5FAFF] `}
    >
      <div className="h-[500px] lg:mt-20 pt-10 w-full">
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex flex-col justify-center">
            <div className="w-full flex gap-x-3 justify-center items-center">
              {/* <div className="relative w-[50px] h-[50px] cursor-pointer">
                <Image src={`/landingPage/hand.svg`} alt="brand" fill />
              </div> */}
              <p className="sm:text-[30px] sm:px-10 sm:text-center lg:text-[40px] font-[700] text-[#4D91FF]">
                Let’s Connect To Learn More!
              </p>
            </div>
            <div className="mt-8 px-10">
              <form ref={form} onSubmit={sendEmail}>
                <div className="lg:flex justify-center gap-x-5">
                  <input
                    className="sm:w-full sm:h-[30px] sm:px-2 text-[12px] lg:w-[480px] lg:px-3 lg:py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                    placeholder="Name"
                    type="text"
                    name="name"
                    required
                  />
                  <input
                    className="sm:w-full sm:mt-3 lg:mt-0 sm:h-[30px] sm:px-2 text-[12px] lg:w-[480px] lg:px-3 lg:py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                    placeholder="name@company.com"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="lg:flex mt-3 justify-center gap-x-5">
                  <input
                    className="sm:w-full sm:h-[30px] sm:px-2 text-[12px] lg:w-[480px] lg:px-3 lg:py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                    placeholder="Phone"
                    type="number"
                    name="mobile_no"
                    required
                  />
                  <input
                    className="sm:w-full sm:mt-3 lg:mt-0  sm:h-[30px] sm:px-2 text-[12px] lg:w-[480px] lg:px-3 lg:py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                    placeholder="Company"
                    type="text"
                    name="company"
                    required
                  />
                </div>
                <div className="w-full mt-5 flex justify-center">
                  <textarea
                    placeholder="Message"
                    className="sm:w-[400px] md:w-full sm:h-[200px] sm:text-[12px] lg:w-[986px] lg:h-[150px] px-3 py-2 outline-none border-[#8E8E8E] border-[1px] rounded-[5px]"
                    name="message"
                    required
                  />
                </div>
                <div className="flex w-full justify-center items-center">
                  <div className="w-[986px] mt-4 h-full flex sm:flex-col lg:flex-row sm:justify-center sm:items-center lg:justify-between gap-x-5">
                    <div className="sm:flex sm:justify-center sm:items-center sm:text-center sm:px-7 lg:px-0">
                      <Checkbox
                        checked={checkboxRef.current}
                        onChange={(check)=>{
                           setCheckbox(check);
                        }}
                        label={
                          <p className="sm:text-[12px] lg:text-[18px] text-black">
                            I agree to the Privacy Policy <br className="sm:visible lg:hidden"/>and Terms of Service
                          </p>
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className="sm:w-[150px] sm:mt-4 sm:text-[12px] lg:w-[200px] hover:scale-105 sm:h-[40px] lg:h-[50px] px-3 font-[700] rounded-[5px] text-white lg:text-[18px] bg-[#F65A27]"
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
      <div className="w-full sm:mt-[8rem]">
        <div className="relative w-full sm:h-[100px] lg:h-[250px]">
          <Image src={`/landingPage/design1.svg`} alt="brand" fill />
        </div>
      </div>
    </div>
  );
}
