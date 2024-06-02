import Careers from "@/components/careers";
import Hero from "@/components/hero";
import Navbar from "@/components/shared/navbar";
import Projects from "@/components/projects";
import WorkFlow from "@/components/work-flow";
import BlogPosts from "@/components/blog-posts";
import { ModeToggle } from "@/components/shared/mode-toggle";
import StickyContact from "@/components/shared/sticky-contact";

export default function Home() {
  return (
    <>
      <div className="fixed">
        <ModeToggle />
      </div>
      <StickyContact />
      <div className="dark:bg-black dark:text-white">
        <div className="fixed top-[90%] left-0 w-full flex justify-center">
          <Navbar />
        </div>
        <Hero />
        <Careers />
        <Projects />
        <WorkFlow />
        <BlogPosts />
      </div>
    </>
  );
}
