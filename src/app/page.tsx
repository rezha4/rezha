import Careers from "@/components/careers";
import Hero from "@/components/hero";
import Navbar from "@/components/shared/navbar";
import Projects from "@/components/projects";
import WorkFlow from "@/components/work-flow";
import BlogPosts from "@/components/blog-posts";
import { ModeToggle } from "@/components/shared/mode-toggle";
import StickyContact from "@/components/shared/sticky-contact";
import About from "@/components/about";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <StickyContact />
      <div className="dark:bg-black dark:text-white">
        <div className="fixed top-[90%] left-0 w-full flex justify-center">
          <Navbar />
        </div>
        <Hero />
        <About />
        <Careers />
        <Projects />
        <WorkFlow />
        <BlogPosts />
        <Footer />
      </div>
    </>
  );
}
