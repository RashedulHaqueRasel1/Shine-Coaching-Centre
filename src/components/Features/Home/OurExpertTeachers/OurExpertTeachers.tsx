import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurExpertTeachers() {
  // Demo Data
  const teachers = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "Physics & Mathematics",
      experience: "15 Years",
      image: "https://res.cloudinary.com/dzov2ohym/image/upload/v1755127642/samples/smile.jpg?height=150&width=150",
      qualification: "Ph.D in Physics",
    },
    {
      name: "Prof. Sunita Sharma",
      subject: "English Literature",
      experience: "12 Years",
      image: "https://res.cloudinary.com/dzov2ohym/image/upload/v1755127634/samples/people/smiling-man.jpg?height=150&width=150",
      qualification: "M.A English, B.Ed",
    },
    {
      name: "Mr. Amit Patel",
      subject: "Commerce & Economics",
      experience: "10 Years",
      image: "https://res.cloudinary.com/dzov2ohym/image/upload/v1755127635/samples/people/boy-snow-hoodie.jpg?height=150&width=150",
      qualification: "M.Com, CA",
    },
    {
      name: "Dr. Priya Singh",
      subject: "Chemistry & Biology",
      experience: "8 Years",
      image: "https://res.cloudinary.com/dzov2ohym/image/upload/v1755127645/main-sample.png?height=150&width=150",
      qualification: "Ph.D in Chemistry",
    },
  ];

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Expert Teachers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from experienced educators who are passionate about your
              success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={teacher.image || "/placeholder.svg"}
                      alt={teacher.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {teacher.subject}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">
                    {teacher.qualification}
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    Experience: {teacher.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/teachers">Meet All Teachers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
