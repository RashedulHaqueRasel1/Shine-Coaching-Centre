
import {
  Card,
  CardContent,
 
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
 
import {   Users, BookOpen, Calendar, Star } from "lucide-react";

export default function CoursesFeaturesSection() {
  return (
    <div>
              <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Makes Our Courses Special
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive features designed to ensure your academic success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Comprehensive Curriculum",
                description:
                  "Complete syllabus coverage with additional practice materials",
              },
              {
                icon: Users,
                title: "Small Batch Size",
                description:
                  "Limited students per batch for personalized attention",
              },
              {
                icon: Calendar,
                title: "Flexible Timings",
                description:
                  "Multiple time slots to accommodate different schedules",
              },
              {
                icon: Star,
                title: "Expert Faculty",
                description:
                  "Highly qualified teachers with years of experience",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
