import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PopularCourses() {
  //demo data
  const popularCourses = [
    {
      title: "HSC Science",
      description:
        "Complete preparation for Higher Secondary Certificate in Science stream",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      duration: "2 Years",
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1755129566/HSC_nwc0xt.png?height=200&width=300",
    },
    {
      title: "HSC Commerce",
      description:
        "Comprehensive Commerce stream preparation with practical approach",
      subjects: ["Accounting", "Business Studies", "Economics"],
      duration: "2 Years",
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1755129666/HSC_Commerce_iapo01.jpg?height=200&width=300",
    },
    {
      title: "Honours English",
      description:
        "Advanced English literature and language studies for graduation",
      subjects: ["Literature", "Grammar", "Composition"],
      duration: "3 Years",
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1755129734/Honours_English_nmchin.jpg?height=200&width=300",
    },
    {
      title: "Masters Economics",
      description: "Post-graduate level Economics with research methodology",
      subjects: ["Micro Economics", "Macro Economics", "Statistics"],
      duration: "2 Years",
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1755129831/Master_Economics_dxmtg7.webp?height=200&width=300",
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive courses designed to help you excel in your academic
              journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularCourses.map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors duration-300">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors duration-300"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Duration: {course.duration}
                    </span>
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <Link href="/courses">Learn More</Link>
                    </Button>
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
