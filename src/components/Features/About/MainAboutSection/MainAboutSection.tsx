import Image from "next/image";
import React from "react";

export default function MainAboutSection() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Empowering Students Since 2010
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Shine Coaching Centre was founded with a simple yet powerful
                  vision: to provide quality education that transforms lives.
                  What started as a small coaching center has grown into a
                  trusted institution that has guided over 200 students to
                  academic success.
                </p>
                <p>
                  Our comprehensive approach covers students from Class 11
                  through Masters level, ensuring continuity in learning and
                  consistent support throughout their academic journey. We
                  believe that every student has the potential to shine, and our
                  role is to provide the right guidance and environment to
                  unlock that potential.
                </p>
                <p>
                  With a balanced student community of both male and female
                  learners, we foster an inclusive environment where diversity
                  of thought and perspective enhances the learning experience
                  for everyone.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dzov2ohym/image/upload/v1755213894/ShineCoachingCentre-about_wgldcd.jpg?height=500&width=600"
                alt="Coaching centre building"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
