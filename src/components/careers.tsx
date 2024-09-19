"use client";

import {
  DoubleArrowDownIcon,
  DoubleArrowUpIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { Timeline } from "./ui/timeline";
import { DiGit, DiMongodb, DiPython, DiReact } from "react-icons/di";
import {
  SiAstro,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiGithubactions,
  SiGitlab,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiScratch,
  SiSqlite,
  SiTailwindcss,
  SiWebpack,
} from "react-icons/si";
import { FaFlask, FaReact } from "react-icons/fa";
import { RiFlaskFill } from "react-icons/ri";

const data = [
  {
    title: { title: "CS50", isProfessional: false },
    content: (
      <div>
        <p>[study]</p>
        <br />
        <p className="text-sm">
          Enrolled in {"Harvard's"} CS50 on May 2023.
          <br />
          This is the turning point where programming {
            '"clicked"'
          }{" "}
          with me, and had been my late-found passion ever since.
          <br />
        </p>
        <div className="flex gap-2 mt-4 flex-wrap">
          <SiScratch className="size-6" />
          <p className="font-bold text-xl">C</p>
          <DiPython className="size-6" />
          <SiFlask className="size-6" />
          <SiHtml5 className="size-6" />
          <SiCss3 className="size-6" />
          <SiJavascript className="size-6" />
          <SiSqlite className="size-6" />
        </div>
      </div>
    ),
  },
  {
    title: { title: "The Odin Project", isProfessional: false },
    content: (
      <div>
        <p>[study]</p>
        <br />
        <p className="text-sm">
          Decided to focus on web development, and I jumped to the
          open source Odin Project.
          <br />
          The Odin Project is a comprehensive, self-taught, project
          based, learning platform for web development.
          <br />
          It teaches everything, from the basic html, css, js - the
          advanced framework such as React, Express, and datbases -
          all the underlying/related tech (git, webpack, unit testing
          with jest,) - up to the how to get a job (personal
          development, networking)
        </p>
        <div className="flex gap-2 mt-4 flex-wrap">
          <SiHtml5 className="size-6" />
          <SiCss3 className="size-6" />
          <SiJavascript className="size-6" />
          <DiGit className="size-6" />
          <GitHubLogoIcon className="size-6" />
          <SiWebpack className="size-6" />
          <FaReact className="size-6" />
          <SiJest className="size-6" />
          <SiPostgresql className="size-6" />
          <SiPrisma className="size-6" />
          <DiMongodb className="size-6" />
          <SiMongoose className="size-6" />
          <SiNodedotjs className="size-6" />
          <SiExpress className="size-6" />
        </div>
      </div>
    ),
  },
  {
    title: { title: "Platon", isProfessional: true },
    content: (
      <div>
        <p>December 2023 - July 2024</p>
        <p>[professional - freelance]</p>
        <br />
        <p className="text-sm">
          Platon - PT. Sinergi Rajawali Mataram is a freelance
          aggregator, in which {"I've"} passed their assessment test
          and immedeately given a ticket to work on.
          <br />
          Tech I use on the job differs from client to client, but
          mainly: React.js, Next.js, Firebase.
        </p>
        <div className="flex gap-2 mt-4 flex-wrap">
          <SiNextdotjs className="size-6" />
          <SiTailwindcss className="size-6" />
          <GitHubLogoIcon className="size-6" />
          <SiGitlab className="size-6" />
          <FaReact className="size-6" />
          <SiNodedotjs className="size-6" />
          <SiExpress className="size-6" />
          <SiFirebase className="size-6" />
        </div>
      </div>
    ),
  },
  {
    title: { title: "Perigigi", isProfessional: true },
    content: (
      <div>
        <p>July 2024 - Present</p>
        <p>[professional - freelance]</p>
        <br />
        <p className="text-sm">
          {" "}
          Perigigi - PT. Aplikasi Kesehatan Bangsa, is a CRM superapp
          for dentists of Indonesia. This includes all feature of a
          CRM, with integration to the health ministry APIs.
          <br />I mainly work with React, Express.js and Google Cloud
          on this project.
        </p>
        <div className="flex gap-2 mt-4 flex-wrap">
          <GitHubLogoIcon className="size-6" />
          <FaReact className="size-6" />
          <SiNodedotjs className="size-6" />
          <SiExpress className="size-6" />
          <SiFirebase className="size-6" />
          <SiGooglecloud className="size-6" />
        </div>
      </div>
    ),
  },
  {
    title: { title: "Innovate", isProfessional: true },
    content: (
      <div>
        <p>July 2024 - Present</p>
        <p>[professional - full time]</p>
        <br />
        <p className="text-sm">
          Innovate - PT. Untung Bersama Sejahtera, is a creative
          marketing agency based in South Jakarta. My role is as a
          full stack developer. I mainly use Next.js, with postgres
          database. But I also have some projects written with
          Astro.js, and firebase.
        </p>
        <div className="flex gap-2 mt-4 flex-wrap">
          <SiNextdotjs className="size-6" />
          <GitHubLogoIcon className="size-6" />
          <FaReact className="size-6" />
          <SiFirebase className="size-6" />
          <SiAstro className="size-6" />
          <SiGithubactions className="size-6" />
        </div>
      </div>
    ),
  },
];

const Careers = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="py-12 mx-auto px-4"
    >
      <h2 className="text-center text-3xl sm:text-4xl font-bold font-hand">Careers</h2>
      <Timeline data={data} />
      {/* <div className="flex flex-col items-center">
        <button
          onClick={() => setShow(!show)}
          className={`transition-all ease-in-out w-fit ${!show && "animate-[pulse_2s_ease-in-out_infinite]"}`}
        >
          {show ? (
            <DoubleArrowDownIcon width={25} height={25} />
          ) : (
            <DoubleArrowUpIcon width={25} height={25} />
          )}
        </button>
        <div className="py-2 border rounded-md gap-8 px-4 flex items-center">
          <div>
            <img
              width={50}
              height={50}
              className=""
              src="https://media.licdn.com/dms/image/D560BAQE6x69OGAU29A/company-logo_200_200/0/1688716830182/platoncoid_logo?e=1725494400&v=beta&t=LerX6lIYOEpLYt487Bct7jXUS4hAIeQV2dFLJBWNG_4"
            />
          </div>
          <div className="space-y-1">
            <p className="font-bold">Platon (PT.Sinergi Rajawali)</p>
            <p>Full Stack Web Developer | December 2023 - Present</p>
            <ul className="list-disc text-xs">
              <li>
                Perigigi - Created a separate dev environment, 1:1
                with production (database, auth hash & the entire
                codebase)
              </li>
              <li>
                Perigigi - Created a serverless HTTP route handler, to
                integrate government API
              </li>
              <li>
                Perigigi - Created a serverless scheduled function, to
                automate document & API processes
              </li>
              <li>
                Perigigi - General bug fixing and feature additions,
                big features I added are: Odontogram, Instalment
                payment option, Dashboard statistics
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Careers;
