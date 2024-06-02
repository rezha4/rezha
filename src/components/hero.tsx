"use client";


import { FC, useState } from "react";
import ProfilePhoto from "./shared/profile-photo";
import StickyContact from "./shared/sticky-contact";
import { Gloria_Hallelujah } from "next/font/google";

const gloria = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center space-y-4 sm:space-y-8">
        <h1 className="font-bold text-2xl sm:text-4xl text-center">
          Rezha Bahari
        </h1>
        <ProfilePhoto />
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
          <h3 className="text-gray-400 mt-4 italic text-center mx-2 max-w-[35rem] text-xs sm:text-sm">
            Ideation. Wireframing. UI/UX. Coding. Testing. Deployment.{" "}
            <br /> Continuous integration. Continuous Deployment.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
