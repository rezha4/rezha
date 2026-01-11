"use client";

import { useState } from "react";
import SplitText from "../SplitText";
import { Button } from "../ui/button";
import AnimatedContent from "../AnimatedContent";
import GithubActivity, { Contributions } from "./github-activity";

export default function Hero({ data }: { data: Contributions }) {
  const [start2, setStart2] = useState(false);
  const [start3, setStart3] = useState(false);
  const [start4, setStart4] = useState(false);

  return (
    <>
      <SplitText
        text="Hi! I'm Rezha. A Full Stack Developer with focus on Web Development, using Typescript, React and Node."
        textAlign="left"
        delay={100}
        duration={1}
        splitType="words"
        rootMargin="0px"
        onLetterAnimationComplete={() => setStart2(true)}
      />

      <div className="h-20 lg:h-auto">
        {start2 && (
          <SplitText
            text="I also test and deploy my own app, a full e2e service: React, Node, Cypress, GitHub Actions, Linux."
            textAlign="left"
            delay={100}
            duration={1}
            splitType="words"
            rootMargin="0px"
            onLetterAnimationComplete={() => setStart3(true)}
          />
        )}
      </div>

      <div className="h-20 lg:h-auto">
        {start3 && (
          <SplitText
            text="My hobbies outside programming: hiking, reading, running. Let's connect and build awesome things together."
            textAlign="left"
            delay={100}
            duration={1}
            splitType="words"
            rootMargin="0px"
            onLetterAnimationComplete={() => setStart4(true)}
          />
        )}
      </div>

      <div className="h-20 hidden lg:block lg:h-auto">
        {start4 && (
          <AnimatedContent
            direction="horizontal"
            reverse
            duration={3}
          >
            <GithubActivity data={data} />
          </AnimatedContent>
        )}
      </div>
    </>
  );
}
