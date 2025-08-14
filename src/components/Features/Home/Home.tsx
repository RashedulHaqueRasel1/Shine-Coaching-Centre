import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Users,
  BookOpen,
  GraduationCap,
  Trophy,
  Star,
  Phone,
  Mail,
} from "lucide-react";
 
import Link from "next/link";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import PopularCourses from "./PopularCourses/PopularCourses";
import OurExpertTeachers from "./OurExpertTeachers/OurExpertTeachers";

export default function Home() {

 
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
      <PopularCourses />

      {/* Teachers Section */}
      <OurExpertTeachers />


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
