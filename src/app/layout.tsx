import "./globals.css";

import React, { useEffect } from "react";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function Landingpage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <div>{children}</div>
      </body>
    </html>
  );
}
