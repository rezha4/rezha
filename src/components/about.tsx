import React from "react";
import { DiJavascript } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const About = () => {
  return (
    <div className="py-12 mx-auto px-4 space-y-6">
      {/* <h2 className="text-3xl sm:text-4xl font-bold">/About</h2> */}
      <div className="flex gap-2 items-center justify-center">
        <p className="font-mono">main tech stack:</p>
        <SiNextdotjs className="w-10 h-10" />
        <FaReact className="w-10 h-10" />
        <RiTailwindCssFill className="w-10 h-10" />
        <SiTypescript className="w-10 h-10" />
        <FaFigma className="w-10 h-10" />
        {/* 
        <FaHtml5 className="w-10 h-10" />
        <IoLogoCss3 className="w-10 h-10" />
        <SiJavascript className="w-10 h-10" />
        <SiExpress className="w-10 h-10" />
        <FaNode className="w-10 h-10" />
        <FaAws className="w-10 h-10" /> 
        */}
      </div>
      <div className="max-w-[600px] mx-auto">
        <p>
          As a full stack developer, I am involved in all process of
          development. Starting with ideation, to wireframes, UI/UX
          designs, then coding, testing, deployment and it {"ends"} with
          Continous Integration and Contious Deployment (CI/CD).
          <br />
          <br />
          I am excited to talk about tech. Anything open source.
          Linux. Web development. Low level coding. Game development.
          3D. Graphic design. Animation.
          <br />
          <br />
          Outside of coding, I sometimes hike, Am very interested in
          theology and islamic history, and I try being a great father
          and husband to my little family.
        </p>
      </div>
    </div>
  );
};

export default About;
