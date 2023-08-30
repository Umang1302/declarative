import "./globals.css";

import React, { useEffect } from "react";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: './icon.svg',
    shortcut: './icon.svg',
    apple: './apple-icon.png',
  },
}


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
