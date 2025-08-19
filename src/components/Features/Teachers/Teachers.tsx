
import TeachersHeroSection from "./TeachersHeroSection/TeachersHeroSection";
import TeachersCardSection from "./TeachersCardSection/TeachersCardSection";
import TeachersFacultyStats from "./TeachersFacultyStats/TeachersFacultyStats";
import TeachingMethodology from "./TeachingMethodology/TeachingMethodology";
import CallToActionSection from "@/components/shared/CallToActionSection/CallToActionSection";

export default function Teachers() {
  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Section */}
        <TeachersHeroSection />

        {/* Teachers Card Section */}
        <TeachersCardSection />

        {/* Faculty Stats */}
        <TeachersFacultyStats />

        {/* Teaching Methodology */}
        <TeachingMethodology />

        {/* CTA Section */}
        <CallToActionSection
          title="Learn from the Best"
          subtitle="Join our classes and experience the difference that expert teaching makes"
          primaryBtn={{ label: "View Courses", href: "/Meet Our Teachers" }}
          secondaryBtn={{ label: "View Courses", href: "/courses" }}
          bgColor="bg-blue-900"
        />
      </div>
    </div>
  );
}
