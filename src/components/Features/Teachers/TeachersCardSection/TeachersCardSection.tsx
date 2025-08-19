import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Badge, BookOpen, GraduationCap, Mail, Phone, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function TeachersCardSection() {
  const teachers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Senior Faculty - Physics & Mathematics",
      image: "https://res.cloudinary.com/dzov2ohym/image/upload/v1755213662/Screenshot_2025-08-15_052044_xffoys.png?height=200&width=200",
      qualification: "Ph.D in Physics, M.Sc Mathematics",
      experience: "15 Years",
      specialization: ["Physics", "Mathematics", "Research Methodology"],
      teachingPhilosophy:
        "I believe in making complex concepts simple and relatable. My approach combines theoretical knowledge with practical applications to help students truly understand the subject.",
      subjects: ["HSC Physics", "HSC Mathematics", "Masters Physics"],
      rating: 4.9,
      email: "rajesh.kumar@shinecoaching.com",
      phone: "+91 98765 43210",
    },
    {
      name: "Prof. Sunita Sharma",
      designation: "Head of English Department",
      image: "https://res.cloudinary.com/dzov2ohym/image/upload/v1755625394/image-1_b1axyn.jpg?height=200&width=200",
      qualification: "M.A English Literature, B.Ed, NET Qualified",
      experience: "12 Years",
      specialization: [
        "English Literature",
        "Creative Writing",
        "Communication Skills",
      ],

      teachingPhilosophy:
        "Language is the gateway to expression and creativity. I focus on building strong foundations while encouraging students to find their unique voice and style.",
      subjects: ["HSC English", "Honours English", "Masters English"],
      rating: 4.8,
      email: "sunita.sharma@shinecoaching.com",
      phone: "+91 98765 43211",
    },
  ];

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Distinguished Faculty
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highly qualified professionals with years of teaching experience
              and industry expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teachers.map((teacher, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300  shadow-lg  hover:border-blue-200"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-32 h-32 mx-auto md:mx-0 flex-shrink-0">
                      <Image
                        src={teacher.image || "/placeholder.svg"}
                        alt={teacher.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-2">
                      <CardTitle className="text-2xl">{teacher.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium text-lg">
                        {teacher.designation}
                      </CardDescription>
                      <div className="flex items-center justify-center md:justify-start gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {teacher.rating}
                        </span>
                        <span className="text-sm text-gray-500">rating</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Qualifications & Experience */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        Qualification
                      </h4>
                      <p className="text-sm text-gray-600">
                        {teacher.qualification}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-600" />
                        Experience
                      </h4>
                      <p className="text-sm text-gray-600">
                        {teacher.experience}
                      </p>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Specialization
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.specialization.map((spec, idx) => (
                        <Badge
                          key={idx}
                        //   variant="secondary"
                          className="text-xs"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Subjects Taught */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-purple-600" />
                      Subjects Taught
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.subjects.map((subject, idx) => (
                        <Badge
                          key={idx}
                          className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Teaching Philosophy */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Teaching Philosophy
                    </h4>
                    <p className="text-sm text-gray-700 italic leading-relaxed">
                      {teacher.teachingPhilosophy}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{teacher.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{teacher.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
