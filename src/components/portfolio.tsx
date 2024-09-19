"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import { CodeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { Gloria_Hallelujah } from "next/font/google";
import { Badge } from "./ui/badge";

type Project = {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  video?: string; // Optional video link
  liveLink: string;
  codeLink: string;
  stack: string[];
  achievements: string[];
  role: string;
  client: string;
  thumbnail: string;
};

const gloria = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
});

const projects: Project[] = [
  {
    id: 1,
    title: "Perigigi - CRM For Dentists of Indonesia",
    shortDescription: "Fully featured CRM targetted towards dentists",
    fullDescription:
      "CRM Superapp for dentists, this goal encompasses many tasks & issues I've done throughout the project. Solution: I made sure to push only high quality code that solves bug, or add a new feature.",
    stack: ["React", "Vite", "Firebase"],
    achievements: ["achievement1", "achievement2", "achievement3"],
    role: "Full Stack Developer",
    client: "",
    images: [
      "/perigigi/perigigiresponsive.png",
      "/perigigi/perigigi-instalment.png",
      "/perigigi/perigigi-odontogram.png",
      "/perigigi/perigigi-ohis.png",
      "/perigigi/perigigi-satusehat.png",
      "/perigigi/perigigibpjs.png",
      "/perigigi/perigigiodontogram.png",
    ],
    liveLink: "https://perigigi.com/",
    codeLink: "nda",
    thumbnail: "/perigigi/perigigi-home.png",
  },
  {
    id: 2,
    title: "AI.mage",
    shortDescription: "Fully featured CRM targetted towards dentists",
    fullDescription:
      "CRM Superapp for dentists, this goal encompasses many tasks & issues I've done throughout the project. Solution: I made sure to push only high quality code that solves bug, or add a new feature.",
    stack: ["React", "Vite", "Firebase"],
    achievements: ["achievement1", "achievement2", "achievement3"],
    role: "Full Stack Developer",
    client: "",
    images: [
      "/perigigi/perigigiresponsive.png",
      "/perigigi/perigigi-instalment.png",
      "/perigigi/perigigi-odontogram.png",
      "/perigigi/perigigi-ohis.png",
      "/perigigi/perigigi-satusehat.png",
      "/perigigi/perigigibpjs.png",
      "/perigigi/perigigiodontogram.png",
    ],
    liveLink: "https://perigigi.com/",
    codeLink: "nda",
    thumbnail: "/ai/ai-home.png",
  },
  {
    id: 3,
    title: "Alphakidz",
    shortDescription: "Fully featured CRM targetted towards dentists",
    fullDescription:
      "CRM Superapp for dentists, this goal encompasses many tasks & issues I've done throughout the project. Solution: I made sure to push only high quality code that solves bug, or add a new feature.",
    stack: ["React", "Vite", "Firebase"],
    achievements: ["achievement1", "achievement2", "achievement3"],
    role: "Full Stack Developer",
    client: "",
    images: [
      "/perigigi/perigigiresponsive.png",
      "/perigigi/perigigi-instalment.png",
      "/perigigi/perigigi-odontogram.png",
      "/perigigi/perigigi-ohis.png",
      "/perigigi/perigigi-satusehat.png",
      "/perigigi/perigigibpjs.png",
      "/perigigi/perigigiodontogram.png",
    ],
    liveLink: "https://perigigi.com/",
    codeLink: "nda",
    thumbnail: "/alphakidz/alphakidzresponsive.png",
  },
  {
    id: 4,
    title: "Amana",
    shortDescription: "Fully featured CRM targetted towards dentists",
    fullDescription:
      "CRM Superapp for dentists, this goal encompasses many tasks & issues I've done throughout the project. Solution: I made sure to push only high quality code that solves bug, or add a new feature.",
    stack: ["React", "Vite", "Firebase"],
    achievements: ["achievement1", "achievement2", "achievement3"],
    role: "Full Stack Developer",
    client: "",
    images: [
      "/perigigi/perigigiresponsive.png",
      "/perigigi/perigigi-instalment.png",
      "/perigigi/perigigi-odontogram.png",
      "/perigigi/perigigi-ohis.png",
      "/perigigi/perigigi-satusehat.png",
      "/perigigi/perigigibpjs.png",
      "/perigigi/perigigiodontogram.png",
    ],
    liveLink: "https://perigigi.com/",
    codeLink: "nda",
    thumbnail: "/amana/amanaresponsive.png",
  },
  {
    id: 5,
    title: "Golden Thorn",
    shortDescription: "Fully featured CRM targetted towards dentists",
    fullDescription:
      "CRM Superapp for dentists, this goal encompasses many tasks & issues I've done throughout the project. Solution: I made sure to push only high quality code that solves bug, or add a new feature.",
    stack: ["React", "Vite", "Firebase"],
    achievements: ["achievement1", "achievement2", "achievement3"],
    role: "Full Stack Developer",
    client: "",
    images: [
      "/perigigi/perigigiresponsive.png",
      "/perigigi/perigigi-instalment.png",
      "/perigigi/perigigi-odontogram.png",
      "/perigigi/perigigi-ohis.png",
      "/perigigi/perigigi-satusehat.png",
      "/perigigi/perigigibpjs.png",
      "/perigigi/perigigiodontogram.png",
    ],
    liveLink: "https://perigigi.com/",
    codeLink: "nda",
    thumbnail: "/goldenthorn/glayout.png",
  },
  {
    id: 6,
    title: "Innovate",
    shortDescription: "Fully featured CRM targetted towards dentists",
    fullDescription:
      "CRM Superapp for dentists, this goal encompasses many tasks & issues I've done throughout the project. Solution: I made sure to push only high quality code that solves bug, or add a new feature.",
    stack: ["React", "Vite", "Firebase"],
    achievements: ["achievement1", "achievement2", "achievement3"],
    role: "Full Stack Developer",
    client: "",
    images: [
      "/perigigi/perigigiresponsive.png",
      "/perigigi/perigigi-instalment.png",
      "/perigigi/perigigi-odontogram.png",
      "/perigigi/perigigi-ohis.png",
      "/perigigi/perigigi-satusehat.png",
      "/perigigi/perigigibpjs.png",
      "/perigigi/perigigiodontogram.png",
    ],
    liveLink: "https://perigigi.com/",
    codeLink: "nda",
    thumbnail: "/innovate/innovatehome.png",
  },
  {
    id: 7,
    title: "Sadean",
    shortDescription: "Fully featured CRM targetted towards dentists",
    fullDescription:
      "CRM Superapp for dentists, this goal encompasses many tasks & issues I've done throughout the project. Solution: I made sure to push only high quality code that solves bug, or add a new feature.",
    stack: ["React", "Vite", "Firebase"],
    achievements: ["achievement1", "achievement2", "achievement3"],
    role: "Full Stack Developer",
    client: "",
    images: [
      "/perigigi/perigigiresponsive.png",
      "/perigigi/perigigi-instalment.png",
      "/perigigi/perigigi-odontogram.png",
      "/perigigi/perigigi-ohis.png",
      "/perigigi/perigigi-satusehat.png",
      "/perigigi/perigigibpjs.png",
      "/perigigi/perigigiodontogram.png",
    ],
    liveLink: "https://perigigi.com/",
    codeLink: "nda",
    thumbnail: "/sadean/sadeanhome.png",
  },
];

export function PortfolioComponent() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center text-3xl sm:text-4xl font-bold font-hand">
        portfolio
      </h2>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="cursor-pointer hover:scale-105 transition-all ease-linear duration-150"
            onClick={() => setSelectedProject(project)}
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <img className="h-[128px] w-full object-cover object-top" src={project.thumbnail} alt="" />
              <p className="mt-2">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.slice(0, 3).map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
                {project.stack.length > 3 && (
                  <Badge variant="secondary">
                    +{project.stack.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[80vh]">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                  {selectedProject.stack.length > 3 && (
                    <Badge variant="secondary">
                      +{selectedProject.stack.length - 3}
                    </Badge>
                  )}
                </div>

                <DialogDescription>
                  {selectedProject.fullDescription}
                  <ul className="list-disc grid-cols-2">
                    {selectedProject.achievements.map(achievement => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </DialogDescription>

                <div className="flex space-x-4">
                  {selectedProject.liveLink && (
                    <Button asChild>
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLinkIcon className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {selectedProject.codeLink === "nda" ? (
                    <Button disabled variant="outline">
                      <CodeIcon className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  ) : (
                    <Button variant="outline">
                      <a
                        href={selectedProject.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CodeIcon className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
                {selectedProject.images &&
                  selectedProject.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${selectedProject.title} screenshot ${
                        index + 1
                      }`}
                      className="w-full rounded-md"
                    />
                  ))}
                {selectedProject.video && (
                  <video
                    src={selectedProject.video}
                    controls
                    className="w-full rounded-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
