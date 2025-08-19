import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Phone } from "lucide-react";
import React from "react";

export default function ContactQuickSection() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Quick Contact Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Need immediate assistance? Choose the fastest way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-2 border-green-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-700">
                  Call Now
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Speak directly with our admission counselors
                </p>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-2 border-blue-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-700">
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Quick queries and instant responses
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <a
                    href="https://wa.me/919876543212"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-2 border-purple-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-700">
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Detailed inquiries and documentation
                </p>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  asChild
                >
                  <a href="mailto:info@shinecoaching.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
