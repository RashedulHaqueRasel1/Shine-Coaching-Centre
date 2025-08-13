import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  const stats = [
    { icon: Users, label: "Students", value: "200+" },
    { icon: BookOpen, label: "Subjects", value: "15+" },
    { icon: GraduationCap, label: "Teachers", value: "8+" },
    { icon: Trophy, label: "Success Rate", value: "95%" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400 text-sm px-4 py-2 shadow-lg">
                  ✨ Established 2010
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Shine Coaching Centre
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 font-medium">
                  From Class 11 to Masters — One Place for All Subjects
                </p>
                <p className="text-lg text-blue-200 max-w-2xl leading-relaxed">
                  Empowering students with quality education and personalized
                  guidance to achieve academic excellence and career success.
                  Join our family of 200+ successful students.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/courses">🎓 View Courses</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">📞 Contact Now</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <Image
                src="https://res.cloudinary.com/dzov2ohym/image/upload/v1755128057/Shine-Coaching-Centre_q66aea.jpg?height=500&width=600"
                alt="Students in classroom"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
