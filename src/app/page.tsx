import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <div className="fixed top-[90%] left-0 w-full flex justify-center">
        <Navbar />
      </div>
      <Hero />
      <section className="min-h-screen">
        content
      </section>
      <section className="min-h-screen">
        content
      </section>
      <section className="min-h-screen">
        content
      </section>
    </>
  );
}
