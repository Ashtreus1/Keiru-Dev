import { About } from "@/components/landing page/AboutOverview";
import { HeroSection } from "@/components/landing page/HeroSection";
import ProjectOverview from "@/components/landing page/ProjectOverview";
import ContactOverview from "@/components/landing page/ContactOverview";

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
