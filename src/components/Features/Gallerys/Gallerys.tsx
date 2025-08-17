
import React from "react";
import GalleryHeroSection from "./GalleryHeroSection/GalleryHeroSection";
import GalleryStats from "./GalleryStats/GalleryStats";
import GalleryCategories from "./GalleryCategories/GalleryCategories";
import CallToActionSection from "@/components/shared/CallToActionSection/CallToActionSection";

export default function Gallerys() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GalleryHeroSection />

      {/* Gallery Stats */}
      <GalleryStats />

      {/* Gallery Categories */}
      <GalleryCategories />

      {/* Virtual Tour CTA */}


      <CallToActionSection
        title="Want to See More?"
        subtitle="Visit our campus to experience the vibrant learning environment firsthand"
        primaryBtn={{ label: "Schedule a Visit", href: "/contact" }}
        secondaryBtn={{ label: "Learn More About Us", href: "/courses" }}
        bgColor="bg-blue-900"
      />
    </div>
  );
}
