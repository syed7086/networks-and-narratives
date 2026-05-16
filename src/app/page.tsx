import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { NetworkingDashboard } from "@/components/sections/NetworkingDashboard";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <NetworkingDashboard />
        <Projects />
        <Experience />
        <Education />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
