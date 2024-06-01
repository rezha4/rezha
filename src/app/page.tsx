import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="fixed top-100 left-0 w-full flex justify-center">
        <Navbar />
      </div>
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
