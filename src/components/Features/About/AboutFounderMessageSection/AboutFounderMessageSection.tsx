import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function AboutFounderMessageSection() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-t-4 border-t-blue-600">
              <CardHeader className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Founder"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">
                  Founder&apos;s Message
                </CardTitle>
                <CardDescription className="text-lg">
                  Mr. Suresh Sharma, Founder & Director
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  &ldquo;When I started Shine Coaching Centre in 2010, my dream
                  was simple - to create an institution where every student
                  could discover their potential and achieve their dreams.
                  Today, as I see our alumni succeeding in various fields, I am
                  reminded that education is not just about passing exams;
                  it&apos;s about building character, confidence, and
                  capability.&quot;
                </p>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  &quot;Our success lies not in the number of students we teach,
                  but in the lives we transform. Every success story of our
                  students is a testament to the power of dedicated teaching,
                  personalized attention, and unwavering support. As we continue
                  to grow, our commitment to excellence remains unchanged.&quot;
                </p>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    - Mr. Suresh Sharma
                  </p>
                  <p className="text-gray-600">Founder & Director</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
