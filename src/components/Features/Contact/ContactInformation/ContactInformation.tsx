import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function ContactInformation() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Shine Coaching Centre",
        "123 Education Street, Knowledge Park",
        "Academic City - 110001",
        "Near Central Library",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +91 98765 43210",
        "Admissions: +91 98765 43211",
        "WhatsApp: +91 98765 43212",
        "Emergency: +91 98765 43213",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: info@shinecoaching.com",
        "Admissions: admissions@shinecoaching.com",
        "Support: support@shinecoaching.com",
        "Director: director@shinecoaching.com",
      ],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Saturday: 6:00 AM - 10:00 PM",
        "Sunday: 8:00 AM - 6:00 PM",
        "Admission Office: 9:00 AM - 7:00 PM",
        "Library: 6:00 AM - 10:00 PM",
      ],
    },
  ];

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us - choose what&apos;s most convenient for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-gray-600 leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
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
