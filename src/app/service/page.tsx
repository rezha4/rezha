"use client"; // TODO: remove

import AnimatedContent from "@/components/AnimatedContent";
import StickyContact from "@/components/shared/sticky-contact";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MagicCard } from "@/components/ui/magic-card";
import { useState } from "react";

export default function Service() {
  const [selectedService, setSelectedService] = useState<"static" | "app" | undefined>();

  return (
    <div className="px-8 py-4">
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={true}
        duration={3}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <h1 className="text-4xl">Product & Service</h1>
        <p>My digital product & web development services</p>
      </AnimatedContent>

      <p className="text-center">work in progress</p>

      {/* <div className="flex justify-center gap-24 py-4">
        <Card onClick={() => setSelectedService("static")} className="hover:cursor-pointer bg-zinc-900 w-full max-w-sm border-none p-0 shadow-none">
          <MagicCard gradientColor="#6e6e6e" className="p-0">
            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
              <CardTitle>Static Site</CardTitle>
              <CardDescription>Perfect for landing pages, company profile, blog, or personal portfolio</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <img src="https://placehold.co/400x400" alt="" />
            </CardContent>
            <CardFooter></CardFooter>
          </MagicCard>
        </Card>

        <Card onClick={() => setSelectedService("app")} className="hover:cursor-pointer bg-zinc-900 w-full max-w-sm border-none p-0 shadow-none">
          <MagicCard gradientColor="#6e6e6e" className="p-0">
            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
              <CardTitle>Web Application</CardTitle>
              <CardDescription>CRM, LMS, ERP, complete with database and auth system</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <img src="https://placehold.co/400x400" alt="" />
            </CardContent>
            <CardFooter></CardFooter>
          </MagicCard>
        </Card>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(undefined)}>
        <DialogContent className="bg-black border-none min-w-[90vw] min-h-[90vh]">
          <p>youre looking at {selectedService}</p>
        </DialogContent>
      </Dialog> */}

      <StickyContact />
    </div>
  );
}
