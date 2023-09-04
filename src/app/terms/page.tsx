"use client";

import { Cabin } from "next/font/google";
import React from "react";
import Navbar from "@/components/terms/Navbar";
import Footer from "@/components/landingpage/Footer";

const cabin = Cabin({ subsets: ["latin"] });

const data = [
  {
    header: "ELIGIBILITY",
    content: `The user of this Website unequivocally declares and agrees that the user is a natural / legal person who has attained the age of at least 18 years and is legally permitted to enter into a contract to utilize the services of the Website. The user hereby undertakes to agree and abide by the Terms detailed hereinafter. If the user violates any of these Terms, or otherwise violates any agreement entered into through the medium of the Website, Company may terminate the user’s membership, delete his/her profile and any content or information posted online by the user on the Website and/ or prohibit the user from using or accessing the Website at any time in its sole discretion, with or without notice.
    `,
  },
  {
    header: "Website USER RESTRICTIONS",
    content: `All information and materials on this Website, including but not limited to, text, trademarks, logos, graphics, images, etc (the "Materials"), are the copyrighted works and other forms of intellectual property of Declarative or third parties who have authorized use of the Materials on this Website. Unless otherwise provided in respect to specific areas or Materials on the Website, Company grants you only the limited and revocable license to display the Materials on your personal computer or personal wireless device, and to copy and download such Materials, provided that: (1) any copyright, trademark or other notice appearing on such Materials is also retained by, displayed, copied, or downloaded as part of the Materials, and is not removed or obscured, and (2) such display, copy, or download is used solely for your personal information. Such Materials may not be distributed, transmitted, displayed, or broadcast in any manner or for any purpose unless approved by Declarative. You acknowledge and agree that you have no right to, nor will you modify, edit, alter, or enhance any of the Materials in any manner. This limited right terminates automatically, without notice to you, if you breach or if Declarative has sufficient reasons to believe about any potential breach of any of the Terms.`,
  },
  {
    header: "YOUR ACCOUNT",
    content: (
      <div className=" flex flex-col justify-center my-[2rem] sm:w-[90%] lg:w-[80%]">
        <p>
          Declarative reserves the right to refuse access to the Website,
          terminate accounts, remove or edit content at any time without notice
          to you. The right to use this Website is personal to the user and is
          not transferable to any other person or entity. 
        </p>
        <p className="mt-[2rem]">
          A possibility exists that the Website could include inaccuracies or
          errors. Additionally, a possibility exists that unauthorized
          additions, deletions or alterations could be made by third parties to
          the Website. Although Declarative attempts to ensure the integrity,
          correctness and authenticity of the Website, it makes no guarantees
          whatsoever as to its completeness, correctness or accuracy. In the
          event that such an inaccuracy arises, please inform Declarative so
          that it can be corrected.
        </p>
      </div>
    ),
  },
  {
    header: "THIRD PARTY CONTENT",
    content: `Declarative has no specific prior review process or editorial control over third party content. Any opinions, advice, statements, services, offers, or other information or content expressed or made available by third parties, including information providers, members or any other user of this Website, are those of the respective parties and not necessarily those of Declarative. Neither Declarative nor any third-party provider of information guarantees the accuracy, completeness, or usefulness of any content including third-party content, nor its merchantability or fitness for any particular purpose.
    `,
  },
  {
    header: "LINKS TO AND FROM THIRD PARTY SITES",
    content: `There may be links established between this Website and other Websites on the World Wide Web or Internet which are not under the control of, or maintained by, Declarative. Such links do not necessarily constitute an endorsement by Declarative of those Websites and are to be used for the limited purpose of providing additional user functions to this Website. Declarative undertakes no obligation to monitor such Websites, and user agrees that Declarative is not responsible for the content of such Websites, or any technical or other problems associated with any such third-party Website, links, or usage.
    `,
  },
  {
    header: "FEEDBACK",
    content: `The user feedback and data submitted is protected by privacy laws as per requirement read with the Privacy Policy. 
    `,
  },
  {
    header: "CHANGES IN TERMS ON THE Website",
    content: `
    Declarative may, in its sole discretion and at intervals of its sole choosing, modify this Website and/or the Website use agreements/policies connected with them at any time and without prior notice.`,
  },
  {
    header: "CONFIDENTIALITY",
    content: `You undertake to not part with or disclose any Confidential Information to which you become privy to on the Website pursuant to these Terms during the subsistence of this agreement and after the expiry thereof. You shall use the Confidential Information solely for the purpose of performing your obligation and shall take all necessary steps and precautions, including without limitation, implementing technical and operational safety measures, to ensure that there is no dissemination, disclosure or use of any Confidential Information.
    `,
  },
  {
    header: "TERMINATION",
    content: `User's access to Website will be subject to Declarative’s authorization to access the Website. Declarative reserves the right to terminate user's access to the Website at any time without notice, for any reason (including, but not limited to, if you violate these Terms) or for no reason. While Declarative’s preferred course of action is to advise you of your inappropriate behavior and recommend any necessary corrective action, Declarative does not represent that it will nor is it required to either actively monitor such behavior or to provide such notice to you. Declarative’s right to terminate user's access is in addition to all other legal or equitable remedies available to Declarative hereunder, which rights are fully and expressly reserved by Declarative Data Inc. Upon termination of this Agreement for any reason, user shall cease to use or further access any Website’s content or services and be liable for any unauthorized attempts to do so via any means.
    `,
  },
  {
    header: "PROPRIETARY MATERIALS AGREEMENT",
    content: (
      <div>
        <p className="mb-3">
          You understand that all the Materials provided on this Website are the
          proprietary property of Declarative Data Inc. and are protected by
          copyright, trade secret, confidentiality and other applicable laws in
          the respective jurisdiction.
        </p>
        <p className="mb-3">
          You agree not to use the Materials in any way that would compromise
          the proprietary nature of the Materials. Without limiting all of the
          foregoing, you agree not to deliver the Materials themselves, either
          reproduced or modified, or anything derived from the Materials, either
          orally or in writing, as part of any seminar, training program,
          workshop, consulting, or similar business activity which you make
          available to your clients or to others, except with the prior written
          permission of Declarative.
        </p>
        <p className="mb-3">
          Except as expressly stated herein, you acknowledge that you have no
          right, title, or interest of any kind on any legal basis in or to the
          Materials.
        </p>
        <p className="mb-3">
          Upon termination of this limited license or usage, you agree to
          immediately destroy any downloaded and/or printed Materials that you
          may have in your possession or control.
        </p>
      </div>
    ),
  },
  {
    header: "NO AGENCY OR PARTNERSHIP",
    content: `The parties are independent contractors. Neither party may direct or control the day-to-day activities of the other; neither party may create or assume any legal obligation on behalf of the other.
    `,
  },
  {
    header: "NOTICES",
    content: `
    Declarative may provide notice to user via email provided on the user's registration form or such other address provided by user. User shall provide notice to Company via email to: info@declarativedata.com with a copy sent to the address on the user's registration form.`,
  },
  {
    header: "ENTIRE AGREEMENT; SEVERABILITY; NO UNINTENTIONAL WAIVER",
    content: (
      <div>
        <p>
          As a user of this Website you have agreed to the Terms that
          Declarative Data Inc. has provided hereunder or anywhere else in this
          Website including but not limited to disclaimers on this Website.
        </p>
        <p className="mt-4">
          These Terms, including the Website&apos;s Privacy Policy and Disclaimer,
          constitutes the entire user agreement between user and Declarative,
          and supersedes any prior agreements or understandings between user and
          Declarative. No amendment or modification hereof will be valid or
          binding upon either party unless made in writing and signed by the
          authorized representatives of both parties.
        </p>
      </div>
    ),
  },
  {
    header: "NO THIRD-PARTY BENEFICIARIES",
    content: `User acknowledges and agrees that this Terms shall in no event be construed as a third-party beneficiary contract, and that it is not intended for the benefit of any person or company whomsoever except the parties hereto.
    `,
  },
  {
    header: "ASSIGNMENT",
    content: `Declarative may assign any or all of its rights and obligations hereunder to any party without the prior consent of or notice to user.
    `,
  },
  {
    header: "GOVERNING LAW",
    content: `The parties agree that any controversy or claim arising out of or relating to this Terms, or the breach thereof, shall be governed by and interpreted in accordance with laws of The United States of America and the parties submit to the exclusive jurisdiction of the courts of state of Delaware.`,
  },
  {
    header: "DISCLAIMER OF WARRANTIES",
    content: `You as a user of the Website acknowledge and agree that Declarative has no liability for any errors or omissions on the Website, including in the Materials, whether provided by Declarative or third parties. You further acknowledge and agree that Declarative makes no warranty or representation of any kind as to the availability of the Website or any portion thereof, that the Website or portions thereof may be inaccessible for various time periods (whether due to Internet service provider problems or otherwise), and that Declarative shall have no liability for any unavailability of or inaccuracy on the Website or the Materials.
    `,
  },
  {
    header: "DISCLAIMER NOTICE:",
    content: (
      <div>
        <p className="mb-3">
          THIS Website AND ALL SERVICES PROVIDED THROUGH IT ARE PROVIDED &quot;AS IS&quot;
          WITH NO WARRANTIES WHATSOEVER. ALL EXPRESS, IMPLIED, AND STATUTORY
          WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NON-INFRINGEMENT, ARE EXPRESSLY DISCLAIMED. TO THE FULLEST EXTENT
          PERMITTED BY LAW, DECLARATIVE DATA INC. DISCLAIMS ANY WARRANTIES FOR
          THE SECURITY, RELIABILITY, TIMELINESS, AND PERFORMANCE OF THIS
          SERVICE. DECLARATIVE DISCLAIMS ANY WARRANTIES FOR OTHER SERVICES OR
          GOODS RECEIVED THROUGH OR ADVERTISED ON THIS Website OR RECEIVED
          THROUGH ANY LINKS PROVIDED ON THE Website, AS WELL AS FOR ANY
          INFORMATION OR ADVICE RECEIVED THROUGH THE Website OR THROUGH ANY
          LINKS PROVIDED ON THE Website. DECLARATIVE SIMILARLY DISCLAIMS ANY
          WARRANTIES FOR ANY INFORMATION OR ADVICE OBTAINED THROUGH THE SITE.
        </p>
        <p className="mb-3">
          YOU UNDERSTAND AND AGREE THAT ANY MATERIAL DOWNLOADED OR OTHERWISE
          OBTAINED THROUGH THE USE OF THE PRODUCTS AND SERVICES IS DONE AT YOUR
          OWN DISCRETION AND RISK, AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR
          ANY DAMAGES TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT MAY RESULT IN
          THE DOWNLOAD OF SUCH MATERIAL.
        </p>
        <p className="mb-3">
          UNDER NO CIRCUMSTANCES SHALL DECLARATIVE BE LIABLE TO ANY USER ON
          ACCOUNT OF THAT USER&apos;S USE OR MISUSE OF AND/OR RELIANCE ON THE
          Website, OR ITS ASSOCIATED PRODUCTS AND SERVICES. USER EXPRESSLY
          AGREES THAT SUCH LIMITATION OF LIABILITY SHALL APPLY TO PREVENT
          RECOVERY OF DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL,
          EXEMPLARY, AND PUNITIVE DAMAGES (EVEN IF DECLARATIVE HAS BEEN ADVISED
          OF THE POSSIBILITY OF SUCH DAMAGES). SUCH LIMITATION OF LIABILITY
          SHALL APPLY WHETHER THE DAMAGES ARISE FROM USE OR MISUSE OF AND
          RELIANCE ON THE Website, PRODUCTS OR SERVICES, FROM INABILITY TO USE
          THE Website, OR FROM THE INTERRUPTION, SUSPENSION, OR TERMINATION OF
          THE Website OR DAMAGES INCURRED BY REASON OF OTHER SERVICES OR GOODS
          RECEIVED THROUGH OR ADVERTISED ON THIS SERVICE OR RECEIVED THROUGH ANY
          LINKS PROVIDED ON THIS Website, AS WELL AS BY REASON OF ANY
          INFORMATION OR ADVICE RECEIVED THROUGH OR ADVERTISED ON THE SERVICES,
          OR RECEIVED THROUGH ANY LINKS PROVIDED IN THE PRODUCTS AND SERVICES.
        </p>
      </div>
    ),
  },
  {
    header: "INDEMNITIES",
    content: `By using this Website, user agrees to indemnify and defend Company and its parents, subsidiaries, affiliates, directors, officers, consultants, and employees and hold them harmless from any and all claims and expenses, including attorney's fees, arising from user's misuse of this Website or Service.`,
  },
];

export default function Dashboard() {
  return (
    <div className={`w-full ${cabin.className} h-full`}>
      <Navbar />
      <div className="flex flex-col justify-center items-center my-[3rem]">
        <div className="flex justify-center bg-[#FFF2ED] sm:w-[90%] lg:w-[80%] py-2 rounded-[5px]">
          <p className="text-[40px] font-[700]">Terms of Use</p>
        </div>
        <div className="flex justify-center py-2 px-2 sm:w-[90%] lg:w-[80%]">
          <div className="text-[20px] flex justify-between w-[100%]">
            <p>Declarative Data Inc.</p>
            <p>Last Updated: Sep 2 2023</p>
          </div>
        </div>
        <div className=" flex flex-col justify-center my-[2rem] sm:w-[90%] lg:w-[80%]">
          <p>
            This Website is owned by Declarative Data Inc (“Declarative”,
            “Company”, “we”, “us”, or “our”) “You” or “your” means any person
            who visits our Website. 
          </p>
          <p className="mt-[2rem]">
            Please read these Terms and Conditions of use carefully before using
            this Website. The Terms and Conditions set forth below (the
            &quot;Terms&quot;) as well as those contained in the Privacy Policy
            of the Website governs your use of the Website and are legally
            binding on you. If you do not agree to all of these Terms or Privacy
            Policy, do not use access or otherwise this Website or any
            information contained on the Website. 
            <br /> Your use of the Website shall be deemed to be your
            understanding of, and agreement, to each of the Terms set forth
            herein. Declarative may revise and update these Terms from time to
            time. Your continued usage of the Website shall be considered as an
            implied acceptance/deemed consent to abide by these Terms for usage
            of this Website.
          </p>
        </div>
        <div className="py-2 px-2 sm:w-[90%] lg:w-[80%]">
          {data.map((item, index) => (
            <div key={index} className="my-[2rem]">
              <p className="text-[18px] font-[700]">{item.header}</p>
              <p className="mt-4">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="sm:w-[90%] lg:w-[80%]">
          <p className="text-[18px] font-[700]">
            QUESTIONS, COMMENTS OR NOTICES
          </p>
          <p>
            If you have questions, comments, or notices about the Website or
            this Terms, please contact us in writing at the address below:
          </p>
          <p className="text-[18px] font-[700]">
            Declarative Data Inc.
            <br />
            4 Wingate Dr
            <br />
            Livingston, NJ 07039
            <br />USA.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
