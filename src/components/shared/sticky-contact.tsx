import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { FaWhatsapp } from "react-icons/fa";

const StickyContact = () => {
  return (
    <div className="flex -mb-8 justify-center sticky top-1">
      <div className="flex gap-4">
        <p className="hidden sm:inline-block">{"Let's connect."}</p>
        <GitHubLogoIcon width={25} height={25} />
        <LinkedInLogoIcon width={25} height={25} />
        <EnvelopeClosedIcon width={25} height={25} />
        <FaWhatsapp style={{ width: 25, height: 25 }} />
      </div>
    </div>
  );
};

export default StickyContact;
