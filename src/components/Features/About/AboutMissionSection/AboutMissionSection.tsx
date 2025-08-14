import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target } from "lucide-react";
import React from "react";

export default function AboutMissionSection() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Target className="w-8 h-8 text-blue-600" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading educational institution that nurtures
                  academic excellence, critical thinking, and character
                  development, preparing students not just for examinations but
                  for life&#39;s challenges and opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Heart className="w-8 h-8 text-green-600" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide comprehensive, result-oriented education through
                  innovative teaching methods, personalized attention, and
                  continuous support, ensuring every student achieves their
                  academic goals and develops into confident, capable
                  individuals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
