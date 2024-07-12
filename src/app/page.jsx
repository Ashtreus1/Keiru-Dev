import { About } from "@/components/home/AboutOverview";
import { HeroSection } from "@/components/home/HeroSection";
import ProjectOverview from "@/components/home/ProjectOverview";
import ContactOverview from "@/components/home/ContactOverview";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <About />
        <ProjectOverview/>
        <ContactOverview/>
      </main>
    </>
  );
}
