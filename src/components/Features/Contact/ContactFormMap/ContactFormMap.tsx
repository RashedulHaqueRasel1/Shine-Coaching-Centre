import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, MessageSquare, Send } from "lucide-react";
import React, { useState } from "react";

const courses = [
  "HSC Science",
  "HSC Commerce",
  "HSC Arts",
  "Honours English",
  "Honours Political Science",
  "Honours Economics",
  "Masters Economics",
  "Masters English",
];

export default function ContactFormMap() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="course"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Course of Interest
                        </label>
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a course</option>
                          {courses.map((course, idx) => (
                            <option key={idx} value={course}>
                              {course}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your academic goals, questions, or any specific requirements..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    Find Us Here
                  </CardTitle>
                  <CardDescription>
                    Visit our campus to experience our learning environment
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-full">
                  <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.674870949309!2d77.20902731508236!3d28.65195938242896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683d1e6b3%3A0x2b2b2b2b2b2b2b2b!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Shine Coaching Centre
                        </p>
                        <p className="text-sm text-gray-600">
                          123 Education Street, Knowledge Park
                        </p>
                        <p className="text-sm text-gray-600">
                          Academic City - 110001
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Landmarks:</strong> Near Central Library,
                        Opposite City Mall
                      </p>
                      <p>
                        <strong>Public Transport:</strong> Metro Station 500m,
                        Bus Stop 100m
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
