import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ParticleBackground } from "@/components/ui/particle-background";
import { FloatingNav } from "@/components/ui/floating-nav";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <ScrollProgress />
      <FloatingNav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </>
  );
}
