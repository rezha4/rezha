import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Hero from "./hero";
import SectionTitle from "./section-title";
import { PortfolioComponent } from "./portfolio";
import { Pointer } from "../magicui/pointer";
import TechStack from "./tech-stack";
import Connect from "./connect";
import GithubActivitySm from "./github-activity-sm";

async function getGithubContributions() {
  const res = await fetch(
    "https://github-contributions-api.jogruber.de/v4/rezha4?y=last",
    { next: { revalidate: 3600 } } // Cache for 1 hour
  );

  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function Redesign() {
  const data = await getGithubContributions();

  return (
    <div className="text-sm p-5 flex flex-col justify-between lg:grid lg:grid-cols-2 lg:gap-5 h-screen">
      <div className="h-[90vh] overflow-auto scrollbar-hidden hidden lg:block space-y-10 lg:space-y-6 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-10 pt-10">
        <Hero data={data} />
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="lg:pt-10 lg:pb-10 lg:w-4/5 lg:space-y-5 lg:h-[90vh] overflow-auto scrollbar-hidden">
          <div>
            <div className="flex justify-between items-center lg:items-start">
              <div>
                <SectionTitle title="ABOUT" />
                <p>
                  <strong>Rezha Bahari</strong>
                  <br /> Full Stack Developer
                  <br /> Typescript
                </p>
                {/* <Pointer>
                  <p className="bg-orange-500 text-black px-1">Click to read more about me</p>
                </Pointer> */}
              </div>

              <div>
                <Pointer>
                  <Image
                    src={"/rezha-bahari-hero.webp"}
                    height={300}
                    width={300}
                    alt=""
                  />
                </Pointer>
                <Image
                  src={"/rezha-bahari-hero.webp"}
                  height={68}
                  width={68}
                  alt=""
                />
              </div>
            </div>
            {/* <p className="lg:block hidden text-justify">
              <br />
              Full Stack Web Developer. I provide end to end web development solution, from design, to code, to
              deployment.
            </p> */}
          </div>

          <div className="hidden lg:block text-justify">
            <SectionTitle title="WORK" />
            <p>
              Full Stack Developer @ GD Business
              {/* GD Business is a fully featured POS application with an
              integrated ERP, with hundreds of monthly active
              businesses using it. */}
            </p>
          </div>

          <div className="hidden lg:block">
            <TechStack />
          </div>

          <div className="hidden lg:block">
            <Connect />
          </div>

          <div className="hidden lg:block text-justify">
            <SectionTitle title="SITEMAP" />
            <Link href="/blog">
              <Button
                className="w-full mb-1 mt-1"
                variant="outline"
                size="sm"
              >
                Blog
              </Button>
            </Link>
            {/* <Link href="/product">
              <Button
                className="w-full mb-1"
                variant="outline"
                size="sm"
              >
                Product
              </Button>
            </Link>
            <Link href="/service">
              <Button
                className="w-full mb-1"
                variant="outline"
                size="sm"
              >
                Service
              </Button>
            </Link> */}
            {/* <Link href="/cv">
              <Button
                className="w-full mb-1"
                variant="outline"
                size="sm"
              >
                CV
              </Button>
            </Link> */}
          </div>
        </div>

        <PortfolioComponent />
      </div>

      <div className="lg:hidden space-y-6 lg:space-y-6 h-full my-5 lg:my-0 text-base sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:pt-10 lg:px-10">
        <Hero data={data} />
      </div>

      <div className="flex justify-between items-end lg:hidden">
        <div>
          <Connect />
        </div>

        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button
              size="sm"
              className="bg-[#56d364] rounded-none h-5 mb-0.5 px-1"
            >
              <p>MORE</p>
              <ChevronRightIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="text-xs h-screen ml-12 border-none rounded-l-lg bg-[#121212] px-5">
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>

            <div className="-mt-5">
              <SectionTitle title="GITHUB ACTIVITY" />
              <GithubActivitySm data={data} />
            </div>

            <div className="mt-5">
              <SectionTitle title="WORK" />
              <p>Full Stack Developer @ GD Business</p>
            </div>

            <div className="my-5">
              <TechStack />
            </div>

            <div className="text-justify">
              <SectionTitle title="SITEMAP" />
              <Link href="/blog">
                <Button
                  className="w-full mb-1 mt-1"
                  variant="outline"
                  size="sm"
                >
                  Blog
                </Button>
              </Link>
              {/* <Link href="/product">
                <Button
                  className="w-full mb-1"
                  variant="outline"
                  size="sm"
                >
                  Product
                </Button>
              </Link>
              <Link href="/service">
                <Button
                  className="w-full mb-1"
                  variant="outline"
                  size="sm"
                >
                  Service
                </Button>
              </Link> */}
              {/* <Link href="/cv">
                <Button
                  className="w-full mb-1"
                  variant="outline"
                  size="sm"
                >
                  CV
                </Button>
              </Link> */}
            </div>
            <DrawerClose
              className="absolute bottom-3 right-5"
              asChild
            >
              <Button
                size="sm"
                className="bg-[#56d364] rounded-none h-5 mb-0.5 px-1"
              >
                <ChevronLeftIcon className="mb-0.5" />
                <p>LESS</p>
              </Button>
            </DrawerClose>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
