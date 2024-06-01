"use client";

import { useState } from "react";

const Hero = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl sm:text-4xl text-center pt-4">
        Rezha Bahari
      </h1>
      <div className="min-h-[80vh] flex items-center justify-center">
        <h2 className="text-xl">
          Full Stack Developer with a design in mind
        </h2>
      </div>
    </>
  );
};

export default Hero;
