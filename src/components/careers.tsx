"use client";

import {
  DoubleArrowDownIcon,
  DoubleArrowUpIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { Timeline } from "./ui/timeline";

const data = [
  {
    title: {title: "CS50", isProfessional: false}, 
    content: (
      <div>
        <p>PT</p>
      </div>
    )
  },
  {
    title: {title: "The Odin Project", isProfessional: false}, 
    content: (
      <div>
        <p>PT</p>
      </div>
    )
  },
  {
    title: {title: "Platon", isProfessional: true}, 
    content: (
      <div>
        <p>PT</p>
      </div>
    )
  },
  {
    title: {title: "Innovate", isProfessional: true}, 
    content: (
      <div>
        <p>PT</p>
      </div>
    )
  },
  {
    title: {title: "Perigigi", isProfessional: true}, 
    content: (
      <div>
        <p>PT</p>
      </div>
    )
  },
]

const Careers = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="py-12 mx-auto px-4 space-y-6"
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
