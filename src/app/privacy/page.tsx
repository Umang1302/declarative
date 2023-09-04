"use client";

import { Cabin } from "next/font/google";
import React from "react";
import Navbar from "@/components/terms/Navbar";
import Footer from "@/components/landingpage/Footer";

const cabin = Cabin({ subsets: ["latin"] });

const data = [
  {
    header: "Introduction",
    content: `Welcome to Declarative Data Inc. ("we," "our," or "us"). We are committed to protecting your privacy and the confidentiality of your personal information. This Privacy Notice explains how we collect, use, share, and protect your personal data when you visit our website or use our services.`,
  },
  {
    header: "Information We Collect",
    content: (
      <div>
        We may collect the following types of personal information:
        <ul>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span> Contact Information: This
            includes your name, email address, phone number, and mailing
            address.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            Account Information: If you create an account with us, we may
            collect login credentials and other account-related information.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            Usage Data: We may collect data about your interactions with our
            website and services, such as your IP address, device information,
            browser type, and pages you visit.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            Payment Information: If you make payments to us, we may collect
            payment details, such as credit card information.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            Communications: We may collect information from your communications
            with us, including emails, chats, or other correspondence.
          </li>
        </ul>
      </div>
    ),
  },
  {
    header: "How We Use Your Information",
    content: (
      <div>
        We may use your personal information for the following purposes:
        <ul>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>To provide and maintain
            our services.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            To communicate with you and respond to your inquiries.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            To process payments and fulfill orders.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            To improve our website and services.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            To send you updates, promotions, and marketing materials (if you
            have consented to receive them).
          </li>
        </ul>
      </div>
    ),
  },
  {
    header: "How We Share Your Information",
    content: (
      <div>
        We may share your personal information with third parties for the
        following purposes:
        <ul>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>With service providers who
            assist us in operating our website and providing our services.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            With third-party analytics providers to help us analyze website
            usage and improve our services.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            With legal authorities if required by law or to protect our rights.
          </li>
        </ul>
      </div>
    ),
  },
  {
    header: "Your Choices",
    content: (
      <div>
        You have the right to:
        <ul>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            Access and correct your personal information.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            Opt-out of receiving marketing communications.
          </li>
          <li className="my-1">
            <span className="font-[700] mr-2">-</span>
            Delete your account and personal information (subject to legal
            requirements).
          </li>
        </ul>
      </div>
    ),
  },
  {
    header: "Security",
    content: `We implement reasonable security measures to protect your personal data. However, no method of transmission over the internet or electronic storage is completely secure.`,
  },
  {
    header: "Changes to this Privacy Notice",
    content: `We may update this Privacy Notice from time to time. The "Last Updated" date at the top of this page will indicate when changes were made.`,
  },
  {
    header: "International Data Transfers",
    content: `We may transfer your personal information to servers located in different countries, including countries outside the European Economic Area (EEA) or your home country. We will ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place to protect your data.
    `,
  },
  {
    header: "Cross-Border Data Sharing",
    content: `Your personal information may be shared with our affiliates and third-party service providers located in different countries for the purposes outlined in this Privacy Notice. We will take measures to ensure your data is adequately protected during such sharing, including the use of standard contractual clauses or other appropriate mechanisms.
    `,
  },
  {
    header: "Your Data Rights",
    content: `In addition to the rights mentioned in Section 5, you may have additional rights under local data protection laws. These rights may include the right to access, rectify, erase, restrict, or object to the processing of your personal information. Please contact us as provided in Section 13 to exercise these rights.
    `,
  },
  {
    header: "Consent and Withdrawal",
    content: `Where required by applicable law, we will obtain your explicit consent before processing your personal information for certain purposes. You have the right to withdraw your consent at any time, and this withdrawal will not affect the lawfulness of processing based on your consent before its withdrawal.`,
  },
  {
    header: "Data Retention",
    content: `We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Notice, unless a longer retention period is required or permitted by law.
    `,
  },
  {
    header: "Contact Us",
    content: `If you have any questions or concerns about our privacy practices or this Privacy Notice, please contact us at info@declarativedata.com . If you interact with Declarative Data Inc. through or on behalf of your organization, then your personal information may also be subject to your organization’s privacy practices and you should direct any questions to that organization.`,
  },
];

export default function Dashboard() {
  return (
    <div className={`w-full ${cabin.className} h-full`}>
      <Navbar />
      <div className="flex flex-col justify-center items-center my-[3rem]">
        <div className="flex justify-center bg-[#FFF2ED] sm:w-[90%] lg:w-[80%] py-2 rounded-[5px]">
          <p className="text-[40px] font-[700]">Privacy Policy</p>
        </div>
        <div className="flex justify-center py-2 px-2 sm:w-[96%] lg:w-[80%]">
          <div className="sm:text-[16px] lg:text-[20px] flex justify-between w-[100%]">
            <p>Declarative Data Inc.</p>
            <p>Last Updated: Sep 2 2023</p>
          </div>
        </div>
        <div className="py-2 px-2 sm:w-[90%] lg:w-[80%]">
          {data.map((item, index) => (
            <div key={index} className="my-[2rem]">
              <p className="text-[18px] font-[700]">
                {index + 1}. {item.header}
              </p>
              <p className="mt-4">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
