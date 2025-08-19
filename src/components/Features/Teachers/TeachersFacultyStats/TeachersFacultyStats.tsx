import { Award, GraduationCap, Star, Users } from "lucide-react";
import React from "react";

export default function TeachersFacultyStats() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Faculty Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our faculty&apos;s collective expertise and dedication drive
              student success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Total Faculty", value: "8+", icon: Users },
              { label: "Average Experience", value: "10 Years", icon: Award },
              { label: "Ph.D Holders", value: "4", icon: GraduationCap },
              { label: "Student Rating", value: "4.8/5", icon: Star },
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
