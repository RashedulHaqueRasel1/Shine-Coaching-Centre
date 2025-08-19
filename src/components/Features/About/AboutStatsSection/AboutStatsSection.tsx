import React from "react";
import { Users, BookOpen, GraduationCap, Trophy } from "lucide-react";

export default function AboutStatsSection() {
  return (
    <div>
      <section className="py-20 bg-gray-200 text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Total Students", value: "200+" },
              { icon: GraduationCap, label: "Graduates", value: "150+" },
              { icon: BookOpen, label: "Courses Offered", value: "15+" },
              { icon: Trophy, label: "Success Rate", value: "95%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
