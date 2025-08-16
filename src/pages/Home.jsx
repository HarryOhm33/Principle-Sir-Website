import HeroSection from "../Home/HeroSection";
import AboutSection from "../Home/AboutSection";
import ExperienceSection from "../Home/ExperienceSection";
import PublicationsSection from "../Home/PublicationsSection";
// import ProjectsSection from "../Home/ProjectsSection";
// import AchievementsSection from "../Home/AchievementsSection";
import PatentSection from "../Home/PatentSection";
import AwardSection from "../Home/AwardSection";
import MembershipSection from "../Home/MembershipSection";
// import ContactSection from "../Home/ContactSection";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PublicationsSection />
      <PatentSection />
      <AwardSection />
      <MembershipSection />
      {/* <ContactSection /> */}
      {/* <ProjectsSection /> */}
      {/* <AchievementsSection /> */}
    </div>
  );
}
