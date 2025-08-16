import React from "react";
import { Camera, Users, Award, BookOpen } from "lucide-react";

export default function GalleryStats() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Camera, label: "Photos", value: "500+" },
              { icon: Users, label: "Students Featured", value: "200+" },
              { icon: Award, label: "Events Captured", value: "50+" },
              { icon: BookOpen, label: "Years of Memories", value: "13+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
