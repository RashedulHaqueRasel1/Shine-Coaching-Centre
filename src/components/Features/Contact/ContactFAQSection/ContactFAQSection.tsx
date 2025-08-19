import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function ContactFAQSection() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about admissions and courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What are the admission requirements?",
                answer:
                  "Admission requirements vary by course. Generally, we require previous academic records and a brief interaction with our counselors to understand your goals.",
              },
              {
                question: "Do you provide study materials?",
                answer:
                  "Yes, we provide comprehensive study materials, practice papers, and additional resources for all our courses at no extra cost.",
              },
              {
                question: "What are the class timings?",
                answer:
                  "We offer flexible timings from 6:00 AM to 10:00 PM with multiple batches for each course to accommodate different schedules.",
              },
              {
                question: "Is there any scholarship program?",
                answer:
                  "Yes, we offer merit-based scholarships and financial assistance for deserving students. Contact our admission office for details.",
              },
              {
                question: "Can I switch between courses?",
                answer:
                  "Course changes are possible within the first month of enrollment, subject to availability and academic compatibility.",
              },
              {
                question: "Do you offer online classes?",
                answer:
                  "Yes, we provide both offline and online learning options with live interactive sessions and recorded lectures for flexibility.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
