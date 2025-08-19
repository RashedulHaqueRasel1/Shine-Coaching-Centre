
import AboutHeroSection from "./AboutHeroSection/AboutHeroSection";
import MainAboutSection from "./MainAboutSection/MainAboutSection";
import AboutMissionSection from "./AboutMissionSection/AboutMissionSection";
import ABoutTimelineSection from "./ABoutTimelineSection/ABoutTimelineSection";
import AboutValuesSection from "./AboutValuesSection/AboutValuesSection";
import AboutFounderMessageSection from "./AboutFounderMessageSection/AboutFounderMessageSection";
import AboutStatsSection from "./AboutStatsSection/AboutStatsSection";
import CallToActionSection from "@/components/shared/CallToActionSection/CallToActionSection";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Main About Section */}
      <MainAboutSection />

      {/* Vision Mission Section */}
      <AboutMissionSection />

      {/* Timeline Section */}
      <ABoutTimelineSection />

      {/* Values Section */}
      <AboutValuesSection />

      {/* Founder's Message Section */}
      <AboutFounderMessageSection />

      {/* Stats Section */}
      <AboutStatsSection />

      {/* CTA Section */}
      <CallToActionSection
        title="Ready to Join Our Success Story?"
        subtitle="Discover how Shine Coaching Centre can help you achieve your academic goals"
        primaryBtn={{ label: "Call Now", href: "/contact" }}
        secondaryBtn={{ label: "View Courses", href: "/courses" }}
        bgColor="bg-blue-900"
      />
    </div>
  );
}
