import HeroSection from "../Home/HeroSection";
import AboutSection from "../Home/AboutSection";
import ExperienceSection from "../Home/ExperienceSection";
import PublicationsSection from "../Home/PublicationsSection";
import ProjectsSection from "../Home/ProjectsSection";
import AchievementsSection from "../Home/AchievementsSection";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PublicationsSection />
      <ProjectsSection />
      <AchievementsSection />
    </div>
  );
}
