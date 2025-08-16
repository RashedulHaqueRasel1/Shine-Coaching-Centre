import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function GalleryCategories() {
  const galleryCategories = [
    {
      title: "Classroom Sessions",
      description: "Interactive learning environments and engaged students",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Physics class in session",
          caption: "Physics Laboratory Session",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "English literature discussion",
          caption: "English Literature Discussion",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Mathematics problem solving",
          caption: "Mathematics Problem Solving",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Commerce practical session",
          caption: "Commerce Practical Session",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Group study session",
          caption: "Collaborative Learning",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Teacher explaining concepts",
          caption: "One-on-One Guidance",
        },
      ],
    },
    {
      title: "Campus & Facilities",
      description: "Modern infrastructure and learning facilities",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Main building exterior",
          caption: "Shine Coaching Centre Building",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Library interior",
          caption: "Well-Stocked Library",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Computer lab",
          caption: "Modern Computer Laboratory",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Science laboratory",
          caption: "Fully Equipped Science Lab",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Study hall",
          caption: "Quiet Study Areas",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Reception area",
          caption: "Welcome Reception",
        },
      ],
    },
    {
      title: "Events & Celebrations",
      description: "Special occasions and memorable moments",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Annual function stage",
          caption: "Annual Day Celebration",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Students receiving awards",
          caption: "Achievement Awards Ceremony",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Cultural performance",
          caption: "Cultural Program Performance",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Teachers day celebration",
          caption: "Teachers' Day Celebration",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Graduation ceremony",
          caption: "Graduation Day",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Sports day activities",
          caption: "Sports Day Activities",
        },
      ],
    },
    {
      title: "Student Activities",
      description: "Extracurricular activities and student engagement",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Debate competition",
          caption: "Inter-Class Debate Competition",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Science exhibition",
          caption: "Science Project Exhibition",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Art and craft session",
          caption: "Creative Arts Workshop",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Quiz competition",
          caption: "Knowledge Quiz Contest",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Group project presentation",
          caption: "Student Presentations",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Study group discussion",
          caption: "Peer Learning Sessions",
        },
      ],
    },
  ];

  return (
    <div>
      {galleryCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 1 ? "bg-gray-50" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.images.map((image, imageIndex) => (
                <Card
                  key={imageIndex}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 text-center">
                      {image.caption}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
