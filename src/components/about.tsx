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
        <p className="font-mono">main tech stack:</p>
        <SiNextdotjs className="w-5 h-5 sm:w-10 sm:h-10" />
        <FaReact className="w-5 h-5 sm:w-10 sm:h-10" />
        <RiTailwindCssFill className="w-5 h-5 sm:w-10 sm:h-10" />
        <SiTypescript className="w-5 h-5 sm:w-10 sm:h-10" />
      </div>
      <div className="grid grid-cols-12 gap-2">
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
      </div>
      <div className="max-w-[600px] mx-auto">
        <p className="leading-6">
          I am a self taught full stack developer. Taught myself how
          to program with {"Harvard's"} CS50 & The Odin Project. I
          started this journey on May 2023, and {"I've"} never stopped
          learning from there.
          <br />
          Programming has become my late-found passion, and I thrive
          in a remote work environment, where {"I'm"} both independent
          and efficient (I have been working remotely since December 2023)
          <br />
          Outside of coding, I have other hobbies & interest; checkout
          #hike, #run, #personal-development and more on my blog!
        </p>
      </div>
    </div>
  );
};

export default About;
