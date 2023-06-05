"use client";

import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Cabin } from "next/font/google";
import { useRouter } from "next/navigation";

const cabin = Cabin({ subsets: ["latin"] });

export default function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const router = useRouter();

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className=" shadow-xl w-[250px] shadow-blue-gray-900/5 rounded-lg">
      <div className="flex items-center gap-4 p-4">
        <div className="mt-2 ml-2">
          <Image
            src="/declarativeLogo1.svg"
            alt="brand"
            width={180}
            height={70}
          />
        </div>

        {/* <Typography variant="h5" color="blue-gray">
          Declarative
        </Typography> */}
      </div>
      <List className={`mt-[-1rem] ${cabin.className}`}>
        <hr className=" mt-2 border-[#C4C4C4]" />
        {/* <ListItem> */}
        <Button
          variant="text"
          className={`text-black hover:bg-[#ffe7df] active:outline-none border-black border-[1px] w-[200px] ml-4 mt-2 py-1 ${cabin.className}`}
        >
          <div className="flex justify-center">
            <PlusIcon className="h-8 w-8 text-[#F65A27] ml-[-2rem]" />
            <p
              className={`mt-2 font-600 tracking-wide text-[20px] normal-case ml-[1rem] ${cabin.className}`}
            >
              Create
            </p>
          </div>
        </Button>
        {/* </ListItem> */}
        <div className="overflow-y-auto overflow-x-hidden">
          <hr className="my-2 border-[#C4C4C4]" />

          <ListItem
            className="hover:bg-[#ffe7df]"
            onClick={() => {
              router.push("/");
            }}
          >
            <ListItemPrefix>
              <Image src="/home.svg" alt="brand" width={20} height={20} />
            </ListItemPrefix>
            <p className={`text-xl`}>Home</p>
            {/* <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix> */}
          </ListItem>
          <hr className="my-2 border-[#C4C4C4]" />
          <ListItem className="hover:bg-[#ffe7df]">
            <ListItemPrefix>
              <Image src="/products.svg" alt="brand" width={20} height={20} />
            </ListItemPrefix>
            <p className="text-xl">Products</p>
            {/* <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix> */}
          </ListItem>
          <hr className="my-2 border-[#C4C4C4]" />
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-6 w-6 transition-transform text-[#F65A27] ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0 hover:bg-[#ffe7df]" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <Image
                    src="/intends.svg"
                    alt="brand"
                    width={20}
                    height={20}
                  />
                </ListItemPrefix>
                <Typography className="mr-auto text-xl">Intents</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:bg-[#ffe7df]">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Analytics
                </ListItem>
                <ListItem className="hover:bg-[#ffe7df]">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Reporting
                </ListItem>
                <ListItem className="hover:bg-[#ffe7df]">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Projects
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <hr className="my-2 border-[#C4C4C4]" />

          <ListItem className="hover:bg-[#ffe7df]">
            <ListItemPrefix>
              <Image src="/settings.svg" alt="brand" width={20} height={20} />
            </ListItemPrefix>
            <p className="text-xl">Settings</p>
            {/* <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix> */}
          </ListItem>
          <hr className="my-2 border-[#C4C4C4]" />

          <ListItem className="hover:bg-[#ffe7df]">
            <ListItemPrefix>
              <Image src="/logOut.svg" alt="brand" width={20} height={20} />
            </ListItemPrefix>
            <p className="text-xl">Log Out</p>
            {/* <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix> */}
          </ListItem>
          <hr className="my-2 border-[#C4C4C4]" />
        </div>
      </List>
    </Card>
  );
}
