import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <div>
      {/* About Brief Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Shine Coaching Centre 
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of excellence in education, Shine Coaching
                Centre has been the cornerstone of academic success for students
                from Class 11 to Masters level. Our mission is to provide
                comprehensive, result-oriented education that not only helps
                students excel in their examinations but also prepares them for
                successful careers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have successfully guided over 200 students, with an equal
                representation of male and female learners, helping them achieve
                their academic goals and secure admissions in prestigious
                institutions. Our holistic approach combines traditional
                teaching methods with modern educational techniques.
              </p>
            </div>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
