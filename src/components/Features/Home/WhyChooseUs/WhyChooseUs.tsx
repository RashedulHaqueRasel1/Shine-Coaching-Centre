import React from "react";
import {
  Users,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Shine Coaching Centre
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Expert Teachers",
                description: "Highly qualified and experienced faculty members",
              },
              {
                icon: Users,
                title: "1:1 Support",
                description: "Personalized attention and individual guidance",
              },
              {
                icon: BookOpen,
                title: "Regular Exams",
                description: "Continuous assessment and performance tracking",
              },
              {
                icon: Trophy,
                title: "Result-Oriented",
                description: "Proven track record of academic excellence",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
