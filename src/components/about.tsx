import { GitHubLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import {
  DiLinux,
  DiMongodb,
  DiPostgresql,
  DiPython,
  DiWordpress,
} from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaElementor,
  FaFigma,
  FaNode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  RiFirebaseFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAstro,
  SiExpress,
  SiFlask,
  SiGithubactions,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const About = () => {
  return (
    <div className="py-12  px-4 space-y-6">
      {/* <h2 className="text-3xl sm:text-4xl font-bold">/About</h2> */}
      <div className="flex gap-4 items-center justify-center">
        <FaNodeJs className="w-5 h-5 sm:w-10 sm:h-10" />
        <SiTypescript className="w-5 h-5 sm:w-10 sm:h-10" />
        <FaReact className="w-5 h-5 sm:w-10 sm:h-10" />
        <RiTailwindCssFill className="w-5 h-5 sm:w-10 sm:h-10" />
      </div>
      {/* <div className="grid grid-cols-12 gap-2">
        <DiPostgresql className="size-6" />
        <RiFirebaseFill className="size-6" />
        <SiVite className="size-6" />
        <DiMongodb className="size-6" />
        <DiLinux className="size-6" />
        <FaFigma className="size-6" />
        <SiExpress className="size-6" />
        <FaNode className="size-6" />
        <FaAws className="size-6" />
        <SiGooglecloud className="size-6" />
        <DiWordpress className="size-6" />
        <FaElementor className="size-6" />
        <SiGithubactions className="size-6" />
        <GitHubLogoIcon className="size-6" />
        <DiPython className="size-6" />
        <SiFlask className="size-6" />
        <FaDocker className="size-6" />
        <SiAstro className="size-6" />
        <RiReactjsLine className="size-6" />
      </div> */}
      <div className="max-w-[600px] mx-auto">
        <p className="leading-6 pt-4">
          Full Stack Developer with main focus on Web Development, mainly using Javascript and its frameworks.
        </p>
        <br />
        <br />
        <ul className="list-disc pl-4">
          <li>
            React with Next JS is my main front end tool.
          </li>
          <li>
            Node JS is my main back end runtime.
          </li>
          <li>
            I test with Cypress (e2e), or jest (component/unit tests).
          </li>
          <li>
            Github Actions for CI/CD.
          </li>
          <li>
            NO-SQL (Firestore, Mongodb) and SQL (Postgres, SQLite) database knowledge.
          </li>
          <li>
            Basic Docker skill.
          </li>
          <li>
            Familiarity with Cloud Computing (AWS, GCP, Netlify etc)
          </li>
        </ul>
        <br />
        <br />
        <p>Beside programming, I sometime hike or run on weekends around Surabaya/Jawa Timur 🏃🏃🏃</p>
      </div>
    </div>
  );
};

export default About;
