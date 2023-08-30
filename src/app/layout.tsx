import "./globals.css";

import React, { useEffect } from "react";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: 'https://cdn.onlinewebfonts.com/svg/img_174089.png',
    shortcut: './icon.svg',
    apple: 'https://cdn.onlinewebfonts.com/svg/img_174089.png',
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
