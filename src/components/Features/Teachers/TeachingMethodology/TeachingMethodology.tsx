import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import React from "react";

export default function TeachingMethodology() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Teaching Methodology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative approaches that make learning effective and engaging
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Personalized Attention",
                description:
                  "Individual focus on each student's learning needs and pace",
                icon: Users,
              },
              {
                title: "Interactive Learning",
                description:
                  "Engaging discussions, Q&A sessions, and practical examples",
                icon: BookOpen,
              },
              {
                title: "Regular Assessment",
                description:
                  "Continuous evaluation through tests, assignments, and feedback",
                icon: Award,
              },
              {
                title: "Modern Techniques",
                description:
                  "Integration of technology and contemporary teaching methods",
                icon: GraduationCap,
              },
            ].map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
