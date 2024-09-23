import Careers from "@/components/careers";
import Hero from "@/components/hero";
import Navbar from "@/components/shared/navbar";
import Projects from "@/components/projects";
import WorkFlow from "@/components/work-flow";
import BlogPosts from "@/components/blog-posts";
import { ModeToggle } from "@/components/shared/mode-toggle";
import StickyContact from "@/components/shared/sticky-contact";
import About from "@/components/about";
import { PortfolioComponent } from "@/components/portfolio";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <StickyContact />
      <div className="dark:bg-black dark:text-white">
        <div className="fixed z-20 top-[90%] left-0 w-full flex justify-center">
          <Navbar />
        </div>
        <div id="home" className="z-20 flex items-center justify-center flex-col md:flex-row md:gap-20">
          <Hero />
          <About />
        </div>
        <div id="careers">
          <Careers />
        </div>
        {/* <Projects /> */}
        <div id="porto">
          <PortfolioComponent />
        </div>
        {/* <WorkFlow /> */}
        <div id="blog">
          <BlogPosts />
        </div>
        <Footer />
      </div>
    </>
  );
}
