import { Badge } from "@/components/ui/badge";
import React from "react";

export default function ABoutTimelineSection() {
  const milestones = [
    { year: "2010", event: "Shine Coaching Centre established" },
    { year: "2012", event: "Expanded to include Honours courses" },
    { year: "2015", event: "Introduced Masters level programs" },
    { year: "2018", event: "Achieved 95% success rate milestone" },
    { year: "2020", event: "Launched online learning platform" },
    { year: "2023", event: "Celebrated 200+ successful graduates" },
  ];

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our journey of educational excellence
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <Badge
                      variant="outline"
                      className="text-blue-600 border-blue-600"
                    >
                      {milestone.year}
                    </Badge>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-800">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
