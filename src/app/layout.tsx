"use client";

import React, { useEffect } from "react";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });
import { usePathname } from "next/navigation";
import Head from "next/head";

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
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
