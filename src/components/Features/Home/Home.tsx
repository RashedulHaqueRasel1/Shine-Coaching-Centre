import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  BookOpen,
  GraduationCap,
  Trophy,
  Star,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";

export default function Home() {

  const popularCourses = [
    {
      title: "HSC Science",
      description:
        "Complete preparation for Higher Secondary Certificate in Science stream",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      duration: "2 Years",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "HSC Commerce",
      description:
        "Comprehensive Commerce stream preparation with practical approach",
      subjects: ["Accounting", "Business Studies", "Economics"],
      duration: "2 Years",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Honours English",
      description:
        "Advanced English literature and language studies for graduation",
      subjects: ["Literature", "Grammar", "Composition"],
      duration: "3 Years",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Masters Economics",
      description: "Post-graduate level Economics with research methodology",
      subjects: ["Micro Economics", "Macro Economics", "Statistics"],
      duration: "2 Years",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const teachers = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "Physics & Mathematics",
      experience: "15 Years",
      image: "/placeholder.svg?height=150&width=150",
      qualification: "Ph.D in Physics",
    },
    {
      name: "Prof. Sunita Sharma",
      subject: "English Literature",
      experience: "12 Years",
      image: "/placeholder.svg?height=150&width=150",
      qualification: "M.A English, B.Ed",
    },
    {
      name: "Mr. Amit Patel",
      subject: "Commerce & Economics",
      experience: "10 Years",
      image: "/placeholder.svg?height=150&width=150",
      qualification: "M.Com, CA",
    },
    {
      name: "Dr. Priya Singh",
      subject: "Chemistry & Biology",
      experience: "8 Years",
      image: "/placeholder.svg?height=150&width=150",
      qualification: "Ph.D in Chemistry",
    },
  ];

  const successStories = [
    {
      name: "Rahul Verma",
      course: "HSC Science",
      achievement: "Software Engineer at TCS",
      year: "2023",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Priya Gupta",
      course: "Honours English",
      achievement: "Teacher at Delhi University",
      year: "2022",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Arjun Mehta",
      course: "Masters Economics",
      achievement: "Bank Manager at SBI",
      year: "2023",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  const testimonials = [
    {
      name: "Sneha Patel",
      course: "HSC Commerce",
      text: "The teachers at Shine Coaching Centre are incredibly supportive. They helped me achieve 92% in my HSC exams.",
      rating: 5,
    },
    {
      name: "Vikash Kumar",
      course: "Honours English",
      text: "Best coaching center in the area. Individual attention and excellent study materials made all the difference.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section  & Stats Section  */}
      <HeroSection />

      {/* About Brief Section */}
      <AboutSection />

      {/* Popular Courses Section */}
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

      {/* Teachers Section */}
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

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our alumni are making their mark in various fields
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>
                    {story.course} • {story.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 font-medium">
                    {story.achievement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/success-stories">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Student Testimonials
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.course}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100">
              Join hundreds of successful students who have achieved their
              academic goals with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black"
              >
                <Link href="/contact">Enroll Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <Link href="/contact">Visit Our Centre</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@shinecoaching.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
