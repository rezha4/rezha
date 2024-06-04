import { Button } from "./ui/button";
import Link from "next/link";

const WorkFlow = () => {
  return (
    <div className="py-12 mx-auto px-4 space-y-6">
      <h2 className="text-center text-3xl sm:text-4xl font-bold font-hand">
        WorkFlow
      </h2>
      <div className="space-y-4 px-8 flex flex-col justify-center items-center">
        <h3 className="text-2xl">
          Looking to work with me? {"Don't"} worry, I got you covered:
        </h3>
        <div className="space-y-2">
          <p>
            <span className="font-bold">
              1. Ideation & Wireframing.
            </span>{" "}
            {"We'll"} start by wireframing your ideas to canvas, making
            sure the MVP as well as the deadlines are clear
          </p>
          <p>
            <span className="font-bold">2. Coding.</span> {"I'll"}{" "}
            start to code and {"we'll"} have a conversation along the
            way.
          </p>
          <p>
            <span className="font-bold">
              3. Continuous Integration, Continuous Deployment.
            </span>{" "}
            MVP finished, continues to integrate new features, and
            continues to deliver{" "}
          </p>
        </div>
        <Link href={"https://wa.me/6281316917668"}>
          <Button size={"lg"}>Contact Me</Button>
        </Link>
      </div>
    </div>
  );
};

export default WorkFlow;
