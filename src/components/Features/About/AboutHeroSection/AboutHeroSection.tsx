import { Badge } from "@/components/ui/badge";
import React from "react";

export default function AboutHeroSection() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-400">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Over a decade of educational excellence, transforming dreams into
              achievements
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
