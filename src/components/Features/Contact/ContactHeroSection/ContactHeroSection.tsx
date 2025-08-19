import { Badge } from "@/components/ui/badge";
import React from "react";

export default function ContactHeroSection() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-400">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ready to start your academic journey? We&apos;re here to help you every
              step of the way
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
