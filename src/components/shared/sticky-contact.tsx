import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const StickyContact = () => {
  return (
    <div className="flex -mb-8 justify-center sticky top-0">
      <div className="flex gap-4 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-full p-2">
        <p className="hidden sm:inline-block">{"Let's connect."}</p>
        <Link target="blank" href={"https://github.com/rezha4"}>
          <GitHubLogoIcon width={25} height={25} />
        </Link>
        <Link
          target="blank"
          href={"https://www.linkedin.com/in/rezha-bahari-bb23b5117/"}
        >
          <LinkedInLogoIcon width={25} height={25} />
        </Link>
        <Link href={"mailto:rezha.bahari@gmail.com"}>
          <EnvelopeClosedIcon width={25} height={25} />
        </Link>
        <Link target="blank" href={"https://wa.me/6281316917668"}>
          <FaWhatsapp style={{ width: 25, height: 25 }} />
        </Link>
      </div>
    </div>
  );
};

export default StickyContact;
