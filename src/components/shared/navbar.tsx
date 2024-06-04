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
    }, 4000);
  }, []);

  return (
    <div className="z-[100] flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-full">
      {show ? (
        <div
          onMouseLeave={() =>
            setTimeout(() => {
              setShow(false);
            }, 1000)
          }
          className="transition-all duration-300 ease-in-out px-4 sm:px-8 flex justify-between items-center gap-4 sm:gap-16 rounded-xl p-2"
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
          className="w-44 h-2 dark:bg-white dark:bg-opacity-50 bg-black rounded-full transition-all ease-in-out duration-500 backdrop-filter backdrop-blur-sm bg-opacity-50"
          onMouseEnter={() => setShow(true)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
