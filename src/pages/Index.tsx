import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CurrentWorkSection from "@/components/CurrentWorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import ArsenalSection from "@/components/ArsenalSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CurrentWorkSection />
      <ExperienceSection />
      <ProjectsSection />
      <AwardsSection />
      <ArsenalSection />
      <ContactSection />
      <footer className="text-center py-6 font-mono text-xs text-muted-foreground">
        © 2026 Ishita Ambekar — Built with conviction.
      </footer>
    </div>
  );
};

export default Index;
