
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import PopularCourses from "./PopularCourses/PopularCourses";
import OurExpertTeachers from "./OurExpertTeachers/OurExpertTeachers";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import CallToActionSection from "@/components/shared/CallToActionSection/CallToActionSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section  & Stats Section  */}
      <HeroSection />

      {/* About Brief Section */}
      <AboutSection />

      {/* Popular Courses Section */}
      <PopularCourses />

      {/* Teachers Section */}
      <OurExpertTeachers />

      {/* Why Choose Section */}
      <WhyChooseUs />

      {/* Call to Action Section */}
      <CallToActionSection
        title="Ready to Begin Your Journey?"
        subtitle="Don't wait - your academic success starts with a single step. Contact us today!"
        primaryBtn={{ label: "Call Now", href: "/contact" }}
        secondaryBtn={{ label: "View Courses", href: "/courses" }}
        bgColor="bg-blue-700"
      />
    </div>
  );
}
