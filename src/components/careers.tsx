"use client";

import Image from "next/image";

const Careers = () => {
  return (
    <div>
      <h2 className="text-3xl">/Career</h2>
      <div className="flex justify-around items-center">
        <div className="flex items-center h-fit rounded-xl p-4 bg-gray-200">
          <div>
            <p>Full Stack Web Developer</p>
            <p className="text-gray-500">Platon (PT.Sinergi Rajawali Mataram)</p>
          </div>
          <img
            src={
              "https://media.licdn.com/dms/image/D560BAQE6x69OGAU29A/company-logo_200_200/0/1688716830182/platoncoid_logo?e=1725494400&v=beta&t=LerX6lIYOEpLYt487Bct7jXUS4hAIeQV2dFLJBWNG_4"
            }
            alt="platon logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <img
          src={"/rezha-bahari-hero.webp"}
          className="w-48 sm:w-[400px] max-h-[400px] object-fill"
          alt="rezha's picture"
        />
      </div>
    </div>
  );
};

export default Careers;
