"use client";

import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";

const StickyContact = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center z-20 relative">
      <div className="fixed flex justify-between items-center gap-4 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-full p-2">
        <ModeToggle />
        {pathname === "/" ? <Link className="underline" href={"/blog"}>
          <Pencil1Icon width={25} height={25} />
        </Link> :
        <Link className="underline" href={"/"}>
          <HomeIcon width={25} height={25} />
        </Link>}
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
