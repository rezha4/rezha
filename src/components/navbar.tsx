"use client";

import {
  BackpackIcon,
  ChatBubbleIcon,
  CubeIcon,
  HomeIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 1000);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {show ? (
        <div
          onMouseLeave={() =>
            setTimeout(() => {
              setShow(false);
            }, 500)
          }
          className="transition-all duration-300 ease-in-out px-4 sm:px-8 flex justify-between items-center gap-4 sm:gap-16 rounded-xl p-2 bg-transparent"
        >
          <button className="transition hover:scale-150 hover:-translate-y-1 active:-translate-y-1.5">
            <HomeIcon width={25} height={25} />
          </button>
          <button className="transition hover:scale-150 hover:-translate-y-1 active:-translate-y-1.5">
            <BackpackIcon width={25} height={25} />
          </button>
          <button className="transition hover:scale-150 hover:-translate-y-1 active:-translate-y-1.5">
            <CubeIcon width={25} height={25} />
          </button>
          <button className="transition hover:scale-150 hover:-translate-y-1 active:-translate-y-1.5">
            <ChatBubbleIcon width={25} height={25} />
          </button>
          <button className="transition hover:scale-150 hover:-translate-y-1 active:-translate-y-1.5">
            <Pencil1Icon width={25} height={25} />
          </button>
        </div>
      ) : (
        <div
          onClick={() => setShow(!show)}
          className="border border-solid border-gray-200 w-44 h-1 bg-gray-200 rounded-full transition-all ease-in-out duration-500"
          onMouseEnter={() => setShow(true)}
        >
        </div>
      )}
    </div>
  );
};

export default Navbar;
