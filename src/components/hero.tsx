"use client";

import {
  DoubleArrowDownIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { Gloria_Hallelujah } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";

const gloria = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center space-y-8 sm:space-y-16">
        <h1 className="font-semibold text-2xl sm:text-4xl text-center">
          Rezha Bahari
        </h1>
        <div>
          <h2 className="sm:text-2xl text-center">
            Full Stack Developer with a{" "}
            <span
              className={`${gloria.className} font-hand text-xl sm:text-3xl font-semibold inline-block rotate-0`}
            >
              design
            </span>{" "}
            in mind
          </h2>
          <h3 className="text-gray-400 mt-4 italic text-center mx-2 max-w-[35rem]">
            Ideation. Wireframing. UI/UX. Coding. Testing. Deployment.{" "}
            <br /> Continuous integration. Continuous Deployment.
          </h3>
        </div>
        {/* <h3 className="text-center mx-2 max-w-[35rem]">
          As a full stack developer, I am involved in all process of
          development. Starting with ideation, to wireframes, UI/UX
          designs, then coding, testing, deployment and it "ends" with
          Continous Integration and Contious Deployment (CI/CD).
          <br />
          <br />
          I am excited to talk about tech.
          <br />
          <br />
          Outside of coding, I am interested in pop art.

        </h3> */}
        <div className="flex gap-4">
          <p>Let's connect.</p>
          <GitHubLogoIcon width={25} height={25} />
          <LinkedInLogoIcon width={25} height={25} />
          <EnvelopeClosedIcon width={25} height={25} />
          <FaWhatsapp style={{ width: 25, height: 25 }} />
        </div>
        {/* <button>
          <DoubleArrowDownIcon />
        </button> */}
      </div>
    </>
  );
};

export default Hero;
