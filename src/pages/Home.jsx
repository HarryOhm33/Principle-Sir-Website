import HeroSection from "../Home/HeroSection";
import AboutSection from "../Home/AboutSection";
import ExperienceSection from "../Home/ExperienceSection";
import PublicationsSection from "../Home/PublicationsSection";
import AchievementSection from "../Home/AchievementSection";
import PatentSection from "../Home/PatentSection";
import AwardSection from "../Home/AwardSection";
import MembershipSection from "../Home/MembershipSection";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PublicationsSection />
      <PatentSection />
      <AwardSection />
      <AchievementSection />
      <MembershipSection />
    </div>
  );
}
