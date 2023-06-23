import React from "react";
import { Cabin } from "next/font/google";

const cabin = Cabin({ subsets: ["latin"] });
import ProfileTab from "./ProfileTab";
import Rules from "./Rules";
import Security from "./Security";
import Access from "./Access";
import SharingTab from "./SharingTab";

export default function Example({ data }: any) {
  const [activeTab, setActiveTab] = React.useState("profile");

  const tabData = [
    {
      label: "Profile",
      value: "profile",
      icon: (
        <svg
          width="18"
          height="23"
          viewBox="0 0 18 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.625 11.25C5.30625 11.25 5.03888 11.142 4.82288 10.926C4.60688 10.71 4.49925 10.443 4.5 10.125C4.5 9.80625 4.608 9.53887 4.824 9.32288C5.04 9.10687 5.307 8.99925 5.625 9H12.375C12.6937 9 12.9611 9.108 13.1771 9.324C13.3931 9.54 13.5007 9.807 13.5 10.125C13.5 10.4438 13.392 10.7111 13.176 10.9271C12.96 11.1431 12.693 11.2507 12.375 11.25H5.625ZM5.625 6.75C5.30625 6.75 5.03888 6.642 4.82288 6.426C4.60688 6.21 4.49925 5.943 4.5 5.625C4.5 5.30625 4.608 5.03888 4.824 4.82288C5.04 4.60688 5.307 4.49925 5.625 4.5H12.375C12.6937 4.5 12.9611 4.608 13.1771 4.824C13.3931 5.04 13.5007 5.307 13.5 5.625C13.5 5.94375 13.392 6.21113 13.176 6.42713C12.96 6.64313 12.693 6.75075 12.375 6.75H5.625ZM2.25 13.5H10.6875C11.2312 13.5 11.7375 13.6174 12.2063 13.8521C12.675 14.0869 13.0687 14.4195 13.3875 14.85L15.75 17.9437V2.25H2.25V13.5ZM2.25 20.25H14.6812L11.6156 16.2281C11.5031 16.0781 11.3674 15.9607 11.2084 15.876C11.0494 15.7912 10.8757 15.7492 10.6875 15.75H2.25V20.25ZM15.75 22.5H2.25C1.63125 22.5 1.10138 22.2795 0.660377 21.8385C0.219377 21.3975 -0.00074809 20.868 1.91002e-06 20.25V2.25C1.91002e-06 1.63125 0.220502 1.10138 0.661502 0.660377C1.1025 0.219377 1.632 -0.00074809 2.25 1.91002e-06H15.75C16.3687 1.91002e-06 16.8986 0.220502 17.3396 0.661502C17.7806 1.1025 18.0007 1.632 18 2.25V20.25C18 20.8687 17.7795 21.3986 17.3385 21.8396C16.8975 22.2806 16.368 22.5007 15.75 22.5Z"
            fill={`${activeTab === "profile" ? "black" : "#8E8E8E"} `}
          />
        </svg>
      ),
      desc: <ProfileTab data={data} />,
    },
    {
      label: "Rules",
      value: "rules",
      icon: (
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1572 4.53407L21.3506 0.340737C21.5868 0.104493 21.8624 -0.00890459 22.1774 0.000545179C22.4924 0.00999495 22.7681 0.133236 23.0043 0.370268C23.2209 0.606512 23.3291 0.88213 23.3291 1.19712C23.3291 1.51212 23.2209 1.78773 23.0043 2.02398L18.0136 7.04417C17.7774 7.28041 17.5018 7.39854 17.1868 7.39854C16.8718 7.39854 16.5962 7.28041 16.3599 7.04417L13.8203 4.50454C13.6037 4.28799 13.4955 4.01237 13.4955 3.67769C13.4955 3.34301 13.6037 3.06739 13.8203 2.85083C14.0369 2.63428 14.3125 2.526 14.6472 2.526C14.9818 2.526 15.2575 2.63428 15.474 2.85083L17.1572 4.53407ZM1.18123 5.50858C0.846546 5.50858 0.566203 5.39518 0.340196 5.16839C0.114189 4.94159 0.000791568 4.66125 4.08727e-06 4.32736C4.08727e-06 3.99268 0.113401 3.71194 0.340196 3.48515C0.566991 3.25835 0.847334 3.14535 1.18123 3.14614H9.44978C9.78446 3.14614 10.0652 3.25954 10.292 3.48633C10.5188 3.71312 10.6318 3.99347 10.631 4.32736C10.631 4.66204 10.5176 4.94278 10.2908 5.16957C10.064 5.39637 9.78367 5.50937 9.44978 5.50858H1.18123ZM17.7183 15.4308L15.474 17.6752C15.2575 17.8917 14.9818 18 14.6472 18C14.3125 18 14.0369 17.8917 13.8203 17.6752C13.6037 17.4586 13.4955 17.183 13.4955 16.8483C13.4955 16.5136 13.6037 16.238 13.8203 16.0215L16.0646 13.7771L13.8203 11.5328C13.6037 11.3163 13.4955 11.0406 13.4955 10.706C13.4955 10.3713 13.6037 10.0957 13.8203 9.8791C14.0369 9.66254 14.3125 9.55427 14.6472 9.55427C14.9818 9.55427 15.2575 9.66254 15.474 9.8791L17.7183 12.1234L19.9626 9.8791C20.1792 9.66254 20.4548 9.55427 20.7895 9.55427C21.1242 9.55427 21.3998 9.66254 21.6164 9.8791C21.8329 10.0957 21.9412 10.3713 21.9412 10.706C21.9412 11.0406 21.8329 11.3163 21.6164 11.5328L19.372 13.7771L21.6164 16.0215C21.8329 16.238 21.9412 16.5136 21.9412 16.8483C21.9412 17.183 21.8329 17.4586 21.6164 17.6752C21.3998 17.8917 21.1242 18 20.7895 18C20.4548 18 20.1792 17.8917 19.9626 17.6752L17.7183 15.4308ZM1.18123 14.9584C0.846546 14.9584 0.565809 14.845 0.339015 14.6182C0.11222 14.3914 -0.000783394 14.111 4.08727e-06 13.7771C4.08727e-06 13.4425 0.113401 13.1617 0.340196 12.9349C0.566991 12.7081 0.847334 12.5951 1.18123 12.5959H9.44978C9.78446 12.5959 10.0652 12.7093 10.292 12.9361C10.5188 13.1629 10.6318 13.4432 10.631 13.7771C10.631 14.1118 10.5176 14.3925 10.2908 14.6193C10.064 14.8461 9.78367 14.9591 9.44978 14.9584H1.18123Z"
            fill={`${activeTab === "rules" ? "black" : "#8E8E8E"} `}
          />
        </svg>
      ),
      desc: <Rules data={data} />,
    },
    {
      label: "Metrics",
      value: "metrics",
      icon: (
        <svg
          width="27"
          height="14"
          viewBox="0 0 27 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0622 4.70198e-07C23.7061 9.2181e-05 23.3553 0.0871446 23.0405 0.253595C22.7256 0.420044 22.4561 0.660857 22.2555 0.955111C22.0549 1.24937 21.9291 1.58816 21.8891 1.94206C21.8492 2.29597 21.8963 2.65427 22.0263 2.98585L17.4233 7.58876C16.9102 7.38678 16.3396 7.38678 15.8265 7.58876L12.5361 4.29831C12.6664 3.96666 12.7137 3.6082 12.6738 3.2541C12.634 2.9 12.5083 2.56099 12.3077 2.26654C12.107 1.9721 11.8374 1.73113 11.5224 1.5646C11.2074 1.39808 10.8564 1.31103 10.5001 1.31103C10.1438 1.31103 9.79284 1.39808 9.47782 1.5646C9.1628 1.73113 8.89323 1.9721 8.69255 2.26654C8.49187 2.56099 8.36617 2.9 8.32636 3.2541C8.28655 3.6082 8.33385 3.96666 8.46415 4.29831L2.98626 9.7762C2.51843 9.59268 2.00169 9.57584 1.5229 9.72851C1.04412 9.88118 0.632508 10.194 0.357269 10.6145C0.0820313 11.035 -0.0400432 11.5374 0.0115721 12.0372C0.0631873 12.5371 0.285344 13.004 0.640689 13.3593C0.996033 13.7147 1.46289 13.9368 1.96277 13.9884C2.46264 14.04 2.96505 13.918 3.3855 13.6427C3.80596 13.3675 4.11882 12.9559 4.27149 12.4771C4.42416 11.9983 4.40732 11.4816 4.2238 11.0137L9.70169 5.53585C10.2148 5.73784 10.7854 5.73784 11.2985 5.53585L14.589 8.82631C14.4587 9.15796 14.4114 9.51642 14.4512 9.87052C14.491 10.2246 14.6167 10.5636 14.8174 10.8581C15.018 11.1525 15.2876 11.3935 15.6026 11.56C15.9177 11.7265 16.2686 11.8136 16.6249 11.8136C16.9813 11.8136 17.3322 11.7265 17.6472 11.56C17.9622 11.3935 18.2318 11.1525 18.4325 10.8581C18.6332 10.5636 18.7589 10.2246 18.7987 9.87052C18.8385 9.51642 18.7912 9.15796 18.6609 8.82631L23.2638 4.22339C23.5633 4.34106 23.8851 4.3912 24.2062 4.37022C24.5274 4.34924 24.8399 4.25767 25.1216 4.10203C25.4032 3.94639 25.6471 3.73052 25.8358 3.46981C26.0244 3.2091 26.1532 2.90997 26.213 2.59376C26.2728 2.27756 26.2621 1.95205 26.1816 1.64047C26.1011 1.32888 25.9529 1.03889 25.7475 0.791165C25.5421 0.543444 25.2845 0.344098 24.9932 0.207342C24.7019 0.0705863 24.384 -0.000210517 24.0622 4.70198e-07Z"
            fill={`${activeTab === "metrics" ? "black" : "#8E8E8E"} `}
          />
        </svg>
      ),
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Security & Privacy",
      value: "securityPrivacy",
      icon: (
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 19.7C7.81667 19.7 7.64567 19.6873 7.487 19.662C7.32833 19.6367 7.18267 19.5993 7.05 19.55C4.98333 18.7833 3.29167 17.4167 1.975 15.45C0.658333 13.4833 0 11.3167 0 8.95V4.225C0 3.80833 0.121 3.43333 0.363 3.1C0.605 2.76667 0.917333 2.525 1.3 2.375L7.3 0.125C7.53333 0.0416667 7.76667 0 8 0C8.23333 0 8.46667 0.0416667 8.7 0.125L14.7 2.375C15.0833 2.525 15.396 2.76667 15.638 3.1C15.88 3.43333 16.0007 3.80833 16 4.225V8.95C16 11.3167 15.3417 13.4833 14.025 15.45C12.7083 17.4167 11.0167 18.7833 8.95 19.55C8.81667 19.6 8.671 19.6377 8.513 19.663C8.355 19.6883 8.184 19.7007 8 19.7ZM8 17.75C9.61667 17.25 10.9667 16.2627 12.05 14.788C13.1333 13.3133 13.7667 11.6673 13.95 9.85H8V1.975L2 4.225V9.4C2 9.51667 2.01667 9.66667 2.05 9.85H8V17.75Z"
            fill={`${activeTab === "securityPrivacy" ? "black" : "#8E8E8E"} `}
          />
        </svg>
      ),
      desc: <Security />,
    },
    {
      label: "Lifecycle",
      value: "lifeCycle",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.6 2.3176C2.4312 3.7484 1 6.2072 1 9C1 9.408 1.0304 9.8084 1.0892 10.2M10.2 16.9104C9.80279 16.9701 9.40167 17.0001 9 17C6.2072 17 3.7484 15.5688 2.3176 13.4M16.9104 7.8C16.9696 8.1916 17 8.592 17 9C17 11.7928 15.5688 14.2516 13.4 15.6824M7.8 1.0892C8.19722 1.02962 8.59834 0.999807 9 1C11.7928 1 14.2516 2.4312 15.6824 4.6"
            stroke={`${activeTab === "lifeCycle" ? "black" : "#8E8E8E"} `}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Access",
      value: "access",
      icon: (
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5387 13.4866C14.3868 13.1252 14.2065 12.7764 13.9995 12.4434V6.41334C14.0004 5.57061 13.8344 4.73604 13.5112 3.95775C13.188 3.17945 12.714 2.47282 12.1165 1.87857C11.5224 1.28103 10.8158 0.807308 10.0373 0.484845C9.25893 0.162383 8.42426 -0.00240586 7.5817 2.65399e-05C6.73864 -0.00199175 5.90353 0.162971 5.12457 0.485396C4.3456 0.807821 3.6382 1.28132 3.04319 1.87857C2.44591 2.47279 1.97236 3.17952 1.64992 3.95789C1.32748 4.73626 1.16254 5.57083 1.16464 6.41334V7.29224H3.73461V6.41334C3.73461 5.39045 4.13282 4.42155 4.86324 3.69488C5.2195 3.33697 5.64319 3.05327 6.10981 2.86019C6.57643 2.6671 7.07671 2.56847 7.5817 2.57C8.60074 2.57178 9.57759 2.97718 10.2984 3.69747C11.0193 4.41777 11.4255 5.39429 11.428 6.41334V9.92521C10.2601 9.22898 8.92494 8.86299 7.5652 8.86632C6.57124 8.86433 5.58671 9.05897 4.66828 9.43903C3.74986 9.81909 2.91568 10.3771 2.21378 11.0808C1.51028 11.7829 0.952526 12.6171 0.572604 13.5355C0.192683 14.4539 -0.00191206 15.4384 1.41613e-05 16.4323C-0.00163103 17.4253 0.193112 18.4089 0.573037 19.3264C0.952963 20.2439 1.51057 21.0772 2.21378 21.7784C2.9158 22.4823 3.74974 23.0408 4.66787 23.4221C5.586 23.8033 6.5703 23.9997 7.56442 24C8.55855 24.0003 9.54298 23.8046 10.4614 23.4241C11.3798 23.0435 12.2141 22.4856 12.9166 21.7822C13.6201 21.0802 14.1778 20.2461 14.5577 19.3279C14.9376 18.4096 15.1323 17.4253 15.1304 16.4315C15.1304 15.4116 14.9317 14.4195 14.5372 13.4858L14.5387 13.4866ZM7.5667 21.4275C4.813 21.4275 2.57149 19.186 2.57149 16.4323C2.57149 13.6786 4.813 11.437 7.5667 11.437C8.89121 11.438 10.1612 11.9646 11.0978 12.9012C12.0343 13.8378 12.5609 15.1078 12.5619 16.4323C12.5601 17.7565 12.0333 19.026 11.0969 19.9624C10.1605 20.8988 8.89097 21.4257 7.5667 21.4275ZM9.71147 16.4555C9.71147 19.279 5.47293 19.279 5.47293 16.4555C5.47293 13.6276 9.71147 13.6276 9.71147 16.4555Z"
            fill={`${activeTab === "access" ? "black" : "#8E8E8E"} `}
          />
        </svg>
      ),
      desc: <Access />,
    },
    {
      label: "Sharing",
      value: "sharing",
      icon: (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.8833 12.0083 16.7623 12.025 16.637C12.0417 16.5117 12.0667 16.3993 12.1 16.3L5.05 12.2C4.76667 12.45 4.45 12.646 4.1 12.788C3.75 12.93 3.38333 13.0007 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.38333 7 3.75 7.071 4.1 7.213C4.45 7.355 4.76667 7.55067 5.05 7.8L12.1 3.7C12.0667 3.6 12.0417 3.48767 12.025 3.363C12.0083 3.23833 12 3.11733 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6167 6 14.25 5.92933 13.9 5.788C13.55 5.64667 13.2333 5.45067 12.95 5.2L5.9 9.3C5.93333 9.4 5.95833 9.51267 5.975 9.638C5.99167 9.76333 6 9.884 6 10C6 10.1167 5.99167 10.2377 5.975 10.363C5.95833 10.4883 5.93333 10.6007 5.9 10.7L12.95 14.8C13.2333 14.55 13.55 14.3543 13.9 14.213C14.25 14.0717 14.6167 14.0007 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20Z"
            fill={`${activeTab === "sharing" ? "black" : "#8E8E8E"} `}
          />
        </svg>
      ),
      desc: <SharingTab />,
    },
  ];
  return (
    <div className="w-[105%] h-full  ml-[-1rem] ml z-[100]">
      <div className="flex w-full h-full">
        <div className="min-w-[190px] flex flex-col border-r-[1px] border-gray-300 gap-y-7 mt-2">
          {tabData.map((item, index) => (
            <div
              key={index}
              className={`hover:bg-[#F2F2F2] w-full h-[54px] flex items-center justify-start py-5 px-2 gap-x-3 ${
                activeTab === item.value && "text-black bg-[#F2F2F2]"
              }`}
              onClick={() => {
                console.log("CLICKED");
                setActiveTab(item.value);
              }}
            >
              {item.icon}
              {/* <div className="relative w-[18px] h-[18px]">
                <Image src={`/${item.icon}.svg`} alt="brand" fill />
              </div> */}

              <p className={`text-[16px] font-[500] ${cabin.className}`}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[86%] h-full">
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
