import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";

const WorkFlow = () => {
  return (
    <div className="py-12 mx-auto px-4 space-y-6">
      <h2 className="text-center mb-14 text-3xl sm:text-4xl font-bold font-hand">
        WorkFlow
      </h2>
      <div className="space-y-4 px-8 flex flex-col justify-center items-center">
        <h3 className="text-2xl text-center leading-10">
          Looking to work with me? <br /> Whether you need me in all
          SDLC, or in parts of it, I got you covered.
        </h3>
        <ul className="grid grid-cols-2 gap-4 py-4 max-w-3xl">
          <li>
            1. Planning: {"Let's"} create a BRD (Business Requirement
            Document)!
          </li>
          <li>
            2. Design: Wireframing & Figma design with proper UI/UX
          </li>
          <li>
            3. Development: Coding starts, live tunneling happens here
            so you can alway check the progress
          </li>
          <li>
            4. Testing: Makes sure the code is production ready with
            unit & integration testing
          </li>
          <li>
            5. Deployment: PaaS, VPS, or even FTP - I can make sure
            the code can be deployed smoothly
          </li>
          <li>6. Maintenance: Revisions if any, bug fixing if any</li>
          <li>
            7. Documentation: Writing manuals & proper documentation
          </li>
        </ul>
        {/* <div className="space-y-2">
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
        </div> */}
        <Link href={"https://wa.me/6281316917668"}>
          <Button className="flex gap-4" size={"lg"}>
            <FaWhatsapp className="size-6" /> Drop me a WhatsApp
            message!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WorkFlow;
