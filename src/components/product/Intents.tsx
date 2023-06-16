import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { Cabin } from "next/font/google";
import Image from "next/image";
const cabin = Cabin({ subsets: ["latin"] });
import ProfileTab from "./ProfileTab";

export default function Example({ data }: any) {
  const [activeTab, setActiveTab] = React.useState("profile");

  const tabData = [
    {
      label: "Profile",
      value: "profile",
      icon: "subTab1",
      desc: <ProfileTab />,
    },
    {
      label: "Rules",
      value: "rules",
      icon: "subTab2",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Metrics",
      value: "metrics",
      icon: "subTab3",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Security & Privacy",
      value: "securityPrivacy",
      icon: "subTab4",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Lifecycle",
      value: "lifeCycle",
      icon: "subTab5",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Access",
      value: "access",
      icon: "subTab6",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Sharing",
      value: "sharing",
      icon: "subTab7",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="w-[105%] h-full mt-[-1rem] ml-[-1rem] ml z-[100]">
      <div className="flex w-full h-full">
        <div className="min-w-[250px] flex flex-col border-r-[1px] border-gray-300 gap-y-7 mt-2">
          {tabData.map((item, index) => (
            <div
              key={index}
              className={`hover:bg-[#F2F2F2] w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3`}
              onClick={() => {
                console.log("CLICKED");
                setActiveTab(item.value);
              }}
            >
              <div className="relative w-[18px] h-[18px]">
                <Image src={`/${item.icon}.svg`} alt="brand" fill />
              </div>

              <p className="text-[20px] font-[500]">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="w-[86%]">
          {tabData.map((item, i) => {
            if (item.value === activeTab) {
              return <>{item.desc && item.desc}</>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

//  <div className={`w-full h-full ${cabin.className}`}>
//    {/* logo */}
//    <div className="relative w-full mt-[34px] h-[8%] max-h-[70px]">
//      <Image src="/declarativeLogo1.svg" alt="brand" fill />
//    </div>

//    <hr className="border-[#C4C4C4] mt-[33px]" />

//    {/* Create Botton */}
//    <div className="w-full h-[8%] max-h-[60px] py-1 my-[38px] flex justify-start px-2">
//      <button className="w-[50%] h-[90%] gap-x-2 px-2 border-[1px] items-center rounded-[10px] shadow-xl flex">
//        <div className="relative w-[18px] h-[18px]">
//          <Image src="/plusIcon.svg" alt="brand" fill />
//        </div>
//        <p className="text-[20px] font-[600]">Create</p>
//      </button>
//    </div>

//    {/* start Menu */}
//    <div className="w-full">
//      <div className={`w-full gap-y-[30px] flex flex-col ${cabin.className}`}>
//        <div
//          className={`hover:bg-[#F2F2F2] ${
//            active === 0 && "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
//          } w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3`}
//          onClick={() => {
//            router.push("/");
//          }}
//        >
//          <div className="relative w-[18px] h-[18px]">
//            <Image src="/home.svg" alt="brand" fill />
//          </div>

//          <p className="text-[20px] font-[500]">Home</p>
//        </div>

//        <div
//          className={`hover:bg-[#F2F2F2] w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3 ${
//            active === 1 && "bg-[#F2F2F2] border-l-4 border-[#F65A27] "
//          }`}
//          onClick={() => {
//            router.push("/");
//          }}
//        >
//          <div className="relative w-[18px] h-[18px]">
//            <Image src="/products.svg" alt="brand" fill />
//          </div>

//          <p className="text-[20px] font-[500]">Products</p>
//        </div>

//        <div
//          className="hover:bg-[#F2F2F2] w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3"
//          onClick={() => {
//            router.push("/");
//          }}
//        >
//          <div className="relative w-[18px] h-[18px]">
//            <Image src="/settings.svg" alt="brand" fill />
//          </div>

//          <p className="text-[20px] font-[500]">Settings</p>
//        </div>

//        <div
//          className="hover:bg-[#F2F2F2] w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3"
//          onClick={() => {
//            router.push("/");
//          }}
//        >
//          <div className="relative w-[18px] h-[18px]">
//            <Image src="/logOut.svg" alt="brand" fill />
//          </div>

//          <p className="text-[20px] font-[500]">Log Out</p>
//        </div>
//      </div>
//    </div>
//  </div>;
