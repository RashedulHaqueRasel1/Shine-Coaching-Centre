"use client";

import type React from "react";
import ContactHeroSection from "./ContactHeroSection/ContactHeroSection";
import ContactInformation from "./ContactInformation/ContactInformation";
import ContactFormMap from "./ContactFormMap/ContactFormMap";
import ContactFAQSection from "./ContactFAQSection/ContactFAQSection";
import ContactQuickSection from "./ContactQuickSection/ContactQuickSection";
import CallToActionSection from "@/components/shared/CallToActionSection/CallToActionSection";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ContactHeroSection />

      {/* Contact Information */}
      <ContactInformation />

      {/* Contact Form & Map */}
      <ContactFormMap />

      {/* Quick Contact */}
      <ContactQuickSection />

      {/* FAQ Section */}
      <ContactFAQSection />

      {/* CTA Section */}
      <CallToActionSection
        title="Ready to Begin Your Journey?"
        subtitle="Don't wait - your academic success starts with a single step. Contact us today!"
        primaryBtn={{ label: "Call Now", href: "/contact" }}
        secondaryBtn={{ label: "View Courses", href: "/courses" }}
        bgColor="bg-blue-900"
      />
    </div>
  );
}
