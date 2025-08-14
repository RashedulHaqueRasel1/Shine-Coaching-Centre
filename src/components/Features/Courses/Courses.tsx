
import CoursesHeroSection from "./CoursesHeroSection/CoursesHeroSection";
import CoursesSection from "./CoursesSection/CoursesSection";
import CoursesFeaturesSection from "./CoursesFeaturesSection/CoursesFeaturesSection";
import CallToActionSection from "@/components/shared/CallToActionSection/CallToActionSection";

export default function Courses() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CoursesHeroSection />

      {/* Courses Section */}
      <CoursesSection />

      {/* Features Section */}
      <CoursesFeaturesSection />

      {/* CTA Section */}

      <CallToActionSection
        title="Ready to Start Your Course?"
        subtitle="Join our proven programs and take the first step towards academic excellence"
        primaryBtn={{ label: "Enroll Now", href: "/contact" }}
        secondaryBtn={{ label: "Schedule a Visit", href: "/courses" }}
        bgColor="bg-blue-900"
      />
    </div>
  );
}
