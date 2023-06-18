"use client";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });
import Table from "./Table";
export default function OverviewTable({ data }: any) {
  const label = [
    {
      id: 1,
      label: "Mutual Funds",
    },
    {
      id: 2,
      label: "Securities",
    },
    {
      id: 3,
      label: "Benchmarks",
    },
    {
      id: 4,
      label: "ESG",
    },
    {
      id: 5,
      label: "Economy",
    },
    {
      id: 6,
      label: "Census",
    },
  ];

  return (
    <div className="p-0">
      <Table data={data} />
    </div>
  );
}
