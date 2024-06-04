"use client";

import Home from "@/app/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { FaReact } from "react-icons/fa";

const myProjects = [
  {
    title: "Perigigi",
    subtitle: "ERP for dentists & clinics",
    shortDesc:
      "I'm part of the developer team at Platon who handles this project",
    longDesc:
      "I created a separate dev env from scratch, HTTP route handler, government API integration, general bug fixing and feature addition (big features: odontogram, ohis, instalment, statistic)",
    thumbnail: "./perigigi/perigigi-home.png",
    images: [
      "./perigigi/perigigi-home.png",
      "./perigigi/perigigi-odontogram.png",
      "./perigigi/perigigi-satusehat.png",
      "./perigigi/perigigi-instalment.png",
      "./perigigi/perigigi-ohis.png",
    ],
    github: "NDA",
    live: "https://perigigi.com/",
  },
  {
    title: "AI.mage",
    subtitle: "SaaS for manipulating images with AI",
    shortDesc:
      "I'm the sole founder & engineer of this SaaS image processing AI",
    longDesc: "AI with Cloudinary. Stripe for payment. Built with Next JS. Hosted on Vercel.",
    thumbnail: "./ai/ai-dashboard.png",
    images: [
      "./ai/ai-home.png",
      "./ai/ai-dashboard.png",
      "./ai/ai-init.png",
      "./ai/ai-payment.png",
      "./ai/ai-recolor.png",
      "./ai/ai-remove.png",
      "./ai/ai-uploader.png",
      "./ai/ai-login.png",
    ],
    github: "https://github.com/rezha4/ai.mage",
    live: "https://ai-mage.vercel.app/",
  },
  {
    title: "UndanganOnline.com",
    subtitle: "Invitation SaaS",
    shortDesc:
      "I'm the first engineer and co-founder of this invitation app.",
    longDesc: "We provide affordable solution for couple to digitalize their invitation. Project is still in progress.",
    thumbnail: "./undangan/undangan-edit.png",
    images: [
      "./undangan/undangan-home.png",
      "./undangan/undangan-login.png",
      "./undangan/undangan-dashboard.png",
      "./undangan/undangan-edit.png",
    ],
    github: "NDA",
    live: "https://undangan-online-adf6d.web.app/",
  },
];

interface myProjectsProps {
  title: string;
  subtitle: string;
  shortDesc: string;
  longDesc: string;
  thumbnail: string;
  images: string[];
  github: string;
  live: string;
}

const Projects = () => {
  return (
    <>
      <div className="py-12 mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold font-hand">Projects</h2>
      </div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-3 gap-2 mx-4">
        {myProjects.map((project, index) => (
          <DrawerCard key={index} props={project} />
        ))}
      </div>
    </>
  );
};

const DrawerCard = ({ props }: { props: myProjectsProps }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <ProjectCard props={props} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {props.title} | {props.subtitle}
          </DrawerTitle>
          <DrawerDescription className="flex flex-col justify-center items-center">
            <Carousel className="w-full max-w-xs sm:max-w-md">
              <CarouselContent>
                {props.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Card className="max-w-xs">
                        <CardContent className="flex aspect-square items-center justify-center">
                          <img
                            src={image}
                            className="object-contain"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            {props.longDesc}
            <div className="flex gap-4">Tech Stack: - (NDA)</div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <div className="flex justify-stretch gap-2">
            {props.github === "NDA" ? (
              <Button disabled className="w-full">
                Private Github (NDA)
              </Button>
            ) : (
              <Link
                className="w-full"
                target="blank"
                href={props.github}
              >
                <Button className="w-full">Github</Button>
              </Link>
            )}
            <Button className="w-full">
              <Link target="blank" href={props.live}>
                Live Preview
              </Link>
            </Button>
          </div>
          <DrawerClose className="w-full">
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const ProjectCard = ({ props }: { props: myProjectsProps }) => {
  return (
    <Card className="w-full h-80 transition-all duration-500 hover:scale-105">
      <img
        src={props.thumbnail}
        className="w-full h-40 object-contain mb-2 p-2"
        style={{ maxWidth: "100%" }}
      />
      <CardHeader>
        <CardTitle className="line-clamp-1">{props.title}</CardTitle>
        <CardDescription className="line-clamp-1">{props.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-1">{props.shortDesc}</p>
      </CardContent>
      <CardFooter>
        <p></p>
      </CardFooter>
    </Card>
  );
};

export default Projects;
