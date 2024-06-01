import Careers from "@/components/careers";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="px-2 sm:px-8">
      <div className="fixed top-[90%] left-0 w-full flex justify-center">
        <Navbar />
      </div>
      <Hero />
      <Careers />
      <section className="min-h-screen">
        content
      </section>
      <section className="min-h-screen">
        content
      </section>
    </div>
  );
}
