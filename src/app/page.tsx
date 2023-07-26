"use client";

import { Cabin } from "next/font/google";
import React from "react";
import { RingLoader } from "react-spinners";

const cabin = Cabin({ subsets: ["latin"] });

export default function Dashboard() {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <RingLoader color="#F65A27" size={100} className="ml-[45%] mt-[20%]" />
    );
  } else {
    return <div className={`w-full mt-5 ${cabin.className}`}>Landing Page</div>;
  }
}
