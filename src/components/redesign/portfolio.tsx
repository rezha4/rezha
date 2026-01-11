"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CodeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import Image from "next/image";
import { Marquee } from "../magicui/marquee";

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

const projects: Project[] = [
  {
    id: 1,
    title: "Perigigi - CRM For Dentists of Indonesia",
    shortDescription: "Fully featured CRM targetted towards dentists",
    fullDescription:
      "CRM Superapp for dentists, this goal encompasses many tasks & issues I've done throughout the project. Solution: I made sure to push only high quality code that solves bug, or add a new feature.",
    stack: ["React", "Vite", "Firebase"],
    achievements: [
      "Odontogram",
      "BPJS SatuSehat",
      "Dev environment with 1:1 Firestore Database and Firebase Auth Hashes",
      "BPJS Pcare",
      "Google Calendar",
    ],
    role: "Full Stack Developer",
    client: "",
    images: [
      "/perigigi/perigigi-landing.png",
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
  // {
  //   id: 2,
  //   title: "AI.mage",
  //   shortDescription: "Micro-SaaS for manipulating images",
  //   fullDescription:
  //     "My try at Micro-SaaS, using cloudinary API, I can let users remove object, recolor object, or enhance their photos with prompt - no design skill required.",
  //   stack: ["Next.js", "Stripe", "Postgresql", "Vercel", "Cloudinary", "Prisma"],
  //   achievements: [
  //     "Prompt based remove object, recolor object, and enhance quality",
  //     "Stripe integration",
  //     "Prisma ORM for Postgresql Database",
  //   ],
  //   role: "Full Stack Developer",
  //   client: "",
  //   images: [
  //     "/ai/aimageresponsive.png",
  //     "/ai/ai-dashboard.png",
  //     "/ai/ai-home.png",
  //     "/ai/ai-init.png",
  //     "/ai/ai-login.png",
  //     "/ai/ai-payment.png",
  //     "/ai/ai-recolor.png",
  //     "/ai/ai-remove.png",
  //     "/ai/ai-uploader.png",
  //   ],
  //   liveLink: "https://ai-mage.vercel.app/",
  //   codeLink: "https://github.com/rezha4/ai.mage",
  //   thumbnail: "/ai/ai-home.png",
  // },
  // {
  //   id: 3,
  //   title: "Alphakidz",
  //   shortDescription: "Internal tool for nanny business",
  //   fullDescription:
  //     "Premium Nanny's internal tool for letting parent & nanny track progress of children's growth - mainly through Diary entry",
  //   stack: ["Adalo", "Wordpress API"],
  //   achievements: [
  //     "Parents can hire nanny based on nanny's badge number",
  //     "Nanny can handle multiple kids",
  //     "Diary can record text & photo input, of 6 categories",
  //   ],
  //   role: "Adalo Developer",
  //   client: "",
  //   images: ["/alphakidz/alphakidzresponsive.png"],
  //   liveLink: "nda",
  //   codeLink: "nda",
  //   thumbnail: "/alphakidz/alphakidzresponsive.png",
  // },
  // {
  //   id: 4,
  //   title: "Amana",
  //   shortDescription: "Architect & Design Interior Company Profile",
  //   fullDescription: "At Platon, I was assigned to turn figma into Next.js code on this Amana Project.",
  //   stack: ["Next.js", "Vercel", "MantineUI"],
  //   achievements: ["Pixel perfect code"],
  //   role: "Front-End Developer",
  //   client: "",
  //   images: ["/amana/amanaresponsive.png", "/amana/amanalayout.png", "/amana/amanalayout2.png"],
  //   liveLink: "https://www.propertyamana.com/",
  //   codeLink: "nda",
  //   thumbnail: "/amana/amanaresponsive.png",
  // },
  {
    id: 5,
    title: "Golden Thorn",
    shortDescription: "Responsive Company Profile that rank 1 on Google",
    fullDescription:
      "I coded this responsive, performant and SEO friendly web in under 3 days delivery time - I also get creative with the hosting, leveraging Github Actions, FTP and a shared hosting CPanel.",
    stack: ["Astro.js", "Flowbite", "Github Actions", "FTP"],
    achievements: [
      "Used Github Actions to build my astro.js app on Github's server",
      "Send the static site via FTP to my shared hosting CPanel",
      "Responsive, SEO friendly design with green Lighthouse score",
      "Internationalization with 2 languages: English & Indonesian",
      "Rank 1 on Google",
    ],
    role: "Front-End Developer + DevOps",
    client: "",
    images: [
      "/goldenthorn/landing.png",
      "/goldenthorn/goldenthornresponsive.png",
      "/goldenthorn/gi18n.png",
      "/goldenthorn/glayout.png",
      "/goldenthorn/glayoutw.png",
      "/goldenthorn/gseo.png",
    ],
    liveLink: "https://goldenthornofficial.id/",
    codeLink: "nda",
    thumbnail: "/goldenthorn/glayout.png",
  },
  {
    id: 6,
    title: "Innovate",
    shortDescription: "Performant Company Profile that got page 1 on Google",
    fullDescription:
      "Built with Next.js, ShadCN and Aceternity UI, this website is performant with green Lighthouse score, are responsive, and SEO friendly.",
    stack: ["Next.js", "ShadCN", "Vercel", "Google Analytics", "Meta Pixel"],
    achievements: ["Green Lighthouse score", "Responsive", "SEO Friendly"],
    role: "Front-End Developer",
    client: "",
    images: [
      "/innovate/innovatehome.png",
      "/innovate/innovateresponsive.png",
      "/innovate/innovategoogle.png",
      "/innovate/innovateperformance.png",
    ],
    liveLink: "https://www.innovate.partners/",
    codeLink: "nda",
    thumbnail: "/innovate/innovatehome.png",
  },
  // {
  //   id: 7,
  //   title: "Sadean Hasil Bumi",
  //   shortDescription: "Company profile for a trading/exporter company",
  //   fullDescription:
  //     "CRM Superapp for dentists, this goal encompasses many tasks & issues I've done throughout the project. Solution: I made sure to push only high quality code that solves bug, or add a new feature.",
  //   stack: ["Wordpress", "Elementor", "Cpanel"],
  //   achievements: ["Built the entire page on an affordable shared hosting solutin + domain name"],
  //   role: "Wordpress Developer",
  //   client: "",
  //   images: [
  //     "/perigigi/perigigiresponsive.png",
  //     "/perigigi/perigigi-instalment.png",
  //     "/perigigi/perigigi-odontogram.png",
  //     "/perigigi/perigigi-ohis.png",
  //     "/perigigi/perigigi-satusehat.png",
  //     "/perigigi/perigigibpjs.png",
  //     "/perigigi/perigigiodontogram.png",
  //   ],
  //   liveLink: "https://perigigi.com/",
  //   codeLink: "nda",
  //   thumbnail: "/sadean/sadeanhome.png",
  // },
];

export function PortfolioComponent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Marquee
        pauseOnHover
        vertical
        reverse
        className="-mt-5 -mr-5 overflow-clip max-h-screen hidden lg:block space-y-4 [--duration:210s]"
      >
        {projects.map((project, index) => (
          <Image
            key={index}
            className="opacity-30 hover:opacity-100 hover:cursor-pointer rounded-sm w-full grayscale hover:grayscale-0 transition-all duration-1000"
            src={project.images[0]}
            width={300}
            height={200}
            alt={project.title}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </Marquee>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="bg-black">
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
                    <Badge variant="secondary">+{selectedProject.stack.length - 3}</Badge>
                  )}
                </div>
                <DialogDescription>
                  {selectedProject.fullDescription}
                  <p>Features/Contributions:</p>
                  <ul className="list-disc grid-cols-2">
                    {selectedProject.achievements.map((achievement) => (
                      <li key={achievement}>- {achievement}</li>
                    ))}
                  </ul>
                </DialogDescription>

                <div className="flex space-x-4">
                  {selectedProject.liveLink === "nda" ? (
                    <Button disabled>
                      <ExternalLinkIcon className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                  ) : (
                    <Button asChild>
                      <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
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
                        className="flex items-center"
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
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      className="w-full rounded-sm"
                    />
                  ))}
                {selectedProject.video && (
                  <video src={selectedProject.video} controls className="w-full rounded-sm">
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
