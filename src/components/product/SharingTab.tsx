import React from "react";
import { Cabin } from "next/font/google";
import Image from "next/image";
import { Checkbox } from "@material-tailwind/react";

const cabin = Cabin({ subsets: ["latin"] });

const SharingTab = () => {
  return (
    <>
      <div
        className={`w-full h-full mt-6 flex justify-center ${cabin.className}`}
      >
        <div className="text-[64px] text-black font-[900]">COMING SOON</div>
      </div>
      <div className="w-full h-full flex justify-center">
        <div className="w-[439px] h-[313px] relative ml-[6rem]">
          <Image src="/comingSoon.svg" alt="brand" fill />
        </div>
      </div>
      <div className="w-full mt-4 h-full flex justify-center">
        <Checkbox
          label={
            <p className="text-[20px] text-black">
              Notify me! When this feature is launched
            </p>
          }
        />
      </div>
    </>
  );
};

export default SharingTab;
