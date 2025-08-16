import { Button } from "@/components/ui/button";
import Link from "next/link";
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
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Want to See More?
            </h2>
            <p className="text-xl text-blue-100">
              Visit our campus to experience the vibrant learning environment
              firsthand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black"
              >
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
