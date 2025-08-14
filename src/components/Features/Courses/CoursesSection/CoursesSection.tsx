import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoursesSection() {
  const courses = [
    {
      title: "HSC Science",
      description:
        "Complete preparation for Higher Secondary Certificate in Science stream",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      duration: "2 Years",
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1755129566/HSC_nwc0xt.png",
      rating: "4.8",
      schedule: "Mon–Fri, 9 AM – 12 PM",
      students: 150,
      teacher: "Dr. Rahman",
      features: ["Experienced faculty", "Lab facilities", "Model tests"],
    },
    {
      title: "HSC Commerce",
      description:
        "Comprehensive Commerce stream preparation with practical approach",
      subjects: ["Accounting", "Business Studies", "Economics"],
      duration: "2 Years",
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1755129666/HSC_Commerce_iapo01.jpg",
      rating: "4.6",
      schedule: "Mon–Fri, 2 PM – 5 PM",
      students: 120,
      teacher: "Prof. Karim",
      features: ["Industry visits", "Case studies", "Interactive sessions"],
    },
    {
      title: "Honours English",
      description:
        "Advanced English literature and language studies for graduation",
      subjects: ["Literature", "Grammar", "Composition"],
      duration: "3 Years",
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1755129734/Honours_English_nmchin.jpg",
      rating: "4.7",
      schedule: "Sat–Thu, 10 AM – 1 PM",
      students: 80,
      teacher: "Ms. Sultana",
      features: ["Library access", "Writing workshops", "Research guidance"],
    },
    {
      title: "Masters Economics",
      description: "Post-graduate level Economics with research methodology",
      subjects: ["Micro Economics", "Macro Economics", "Statistics"],
      duration: "2 Years",
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1755129831/Master_Economics_dxmtg7.webp",
      rating: "4.9",
      schedule: "Sat–Thu, 4 PM – 7 PM",
      students: 60,
      teacher: "Dr. Hasan",
      features: ["Research projects", "Seminars", "Data analysis training"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-500 text-black">
                    {course.duration}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {course.rating}
                    </span>
                  </div>
                </div>
                <CardDescription className="text-gray-600">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Subjects */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Schedule & Teacher */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students enrolled</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">Teacher: </span>
                    <span className="text-gray-600">{course.teacher}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" asChild>
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
